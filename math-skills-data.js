'use strict';
// Each entry is [English, Arabic, a direct lesson/article URL].
const MATH_SOURCES={
  la:'https://d2l.ai/chapter_preliminaries/linear-algebra.html',
  calc:'https://d2l.ai/chapter_preliminaries/calculus.html',
  prob:'https://d2l.ai/chapter_preliminaries/probability.html',
  linreg:'https://d2l.ai/chapter_linear-regression/index.html',
  gd:'https://d2l.ai/chapter_optimization/gd.html',
  sgd:'https://d2l.ai/chapter_optimization/sgd.html',
  minibatch:'https://d2l.ai/chapter_optimization/minibatch-sgd.html',
  momentum:'https://d2l.ai/chapter_optimization/momentum.html',
  adam:'https://d2l.ai/chapter_optimization/adam.html',
  general:'https://d2l.ai/chapter_linear-regression/generalization.html',
  info:'https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/information-theory.html',
  numeric:'https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html',
  backprop:'https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation',
  overfit:'https://developers.google.com/machine-learning/crash-course/overfitting/overfitting',
  regular:'https://developers.google.com/machine-learning/crash-course/overfitting/model-complexity',
  gradient:'https://developers.google.com/machine-learning/crash-course/linear-regression/gradient-descent',
  vectors:'https://www.3blue1brown.com/lessons/vectors/',
  dot:'https://www.3blue1brown.com/lessons/dot-products/',
  eigen:'https://www.3blue1brown.com/lessons/eigenvalues/'
};
const MATH_DIRECT={
 Transpose:'https://www.3blue1brown.com/lessons/inverse-matrices/',
 Vector_projection:'https://www.statlect.com/matrix-algebra/orthogonal-projection',
 Singular_value_decomposition:'https://www.statlect.com/matrix-algebra/singular-value-decomposition',
 Likelihood_function:'https://www.statlect.com/fundamentals-of-statistics/maximum-likelihood',
 Bernoulli_distribution:'https://www.statlect.com/probability-distributions/Bernoulli-distribution',
 Binomial_distribution:'https://www.statlect.com/probability-distributions/binomial-distribution',
 Categorical_distribution:'https://www.statlect.com/probability-distributions/multinoulli-distribution',
 Multinomial_distribution:'https://www.statlect.com/probability-distributions/multinomial-distribution',
 Normal_distribution:'https://www.statlect.com/probability-distributions/normal-distribution',
 Multivariate_normal_distribution:'https://www.statlect.com/probability-distributions/multivariate-normal-distribution',
 Continuous_uniform_distribution:'https://www.statlect.com/probability-distributions/uniform-distribution',
 Poisson_distribution:'https://www.statlect.com/probability-distributions/Poisson-distribution',
 Probability_density_function:'https://seeing-theory.brown.edu/probability-distributions/index.html',
 Cumulative_distribution_function:'https://seeing-theory.brown.edu/probability-distributions/index.html',
 Mean:'https://www.statlect.com/fundamentals-of-statistics/mean-estimation',
 Median:'https://www.statlect.com/fundamentals-of-probability/quantile',
 Variance:'https://www.statlect.com/fundamentals-of-probability/variance',
 Standard_deviation:'https://www.statlect.com/fundamentals-of-probability/variance',
 Covariance:'https://www.statlect.com/fundamentals-of-probability/covariance',
 Correlation:'https://www.statlect.com/fundamentals-of-probability/linear-correlation',
 Percentile:'https://www.statlect.com/fundamentals-of-probability/quantile',
 Sampling_distribution:'https://seeing-theory.brown.edu/frequentist-inference/index.html',
 Confidence_interval:'https://www.statlect.com/fundamentals-of-statistics/set-estimation-mean',
 Central_limit_theorem:'https://seeing-theory.brown.edu/frequentist-inference/index.html',
 Directional_derivative:'https://math.libretexts.org/Courses/Montana_State_University/M273%3A_Multivariable_Calculus/14%3A_Functions_of_Multiple_Variables_and_Partial_Derivatives/Directional_Derivatives_and_the_Gradient',
 Jacobian_matrix_and_determinant:'https://www.youtube.com/watch?v=wCZ1VEmVjVo',
 Hessian_matrix:'https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives/quadratic-approximations/a/approximating-multivariable-functions/a/the-hessian',
 Vanishing_gradient_problem:'https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html',
 Loss_function:'https://developers.google.com/machine-learning/crash-course/linear-regression/loss',
 'Learning_rate#Learning_rate_schedule':'https://d2l.ai/chapter_optimization/lr-scheduler.html',
 Convex_function:'https://d2l.ai/chapter_optimization/convexity.html',
 'Cross-entropy':'https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/information-theory.html',
 Information_gain_in_decision_trees:'https://scikit-learn.org/stable/modules/tree.html',
 Log_probability:'https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html',
 Perplexity:'https://huggingface.co/docs/transformers/en/perplexity',
 Euclidean_distance:'https://www.statlect.com/matrix-algebra/vector-norm',
 Taxicab_geometry:'https://scikit-learn.org/stable/modules/metrics.html',
 Cosine_similarity:'https://scikit-learn.org/stable/modules/metrics.html',
 'K-nearest_neighbors_algorithm':'https://scikit-learn.org/stable/modules/neighbors.html',
 Bias_of_an_estimator:'https://developers.google.com/machine-learning/crash-course/overfitting/model-complexity',
 'Floating-point_arithmetic':'https://docs.pytorch.org/docs/stable/notes/numerical_accuracy.html',
 LogSumExp:'https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html',
 'Normalization_(statistics)':'https://scikit-learn.org/stable/modules/preprocessing.html',
 Standard_score:'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html',
 Condition_number:'https://www.mathworks.com/help/matlab/ref/cond.html',
 Maximum_likelihood_estimation:'https://www.statlect.com/fundamentals-of-statistics/maximum-likelihood',
 Maximum_a_posteriori_estimation:'https://www.statlect.com/fundamentals-of-statistics/Bayesian-inference',
 'Bias%E2%80%93variance_tradeoff':'https://developers.google.com/machine-learning/crash-course/overfitting/model-complexity'
};
function mathUrl(ref){if(ref.startsWith('w:')){const key=ref.slice(2);return MATH_DIRECT[key]||'https://en.wikipedia.org/wiki/'+encodeURIComponent(key).replace(/%2F/g,'/');}const [key,anchor]=ref.split('#');return MATH_SOURCES[key]+(anchor?'#'+anchor:'');}
window.KhamisMathData=[
 {en:'Linear Algebra',ar:'الجبر الخطي',url:'https://www.3blue1brown.com/topics/linear-algebra',topics:[
  ['Vectors','المتجهات','vectors'],['Matrices','المصفوفات','la#matrices'],['Tensors','الموترات','la#tensors'],['Dot products','الضرب النقطي','dot'],['Matrix multiplication','ضرب المصفوفات','la#matrixmatrix-multiplication'],['Transpose & inverse','المنقول والمعكوس','w:Transpose'],['Vector norms','معايير المتجهات','la#norms'],['Orthogonality & projections','التعامد والإسقاطات','w:Vector_projection'],['Eigenvalues/eigenvectors','القيم والمتجهات الذاتية','eigen'],['SVD','تحليل القيمة المفردة','w:Singular_value_decomposition']
 ]},
 {en:'Probability Fundamentals',ar:'أساسيات الاحتمالات',url:'https://www.statlect.com/fundamentals-of-probability/',topics:[
  ['Random variables','المتغيرات العشوائية','prob#random-variables'],['Conditional probability','الاحتمال الشرطي','prob#multiple-random-variables'],['Joint & marginal probability','الاحتمال المشترك والهامشي','prob#multiple-random-variables'],['Independence','الاستقلال','prob#multiple-random-variables'],["Bayes’ theorem",'مبرهنة بايز','prob#an-example'],['Expectation','القيمة المتوقعة','prob#expectations'],['Variance','التباين','prob#expectations'],['Sampling','أخذ العينات','prob#a-simple-example-tossing-coins'],['Likelihood','دالة الإمكان','w:Likelihood_function']
 ]},
 {en:'Probability Distributions',ar:'التوزيعات الاحتمالية',url:'https://www.statlect.com/probability-distributions/',topics:[
  ['Bernoulli','برنولي','w:Bernoulli_distribution'],['Binomial','ثنائي الحدين','w:Binomial_distribution'],['Categorical','التوزيع الفئوي','w:Categorical_distribution'],['Multinomial','متعدد الحدود','w:Multinomial_distribution'],['Gaussian','التوزيع الطبيعي','w:Normal_distribution'],['Multivariate Gaussian','الطبيعي متعدد المتغيرات','w:Multivariate_normal_distribution'],['Uniform','المنتظم','w:Continuous_uniform_distribution'],['Poisson','بواسون','w:Poisson_distribution'],['PDF','دالة الكثافة','w:Probability_density_function'],['CDF','دالة التوزيع التراكمي','w:Cumulative_distribution_function']
 ]},
 {en:'Statistics',ar:'الإحصاء',url:'https://www.statlect.com/fundamentals-of-statistics/',topics:[
  ['Mean','المتوسط','w:Mean'],['Median','الوسيط','w:Median'],['Variance','التباين','w:Variance'],['Standard deviation','الانحراف المعياري','w:Standard_deviation'],['Covariance','التغاير','w:Covariance'],['Correlation','الارتباط','w:Correlation'],['Percentiles','المئينات','w:Percentile'],['Sampling distributions','توزيعات المعاينة','w:Sampling_distribution'],['Confidence intervals','فترات الثقة','w:Confidence_interval'],['Central Limit Theorem','نظرية الحد المركزي','w:Central_limit_theorem']
 ]},
 {en:'Multivariable Calculus',ar:'التفاضل متعدد المتغيرات',url:'https://d2l.ai/chapter_preliminaries/calculus.html',topics:[
  ['Derivatives','المشتقات','calc#derivatives-and-differentiation'],['Partial derivatives','المشتقات الجزئية','calc#partial-derivatives-and-gradients'],['Gradients','التدرجات','calc#partial-derivatives-and-gradients'],['Chain rule','قاعدة السلسلة','calc#chain-rule'],['Directional derivatives','المشتقات الاتجاهية','w:Directional_derivative'],['Jacobian','مصفوفة جاكوبي','w:Jacobian_matrix_and_determinant'],['Hessian','مصفوفة هسيان','w:Hessian_matrix'],['Backpropagation','الانتشار العكسي','backprop'],['Gradient flow','تدفق التدرج','w:Vanishing_gradient_problem']
 ]},
 {en:'Optimization',ar:'التحسين',url:'https://d2l.ai/chapter_optimization/index.html',topics:[
  ['Loss functions','دوال الخسارة','w:Loss_function'],['Gradient descent','الانحدار المتدرج','gradient'],['Mini-batch SGD','الانحدار العشوائي بدفعات صغيرة','minibatch'],['Learning rate','معدل التعلم','gradient'],['Momentum','الزخم','momentum'],['Adam','خوارزمية آدم','adam'],['Learning-rate schedules','جداول معدل التعلم','w:Learning_rate#Learning_rate_schedule'],['Convexity','التحدب','w:Convex_function'],['Local minima','الصغرى المحلية','gd'],['Saddle points','نقاط السرج','gd']
 ]},
 {en:'Information Theory',ar:'نظرية المعلومات',url:'https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/information-theory.html',topics:[
  ['Entropy','الإنتروبيا','info#entropy'],['Cross-entropy','الانتروبيا المتقاطعة','info#cross-entropy'],['Log-likelihood','لوغاريتم الإمكان','w:Likelihood_function'],['Negative log-likelihood','سالب لوغاريتم الإمكان','info#cross-entropy-as-an-objective-function-of-multi-class-classification'],['KL divergence','تباعد كولباك–ليبلر','info#kullbackleibler-divergence'],['Mutual information','المعلومات المتبادلة','info#mutual-information'],['Information gain','كسب المعلومات','w:Information_gain_in_decision_trees'],['Log probabilities','الاحتمالات اللوغاريتمية','w:Log_probability'],['Perplexity','الحيرة','w:Perplexity']
 ]},
 {en:'Distance & Similarity',ar:'المسافة والتشابه',url:'https://scikit-learn.org/stable/modules/metrics.html',topics:[
  ['Euclidean distance','المسافة الإقليدية','w:Euclidean_distance'],['Manhattan distance','مسافة مانهاتن','w:Taxicab_geometry'],['Cosine similarity','تشابه جيب التمام','w:Cosine_similarity'],['Dot product','الضرب النقطي','dot'],['L1/L2 norms','معيارا L1 وL2','la#norms'],['Nearest neighbors','أقرب الجيران','w:K-nearest_neighbors_algorithm'],['Vector search','البحث المتجهي','https://qdrant.tech/documentation/overview/vector-search/'],['Embedding similarity','تشابه التضمينات','https://developers.google.com/machine-learning/crash-course/embeddings/obtaining-embeddings']
 ]},
 {en:'Statistical Learning',ar:'التعلم الإحصائي',url:'https://developers.google.com/machine-learning/crash-course/overfitting',topics:[
  ['Bias','الانحياز','w:Bias_of_an_estimator'],['Variance','التباين','w:Variance'],['Bias–variance trade-off','موازنة الانحياز والتباين','w:Bias%E2%80%93variance_tradeoff'],['Generalization','التعميم','general'],['Overfitting','فرط التعلّم','overfit'],['Underfitting','ضعف التعلّم','overfit'],['Regularization','التنظيم','regular'],['Maximum likelihood','الإمكان الأعظم','w:Maximum_likelihood_estimation'],['MAP estimation','تقدير الاحتمال اللاحق الأعظم','w:Maximum_a_posteriori_estimation']
 ]},
 {en:'Numerical Computing',ar:'الحوسبة العددية',url:'https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html',topics:[
  ['Floating-point precision','دقة الفاصلة العائمة','w:Floating-point_arithmetic'],['Numerical stability','الاستقرار العددي','numeric'],['Overflow/underflow','الفيض والقصور العددي','numeric'],['Log-sum-exp','لوغاريتم مجموع الأسس','w:LogSumExp'],['Stable softmax','سوفتماكس المستقر','numeric'],['Normalization','التطبيع','w:Normalization_(statistics)'],['Standardization','التقييس','w:Standard_score'],['Matrix conditioning','تكييف المصفوفة','w:Condition_number'],['Mixed precision','الدقة المختلطة','https://pytorch.org/docs/stable/amp.html'],['Gradient clipping','قص التدرجات','https://pytorch.org/docs/stable/generated/torch.nn.utils.clip_grad_norm_.html']
 ]}
].map(group=>({...group,topics:group.topics.map(([en,ar,ref])=>({en,ar,url:ref.startsWith('https://')?ref:mathUrl(ref)}))}));
