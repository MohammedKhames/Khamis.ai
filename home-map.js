// Five highlighted metro stations open the site's existing pages.
(() => {
  const copy = {
    en: {
      title:'The route',intro:'Each line is a layer. Choose a highlighted station to explore its page.',
      lines:[
        {title:'Foundations',detail:'Start with the essentials',stops:['Python','SQL','Git','FastAPI & REST','LLM intuition']},
        {title:'LLM Engineering',detail:'Build with language models',stops:['Prompting','Caching & cost','Context engineering','MCP & APIs']},
        {title:'Agents',detail:'Connect tools and workflows',stops:['Agent design','Memory','Frameworks','Safety & reliability','Voice & browser']},
        {title:'Evaluation',detail:'Measure what works',stops:['Eval basics','Golden datasets','LLM-as-judge','RAG evals','Observability & CI']},
        {title:'Production (LLMOps)',detail:'Ship and improve',stops:['Fine-tuning','Inference','Cost & latency','Security & red teaming','Shipping & operating']}
      ],
      links:{math:'Math Skills',complexity:'Complexity',stages:'RAG Stages',simulation:'RAG Simulation',ecosystems:'Ecosystems'},
      build:['LLM proxy API','Docs Q&A with citations','Research agent with a sandbox','Evaluate your system','Ship it'],
      legend:'Highlighted stations open the existing pages',start:'Start'
    },
    ar: {
      title:'خريطة الرحلة',intro:'كل خط مستوى في الرحلة. اضغط على المحطات المميزة لفتح صفحات الموقع.',
      lines:[
        {title:'الأساسيات',detail:'ابدأ بالمفاهيم الضرورية',stops:['Python','SQL','Git','FastAPI و REST','فهم LLM']},
        {title:'هندسة LLM',detail:'ابنِ باستخدام النماذج اللغوية',stops:['البرومبت','التكلفة والتخزين','هندسة السياق','MCP و APIs']},
        {title:'الوكلاء',detail:'اربط الأدوات وسير العمل',stops:['تصميم الوكيل','الذاكرة','أطر العمل','الأمان والموثوقية','الصوت والمتصفح']},
        {title:'التقييم',detail:'قِس ما ينجح',stops:['أساسيات التقييم','مجموعات مرجعية','تقييم LLM','تقييم RAG','المراقبة و CI']},
        {title:'الإنتاج (LLMOps)',detail:'انشر وحسّن',stops:['الضبط الدقيق','الاستدلال','التكلفة والسرعة','الأمان والاختبار','النشر والتشغيل']}
      ],
      links:{math:'Math Skills',complexity:'Complexity',stages:'RAG Stages',simulation:'RAG Simulation',ecosystems:'Ecosystems'},
      build:['واجهة LLM','سؤال وجواب من المستندات','وكيل بحث','تقييم النظام','إطلاق المشروع'],
      legend:'المحطات المميزة تفتح صفحات الموقع الحالية',start:'ابدأ'
    }
  };
  const tracks=[
    {color:'#347fce',y:190,headX:212,badgeX:167,buildX:1039,stops:[260,425,590,755,920]},
    {color:'#ed7140',y:390,headX:812,badgeX:1003,buildX:96,stops:[920,755,590,425]},
    {color:'#22ac7a',y:590,headX:205,badgeX:167,buildX:1039,stops:[260,425,590,755,920]},
    {color:'#eeae18',y:790,headX:806,badgeX:1003,buildX:96,stops:[920,755,590,425,260]},
    {color:'#7055cf',y:990,headX:213,badgeX:167,buildX:1039,stops:[260,425,590,755,920]}
  ];
  const links=[
    {target:'math',x:260,y:190,color:'#347fce'},
    {target:'complexity',x:425,y:190,color:'#347fce'},
    {target:'stages',x:425,y:390,color:'#ed7140'},
    {target:'simulation',x:260,y:390,color:'#ed7140'},
    {target:'ecosystems',x:590,y:590,color:'#22ac7a'}
  ];
  const rails=[
    'M86 190 H1039',
    'M1039 190 Q1108 190 1108 244 V336 Q1108 390 1039 390 H96',
    'M96 390 Q26 390 26 444 V536 Q26 590 96 590 H1039',
    'M1039 590 Q1108 590 1108 644 V736 Q1108 790 1039 790 H96',
    'M96 790 Q26 790 26 844 V936 Q26 990 96 990 H1054'
  ];
  const escape=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const linked=new Set(links.map(link=>`${link.x}:${link.y}`));
  function render(language,actions){
    const t=copy[language]||copy.en;
    const svg=`<svg class="map-art" viewBox="0 0 1160 1110" role="img" aria-label="${escape(t.title)}" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="map-grid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dce4da" stroke-width=".55"/></pattern></defs>
      <rect width="1160" height="1110" fill="#f5f6ef"/><rect width="1160" height="1110" fill="url(#map-grid)" opacity=".35"/>
      <text class="map-title" x="52" y="74">${escape(t.title)}</text><text class="map-intro" x="53" y="105">${escape(t.intro)}</text>
      ${rails.map((path,i)=>`<path class="map-rail" d="${path}" stroke="${tracks[i].color}"/><path class="map-rail-flow" d="${path}" stroke="${tracks[i].color}"/>`).join('')}
      <path d="M53 172v37M53 190h33" stroke="#26303a" stroke-width="8" stroke-linecap="round"/><text class="map-end-label" x="50" y="239">${escape(t.start)}</text>
      ${tracks.map((track,i)=>{
        const line=t.lines[i],reversed=i%2===1,y=track.y;
        return `<g class="map-line">
          <circle class="map-layer-badge" cx="${track.badgeX}" cy="${y}" r="19" fill="${track.color}"/><text class="map-layer-number" x="${track.badgeX}" y="${y+6}">${i+1}</text>
          <text class="map-line-title" x="${track.headX}" y="${y-37}" text-anchor="${reversed?'end':'start'}">${escape(line.title)}</text>
          <text class="map-line-detail" x="${track.headX}" y="${y-17}" text-anchor="${reversed?'end':'start'}">${escape(line.detail)}</text>
          ${track.stops.map((x,j)=>linked.has(`${x}:${y}`)?'':`<g><circle class="map-dot" cx="${x}" cy="${y}" r="6" stroke="${track.color}"/><text class="map-stop-label" transform="translate(${x+8} ${y+19}) rotate(46)">${escape(line.stops[j])}</text></g>`).join('')}
          <circle class="map-terminal" cx="${track.buildX}" cy="${y}" r="11"/><circle cx="${track.buildX}" cy="${y}" r="4" fill="#26303a"/><text class="map-build" x="${track.buildX}" y="${y-28}" text-anchor="${reversed?'start':'end'}">${escape(t.build[i])}</text>
        </g>`;
      }).join('')}
      <path d="M1054 990h42l-16-13m16 13-16 13" fill="none" stroke="#26303a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="54" cy="1060" r="8" fill="#fff" stroke="#26303a" stroke-width="3"/><text class="map-legend" x="73" y="1065">${escape(t.legend)}</text>
    </svg>`;
    const stations=links.map(link=>`<button class="map-link" type="button" data-map-page="${link.target}" style="--x:${link.x/1160*100}%;--y:${link.y/1110*100}%;--station-color:${link.color}" aria-label="${escape(t.links[link.target])}"><span class="map-link-dot"></span><span class="map-link-name">${escape(t.links[link.target])}</span></button>`).join('');
    const root=document.getElementById('routeMap');
    root.innerHTML=svg+stations;
    root.querySelectorAll('[data-map-page]').forEach(button=>button.addEventListener('click',()=>actions[button.dataset.mapPage]()));
  }
  window.KhamisHomeMap={render};
})();
