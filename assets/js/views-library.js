/* ==========================================================================
   BODYVERSE · LIBRARY VIEWS — Human Atlas, Roots & Rivers, Herbal Codex,
   Phytochemistry, Apothecary, Knowledge Web
   ========================================================================== */

/* ---------- 🫀 HUMAN ATLAS — interactive body ---------------------------- */
BV.bodySVG = () => `
<svg class="body-svg" viewBox="0 0 200 440" role="img" aria-label="Interactive human body">
  <defs>
    <linearGradient id="skinG" x1="0" x2="1"><stop offset="0" stop-color="var(--body-1)"/><stop offset=".5" stop-color="var(--body-2)"/><stop offset="1" stop-color="var(--body-1)"/></linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation=".6"/></filter>
  </defs>
  <g class="part skin" data-organ="skin" tabindex="0" aria-label="Skin">
    <ellipse cx="100" cy="38" rx="24" ry="29"/><rect x="90" y="62" width="20" height="22" rx="6"/>
    <path d="M62 92 Q100 80 138 92 L142 150 Q134 200 132 210 Q140 240 136 270 L64 270 Q60 240 68 210 Q66 200 58 150 Z"/>
    <path d="M62 92 Q48 96 46 120 L38 200 Q34 240 36 270 L46 272 Q50 240 54 205 L62 140 Z"/>
    <path d="M138 92 Q152 96 154 120 L162 200 Q166 240 164 270 L154 272 Q150 240 146 205 L138 140 Z"/>
    <path d="M64 268 L98 268 L96 330 L92 420 L74 424 L72 330 Z"/><path d="M102 268 L136 268 L128 330 L126 424 L108 420 L104 330 Z"/>
  </g>
  <g class="layer layer-muscles part" data-organ="muscles" tabindex="0" aria-label="Muscles">
    <path d="M66 98 Q80 94 96 100 L94 128 Q78 130 66 122Z"/><path d="M134 98 Q120 94 104 100 L106 128 Q122 130 134 122Z"/>
    <path d="M50 120 Q56 112 60 124 L56 168 Q50 170 46 160Z"/><path d="M150 120 Q144 112 140 124 L144 168 Q150 170 154 160Z"/>
    <path d="M86 150 h28 v52 h-28z" opacity=".6"/><path d="M74 276 Q86 272 96 278 L94 330 Q84 336 76 326Z"/><path d="M126 276 Q114 272 104 278 L106 330 Q116 336 124 326Z"/>
    <path d="M76 350 Q84 344 92 352 L90 396 Q82 398 78 390Z"/><path d="M124 350 Q116 344 108 352 L110 396 Q118 398 122 390Z"/>
  </g>
  <g class="layer layer-bones part" data-organ="bones" tabindex="0" aria-label="Bones">
    <ellipse cx="100" cy="36" rx="20" ry="24" fill="none"/><path d="M100 62 V262" stroke-dasharray="4 2"/>
    ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M100 ${104 + i * 11} Q${78 - i} ${100 + i * 11} ${70 + i * 2} ${112 + i * 11}"/><path d="M100 ${104 + i * 11} Q${122 + i} ${100 + i * 11} ${130 - i * 2} ${112 + i * 11}"/>`).join("")}
    <path d="M66 94 L134 94"/><path d="M64 96 L50 200 L42 268"/><path d="M136 96 L150 200 L158 268"/>
    <path d="M74 246 Q100 236 126 246 Q120 268 100 270 Q80 268 74 246Z"/><path d="M84 268 L84 340 L82 418"/><path d="M116 268 L116 340 L118 418"/>
    <circle cx="84" cy="340" r="3"/><circle cx="116" cy="340" r="3"/>
  </g>
  <g class="layer layer-nerves" aria-hidden="true">
    <path d="M100 50 V262 M100 120 L60 180 L44 260 M100 120 L140 180 L156 260 M100 262 L86 420 M100 262 L114 420" class="nerve"/>
    <path d="M104 128 C 120 140, 124 200, 118 262 M104 128 C 80 150, 76 210, 82 262 M106 120 L140 160 M106 120 L60 160" class="vessel"/>
  </g>
  <g class="organs">
    <g class="part organ" data-organ="brain" tabindex="0" aria-label="Brain" transform="translate(100 25) scale(.8) translate(-100 -32)"><path d="M82 34 C 80 18, 96 12, 100 16 C 106 10, 122 16, 118 32 C 124 40, 116 50, 108 48 C 102 52, 94 52, 90 48 C 80 48, 76 40, 82 34Z"/><path d="M100 18 C 98 28, 104 36, 100 48 M88 26 Q94 32 90 40 M112 26 Q106 32 110 40" class="detail"/></g>
    <g class="part organ" data-organ="eyes" tabindex="0" aria-label="Eyes"><ellipse cx="91" cy="44" rx="4.5" ry="3"/><ellipse cx="109" cy="44" rx="4.5" ry="3"/><circle cx="91" cy="44" r="1.4" class="detail-fill"/><circle cx="109" cy="44" r="1.4" class="detail-fill"/></g>
    <g class="part organ" data-organ="thyroid" tabindex="0" aria-label="Thyroid"><path d="M100 78 C 94 72, 88 74, 90 80 C 92 86, 98 84, 100 80 C 102 84, 108 86, 110 80 C 112 74, 106 72, 100 78Z"/></g>
    <g class="part organ" data-organ="lymph" tabindex="0" aria-label="Lymph nodes">${[[88, 70], [112, 70], [66, 110], [134, 110], [84, 262], [116, 262], [94, 196], [106, 200]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2"/>`).join("")}</g>
    <g class="part organ" data-organ="lungs" tabindex="0" aria-label="Lungs"><path d="M96 100 C 80 98, 70 116, 70 140 C 70 158, 78 164, 94 160 C 98 140, 98 118, 96 100Z"/><path d="M104 100 C 120 98, 130 116, 130 140 C 130 158, 122 164, 106 160 C 102 140, 102 118, 104 100Z"/><path d="M84 112 Q86 130 82 150 M116 112 Q114 130 118 150" class="detail"/></g>
    <g class="part organ" data-organ="heart" tabindex="0" aria-label="Heart"><path class="beat" d="M104 122 C 100 114, 90 116, 92 126 C 94 136, 104 142, 108 148 C 114 140, 124 132, 122 124 C 120 116, 110 116, 108 122Z"/></g>
    <g class="part organ" data-organ="liver" tabindex="0" aria-label="Liver"><path d="M68 166 C 74 158, 104 158, 110 164 C 108 174, 96 182, 80 184 C 70 184, 66 176, 68 166Z"/></g>
    <g class="part organ" data-organ="stomach" tabindex="0" aria-label="Stomach"><path d="M112 162 C 126 160, 132 172, 128 184 C 124 196, 108 198, 104 188 C 110 186, 116 180, 112 172Z"/></g>
    <g class="part organ" data-organ="kidneys" tabindex="0" aria-label="Kidneys"><path d="M80 192 C 72 192, 72 210, 80 212 C 84 212, 84 206, 82 202 C 84 198, 84 192, 80 192Z"/><path d="M120 192 C 128 192, 128 210, 120 212 C 116 212, 116 206, 118 202 C 116 198, 116 192, 120 192Z"/></g>
    <g class="part organ" data-organ="intestines" tabindex="0" aria-label="Intestines"><path d="M80 214 Q100 206 120 214 Q126 236 118 252 Q100 260 82 252 Q74 236 80 214Z"/><path d="M86 222 Q100 216 114 222 Q118 232 110 236 Q100 232 90 236 Q84 244 92 248 Q100 244 110 248" class="detail"/></g>
    <g class="part organ" data-organ="uterus" tabindex="0" aria-label="Womb and ovaries"><path d="M92 256 Q100 252 108 256 Q110 264 100 270 Q90 264 92 256Z"/><circle cx="86" cy="256" r="2.6"/><circle cx="114" cy="256" r="2.6"/></g>
  </g>
</svg>`;

BV.views.atlas = (el, [organId]) => {
  if (organId && BV.ORGANS[organId]) return BV.organPage(el, organId);
  el.innerHTML = BV.placeHeader("🫀", "Human Atlas", "The Anatomy Grove — tap any glowing structure of the living body. Toggle layers to see bones, muscles, nerves and vessels.") + `
  <div class="atlas">
    <div class="body-stage glass">
      <div class="layer-toggles">${[["organs", "🫀 Organs", true], ["bones", "🦴 Skeleton", false], ["muscles", "💪 Muscles", false], ["nerves", "⚡ Nerves & vessels", false]].map(([k, l, on]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" ${on ? "checked" : ""}> ${l}</label>`).join("")}</div>
      <div class="body-holder" id="bodyHolder">${BV.bodySVG()}<div class="body-tip" id="bodyTip"></div></div>
    </div>
    <aside class="atlas-side">
      <div class="glass panel" id="organPreview"><h2>Tap the body</h2><p>Each organ opens a detailed page: anatomy, physiology, hormones, neurotransmitters, disorders, nutrition, supporting herbs, beauty links, history and references.</p></div>
      <div class="glass panel"><h3>🧬 Body systems</h3><div class="sys-list">${BV.SYSTEMS.map(s => `<a class="sys-pill" href="#/rivers/${s.id}" style="--c:${s.color}">${s.icon} ${s.name}</a>`).join("")}</div></div>
    </aside>
  </div>
  <h2>📚 Every organ</h2>
  <div class="grid cards-4">${Object.entries(BV.ORGANS).map(([id, o]) => `<a class="organ-card glass ${BV.state.organsRead.includes(id) ? "read" : ""}" href="#/atlas/${id}">${BV.photo(o.wiki)}<div><h3>${o.emoji} ${o.name}</h3><small>${BV.system(o.system).name}</small></div></a>`).join("")}</div>
  ${BV.nextPaths([["#/rivers", "🌊 Roots & Rivers"], ["#/mirror", "🪞 Beauty connections"], ["#/trials", "⚔️ Test yourself"], ["#/shrine", "🕯️ Spiritual anatomy"]])}`;
  const svg = BV.$(".body-svg", el), tip = BV.$("#bodyTip");
  const setLayers = () => BV.$$("[data-layer]", el).forEach(c => svg.classList.toggle(`show-${c.dataset.layer}`, c.checked));
  BV.$$("[data-layer]", el).forEach(c => c.onchange = setLayers); setLayers();
  BV.$$(".part", svg).forEach(p => {
    const id = p.dataset.organ, o = BV.ORGANS[id];
    const preview = () => {
      BV.$$(".part.sel", svg).forEach(x => x.classList.remove("sel")); p.classList.add("sel");
      BV.$("#organPreview").innerHTML = `<p class="eyebrow">${BV.system(o.system).icon} ${BV.system(o.system).name}</p><h2>${o.emoji} ${o.name}</h2>${BV.photo(o.wiki, "wide")}<p>${o.anatomy}</p><p><strong>Key functions:</strong> ${o.functions.slice(0, 3).join(" · ")}</p><a class="btn primary" href="#/atlas/${id}">Open the ${o.name} page →</a>`;
      BV.hydrate(BV.$("#organPreview"));
    };
    p.addEventListener("mouseenter", e => { tip.textContent = `${o.emoji} ${o.name}`; tip.classList.add("on"); });
    p.addEventListener("mousemove", e => { const r = BV.$("#bodyHolder").getBoundingClientRect(); tip.style.left = e.clientX - r.left + 12 + "px"; tip.style.top = e.clientY - r.top - 10 + "px"; });
    p.addEventListener("mouseleave", () => tip.classList.remove("on"));
    p.addEventListener("click", e => { e.stopPropagation(); preview(); });
    p.addEventListener("keydown", e => { if (e.key === "Enter") location.hash = `#/atlas/${id}`; });
  });
};

BV.accordion = (title, body, open = false, icon = "") => `<details class="acc" ${open ? "open" : ""}><summary>${icon} ${title}</summary><div class="acc-body">${body}</div></details>`;
BV.list = arr => arr && arr.length ? `<ul class="tidy">${arr.map(x => `<li>${x}</li>`).join("")}</ul>` : `<p class="muted">—</p>`;

BV.organPage = (el, id) => {
  const o = BV.ORGANS[id], sys = BV.system(o.system);
  if (BV.track("organsRead", id, 15, `Studied the ${o.name}`)) BV.checkAchievements();
  el.innerHTML = `
  <header class="place-head"><a href="#/atlas" class="back">← Human Atlas</a><div class="place-sigil">${o.emoji}</div><div><p class="eyebrow"><a href="#/rivers/${sys.id}">${sys.icon} ${sys.name}</a></p><h1>${o.name}</h1></div></header>
  <div class="article">
    <div class="article-main">
      ${BV.photo(o.wiki, "hero", o.name).replace("data-wiki", 'data-size="big" data-wiki')}
      ${BV.accordion("Anatomy", `<p>${o.anatomy}</p>`, true, "🔬")}
      ${BV.accordion("Physiology & active processes", `<p>${o.physiology}</p><h4>Active biological processes</h4>${BV.list(o.processes)}`, true, "⚙️")}
      ${BV.accordion("Functions", BV.list(o.functions), false, "🎯")}
      ${BV.accordion("Hormones & neurotransmitters", `<div class="grid cards-2"><div><h4>Hormones</h4>${BV.list(o.hormones)}</div><div><h4>Neurotransmitters & signals</h4>${BV.list(o.neuro)}</div></div>`, false, "⚗️")}
      ${BV.accordion("Diseases, symptoms, risk factors & prevention", o.disorders.map(d => `<div class="disorder"><h4>${d.name}</h4><p><strong>Common symptoms:</strong> ${d.symptoms}</p><p><strong>Risk factors:</strong> ${d.risk}</p><p><strong>Prevention:</strong> ${d.prevention}</p></div>`).join("") + `<p class="fine">Educational only — persistent or severe symptoms deserve a qualified clinician.</p>`, false, "🩺")}
      ${BV.accordion("Nutrition", BV.list(o.nutrition), false, "🥗")}
      ${BV.accordion("Supporting herbs", `<div class="grid cards-3">${o.herbs.map(h => BV.herb(h)).filter(Boolean).map(h => `<a class="mini-card glass" href="#/codex/${h.id}">${BV.photo(h.wiki)}<b>${h.name}</b><small>${h.actions.slice(0, 2).join(" · ")}</small></a>`).join("")}</div><p class="fine">Check each herb's safety section — especially with medications, pregnancy or chronic illness.</p>`, true, "🌿")}
      ${BV.accordion("Lifestyle factors", BV.list(o.lifestyle), false, "🚶")}
      ${BV.accordion("Beauty & skin connections", `<p>${o.beauty}</p><a class="link" href="#/mirror">Explore the Mirror Garden →</a>`, false, "🪞")}
      ${BV.accordion("Interesting facts", BV.list(o.facts), false, "💡")}
      ${BV.accordion("Historical discoveries", `<p>${o.history}</p>`, false, "📜")}
      ${BV.accordion("References & further reading", BV.list(o.refs.concat([`<a href="https://en.wikipedia.org/wiki/${o.wiki}" target="_blank" rel="noopener">Wikipedia: ${o.name} ↗</a>`, `<a href="https://medlineplus.gov/" target="_blank" rel="noopener">MedlinePlus (NIH) ↗</a>`])), false, "📚")}
    </div>
    <aside class="article-side">
      <div class="glass panel sticky"><h3>Related organs</h3><div class="chips">${o.related.map(r => `<a class="chip" href="#/atlas/${r}">${BV.ORGANS[r].emoji} ${BV.ORGANS[r].name}</a>`).join("")}</div>
      <h3>System</h3><p>${sys.how}</p><a class="chip alt" href="#/rivers/${sys.id}">${sys.icon} Open ${sys.name}</a>
      <h3>Knowledge Web</h3><a class="btn" href="#/web/organ:${id}">🕸️ See all connections</a></div>
    </aside>
  </div>
  ${BV.nextPaths(o.related.map(r => [`#/atlas/${r}`, `${BV.ORGANS[r].emoji} ${BV.ORGANS[r].name}`]).concat([["#/trials", "⚔️ Healer's Trials"]]))}`;
};

/* ---------- 🌊 ROOTS & RIVERS ------------------------------------------- */
BV.views.rivers = (el, [sysId]) => {
  if (sysId && BV.system(sysId)) {
    const s = BV.system(sysId);
    el.innerHTML = `<header class="place-head"><a href="#/rivers" class="back">← Roots & Rivers</a><div class="place-sigil">${s.icon}</div><div><h1>${s.name}</h1><p class="sub">Body system ↔ herbal connection</p></div></header>
    <div class="grid cards-2">
      <section class="glass panel"><h2>🔬 How it works</h2><p>${s.how}</p><h3>Organs</h3><div class="chips">${s.organs.map(o => `<a class="chip" href="#/atlas/${o}">${BV.ORGANS[o].emoji} ${BV.ORGANS[o].name}</a>`).join("")}</div></section>
      <section class="glass panel"><h2>⚖️ Imbalance & harmony</h2><h3>Signs of imbalance</h3><p>${s.imbalance}</p><h3>What harmony looks like</h3><p>${s.harmony}</p></section>
      <section class="glass panel"><h2>🌿 Herbs that bring it back</h2><div class="grid cards-3">${s.herbs.map(BV.herb).map(h => `<a class="mini-card glass" href="#/codex/${h.id}">${BV.photo(h.wiki)}<b>${h.name}</b><small>${h.actions.slice(0, 2).join(" · ")}</small></a>`).join("")}</div></section>
      <section class="glass panel"><h2>🕯️ Rituals & lifestyle</h2><p>${s.rituals}</p><h2>🪞 Beauty connections</h2><p>${s.beauty}</p></section>
    </div>
    ${BV.nextPaths([["#/web/system:" + s.id, "🕸️ Knowledge Web"], ["#/atlas", "🫀 Human Atlas"], ["#/mirror", "🪞 Mirror Garden"]].concat(BV.SYSTEMS.filter(x => x.id !== s.id).slice(0, 4).map(x => [`#/rivers/${x.id}`, `${x.icon} ${x.name}`])))}`;
    return;
  }
  el.innerHTML = BV.placeHeader("🌊", "Roots & Rivers", "Every body system is a pool along the river. Click one to see how it works, how imbalance shows, and which herbs and rituals restore the flow.") + `
  <section class="glass river-map"><svg viewBox="0 0 1000 420" class="river-svg" id="riverSvg">
    <path id="riverPath" d="M-10 80 C 150 20, 250 160, 400 110 S 640 30, 760 140 S 900 330, 700 330 S 420 270, 300 340 S 80 420, -10 360" fill="none" stroke="var(--map-water)" stroke-width="34" stroke-linecap="round" opacity=".55"/>
    <path d="M-10 80 C 150 20, 250 160, 400 110 S 640 30, 760 140 S 900 330, 700 330 S 420 270, 300 340 S 80 420, -10 360" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="8 14" class="flow" opacity=".5"/>
    <g id="pools"></g></svg></section>
  <div class="grid cards-4">${BV.SYSTEMS.map(s => `<a class="sys-card glass" href="#/rivers/${s.id}" style="--c:${s.color}"><span class="sys-icon">${s.icon}</span><h3>${s.name}</h3><p>${s.imbalance.split(",").slice(0, 2).join(",")}…</p></a>`).join("")}</div>`;
  const path = BV.$("#riverPath"), L = path.getTotalLength(), g = BV.$("#pools");
  g.innerHTML = BV.SYSTEMS.map((s, i) => { const p = path.getPointAtLength(L * (i + .5) / BV.SYSTEMS.length); return `<a href="#/rivers/${s.id}"><g class="pool" style="--c:${s.color}"><circle cx="${p.x}" cy="${p.y}" r="30"/><text x="${p.x}" y="${p.y + 8}" class="pool-icon">${s.icon}</text><text x="${p.x}" y="${p.y + 48}" class="pool-label">${s.name.replace(" System", "")}</text></g></a>`; }).join("");
};

/* ---------- 🌿 HERBAL CODEX / LEAF ARCHIVE ------------------------------ */
BV.views.codex = (el, [herbId]) => {
  if (herbId && BV.herb(herbId)) return BV.herbPage(el, herbId);
  const f = BV.store.get("bv-codex-filter", { q: "", sys: "", en: "", prep: "", part: "" });
  el.innerHTML = BV.placeHeader("🌿", "Leaf Archive · Herbal Codex", `A growing encyclopedia — ${BV.HERBS.length} herbs in-depth today, on the way to 1,000+. Search by botanical or folk name, body system, preparation, energetics or use.`) + `
  <section class="glass panel filters">
    <input id="cq" placeholder="🔍 Search lavender, sleep, Asteraceae, tincture, liver, hair…" value="${BV.esc(f.q)}">
    <select id="csys"><option value="">All body systems</option>${BV.SYSTEMS.map(s => `<option value="${s.id}" ${f.sys === s.id ? "selected" : ""}>${s.icon} ${s.name}</option>`).join("")}</select>
    <select id="cen"><option value="">All energetics</option>${["warming", "cooling", "drying", "moistening"].map(x => `<option ${f.en === x ? "selected" : ""}>${x}</option>`).join("")}</select>
    <select id="cprep"><option value="">All preparations</option>${["Tea", "Decoction", "Tincture", "Infused oil", "Salve", "Syrup", "Steam", "Bath", "Glycerite", "Oxymel", "Hair rinse", "Compress", "Powder"].map(x => `<option ${f.prep === x ? "selected" : ""}>${x}</option>`).join("")}</select>
    <select id="cpart"><option value="">All plant parts</option>${["flower", "leaf", "root", "berry", "bark"].map(x => `<option ${f.part === x ? "selected" : ""}>${x}</option>`).join("")}</select>
  </section>
  ${BV.evidenceLegend()}
  <div class="grid cards-4" id="herbGrid"></div>
  <section class="glass panel"><h2>⚗️ Phytochemistry Library</h2><p class="sub">The active compounds behind the plants — structures, mechanisms and evidence.</p><div class="chips">${BV.COMPOUNDS.map(c => `<a class="chip" href="#/compound/${c.id}">${c.name}</a>`).join("")}</div></section>
  ${BV.nextPaths([["#/apothecary", "🧪 Brew with these herbs"], ["#/web", "🕸️ Knowledge Web"], ["#/forager", "🍄 Forager's Field"], ["#/garden", "🌱 Grow them"]])}`;
  const render = () => {
    const st = { q: BV.$("#cq").value.toLowerCase(), sys: BV.$("#csys").value, en: BV.$("#cen").value, prep: BV.$("#cprep").value, part: BV.$("#cpart").value };
    BV.store.set("bv-codex-filter", st);
    const list = BV.HERBS.filter(h => (!st.q || JSON.stringify(h).toLowerCase().includes(st.q)) && (!st.sys || h.systems.includes(st.sys)) &&
      (!st.en || (h.energetics.temp + " " + h.energetics.moisture).includes(st.en)) && (!st.prep || h.preparations.join(" ").toLowerCase().includes(st.prep.toLowerCase())) && (!st.part || h.type === st.part));
    BV.$("#herbGrid").innerHTML = list.length ? list.map(h => {
      const best = h.research.reduce((a, r) => BV.EVIDENCE[r.level].score > BV.EVIDENCE[a].score ? r.level : a, "trad");
      const fav = BV.state.favorites.includes(h.id);
      return `<article class="herb-card glass ${BV.state.herbsRead.includes(h.id) ? "read" : ""}"><a href="#/codex/${h.id}">${BV.photo(h.wiki)}<div class="hc-body"><h3>${h.name}</h3><p class="latin">${h.latin}</p>
        <div class="chips small"><span class="chip en">${h.energetics.temp}</span><span class="chip en">${h.energetics.moisture}</span></div><p class="fine">${h.actions.slice(0, 3).join(" · ")}</p>${BV.badge(best)}</div></a>
        <button class="fav ${fav ? "on" : ""}" data-fav="${h.id}" aria-label="Favourite">${fav ? "♥" : "♡"}</button></article>`;
    }).join("") : `<p class="muted">No herbs match — loosen the filters. 🍃</p>`;
    BV.hydrate(BV.$("#herbGrid"));
    BV.$$("[data-fav]").forEach(b => b.onclick = e => { e.preventDefault(); BV.toggleFav(b.dataset.fav); render(); });
  };
  ["#cq", "#csys", "#cen", "#cprep", "#cpart"].forEach(s => BV.$(s).addEventListener("input", render));
  render();
};
BV.toggleFav = id => { const f = BV.state.favorites; const i = f.indexOf(id); i >= 0 ? f.splice(i, 1) : f.push(id); BV.save(); BV.toast(i >= 0 ? "Removed from favourites" : "♥ Saved to your journal favourites"); };

BV.commonsGallery = async (target, query, n = 8) => {
  const box = BV.$(target); if (!box) return;
  try {
    const u = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${n}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=420&format=json&origin=*`;
    const j = await (await fetch(u)).json();
    const pages = Object.values(j.query?.pages || {}).filter(p => p.imageinfo?.[0]?.thumburl && /\.(jpe?g|png)$/i.test(p.title));
    box.innerHTML = pages.length ? pages.map(p => { const ii = p.imageinfo[0], artist = (ii.extmetadata?.Artist?.value || "").replace(/<[^>]+>/g, "").slice(0, 40); return `<figure class="gal"><a href="${ii.descriptionurl}" target="_blank" rel="noopener"><img src="${ii.thumburl}" alt="${BV.esc(p.title.replace("File:", ""))}" loading="lazy"></a><figcaption>${BV.esc(artist || "Wikimedia Commons")}</figcaption></figure>`; }).join("") : `<p class="muted">No images found.</p>`;
  } catch (e) { box.innerHTML = `<p class="muted">Connect to the internet to load photographs & botanical illustrations.</p>`; }
};

BV.herbPage = (el, id) => {
  const h = BV.herb(id), spirit = BV.state.settings.spirit;
  if (BV.track("herbsRead", id, 15, `Studied ${h.name}`)) BV.checkAchievements();
  const uses = BV.RECIPES.filter(r => r.need.includes("h_" + id));
  const fav = BV.state.favorites.includes(id);
  const row = (k, v) => `<tr><th>${k}</th><td>${v}</td></tr>`;
  el.innerHTML = `
  <header class="place-head"><a href="#/codex" class="back">← Leaf Archive</a><div class="place-sigil">🌿</div><div><p class="eyebrow">${h.family}</p><h1>${h.name}</h1><p class="sub"><em>${h.latin}</em> · ${h.common.join(", ")}</p></div>
    <button class="btn ${fav ? "primary" : ""}" id="favBtn">${fav ? "♥ Favourited" : "♡ Favourite"}</button></header>
  <div class="article">
    <div class="article-main">
      ${BV.photo(h.wiki, "hero", h.name).replace("data-wiki", 'data-size="big" data-extract="#herbExtract" data-wiki')}
      <p class="lede" id="herbExtract"></p>
      ${BV.accordion("Overview", `<p>${h.traditional}</p><p><strong>Medicinal actions:</strong> ${h.actions.join(", ")}</p><p><strong>Body systems:</strong> ${h.systems.map(s => `<a href="#/rivers/${s}">${BV.system(s).name}</a>`).join(", ")}</p>`, true, "📖")}
      ${BV.accordion("Photos & botanical illustrations", `<h4>Photographs</h4><div class="gallery" id="galPhotos"><p class="muted">Gathering photographs…</p></div><h4>Botanical illustrations</h4><div class="gallery" id="galArt"><p class="muted">Opening old herbals…</p></div><p class="fine">From Wikimedia Commons — click any image for its author and licence.</p>`, true, "🖼️")}
      ${BV.accordion("Plant Genome — taxonomy, range & growing", `<table class="facts">${row("Kingdom", "Plantae")}${row("Family", h.family)}${row("Genus", `<em>${h.genus}</em>`)}${row("Species", `<em>${h.species}</em>`)}${row("Native range", h.native)}${row("Grows in", h.countries.join(", "))}${row("Habitat", h.habitat)}${row("USDA hardiness zones", h.zones)}${row("Growing & propagation", h.grow)}${row("Parts used", h.parts.join(", "))}${row("Harvest season & method", h.harvest)}${row("Drying", h.drying)}${row("Storage", h.storage)}${row("Shelf life", h.shelf)}</table>`, false, "🧬")}
      ${BV.accordion("Taste, aroma & energetics", `<table class="facts">${row("Taste", h.taste)}${row("Aroma", h.aroma)}${row("Temperature", h.energetics.temp)}${row("Moisture", h.energetics.moisture)}</table><p class="fine">Energetics come from traditional systems (Western, Ayurvedic, TCM) — a language for matching herbs to people, not a lab measurement.</p>`, false, "👅")}
      ${BV.accordion("Medicine — constituents, organ affinities & preparations", `<p><strong>Organ affinities:</strong> ${h.organs.map(o => `<a href="#/atlas/${o}">${BV.ORGANS[o].emoji} ${BV.ORGANS[o].name}</a>`).join(", ")}</p>
        <p><strong>Active constituents (phytochemistry):</strong> ${h.constituents.join(", ")}</p><div class="chips">${h.compounds.map(c => BV.compound(c)).filter(Boolean).map(c => `<a class="chip" href="#/compound/${c.id}">⚗️ ${c.name}</a>`).join("")}</div>
        <p><strong>Preparation methods:</strong> ${h.preparations.join(", ")}</p><p class="note"><strong>Educational dosage range:</strong> ${h.dose}</p>`, true, "⚗️")}
      ${BV.accordion("Traditional uses vs. modern research", `<div class="split"><div><h4>🏺 Traditional knowledge</h4><p>${h.traditional}</p>${BV.badge("trad")}</div><div><h4>🔬 Scientific evidence</h4>${h.research.map(r => `<div class="claim">${BV.badge(r.level)}<p>${r.claim}</p></div>`).join("")}</div></div><p class="fine">Traditional evidence and scientific evidence are labelled separately so you can see exactly how strong each claim is.</p>`, true, "⚖️")}
      ${BV.accordion("⚠️ Safety — contraindications, interactions, pregnancy, children & pets", `<div class="safety"><p><strong>Contraindications:</strong> ${h.safety.contra}</p><p><strong>Drug interactions:</strong> ${h.safety.interactions}</p><p><strong>Pregnancy:</strong> ${h.safety.pregnancy}</p><p><strong>Breastfeeding:</strong> ${h.safety.breastfeeding}</p><p><strong>Children:</strong> ${h.safety.children}</p><p><strong>🐾 Pet safety:</strong> ${h.safety.pets}</p><p><strong>Toxicity:</strong> ${h.safety.toxicity}</p></div>`, true, "")}
      ${BV.accordion("Ecology — pollinators, companions & sustainability", `<p><strong>Pollinators:</strong> ${h.pollinators.join(", ")}</p><p><strong>Companion plants:</strong> ${h.companions.join(", ")}</p><p><strong>Ecological relationships:</strong> ${h.ecology}</p><p><strong>Sustainability:</strong> ${h.sustainability}</p><p><strong>Conservation status:</strong> ${h.conservation}</p>`, false, "🐝")}
      ${BV.accordion("Beauty & skin", `<p>${h.beauty}</p>`, false, "🪞")}
      ${spirit ? BV.accordion("Spirit layer — correspondences (optional)", `<table class="facts">${row("Element", h.spirit.element)}${row("Planet", h.spirit.planet)}${row("Zodiac", h.spirit.zodiac)}${row("Folk & spiritual uses", h.spirit.uses)}</table><p class="fine">Spiritual correspondences come from folk and esoteric traditions. They are shown for cultural interest and are not scientific claims.</p>`, false, "✨") : ""}
      ${uses.length ? BV.accordion("Apothecary recipes with " + h.name, `<div class="chips">${uses.map(r => `<a class="chip" href="#/apothecary/${r.id}">${BV.PREP_TYPES[r.type].icon} ${r.name}</a>`).join("")}</div>`, false, "🧪") : ""}
      ${BV.accordion("References & bibliography", BV.list(h.refs.concat([`<a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(h.latin)}" target="_blank" rel="noopener">PubMed: research on ${h.latin} ↗</a>`, `<a href="https://www.nccih.nih.gov/health/herbsataglance" target="_blank" rel="noopener">NCCIH Herbs at a Glance ↗</a>`, `<a href="https://powo.science.kew.org/results?q=${encodeURIComponent(h.latin)}" target="_blank" rel="noopener">Kew Plants of the World Online ↗</a>`])), false, "📚")}
    </div>
    <aside class="article-side"><div class="glass panel sticky">
      <h3>At a glance</h3><table class="facts small">${row("Parts", h.parts.join(", "))}${row("Taste", h.taste)}${row("Energetics", `${h.energetics.temp}, ${h.energetics.moisture}`)}${row("Zones", h.zones)}</table>
      <h3>Related herbs</h3><div class="chips">${h.related.map(BV.herb).filter(Boolean).map(r => `<a class="chip" href="#/codex/${r.id}">${r.name}</a>`).join("")}</div>
      <a class="btn" href="#/web/herb:${h.id}">🕸️ Knowledge Web</a> <a class="btn" href="#/apothecary">🧪 Brew it</a>
    </div></aside>
  </div>
  ${BV.nextPaths(h.related.map(BV.herb).filter(Boolean).map(r => [`#/codex/${r.id}`, `🌿 ${r.name}`]).concat(h.organs.map(o => [`#/atlas/${o}`, `${BV.ORGANS[o].emoji} ${BV.ORGANS[o].name}`])))}`;
  BV.$("#favBtn").onclick = () => { BV.toggleFav(id); BV.route(); };
  BV.commonsGallery("#galPhotos", `${h.latin} filetype:bitmap`, 8);
  BV.commonsGallery("#galArt", `${h.genus} Köhler Medizinal-Pflanzen`, 4);
};

/* ---------- ⚗️ PHYTOCHEMISTRY -------------------------------------------- */
BV.views.compound = (el, [id]) => {
  const c = BV.compound(id) || BV.COMPOUNDS[0];
  el.innerHTML = `<header class="place-head"><a href="#/codex" class="back">← Codex</a><div class="place-sigil">⚗️</div><div><p class="eyebrow">Phytochemistry Library</p><h1>${c.name}</h1><p class="sub">${c.cls} · ${c.formula}</p></div></header>
  <div class="grid cards-2">
    <section class="glass panel center"><h3>Chemical structure</h3><img class="structure" src="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(c.name.split(" ")[0].replace(/s$/, "") === "Gingerol" ? "gingerol" : c.name.split(" &")[0])}/PNG?image_size=400x400" alt="Structure of ${BV.esc(c.name)}" onerror="this.replaceWith(Object.assign(document.createElement('p'),{className:'muted',textContent:'Structure image unavailable (complex mixture or offline).'}))"><p class="fine">Structure: PubChem (NIH).</p></section>
    <section class="glass panel"><h3>Mechanism of action</h3><p>${c.mech}</p><div class="claim">${BV.badge(c.level)}<p>Strongest evidence level for this compound's effects.</p></div><h3>Aroma</h3><p>${c.aroma}</p>
      <h3>Found in</h3><div class="chips">${c.herbs.map(BV.herb).filter(Boolean).map(h => `<a class="chip" href="#/codex/${h.id}">🌿 ${h.name}</a>`).join("")}</div>
      <h3>Research summaries</h3><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(c.name)}" target="_blank" rel="noopener">Search PubMed for ${c.name} ↗</a> · <a href="https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(c.name)}" target="_blank" rel="noopener">PubChem ↗</a></p></section>
  </div>
  ${BV.nextPaths(BV.COMPOUNDS.filter(x => x.id !== c.id).slice(0, 8).map(x => [`#/compound/${x.id}`, `⚗️ ${x.name}`]))}`;
};

/* ---------- 🧪 APOTHECARY — the Soft Alchemist Studio -------------------- */
BV.ING_COLORS = { water: "#9fd3e6", honey: "#e0a331", vinegar: "#d9b26a", alcohol: "#e9e2cf", glycerin: "#f3efe2", oil: "#d9c25a", butter: "#f1e6c8", wax: "#e8c35a", exfoliant: "#5a3b24", salt: "#f4f4f4", oats: "#e6d7b0", clay: "#eadfd0", aloe: "#bfe3b0", milk: "#f6f0e2", citrus: "#f6e05e", pungent: "#e9e0c9", spice: "#3a3a3a", infusedoil: "#e0a540",
  h_lavender: "#9b84d1", h_chamomile: "#f2d46b", h_peppermint: "#5fae6a", h_rose: "#e58aa6", h_bluelotus: "#6f8fd6", h_calendula: "#f39c33", h_hibiscus: "#b8264b", h_lemonbalm: "#8cc26b", h_rosemary: "#4f7f5b", h_nettle: "#3d6b3a", h_thyme: "#6f9a5b", h_sage: "#8fa58a", h_tulsi: "#6c8f4e", h_ginger: "#e3c27a", h_turmeric: "#f0a020", h_cinnamon: "#a0522d", h_elderberry: "#3b1f4a", h_ashwagandha: "#b49a7a", h_dandelion: "#8a6a3a", h_echinacea: "#c77dab", h_licorice: "#8b5a2b", h_yarrow: "#e9e4d4", h_valerian: "#9a8a6a" };

BV.allIngredients = () => BV.INGREDIENTS.concat(BV.state.shelf || []);
BV.ingById = id => BV.allIngredients().find(i => i.id === id);

BV.alchemize = ids => {
  const items = ids.map(BV.ingById).filter(Boolean);
  const has = c => items.some(i => i.cat === c), count = c => items.filter(i => i.cat === c).length;
  const herbs = [...new Set(items.flatMap(i => i.herb ? [i.herb] : (i.herbs || [])))].map(BV.herb).filter(Boolean);
  const herbItems = items.filter(i => i.cat === "herb");
  const soft = herbItems.filter(i => ["flower", "leaf"].includes(i.part)), hard = herbItems.filter(i => ["root", "bark", "berry"].includes(i.part));
  const names = herbs.map(h => h.name.replace(/^(German|Garden|Ceylon|Stinging) /, "")).join(" & ");
  const outs = [];
  const add = (type, name, extra = {}) => { if (!extra.id && outs.some(o => o.recipe && o.type === type)) return; const key = extra.id || `${type}:${herbs.map(h => h.id).sort().join("+") || items.map(i => i.id).sort().join("+")}`; if (!outs.some(o => o.key === key)) outs.push({ key, type, name, ...extra }); };
  // 1. named recipes
  BV.RECIPES.filter(r => r.need.every(n => ids.includes(n))).sort((a, b) => b.need.length - a.need.length)
    .forEach(r => add(r.type, r.name, { id: r.id, recipe: r, extras: ids.filter(i => !r.need.includes(i)) }));
  const oil = has("oil") || has("infusedoil");
  // 2. the generic alchemy rules
  if (has("water") && herbs.length && !oil && !has("salt")) {
    if (soft.length && !hard.length) { add("tea", `${names} Tea`); add("steam", `${names} Steam`); add("compress", `${names} Compress`); if (soft.every(i => ["nettle", "chamomile", "lemonbalm", "peppermint", "rose"].includes(i.herb))) add("overnight", `${names} Nourishing Infusion`); }
    if (hard.length) { has("honey") ? add("syrup", `${names} Syrup`) : add("decoction", `${names} Decoction`); add("compress", `${names} Compress`); }
    if (has("vinegar")) add("rinse", `${names} Hair Rinse`);
    if (has("citrus") && has("honey")) add("lemonade", `${names} Lemonade`);
  }
  if (has("alcohol") && herbs.length) add("tincture", `${names} Tincture`);
  if (has("glycerin") && herbs.length) add("glycerite", `${names} Glycerite`);
  if (has("vinegar") && has("honey") && herbs.length) add("oxymel", `${names} Oxymel`);
  if (has("vinegar") && count("pungent") >= 2) add("firecider", `${count("pungent") >= 3 ? "Classic" : "Little"} Fire Cider`);
  else if (has("vinegar") && herbs.length && !has("water") && !has("honey")) add("vinegar", `${names} Vinegar`);
  if (has("oil") && herbs.length && !has("wax") && !has("exfoliant")) add("oil", `${names}-Infused Oil`, { becomes: true });
  if (has("wax") && (has("infusedoil") || (has("oil") && herbs.length))) add("salve", `${names || "Herbal"} Salve`);
  else if (has("wax") && (has("oil") || has("butter"))) add("balm", "Simple Beeswax Balm");
  if (has("butter") && (has("oil") || has("infusedoil")) && !has("wax")) add("butter", `${names ? names + " " : ""}Whipped Body Butter`);
  if (has("exfoliant") && (oil || has("honey") || has("butter"))) add("scrub", `${items.filter(i => i.cat === "exfoliant").map(i => i.name.split(" ").pop()).join(" & ")} ${names ? names + " " : ""}Scrub`);
  if (has("salt") && (oil)) add("scrub", `Salt ${names ? names + " " : ""}Polish`);
  if (has("salt") && !oil) add("bath", `${names ? names + " " : ""}Bath Soak`);
  if (has("oats") && !oil) add("oatbath", `${names ? names + " " : ""}Oat Bath`);
  if ((has("clay") || has("oats") || items.some(i => i.herb === "turmeric")) && (has("honey") || has("water") || has("aloe") || has("milk")) && !has("salt")) add("mask", `${names ? names + " " : ""}${has("clay") ? "Clay " : ""}Face Mask`);
  if (has("aloe") && herbs.length) add("mask", `${names} Aloe Gel`);
  if (has("milk") && (herbs.length || has("spice"))) add("goldenmilk", `${names || "Spiced"} Moon Milk`);
  if (herbs.length && items.length === herbItems.length) { hard.length && !soft.length ? add("powder", `${names} Powder`) : add("tea", `${names} Loose Tea Blend`, { dry: true }); }
  return { outs, herbs, items };
};

BV.prepCard = (o, herbs, items) => {
  const t = BV.PREP_TYPES[o.type], r = o.recipe || {};
  const tastes = herbs.map(h => h.taste.split(",")[0]).join(", ");
  const sys = herbs.flatMap(h => h.systems), shared = [...new Set(sys.filter((s, i) => sys.indexOf(s) !== i))];
  const temps = herbs.map(h => h.energetics.temp);
  const synergy = r.synergy || (herbs.length > 1 ? `${shared.length ? `These herbs share an affinity for the ${shared.map(s => BV.system(s).name).join(" & ")}. ` : ""}${temps.some(x => x.includes("warm")) && temps.some(x => x.includes("cool")) ? "Warming and cooling herbs balance each other." : ""}` : herbs.length ? `${herbs[0].name}: ${herbs[0].actions.slice(0, 3).join(", ")}.` : "A simple base preparation — add herbs to give it purpose.");
  const colors = items.map(i => BV.ING_COLORS[i.id] || BV.ING_COLORS[i.cat]).filter(Boolean);
  const safety = herbs.map(h => `<li><strong>${h.name}:</strong> ${h.safety.contra} <em>Pregnancy:</em> ${h.safety.pregnancy}</li>`).join("");
  const evidence = herbs.flatMap(h => h.research.slice(0, 1).map(x => `<div class="claim">${BV.badge(x.level)}<p><strong>${h.name}:</strong> ${x.claim}</p></div>`)).join("");
  return `<article class="prep-card glass">
    <div class="prep-swatch" style="background:linear-gradient(135deg,${(colors.length ? colors : ["#9be7a8"]).join(",")})"></div>
    <p class="eyebrow">${t.icon} ${t.name}${o.extras && o.extras.length ? " · your variation" : ""}</p><h2>${BV.esc(o.name)}</h2>
    <div class="grid cards-3 prep-facts">
      <div><b>Colour</b><span>${r.color || (colors.length ? "Blended " + herbs.map(h => h.name.toLowerCase()).slice(0, 2).join(" & ") + " tones" : "—")}</span></div>
      <div><b>Taste</b><span>${r.taste || (/(tea|decoction|syrup|tincture|glycerite|oxymel|goldenmilk|lemonade|overnight|powder)/.test(o.type) ? tastes || "—" : "Not for drinking")}</span></div>
      <div><b>Aroma</b><span>${r.aroma || herbs.map(h => h.aroma.split(",")[0]).join(", ") || "—"}</span></div>
      <div><b>Steep / infuse</b><span>${t.time}</span></div><div><b>Storage</b><span>${t.storage}</span></div><div><b>Shelf life</b><span>${t.shelf}</span></div>
    </div>
    <h4>Ingredients</h4><div class="chips">${items.map(i => `<span class="chip">${i.icon} ${i.name}</span>`).join("")}</div>
    <h4>Preparation method</h4><p>${t.method}</p>
    <h4>Traditional uses</h4><p>${r.uses || herbs.map(h => `${h.name} — ${h.actions.slice(0, 3).join(", ").toLowerCase()}`).join("; ") || "A base for further alchemy."}</p>
    <h4>Herb synergy</h4><p>${synergy}</p>
    <h4>Scientific evidence</h4>${evidence || `<p>${t.evidence}</p>`}<p class="fine">${t.evidence}</p>
    <h4>⚠️ Safety</h4><p>${t.safety}</p>${safety ? `<ul class="tidy">${safety}</ul>` : ""}
    <h4>References</h4><ul class="tidy"><li>Gladstar R., <em>Rosemary Gladstar's Medicinal Herbs: A Beginner's Guide</em></li><li>Green J., <em>The Herbal Medicine-Maker's Handbook</em></li>${herbs.map(h => `<li><a href="#/codex/${h.id}">${h.name} — Codex references</a></li>`).join("")}</ul>
    <div class="row gap wrap"><button class="btn" data-save-prep="${BV.esc(o.name)}">📔 Save to my journal</button></div>
  </article>`;
};

BV.views.apothecary = (el, [recipeId]) => {
  let pot = BV.store.get("bv-pot", []);
  let cat = "all";
  const cats = { all: "All", herb: "🌿 Herbs", liquid: "💧 Liquids", fat: "🫒 Oils & butters", body: "✨ Scrubs, salts & clays", kitchen: "🍋 Kitchen", made: "⚗️ Your creations" };
  const inCat = (i, c) => c === "all" || (c === "herb" && i.cat === "herb") || (c === "liquid" && ["water", "honey", "vinegar", "alcohol", "glycerin", "milk", "aloe"].includes(i.cat)) || (c === "fat" && ["oil", "butter", "wax", "infusedoil"].includes(i.cat)) || (c === "body" && ["exfoliant", "salt", "oats", "clay"].includes(i.cat)) || (c === "kitchen" && ["citrus", "pungent", "spice"].includes(i.cat)) || (c === "made" && i.made);
  el.innerHTML = BV.placeHeader("🧪", "The Apothecary", "Soft Alchemist Studio — drag ingredients into the cauldron (or tap them), then alchemize. Coconut oil + coffee becomes a scrub. Honey + water + blue lotus + cinnamon becomes a tea. Everything can become something else.") + `
  <div class="studio">
    <section class="shelf glass">
      <div class="shelf-tabs">${Object.entries(cats).map(([k, v]) => `<button class="tab-btn ${k === cat ? "on" : ""}" data-cat="${k}">${v}</button>`).join("")}</div>
      <div class="shelf-items" id="shelf"></div>
    </section>
    <section class="cauldron-zone glass" id="dropZone">
      <div class="cauldron" id="cauldron">
        <svg viewBox="0 0 240 200" class="cauldron-svg"><defs><radialGradient id="brew"><stop offset="0" stop-color="var(--brew-1, #9be7a8)"/><stop offset="1" stop-color="var(--brew-2, #3f6b3a)"/></radialGradient></defs>
          <ellipse cx="120" cy="70" rx="92" ry="20" fill="url(#brew)" class="brew-surface"/>
          <g class="bubbles">${[...Array(7)].map((_, i) => `<circle cx="${60 + i * 20}" cy="70" r="${3 + (i % 3)}" style="animation-delay:${i * .4}s"/>`).join("")}</g>
          <path d="M28 70 C 28 160, 70 190, 120 190 C 170 190, 212 160, 212 70" fill="var(--cauldron)" stroke="var(--ink)" stroke-width="3"/>
          <ellipse cx="120" cy="70" rx="94" ry="22" fill="none" stroke="var(--ink)" stroke-width="5"/>
          <path d="M60 190 L50 200 M180 190 L190 200" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/></svg>
        <div class="steam"><span></span><span></span><span></span></div>
      </div>
      <div class="pot-items" id="potItems"></div>
      <div class="row gap center wrap"><button class="btn primary big" id="alchBtn">✨ Alchemize</button><button class="btn ghost" id="clearBtn">Empty cauldron</button></div>
      <p class="fine center">Tip: drag a finished infused oil from “Your creations” back into the cauldron with beeswax to make a salve.</p>
    </section>
  </div>
  <section id="alchOut"></section>
  <section class="glass panel"><h2>📖 Recipe Book · ${BV.state.crafted.filter(k => BV.RECIPES.some(r => r.id === k)).length}/${BV.RECIPES.length} named recipes discovered</h2>
    <p class="sub">Discover named recipes by combining the right ingredients. Generic creations count too — there are hundreds of variations.</p>
    <div class="book">${BV.RECIPES.map(r => { const got = BV.state.crafted.includes(r.id); return `<button class="book-entry ${got ? "got" : ""}" data-book="${r.id}"><span>${BV.PREP_TYPES[r.type].icon}</span><b>${got ? r.name : "???"}</b><small>${got ? r.need.map(n => BV.ingById(n)?.icon || "⚗️").join(" ") : `${BV.PREP_TYPES[r.type].name} · ${r.need.length} ingredients`}</small></button>`; }).join("")}</div>
  </section>
  ${BV.nextPaths([["#/codex", "🌿 Learn the herbs"], ["#/mirror", "🪞 Beauty rituals"], ["#/journal", "📔 Saved recipes"], ["#/garden", "🌱 Grow your own"]])}`;

  const renderShelf = () => {
    BV.$("#shelf").innerHTML = BV.allIngredients().filter(i => inCat(i, cat)).map(i => `<button class="ing ${pot.includes(i.id) ? "in" : ""}" data-ing="${i.id}" style="--ic:${BV.ING_COLORS[i.id] || BV.ING_COLORS[i.cat] || "#9be7a8"}"><span>${i.icon}</span><small>${i.name}</small></button>`).join("") || `<p class="muted">Nothing here yet — alchemize an infused oil to start your collection.</p>`;
    BV.$$(".ing", el).forEach(b => BV.dragify(b, b.dataset.ing, addToPot));
  };
  const renderPot = () => {
    BV.store.set("bv-pot", pot);
    BV.$("#potItems").innerHTML = pot.length ? pot.map(id => { const i = BV.ingById(id); return i ? `<button class="pot-chip" data-rm="${id}" title="Remove">${i.icon} ${i.name} ✕</button>` : ""; }).join("") : `<p class="muted">The cauldron is waiting…</p>`;
    BV.$$("[data-rm]", el).forEach(b => b.onclick = () => { pot = pot.filter(x => x !== b.dataset.rm); renderPot(); renderShelf(); });
    const cols = pot.map(id => { const i = BV.ingById(id); return i && (BV.ING_COLORS[id] || BV.ING_COLORS[i.cat]); }).filter(Boolean);
    const c = BV.$("#cauldron"); c.style.setProperty("--brew-1", cols[0] || "#9be7a8"); c.style.setProperty("--brew-2", cols[cols.length - 1] || "#3f6b3a"); c.classList.toggle("active", pot.length > 0);
  };
  const addToPot = id => { if (!pot.includes(id)) { pot.push(id); BV.sound.on && BV.sound.chime(); renderPot(); renderShelf(); const c = BV.$("#cauldron"); c.classList.remove("splash"); void c.offsetWidth; c.classList.add("splash"); } };
  BV.$$("[data-cat]", el).forEach(b => b.onclick = () => { cat = b.dataset.cat; BV.$$("[data-cat]", el).forEach(x => x.classList.toggle("on", x === b)); renderShelf(); });
  BV.$("#clearBtn").onclick = () => { pot = []; renderPot(); renderShelf(); BV.$("#alchOut").innerHTML = ""; };

  const showResult = (res, chosen = 0) => {
    const out = BV.$("#alchOut");
    if (!res.outs.length) { out.innerHTML = `<div class="glass panel center"><h3>The brew fizzles… 🫧</h3><p>${pot.length < 2 ? "Add at least two ingredients." : "Try adding a liquid (water, honey, vinegar, alcohol), a fat (oil, butter, wax) or an herb to give it purpose."}</p></div>`; return; }
    const o = res.outs[chosen];
    out.innerHTML = `${res.outs.length > 1 ? `<div class="glass panel"><h3>✨ This mix could become ${res.outs.length} things — choose one</h3><div class="chips">${res.outs.map((x, i) => `<button class="chip ${i === chosen ? "on" : ""}" data-alt="${i}">${BV.PREP_TYPES[x.type].icon} ${BV.esc(x.name)}</button>`).join("")}</div></div>` : ""}${BV.prepCard(o, res.herbs, res.items)}`;
    BV.$$("[data-alt]", out).forEach(b => b.onclick = () => { showResult(res, +b.dataset.alt); discover(res.outs[+b.dataset.alt], res); });
    BV.$$("[data-save-prep]", out).forEach(b => b.onclick = () => { BV.state.journal.unshift({ id: Date.now(), type: "recipe", title: o.name, text: `${res.items.map(i => i.name).join(" + ")}\n\n${BV.PREP_TYPES[o.type].method}`, date: BV.todayKey(), tags: [o.type] }); BV.save(); BV.toast("📔 Saved to Starlit Hollow"); BV.checkAchievements(); });
    out.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const discover = (o, res) => {
    if (!BV.state.crafted.includes(o.key)) {
      BV.state.crafted.push(o.key); BV.save(); BV.addXP(o.recipe ? 15 : 8, `${o.recipe ? "Recipe discovered" : "New creation"}: ${o.name}`);
      if (o.recipe) BV.celebrate(`${BV.PREP_TYPES[o.type].icon} ${o.name}`, "A named recipe has been added to your Recipe Book!");
    }
    const becomes = o.recipe?.becomes || (o.becomes && `oil-${res.herbs.map(h => h.id).sort().join("-")}`);
    if (becomes && !BV.ingById(becomes)) {
      BV.state.shelf.push({ id: becomes, name: o.name, icon: "🫗", cat: "infusedoil", herbs: res.herbs.map(h => h.id), made: true }); BV.save();
      BV.toast(`🫗 ${o.name} added to Your creations`); renderShelf();
    }
  };
  BV.$("#alchBtn").onclick = () => {
    const c = BV.$("#cauldron"); c.classList.remove("poof"); void c.offsetWidth; c.classList.add("poof");
    const res = BV.alchemize(pot);
    setTimeout(() => { showResult(res, 0); if (res.outs[0]) discover(res.outs[0], res); BV.checkAchievements(); }, 650);
  };
  BV.$$("[data-book]", el).forEach(b => b.onclick = () => {
    const r = BV.RECIPES.find(x => x.id === b.dataset.book);
    if (!BV.state.crafted.includes(r.id)) return BV.toast(`🔒 Hint: a ${BV.PREP_TYPES[r.type].name.toLowerCase()} with ${r.need.length} ingredients`);
    pot = r.need.slice(); renderPot(); renderShelf(); showResult(BV.alchemize(pot), 0);
  });
  renderShelf(); renderPot();
  if (recipeId) { const r = BV.RECIPES.find(x => x.id === recipeId); if (r) { pot = r.need.filter(BV.ingById); renderPot(); renderShelf(); if (BV.state.crafted.includes(r.id)) showResult(BV.alchemize(pot), 0); else BV.toast("✨ The ingredients are in the cauldron — alchemize to discover it!"); } }
};

/* Pointer-based drag that works with mouse AND touch */
BV.dragify = (node, id, onDrop) => {
  node.onpointerdown = e => {
    if (e.button > 0) return;
    const sx = e.clientX, sy = e.clientY; let ghost = null, moved = false;
    const move = ev => {
      if (!moved && Math.hypot(ev.clientX - sx, ev.clientY - sy) > 8) { moved = true; ghost = node.cloneNode(true); ghost.className = "ing ghost"; document.body.appendChild(ghost); }
      if (ghost) { ghost.style.left = ev.clientX + "px"; ghost.style.top = ev.clientY + "px"; const z = BV.$("#dropZone"); const r = z.getBoundingClientRect(); z.classList.toggle("hover", ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom); }
    };
    const up = ev => {
      removeEventListener("pointermove", move); removeEventListener("pointerup", up);
      const z = BV.$("#dropZone"); z && z.classList.remove("hover");
      if (ghost) { ghost.remove(); const r = z.getBoundingClientRect(); if (ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom) onDrop(id); }
      else onDrop(id);
    };
    addEventListener("pointermove", move); addEventListener("pointerup", up);
  };
};

/* ---------- 🕸️ KNOWLEDGE WEB --------------------------------------------- */
BV.buildGraph = () => {
  if (BV._graph) return BV._graph;
  const N = new Map(), E = new Set();
  const node = (id, label, kind, href, icon) => { if (!N.has(id)) N.set(id, { id, label, kind, href, icon, nb: new Set() }); return id; };
  const edge = (a, b) => { if (a === b || !N.has(a) || !N.has(b)) return; N.get(a).nb.add(b); N.get(b).nb.add(a); E.add([a, b].sort().join("|")); };
  BV.SYSTEMS.forEach(s => node("system:" + s.id, s.name, "system", "#/rivers/" + s.id, s.icon));
  Object.entries(BV.ORGANS).forEach(([id, o]) => { node("organ:" + id, o.name, "organ", "#/atlas/" + id, o.emoji); });
  BV.HERBS.forEach(h => node("herb:" + h.id, h.name, "herb", "#/codex/" + h.id, "🌿"));
  BV.COMPOUNDS.forEach(c => node("compound:" + c.id, c.name, "compound", "#/compound/" + c.id, "⚗️"));
  BV.RECIPES.forEach(r => node("recipe:" + r.id, r.name, "recipe", "#/apothecary/" + r.id, BV.PREP_TYPES[r.type].icon));
  BV.BEAUTY.forEach(b => node("beauty:" + b.id, b.name, "beauty", "#/mirror/" + b.id, b.icon));
  const topics = { sleep: ["Sleep", "😴", "#/oracle", h => /sedative|hypnotic|nervine/i.test(h.actions.join())], stress: ["Stress & Calm", "🧘", "#/oracle", h => /adaptogen|anxiolytic|nervine/i.test(h.actions.join())], pollinators: ["Pollinators", "🐝", "#/garden/pollinators", h => /bee|butterfl|hoverfl/i.test(h.pollinators.join())], immunity: ["Immunity", "🛡️", "#/rivers/immune", h => h.systems.includes("immune")], skin: ["Skin Care", "✨", "#/mirror", h => h.systems.includes("integumentary")], digestion: ["Digestion", "🌀", "#/rivers/digestive", h => h.systems.includes("digestive")], garden: ["Garden Planner", "🌱", "#/garden/planner", h => h.companions.length > 2], journal: ["Journal Prompts", "📔", "#/journal", h => !!h.spirit], research: ["Scientific Papers", "🔬", "#/codex", h => h.research.some(r => ["human", "strong"].includes(r.level))], pregnancy: ["Pregnancy Safety", "🤰", "#/trials", h => /avoid/i.test(h.safety.pregnancy)], pets: ["Pet Safety", "🐾", "#/trials", h => /toxic/i.test(h.safety.pets)], tradition: ["Traditional Uses", "🏺", "#/earth/globe", h => true] };
  Object.entries(topics).forEach(([k, [l, ic, href]]) => node("topic:" + k, l, "topic", href, ic));
  BV.SYSTEMS.forEach(s => s.organs.forEach(o => edge("system:" + s.id, "organ:" + o)));
  Object.entries(BV.ORGANS).forEach(([id, o]) => { o.related.forEach(r => edge("organ:" + id, "organ:" + r)); o.herbs.forEach(h => edge("organ:" + id, "herb:" + h)); });
  BV.HERBS.forEach(h => {
    h.systems.forEach(s => edge("herb:" + h.id, "system:" + s)); h.organs.forEach(o => edge("herb:" + h.id, "organ:" + o));
    h.compounds.forEach(c => edge("herb:" + h.id, "compound:" + c)); h.related.forEach(r => edge("herb:" + h.id, "herb:" + r));
    Object.entries(topics).forEach(([k, [, , , f]]) => { if (f(h)) edge("herb:" + h.id, "topic:" + k); });
  });
  BV.RECIPES.forEach(r => r.need.forEach(n => { const i = BV.INGREDIENTS.find(x => x.id === n); if (i?.herb) edge("recipe:" + r.id, "herb:" + i.herb); }));
  BV.BEAUTY.forEach(b => { b.herbs.forEach(h => edge("beauty:" + b.id, "herb:" + h)); b.organs.forEach(o => edge("beauty:" + b.id, "organ:" + o)); b.recipes.forEach(r => edge("beauty:" + b.id, "recipe:" + r)); edge("beauty:" + b.id, "topic:skin"); });
  edge("topic:sleep", "system:nervous"); edge("topic:stress", "system:nervous"); edge("topic:sleep", "topic:journal"); edge("topic:pollinators", "topic:garden"); edge("topic:digestion", "system:digestive"); edge("topic:immunity", "system:immune"); edge("topic:skin", "organ:skin"); edge("topic:research", "topic:tradition");
  return (BV._graph = { N, E });
};

BV.views.web = (el, [focus]) => {
  const { N } = BV.buildGraph();
  const trail = BV.store.get("bv-trail", []);
  if (!focus || !N.has(focus)) focus = "herb:lavender";
  if (trail[trail.length - 1] !== focus) { trail.push(focus); if (trail.length > 12) trail.shift(); BV.store.set("bv-trail", trail); }
  const c = N.get(focus), nbs = [...c.nb].map(id => N.get(id)).sort((a, b) => a.kind.localeCompare(b.kind));
  const kinds = { herb: "#6fae7c", organ: "#c4505a", system: "#9d8ec7", compound: "#4f9a9a", recipe: "#d8b45a", beauty: "#e19bb0", topic: "#e3b23c" };
  const W = 900, H = 640, cx = W / 2, cy = H / 2;
  const ring1 = nbs.slice(0, 16), ring2 = nbs.slice(16);
  const pos = (arr, R, off = 0) => arr.map((n, i) => ({ n, x: cx + R * Math.cos(i / arr.length * 6.283 + off), y: cy + R * .78 * Math.sin(i / arr.length * 6.283 + off) }));
  const placed = pos(ring1, 210, -1.57).concat(pos(ring2, 300, -1.4));
  el.innerHTML = BV.placeHeader("🕸️", "Knowledge Web", "Learning as exploring. Every topic connects to dozens of others — tap any thread to travel along it.") + `
  <div class="trail glass">${trail.map((t, i) => { const n = N.get(t); return n ? `<a href="#/web/${t}" class="trail-step">${n.icon} ${n.label}</a>${i < trail.length - 1 ? '<span class="trail-arrow">↓</span>' : ""}` : ""; }).join("")}<button class="link-btn" id="clearTrail">clear trail</button></div>
  <div class="web-layout">
    <section class="glass web-stage"><svg viewBox="0 0 ${W} ${H}" class="web-svg">
      <defs><radialGradient id="webGlow"><stop offset="0" stop-color="${kinds[c.kind]}" stop-opacity=".45"/><stop offset="1" stop-color="${kinds[c.kind]}" stop-opacity="0"/></radialGradient></defs>
      <circle cx="${cx}" cy="${cy}" r="200" fill="url(#webGlow)"/>
      ${placed.map(p => `<path class="thread" d="M${cx} ${cy} Q ${(cx + p.x) / 2 + (p.y - cy) * .15} ${(cy + p.y) / 2 - (p.x - cx) * .15} ${p.x} ${p.y}" stroke="${kinds[p.n.kind]}"/>`).join("")}
      ${placed.map((p, i) => `<a href="#/web/${p.n.id}" class="wnode-link"><g class="wnode" style="animation-delay:${i * 25}ms"><circle cx="${p.x}" cy="${p.y}" r="22" fill="var(--surface)" stroke="${kinds[p.n.kind]}" stroke-width="3"/><text x="${p.x}" y="${p.y + 7}" class="wn-icon">${p.n.icon}</text><text x="${p.x}" y="${p.y + 40}" class="wn-label">${BV.esc(p.n.label.length > 20 ? p.n.label.slice(0, 19) + "…" : p.n.label)}</text></g></a>`).join("")}
      <g class="wcenter"><circle cx="${cx}" cy="${cy}" r="50" fill="var(--surface)" stroke="${kinds[c.kind]}" stroke-width="5"/><text x="${cx}" y="${cy + 14}" class="wc-icon">${c.icon}</text><text x="${cx}" y="${cy + 78}" class="wc-label">${BV.esc(c.label)}</text></g>
    </svg></section>
    <aside class="glass panel"><p class="eyebrow">${c.kind}</p><h2>${c.icon} ${c.label}</h2><p>${c.nb.size} connections</p><a class="btn primary" href="${c.href}">Open this page →</a>
      <div class="web-legend">${Object.entries(kinds).map(([k, v]) => `<span><i style="background:${v}"></i>${k}</span>`).join("")}</div>
      <h3>Jump to</h3><div class="chips">${["herb:lavender", "organ:skin", "topic:sleep", "compound:curcumin", "system:immune", "beauty:hairthin", "topic:pollinators"].map(id => `<a class="chip" href="#/web/${id}">${N.get(id).icon} ${N.get(id).label}</a>`).join("")}</div></aside>
  </div>`;
  BV.$("#clearTrail").onclick = () => { BV.store.set("bv-trail", [focus]); BV.route(); };
  if (trail.length > 1) { BV.state.webHops += 1; BV.save(); if (BV.state.webHops % 5 === 0) BV.addXP(5, "Following the threads"); BV.checkAchievements(); }
};
