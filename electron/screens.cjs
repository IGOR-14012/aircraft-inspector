// Inlined so it ships with electron/main.cjs without an extra build step.

const SHELL = (body) => `<!doctype html>
<html><head><meta charset="utf-8" /><style>
  html, body { height: 100%; margin: 0; background: #0f172a; color: #e2e8f0;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif; }
  body { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 24px; }
  .logo { width: 64px; height: 64px; }
  h1 { font-size: 16px; font-weight: 600; margin: 0; letter-spacing: 0.02em; }
  p { font-size: 13px; color: #94a3b8; margin: 0; max-width: 380px; line-height: 1.5; }
  .spinner { width: 26px; height: 26px; border-radius: 50%; border: 3px solid rgba(56,189,248,0.25);
    border-top-color: #38bdf8; animation: spin 0.8s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style></head><body>${body}</body></html>`

const LOGO_SVG = `<svg class="logo" width="64" height="64" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="37" fill="#0f172a"/>
  <path d="M52 132 L75 48 L98 132" stroke="#38bdf8" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M61 98 L89 98" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
  <path d="M125 48 L125 132" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
</svg>`

const LOADING_HTML = SHELL(`
  ${LOGO_SVG}
  <div class="spinner"></div>
  <h1>Starting Aircraft Inspector...</h1>
  <p>Loading the AI defect detection engine.</p>
`)

module.exports = { LOADING_HTML }
