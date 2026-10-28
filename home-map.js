// The home map keeps navigation data separate from the RAG recommendation engine.
(() => {
  const copy = {
    ar: {
      heading: 'الخريطة', kicker: 'مسار تفاعلي', intro: 'كل خط مجال، وكل محطة تفتح جزءًا يمكنك استكشافه.', hint: 'اضغط على أي محطة للبدء ↗',
      routes: [
        { title: 'Math Skills', subtitle: 'أساسيات الرياضيات للذكاء الاصطناعي', target: 'math', end: 'استكشف الرياضيات', stops: ['المتجهات', 'الاحتمالات', 'الإحصاء', 'التفاضل', 'التحسين', 'التشابه'] },
        { title: 'Complexity', subtitle: 'كيف يتغيّر زمن التنفيذ؟', target: 'complexity', end: 'ابدأ السباق', stops: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'] },
        { title: 'مراحل RAG', subtitle: 'من المستند إلى الإجابة', target: 'stages', end: 'ابدأ البناء', stops: ['البيانات', 'المعالجة', 'التقسيم', 'التضمين', 'قاعدة المتجهات', 'الاسترجاع', 'إعادة الترتيب', 'البرومبت', 'التوليد', 'التقييم'] },
        { title: 'RAG Simulation', subtitle: 'شاهد كل خطوة وهي تحدث', target: 'simulation', end: 'شغّل المحاكاة', stops: ['مستند', 'تنظيف', 'تقسيم', 'متجهات', 'بحث', 'إجابة'] },
        { title: 'Ecosystems', subtitle: 'الأدوات التي تكوّن المنظومة', target: 'ecosystems', end: 'تصفّح الأدوات', stops: ['الموديلات', 'Embeddings', 'RAG', 'قواعد المتجهات', 'الوكلاء', 'الأتمتة'] }
      ]
    },
    en: {
      heading: 'The route', kicker: 'INTERACTIVE LEARNING MAP', intro: 'Each line is a field. Each station opens a topic you can explore.', hint: 'Choose any station to begin ↗',
      routes: [
        { title: 'Math Skills', subtitle: 'The foundations of AI', target: 'math', end: 'Explore math', stops: ['Vectors', 'Probability', 'Statistics', 'Calculus', 'Optimization', 'Similarity'] },
        { title: 'Complexity', subtitle: 'How runtime grows', target: 'complexity', end: 'Run the race', stops: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'] },
        { title: 'RAG Stages', subtitle: 'From document to answer', target: 'stages', end: 'Start building', stops: ['Ingest', 'Prepare', 'Chunk', 'Embed', 'Vector DB', 'Retrieve', 'Rerank', 'Prompt', 'Generate', 'Evaluate'] },
        { title: 'RAG Simulation', subtitle: 'Watch each step happen', target: 'simulation', end: 'Run simulation', stops: ['Document', 'Clean', 'Split', 'Vectors', 'Search', 'Answer'] },
        { title: 'Ecosystems', subtitle: 'The tools behind the stack', target: 'ecosystems', end: 'Explore tools', stops: ['Models', 'Embeddings', 'RAG', 'Vector DB', 'Agents', 'Automation'] }
      ]
    }
  };
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const colors = ['#3c89df', '#e97545', '#25ab7c', '#eead28', '#7658d4'];
  const paths = [
    'M65 95 H935',
    'M935 95 Q985 95 985 140 V220 Q985 265 935 265 H65',
    'M65 265 Q15 265 15 310 V390 Q15 435 65 435 H935',
    'M935 435 Q985 435 985 480 V560 Q985 605 935 605 H65',
    'M65 605 Q15 605 15 650 V730 Q15 775 65 775 H935'
  ];
  function render(language, onNavigate, motionEnabled) {
    const text = copy[language] || copy.en;
    document.getElementById('mapKicker').textContent = text.kicker;
    document.getElementById('mapTitle').textContent = text.heading;
    document.getElementById('mapIntro').textContent = text.intro;
    document.getElementById('mapHint').textContent = text.hint;
    const map = document.getElementById('routeMap');
    map.classList.toggle('is-paused', !motionEnabled);
    map.innerHTML = `<svg class="route-lines" viewBox="0 0 1000 850" preserveAspectRatio="none" aria-hidden="true">${paths.map((path, i) => `<path class="route-path" d="${path}" stroke="${colors[i]}"/><path class="route-flow" d="${path}" stroke="${colors[i]}"/>`).join('')}</svg>` + text.routes.map((route, index) => {
      const target = route.target;
      const isRag = target === 'stages';
      return `<section class="route-row ${index % 2 ? 'reverse' : ''} ${isRag ? 'route-row-rag' : ''}" style="--route-color:${colors[index]};--route-index:${index}" aria-label="${escape(route.title)}">
        <button type="button" class="route-identity" data-map-target="${target}" aria-label="${escape(route.title)}"><span class="route-number">${String(index+1).padStart(2,'0')}</span><span class="route-identity-copy"><strong>${escape(route.title)}</strong><small>${escape(route.subtitle)}</small></span><span class="route-open" aria-hidden="true">↗</span></button>
        <div class="route-stations" style="--station-count:${route.stops.length}">${route.stops.map((stop, station) => `<button type="button" class="route-station" data-map-target="${target}" data-map-station="${station}" ${isRag ? `data-map-stage="${station}"` : ''} aria-label="${escape(route.title)}: ${escape(stop)}"><span class="station-dot"></span><span class="station-label">${escape(stop)}</span></button>`).join('')}</div>
        <button type="button" class="route-terminal" data-map-target="${target}" ${isRag ? 'data-map-stage="0"' : ''} aria-label="${escape(route.end)}"><span class="terminal-ring"></span><span class="terminal-label">${escape(route.end)}</span></button>
      </section>`;
    }).join('');
    map.querySelectorAll('[data-map-target]').forEach(button => button.addEventListener('click', () => onNavigate(button.dataset.mapTarget, button.dataset.mapStage === undefined ? null : Number(button.dataset.mapStage), button.dataset.mapStation === undefined ? null : Number(button.dataset.mapStation))));
  }
  window.KhamisHomeMap = { render };
})();
