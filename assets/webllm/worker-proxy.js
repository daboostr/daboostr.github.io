// This same-origin module worker loads the official WebLLM worker from the CDN.
// Keeping this file in /assets avoids cross-origin Worker construction issues.
import 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm/dist/worker.js';