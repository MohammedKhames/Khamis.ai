(function(root){
'use strict';
// The columns and their top-to-bottom order follow the supplied ecosystem diagram.
const columns=[
 {key:'llm',title:'LLM',color:'#7648be',drop:300,items:[
  ['vLLM','https://docs.vllm.ai/'],['Ollama','https://docs.ollama.com/'],['Hugging Face','https://huggingface.co/docs'],['Cohere','https://docs.cohere.com/'],['Mistral AI','https://docs.mistral.ai/'],['Meta Llama','https://dev.meta.ai/llama'],['Google Gemini','https://ai.google.dev/gemini-api/docs'],['Anthropic Claude','https://docs.anthropic.com/en/docs/overview'],['OpenAI GPT','https://platform.openai.com/docs/overview']
 ]},
 {key:'agentic',title:'Agentic AI',color:'#2977bf',drop:220,items:[
  ['Microsoft Agent Framework','https://learn.microsoft.com/en-us/agent-framework/'],['LlamaIndex Workflows','https://docs.llamaindex.ai/en/stable/module_guides/workflow/'],['AWS Strands Agents','https://strandsagents.com/latest/'],['CAMEL','https://docs.camel-ai.org/'],['Agno','https://docs.agno.com/'],['Microsoft AutoGen','https://microsoft.github.io/autogen/stable/'],['CrewAI','https://docs.crewai.com/'],['LangGraph','https://docs.langchain.com/oss/python/langgraph/overview']
 ]},
 {key:'rag',title:'RAG',color:'#18ae3e',drop:140,items:[
  ['Unstructured','https://docs.unstructured.io/'],['EmbedChain','https://docs.embedchain.ai/'],['GraphRAG','https://microsoft.github.io/graphrag/'],['RAGFlow','https://ragflow.io/docs/dev/'],['DSPy','https://dspy.ai/'],['Haystack','https://docs.haystack.deepset.ai/docs/intro'],['LlamaIndex','https://docs.llamaindex.ai/'],['LangChain','https://docs.langchain.com/']
 ]},
 {key:'embedding',title:'Embedding',color:'#7648be',drop:70,items:[
  ['Azure OpenAI Embeddings','https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/embeddings'],['Google Vertex AI Embeddings','https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings'],['BGE','https://bge-model.com/'],['Sentence Transformers','https://sbert.net/'],['Voyage AI','https://docs.voyageai.com/'],['Cohere Embed','https://docs.cohere.com/docs/cohere-embed'],['OpenAI Embeddings','https://platform.openai.com/docs/guides/embeddings']
 ]},
 {key:'mcp',title:'MCP',color:'#2977bf',drop:0,items:[
  ['Filesystem MCP Server','https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem'],['Google Drive MCP Server','https://developers.google.com/workspace/drive/api/guides/configure-mcp-server'],['PostgreSQL MCP Server','https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres'],['Slack MCP Server','https://docs.slack.dev/ai/slack-mcp-server'],['GitHub MCP Server','https://github.com/github/github-mcp-server'],['MCP Registry','https://registry.modelcontextprotocol.io/docs'],['FastMCP','https://gofastmcp.com/getting-started/welcome'],['MCP SDK','https://modelcontextprotocol.io/docs/sdk']
 ]},
 {key:'security',title:'AI Security',color:'#18ae3e',drop:0,items:[
  ['AWS Bedrock Guardrails','https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html'],['Azure AI Content Safety','https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview'],['Protect AI','https://docs.paloaltonetworks.com/prisma-airs/ai-supply-chain-security/ai-supply-chain-security/model-security-to-secure-your-ai-models'],['Prompt Security','https://www.sentinelone.com/platform/securing-ai-prompt/'],['Lakera Guard','https://docs.lakera.ai/guard'],['Microsoft Presidio','https://microsoft.github.io/presidio/'],['Guardrails AI','https://www.guardrailsai.com/docs'],['NVIDIA NeMo Guardrails','https://docs.nvidia.com/nemo/guardrails/']
 ]},
 {key:'observability',title:'Observability',color:'#7648be',drop:0,items:[
  ['Helicone','https://docs.helicone.ai/'],['Promptfoo','https://www.promptfoo.dev/docs/intro/'],['Ragas','https://docs.ragas.io/en/stable/'],['TruLens','https://www.trulens.org/getting_started/'],['Weights & Biases Weave','https://weave-docs.wandb.ai/'],['Arize Phoenix','https://arize.com/docs/phoenix'],['Langfuse','https://langfuse.com/docs'],['LangSmith','https://docs.langchain.com/langsmith/home']
 ]},
 {key:'memory',title:'Memory',color:'#2977bf',drop:70,items:[
  ['Chroma','https://docs.trychroma.com/'],['Neo4j','https://neo4j.com/docs/'],['PostgreSQL','https://www.postgresql.org/docs/current/'],['Redis','https://redis.io/docs/latest/'],['LangGraph Memory','https://docs.langchain.com/oss/python/langgraph/add-memory'],['Letta','https://docs.letta.com/'],['Zep','https://help.getzep.com/'],['Mem0','https://docs.mem0.ai/']
 ]},
 {key:'ai-agent',title:'AI Agent',color:'#18ae3e',drop:140,items:[
  ['Azure AI Foundry Agent Service','https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview'],['AWS Bedrock Agents','https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html'],['Google ADK','https://google.github.io/adk-docs/'],['Semantic Kernel','https://learn.microsoft.com/en-us/semantic-kernel/overview/'],['PydanticAI','https://ai.pydantic.dev/'],['LangChain Agents','https://docs.langchain.com/oss/python/langchain/agents'],['OpenAI Agents SDK','https://openai.github.io/openai-agents-python/']
 ]},
 {key:'automation',title:'Automation',color:'#7648be',drop:220,items:[
  ['Pipedream','https://pipedream.com/docs/'],['Kestra','https://kestra.io/docs/'],['Prefect','https://docs.prefect.io/'],['Apache Airflow','https://airflow.apache.org/docs/'],['Temporal','https://docs.temporal.io/'],['n8n','https://docs.n8n.io/'],['Make','https://www.make.com/en/help'],['Zapier','https://docs.zapier.com/platform/home'],['Microsoft Power Automate','https://learn.microsoft.com/en-us/power-automate/']
 ]},
 {key:'vector-db',title:'Vector Database',color:'#2977bf',drop:300,items:[
  ['MongoDB Atlas Vector Search','https://www.mongodb.com/docs/atlas/atlas-vector-search/'],['Redis','https://redis.io/docs/latest/develop/ai/search-and-query/vectors/'],['Elasticsearch','https://www.elastic.co/docs/solutions/search/vector'],['pgvector','https://github.com/pgvector/pgvector'],['Chroma','https://docs.trychroma.com/'],['Milvus','https://milvus.io/docs'],['Qdrant','https://qdrant.tech/documentation/'],['Weaviate','https://docs.weaviate.io/weaviate'],['Pinecone','https://docs.pinecone.io/']
 ]}
];
root.KhamisEcosystemData=columns;
if(typeof module!=='undefined'&&module.exports)module.exports=columns;
})(typeof window!=='undefined'?window:globalThis);

