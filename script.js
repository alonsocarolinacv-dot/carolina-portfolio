:root { --bg:#0b0d12; --card:#121623; --text:#e9ecf1; --muted:#aab3c5; --line:#232a3b; }
*{box-sizing:border-box} body{margin:0;font-family:system-ui,Segoe UI,Roboto,Arial;background:var(--bg);color:var(--text)}
.container{max-width:980px;margin:0 auto;padding:24px}
.nav{display:flex;gap:16px;align-items:center;justify-content:space-between}
.nav a{color:var(--muted);text-decoration:none}
.hero{padding:40px 0 10px}
.hero h1{font-size:42px;line-height:1.1;margin:0 0 10px}
.hero p{color:var(--muted);margin:0 0 18px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{background:#4f7cff;color:white;border:0;border-radius:12px;padding:10px 14px;text-decoration:none;display:inline-block}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--text)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px}
.card h2{margin:0 0 8px;font-size:18px}
.card p{margin:0;color:var(--muted)}
.contact{margin-top:28px;padding-top:10px;border-top:1px solid var(--line)}
label{display:block;margin:10px 0;color:var(--muted)}
input,textarea{width:100%;margin-top:6px;padding:10px;border-radius:12px;border:1px solid var(--line);background:#0f1320;color:var(--text)}
.footer{margin-top:26px;border-top:1px solid var(--line);padding-top:18px;color:var(--muted)}
.msg{color:var(--muted);margin-top:10px}
@media (max-width: 820px){ .grid{grid-template-columns:1fr} .hero h1{font-size:34px} }
