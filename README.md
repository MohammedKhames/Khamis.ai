# KhamisRagTools

A simple bilingual Arabic/English RAG learning and recommendation website. Open `index.html` in a browser. No build step, backend, credentials, or deployment is required.

## What is included

- A numbered clockwise RAG diagram with ten clickable stages and a distinct SVG pictogram for each stage. Stage cards show one name in the selected language and orbit slowly around the center. Hovering pauses the motion, and a play/pause control is provided. Motion starts off when the browser requests reduced motion.
- A RAG Simulation tab with an animated 3D journey diagram. Clicking a stage opens a Three.js/WebGL scene for that operation: source records, before/after cleaning, document cuts and overlapping chunks, token-to-vector mapping, vector storage, retrieval, reranking, prompt assembly, answer generation, or evaluation. Drag to orbit, scroll to zoom, and click a 3D object for its details. Choose a method or adjust inputs and the scene is recalculated and animated immediately. Chunk size and overlap change the actual chunk boundaries shown in the scene. If WebGL or ES module loading is unavailable, the same controls and calculated results run in a lighter interactive perspective renderer based on Canvas 2D. The browser calculates illustrative results in Arabic and English; it does not call a real embedding model or LLM. Reduced-motion preferences are respected.
- An Ecosystems tab with the reference diagram's 11 left-to-right technology tracks and 89 linked tools. Its paper-white canvas, white tool cards, colored outlines and category circles follow the reference image. Original product marks and favicons are served locally; see `ecosystem-icons/SOURCES.md`. The layout fits desktop widths without horizontal scrolling and becomes a compact card grid on narrow screens. Every card opens its official documentation; Prompt Security opens its official product resource because public documentation could not be located.
- Nine guided questionnaires with six settings each (three essentials and three expandable details), 29 specific tool or model recommendations, reasons, documentation links, and selected-setting summaries. Choices have prominent selected states.
- Every guided stage offers two code examples: direct RAG integration and LangChain integration, with relevant Python package commands where needed. These examples connect to the outputs of preceding stages.
- The existing full embedding advisor, including its recommendation engine, Python code generation, copy, download, and saved settings, embedded in stage 4. Its old hero and three introductory cards are hidden in the stage view so the questions and results begin immediately. The shared language toggle also updates it.
- Language, answers, and embedding settings saved in browser local storage. Stage links use `#stage-N`; the back button and browser history work.
- A warm dark yellow accent on the wheel's background lines and selected controls elsewhere, plus a dark/light appearance switch in the header. Wheel cards, icons, and labels retain their cool colors. Dark mode is the default; the chosen appearance is saved locally and also updates the embedded Embedding advisor.

## Files

- `index.html`, `style.css`, `appearance.css`, `simulation.css`, `simulation-engine.css`, `rag-diagram.css`, `stage-lab.css`, `stage-3d.css`, `ecosystems.css`, `explorer.js`, `simulation.js`, `rag-diagram.js`, `stage-lab.js`, `stage-3d.js`, `stage-fallback.js`, `ecosystems.js`, `ecosystems-data.js`, `ecosystem-icons/`, `code-examples.js`, `logo.svg`: explorer homepage, guided stages, animated simulation and interactive 3D stage scenes, ecosystem map and local logos, compatible light graphics mode, appearance switch, two code modes, and brand mark.
- `vendor/`: local Three.js module, OrbitControls, and their license. The simulation has no runtime CDN dependency.
- `embedding-advisor.html`, `theme.css`, `brand.css`, `advisor-appearance.css`, `app.js`, `engine.js`, `translations.js`, `favicon.svg`: preserved embedding advisor with matching dark and light appearances.

## Notes

Recommendations are transparent starting points, not benchmark results. Review each linked tool's current documentation, dependencies, and data handling, then test on your own corpus. The site does not run models, transmit project text, or ask for API keys. Generated examples may require installing the libraries described in their official documentation. The optional Google Fonts request can fall back to system fonts offline.

The site is published at https://khamisembed.vercel.app/ from the private GitHub repository MohammedKhames/KhamisEmbed.
