# KhamisEmbed

A bilingual Arabic/English text embedding model advisor, with a text-focused visual identity and orange/charcoal palette.

## Run locally

Run `python -m http.server 5174` in this folder and open http://localhost:5174. No build, backend, or API key is needed for the website.

## Features

- RTL/LTR Arabic and English interface; settings saved locally in the browser.
- Explicit rules filter models by language, privacy, deployment, and input length, then prioritize hardware and user preferences.
- Local choices: Multilingual E5 Small/Base, BGE-M3, and English MiniLM L6.
- API choices: OpenAI text-embedding-3-small/large. Private data settings exclude API providers even when cloud deployment is selected.
- Model cards link to original documentation and show dimensions and context limits.
- Python code generation for Sentence Transformers, LangChain, and OpenAI SDK with model-specific E5 prefixes and environment-based API credentials.
- Copy code or download a Python starter. The website never executes models, receives user text, or requests API credentials.

## Recommendation limits

The ordering is a transparent heuristic, not benchmark evidence or a guarantee of retrieval quality. Each result explains the applicable rules. Context limits apply per input and count tokens, not words. Hardware preferences are not memory compatibility guarantees. The supplied Python is a starter, not a complete RAG application. First local use downloads weights. API usage sends inputs to OpenAI and may incur charges. Model inference is not executed in automated website checks.

Specifications were reviewed on October 16, 2026 against the model cards linked in `engine.js`. Recheck upstream documentation when updating the catalog.

## Files

- `index.html`: bilingual layout and original design styles.
- `theme.css`: orange/charcoal theme and responsive application styling.
- `engine.js`: model catalog, recommendation rules, and Python generator; browser and Node compatible.
- `app.js`: interactions, translations, persistence, downloads, and accessible state.
- `translations.js`: English interface strings.
- `vercel.json`: buildless static deployment configuration.

## Deploy

Import the private GitHub repository in Vercel. Use **Other** framework, repository root, no build command, and output directory `.`. No environment variables are needed for the website. Git integration publishes future commits automatically when enabled.

## Privacy

Settings stay in localStorage. The UI loads fonts from Google Fonts; no analytics are installed. Documentation links navigate to their respective providers. API credentials belong only in the Python environment where a user chooses to execute generated API code.
