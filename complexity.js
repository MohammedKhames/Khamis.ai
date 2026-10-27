'use strict';
(function(){
 const root=document.getElementById('complexityView');
 const text={
  en:{title:'BIG O RACE',subtitle:'same speed per step',intro:'Every racer completes one operation at the same rate. The algorithm with fewer operations reaches the finish line first.',size:'Input size',speed:'Race speed',steps:'steps',step:'step',play:'Play',pause:'Pause',replay:'Race again',reset:'Reset',ready:'Change n to see how the race changes.',racing:'The racers are completing steps at the same rate.',stopped:'Race paused.',done:'All racers have finished.',rank:['1ST','2ND','3RD','4TH','5TH','6TH']},
  ar:{title:'سباق Big O',subtitle:'نفس السرعة لكل خطوة',intro:'كل متسابق ينفّذ خطوة حسابية بالسرعة نفسها. الخوارزمية ذات الخطوات الأقل تصل إلى النهاية أولًا.',size:'حجم المدخلات',speed:'سرعة السباق',steps:'خطوة',step:'خطوة',play:'تشغيل',pause:'إيقاف مؤقت',replay:'أعد السباق',reset:'إعادة',ready:'غيّر قيمة n لتشاهد اختلاف السباق.',racing:'المتسابقون ينفّذون الخطوات بالسرعة نفسها.',stopped:'السباق متوقف مؤقتًا.',done:'وصل جميع المتسابقين إلى النهاية.',rank:['الأول','الثاني','الثالث','الرابع','الخامس','السادس']}
 };
 const racers=[
  {formula:'O(1)',color:'#53db82',vehicle:'car'},
  {formula:'O(log n)',color:'#53c8ff',vehicle:'bike'},
  {formula:'O(n)',color:'#ffdc58',vehicle:'taxi'},
  {formula:'O(n log n)',color:'#ff9c57',vehicle:'van'},
  {formula:'O(n²)',color:'#ff728c',vehicle:'tractor'},
  {formula:'O(2ⁿ)',color:'#ba8aff',vehicle:'truck'}
 ];
 let n=8,speed=1,elapsed=0,running=false,frame=0,lastTime=0,lang='en',observer;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 function counts(){return [1,Math.ceil(Math.log2(n)),n,Math.round(n*Math.log2(n)),n*n,2**n];}
 function vehicle(type){
  const wheels='<circle cx="20" cy="35" r="6" fill="#17202b" stroke="#aeb8c4" stroke-width="2"/><circle cx="61" cy="35" r="6" fill="#17202b" stroke="#aeb8c4" stroke-width="2"/>';
  const art={
   car:`<rect x="7" y="18" width="68" height="18" rx="7" fill="#e94e51"/><path d="M20 18 29 8h30l10 10" fill="#ff7471"/><path d="M32 10h25l7 8H25z" fill="#7ac4db"/><rect x="69" y="23" width="5" height="5" rx="2" fill="#fff3c5"/>${wheels}`,
   bike:'<circle cx="19" cy="34" r="7" fill="#17202b" stroke="#b9c6d2" stroke-width="2"/><circle cx="61" cy="34" r="7" fill="#17202b" stroke="#b9c6d2" stroke-width="2"/><path d="M19 34 34 21l10 13H19l15-13 27 13-10-17H42" fill="none" stroke="#6098ed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 19q8-13 17-3l8 9H44z" fill="#6e91e7"/><circle cx="42" cy="9" r="5" fill="#dbe5fb"/><path d="M37 12 31 21" stroke="#dbe5fb" stroke-width="4"/>',
   taxi:`<rect x="7" y="18" width="68" height="18" rx="7" fill="#f2c731"/><path d="M20 18 29 8h30l10 10" fill="#ffdb5b"/><path d="M32 10h25l7 8H25z" fill="#79bdd9"/><rect x="36" y="4" width="12" height="5" rx="2" fill="#fff6cb"/><rect x="69" y="23" width="5" height="5" rx="2" fill="#fff3c5"/>${wheels}`,
   van:`<path d="M8 9h48q7 0 11 9l8 7v11H8z" fill="#f4f1e8"/><path d="M55 12q6 0 9 7l4 5H55z" fill="#83b8cd"/><rect x="13" y="12" width="27" height="13" rx="2" fill="#d8e6e5"/><rect x="70" y="27" width="5" height="5" rx="2" fill="#ffe6a6"/>${wheels}`,
   tractor:'<circle cx="24" cy="33" r="9" fill="#1a272b" stroke="#c9d1b5" stroke-width="3"/><circle cx="65" cy="35" r="5" fill="#1a272b" stroke="#c9d1b5" stroke-width="2"/><path d="M11 22h33l8 8h17v6H13z" fill="#6fb36a"/><path d="M22 22V8h23l6 18H27z" fill="#438e66"/><path d="M29 11h11l4 11H29z" fill="#9fc6ce"/><path d="M52 17V5" stroke="#c4cfc7" stroke-width="3"/>',
   truck:`<rect x="5" y="10" width="46" height="25" rx="3" fill="#626073"/><path d="M51 18h14l10 9v8H51z" fill="#8b78b1"/><path d="M55 21h9l6 6H55z" fill="#9db6c2"/><rect x="70" y="29" width="5" height="4" fill="#fff0bc"/>${wheels}`
  };
  return `<svg viewBox="0 0 84 44" role="presentation" aria-hidden="true"><ellipse cx="42" cy="39" rx="37" ry="3" fill="#02060b66"/>${art[type]}</svg>`;
 }
 function rowMarkup(r,i){return `<div class="cx-lane" style="--race-color:${r.color}"><div class="cx-lane-label"><strong>${r.formula}</strong><small data-steps="${i}"></small></div><div class="cx-course"><div class="cx-start"></div><div class="cx-finish"></div><div class="cx-vehicle" data-car="${i}">${vehicle(r.vehicle)}</div><span class="cx-rank" data-rank="${i}" hidden></span></div></div>`;}
 function render(language){
  const wasRunning=running;pause();lang=language==='ar'?'ar':'en';const t=text[lang];if(observer)observer.disconnect();
  root.innerHTML=`<div class="cx-shell"><header class="cx-heading"><span class="cx-eyebrow">TIME COMPLEXITY · ${lang==='ar'?'تعقيد الزمن':'VISUALIZED'}</span><h1>${t.title}</h1><p class="cx-subtitle">n = <output id="cxHeadingN">${n}</output> <span>·</span> ${t.subtitle}</p></header><div class="cx-toolbar"><div class="cx-size-control"><label for="cxN">${t.size} <output id="cxNValue">${n}</output></label><input id="cxN" type="range" min="2" max="12" step="1" value="${n}" aria-label="${t.size}"></div><label class="cx-speed-control" for="cxSpeed">${t.speed}<select id="cxSpeed"><option value="1">1×</option><option value="4">4×</option><option value="16">16×</option></select></label><div class="cx-actions"><button id="cxPlay" type="button"></button><button id="cxReset" type="button">↺ ${t.reset}</button></div></div><p class="cx-intro">${t.intro}</p><div class="cx-stadium"><div class="cx-stands" aria-hidden="true"></div><div class="cx-field"><div class="cx-curb" aria-hidden="true"></div><div class="cx-track" aria-label="${t.title}">${racers.map(rowMarkup).join('')}</div><div class="cx-curb" aria-hidden="true"></div></div></div><p class="cx-status" id="cxStatus" aria-live="polite"></p></div>`;
  root.querySelector('#cxSpeed').value=String(speed);
  root.querySelector('#cxN').addEventListener('input',e=>{n=Math.max(2,Math.min(12,Number(e.target.value)||8));elapsed=0;update();if(!running&&!reduced.matches)start();});
  root.querySelector('#cxSpeed').addEventListener('change',e=>{speed=Number(e.target.value)||1;update();});
  root.querySelector('#cxPlay').addEventListener('click',()=>running?pause():start());
  root.querySelector('#cxReset').addEventListener('click',()=>{elapsed=0;update();start();});
  if('ResizeObserver' in window){observer=new ResizeObserver(update);observer.observe(root.querySelector('.cx-track'));}
  update();if(wasRunning&&!root.hidden)start();
 }
 function update(){if(!root.firstElementChild)return;const t=text[lang],totals=counts(),max=Math.max(...totals);root.querySelector('#cxNValue').textContent=String(n);root.querySelector('#cxHeadingN').textContent=String(n);const label=root.querySelector('#cxPlay');label.textContent=running?`Ⅱ ${t.pause}`:elapsed>=max?`↺ ${t.replay}`:`▶ ${t.play}`;label.setAttribute('aria-pressed',String(running));root.querySelector('#cxStatus').textContent=elapsed>=max?t.done:running?t.racing:elapsed>0?t.stopped:t.ready;
  totals.forEach((total,i)=>{const done=Math.min(total,Math.floor(elapsed)),progress=Math.min(1,elapsed/total),course=root.querySelectorAll('.cx-course')[i],car=course.querySelector('.cx-vehicle'),finish=course.querySelector('.cx-finish'),rank=course.querySelector('.cx-rank');const finishRight=parseFloat(getComputedStyle(finish).right)||0,travel=Math.max(0,course.clientWidth-finishRight-finish.offsetWidth-car.offsetWidth-3);car.style.transform=`translate3d(${Math.round(travel*progress)}px,0,0)`;root.querySelector(`[data-steps="${i}"]`).textContent=`${done} / ${total} ${total===1?t.step:t.steps}`;const finished=progress>=1;rank.hidden=!finished;if(finished){const position=totals.filter(value=>value<total).length;rank.textContent=t.rank[position];rank.classList.toggle('winner',position===0);}course.classList.toggle('is-finished',finished);});
 }
 function tick(time){if(!running)return;if(document.hidden){lastTime=time;frame=requestAnimationFrame(tick);return;}if(lastTime)elapsed+=Math.min(time-lastTime,100)/1000*4*speed;lastTime=time;update();if(elapsed>=Math.max(...counts())){pause();return;}frame=requestAnimationFrame(tick);}
 function start(){if(!root.firstElementChild)return;if(running)return;if(elapsed>=Math.max(...counts()))elapsed=0;running=true;lastTime=0;update();frame=requestAnimationFrame(tick);}
 function pause(){running=false;lastTime=0;if(frame)cancelAnimationFrame(frame);frame=0;update();}
 function open(language){if(!root.firstElementChild||lang!==language)render(language);update();if(!reduced.matches)start();}
 window.KhamisComplexity={open,render,pause,getState:()=>({n,speed,elapsed,running,totals:counts()})};
})();
