// Curated starting points. Every card opens the source maintained by its owner.
(() => {
  const pages = {
    repos: {
      title:['مستودعات مهمة','Useful repositories'],
      intro:['ابدأ بالمصدر الأصلي للأدوات المستخدمة في مراحل الذكاء الاصطناعي.','Explore the original source code behind tools used throughout the AI route.'],
      items:[
        ['scikit-learn','Machine Learning','نماذج التعلم الآلي ومعالجة البيانات وتقييمها.','Machine learning models, preprocessing, and evaluation.','https://github.com/scikit-learn/scikit-learn'],
        ['PyTorch','Deep Learning','إطار بناء الشبكات العصبية وتدريبها.','Build and train neural networks.','https://github.com/pytorch/pytorch'],
        ['Transformers','LLMs','نماذج النص والصورة والصوت من Hugging Face.','Text, vision, and audio model definitions from Hugging Face.','https://github.com/huggingface/transformers'],
        ['LangChain','RAG · Agents','مكونات تطبيقات النماذج اللغوية والوكلاء.','Components for LLM applications and agents.','https://github.com/langchain-ai/langchain'],
        ['LlamaIndex','RAG','أدوات ربط البيانات الخاصة بتطبيقات LLM.','Connect your data to LLM applications.','https://github.com/run-llama/llama_index'],
        ['Qdrant','Vector Database','محرك بحث متجهي لتطبيقات الاسترجاع.','A vector search engine for retrieval applications.','https://github.com/qdrant/qdrant']
      ]
    },
    courses: {
      title:['كورسات الذكاء الاصطناعي','AI courses'],
      intro:['مصادر تعليمية من الجهات التي طورت الأدوات أو تقدمها مباشرة.','Learn from the teams that build and teach these tools.'],
      items:[
        ['Google ML Crash Course','Machine Learning','مدخل تفاعلي للتعلم الآلي وتقييم النماذج.','An interactive introduction to machine learning and evaluation.','https://developers.google.com/machine-learning/crash-course/'],
        ['scikit-learn MOOC','Machine Learning','تعلّم النماذج وخطوط المعالجة باستخدام scikit-learn.','Learn models and pipelines with scikit-learn.','https://inria.github.io/scikit-learn-mooc/'],
        ['Practical Deep Learning','Deep Learning','تطبيقات عملية للتعلم العميق من fast.ai.','Hands-on deep learning from fast.ai.','https://course.fast.ai/'],
        ['PyTorch Tutorials','Deep Learning','دروس رسمية تبدأ من أساسيات PyTorch.','Official tutorials starting with PyTorch basics.','https://docs.pytorch.org/tutorials/'],
        ['Hugging Face Learn','LLMs · Agents','مسارات للنماذج اللغوية والوكلاء والرؤية والصوت.','Courses on LLMs, agents, vision, and audio.','https://huggingface.co/learn'],
        ['LangChain Academy','Agents · RAG','تعلم بناء تطبيقات ووكلاء LangChain وLangGraph.','Learn to build LangChain and LangGraph applications and agents.','https://academy.langchain.com/']
      ]
    },
    companies: {
      title:['شركات الذكاء الاصطناعي','AI companies'],
      intro:['تعرف على الجهات التي تطور النماذج والأدوات والبنية التحتية.','Discover teams building AI models, tools, and infrastructure.'],
      items:[
        ['OpenAI','Models · APIs','نماذج وتطبيقات وواجهات للذكاء الاصطناعي.','AI models, applications, and APIs.','https://openai.com/'],
        ['Anthropic','Models · Safety','نماذج Claude وأبحاث سلامة الذكاء الاصطناعي.','Claude models and AI safety research.','https://www.anthropic.com/'],
        ['Google DeepMind','Research · Models','أبحاث ونماذج متقدمة للذكاء الاصطناعي.','Frontier AI research and models.','https://deepmind.google/'],
        ['Hugging Face','Open Source · Community','منصة للنماذج والبيانات والمجتمع مفتوح المصدر.','A hub for models, datasets, and the open-source community.','https://huggingface.co/'],
        ['NVIDIA','Compute · Infrastructure','عتاد وبرمجيات لتدريب أنظمة الذكاء الاصطناعي وتشغيلها.','Hardware and software for training and running AI systems.','https://www.nvidia.com/en-us/ai/'],
        ['Mistral AI','Models · APIs','نماذج لغوية وأدوات لتشغيلها.','Language models and tools to run them.','https://mistral.ai/']
      ]
    }
  };
  const ids={repos:'reposView',courses:'coursesView',companies:'aiCompaniesView'};
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function render(kind,language){
    const page=pages[kind],root=document.getElementById(ids[kind]),ar=language==='ar',i=ar?0:1;
    if(!page||!root)return;
    root.innerHTML=`<div class="resource-header"><span class="resource-kicker">KHAMIS.AI / ${kind.toUpperCase()}</span><h1>${escape(page.title[i])}</h1><p>${escape(page.intro[i])}</p></div><div class="resource-grid">${page.items.map((item,index)=>`<a class="resource-card" href="${item[4]}" target="_blank" rel="noopener noreferrer" style="--resource-index:${index}" aria-label="${escape(item[0])}"><span class="resource-card-top"><span class="resource-mark" aria-hidden="true">${escape(item[0].slice(0,1))}</span><span class="resource-arrow" aria-hidden="true">↗</span></span><span class="resource-area">${escape(item[1])}</span><strong>${escape(item[0])}</strong><span class="resource-description">${escape(item[ar?2:3])}</span></a>`).join('')}</div>`;
  }
  window.KhamisResources={render};
})();
