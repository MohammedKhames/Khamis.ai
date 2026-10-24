# KhamisRagTools

A simple bilingual Arabic/English RAG learning and recommendation website. Open `index.html` in a browser. No build step, backend, credentials, or deployment is required.

## What is included

- A numbered clockwise RAG diagram with ten clickable stages and a distinct SVG pictogram for each stage. Stage cards show one name in the selected language and orbit slowly around the center. Hovering pauses the motion, and a play/pause control is provided. Motion starts off when the browser requests reduced motion.
- A RAG Simulation tab based on a clear infographic-style 3D flowchart with connected, clickable process blocks and animated data packets. A nine-card architecture selector covers Naive, Advanced, Modular, Hybrid, Graph, Agentic, Corrective, Self-RAG, and Long-context RAG; selecting one changes the diagram and route. The ten pipeline stages and their three method choices remain interactive. Users can edit documents and a question, set chunk size, overlap, and retrieval count, rotate the diagram by dragging or arrow keys, replay, and run stages automatically at adjustable speed. It runs locally in the browser with simplified vectors and an extractive answer; it does not call a real embedding model or LLM. Reduced-motion preferences are respected.
- Nine guided questionnaires with six settings each (three essentials and three expandable details), 29 specific tool or model recommendations, reasons, documentation links, and selected-setting summaries. Choices have prominent selected states.
- Every guided stage offers two code examples: direct RAG integration and LangChain integration, with relevant Python package commands where needed. These examples connect to the outputs of preceding stages.
- The existing full embedding advisor, including its recommendation engine, Python code generation, copy, download, and saved settings, embedded in stage 4. Its old hero and three introductory cards are hidden in the stage view so the questions and results begin immediately. The shared language toggle also updates it.
- Language, answers, and embedding settings saved in browser local storage. Stage links use `#stage-N`; the back button and browser history work.
- A warm dark yellow accent on the wheel's background lines and selected controls elsewhere, plus a dark/light appearance switch in the header. Wheel cards, icons, and labels retain their cool colors. Dark mode is the default; the chosen appearance is saved locally and also updates the embedded Embedding advisor.

## Files

- `index.html`, `style.css`, `appearance.css`, `simulation.css`, `simulation-engine.css`, `rag-diagram.css`, `explorer.js`, `simulation.js`, `rag-diagram.js`, `code-examples.js`, `logo.svg`: explorer homepage, guided stages, animated simulation, appearance switch, two code modes, and brand mark.
- `embedding-advisor.html`, `theme.css`, `brand.css`, `advisor-appearance.css`, `app.js`, `engine.js`, `translations.js`, `favicon.svg`: preserved embedding advisor with matching dark and light appearances.

## Notes

Recommendations are transparent starting points, not benchmark results. Review each linked tool's current documentation, dependencies, and data handling, then test on your own corpus. The site does not run models, transmit project text, or ask for API keys. Generated examples may require installing the libraries described in their official documentation. The optional Google Fonts request can fall back to system fonts offline.

The site is published at https://khamisembed.vercel.app/ from the private GitHub repository MohammedKhames/KhamisEmbed.
