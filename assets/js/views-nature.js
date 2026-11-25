/* ==========================================================================
   BODYVERSE · NATURE & SELF VIEWS — Living Garden, Forager's Field,
   Healer's Trials, Mirror Garden, Soulbody Shrine, Starlit Hollow journal
   ========================================================================== */

/* ---------- 🌱 LIVING GARDEN ------------------------------------------- */
BV.views.garden = (el, [topic]) => {
  const month = new Date().getMonth() + 1;
  const g = BV.state.garden || (BV.state.garden = { bed: Array(12).fill(null) });
  el.innerHTML = BV.placeHeader("🌱", "Living Garden", "Learn gardening alongside herbalism — from soil microbes to food forests.") + `
  <div class="grid cards-3 topics">${BV.GARDEN_TOPICS.map(t => `<details class="topic glass" id="t-${t.id}" ${topic === t.id ? "open" : ""}><summary>${BV.photo(t.wiki)}<span><b>${t.icon} ${t.title}</b></span></summary><div class="acc-body"><p>${t.body}</p>${BV.list(t.tips)}</div></details>`).join("")}</div>

  <section class="glass panel" id="planner"><h2>🧑‍🌾 Companion Garden Planner</h2><p class="sub">Choose a plant, then tap a square of your raised bed. Neighbours glow green when they help each other and red when they compete.</p>
    <div class="palette" id="palette">${BV.COMPANIONS.plants.map((p, i) => `<button class="pal ${i === 0 ? "on" : ""}" data-p="${p}">${p}</button>`).join("")}<button class="pal erase" data-p="">🧹 Clear square</button></div>
    <div class="bed" id="bed"></div><div id="bedNotes"></div></section>

  <section class="glass panel"><h2>📅 Seasonal Calendar</h2><p class="sub">${BV.state.settings.hemisphere === "south" ? "Southern hemisphere: shifted by six months." : "Northern-hemisphere temperate timing — adjust for your region."}</p>
    <div class="calendar">${Object.entries(BV.GARDEN_CALENDAR).map(([m, tasks]) => { const mm = BV.state.settings.hemisphere === "south" ? ((+m + 5) % 12) + 1 : +m; return `<div class="cal-month ${+m === month ? "now" : ""}"><b>${new Date(2000, mm - 1).toLocaleString([], { month: "long" })}</b>${BV.list(tasks)}</div>`; }).join("")}</div></section>
  <section class="glass panel"><h2>🗺️ Regional growing guides</h2><p>Find your zone and local timing: <a href="https://planthardiness.ars.usda.gov" target="_blank" rel="noopener">USDA Plant Hardiness Zones (US)</a> · <a href="https://www.rhs.org.uk/weather/hardiness-ratings" target="_blank" rel="noopener">RHS hardiness (UK)</a> · <a href="https://www.almanac.com/gardening/frostdates" target="_blank" rel="noopener">Frost dates</a> · Your live soil temperature is in the <a href="#/earth">Earth Atlas</a>.</p></section>
  ${BV.nextPaths([["#/codex", "🌿 Herbs to grow"], ["#/forager", "🍄 Wild plants"], ["#/journal", "📔 Track your garden"], ["#/earth/live", "🌡️ Soil conditions"]])}`;
  BV.hydrate(el);
  let brush = BV.COMPANIONS.plants[0];
  const rel = (a, b) => BV.COMPANIONS.good.some(([x, y]) => (x === a && y === b) || (x === b && y === a)) ? "good" : BV.COMPANIONS.bad.some(([x, y]) => (x === a && y === b) || (x === b && y === a)) ? "bad" : "";
  const draw = () => {
    const cols = 4, notes = [];
    BV.$("#bed").innerHTML = g.bed.map((p, i) => {
      const nb = [i - cols, i + cols, i % cols ? i - 1 : -1, i % cols < cols - 1 ? i + 1 : -1].filter(j => j >= 0 && j < g.bed.length && g.bed[j]);
      const rs = p ? nb.map(j => rel(p, g.bed[j])) : [];
      if (p) nb.forEach(j => { const r = rel(p, g.bed[j]); if (r && i < j) notes.push(`<li class="${r}">${r === "good" ? "💚" : "⚠️"} ${p} + ${g.bed[j]}: ${r === "good" ? "great companions" : "better kept apart"}</li>`); });
      return `<button class="plot ${rs.includes("bad") ? "bad" : rs.includes("good") ? "good" : ""}" data-i="${i}">${p ? `<span>🌱</span>${p}` : "+"}</button>`;
    }).join("");
    BV.$("#bedNotes").innerHTML = notes.length ? `<ul class="tidy">${notes.join("")}</ul>` : "";
    BV.$$(".plot", el).forEach(b => b.onclick = () => { g.bed[+b.dataset.i] = brush || null; BV.save(); draw(); if (!BV.state.flags.planted) { BV.state.flags.planted = true; BV.addXP(10, "Planned your first garden bed"); } });
  };
  BV.$$(".pal", el).forEach(b => b.onclick = () => { brush = b.dataset.p; BV.$$(".pal", el).forEach(x => x.classList.toggle("on", x === b)); });
  draw();
  if (topic) setTimeout(() => (BV.$(topic === "planner" ? "#planner" : `#t-${topic}`) || el).scrollIntoView({ behavior: "smooth" }), 100);
};

/* ---------- 🍄 FORAGER'S FIELD GUIDE ------------------------------------ */
BV.views.forager = (el, [id]) => {
  if (id === "game") return BV.idGame(el);
  if (id && BV.FORAGE.find(f => f.id === id)) return BV.foragePage(el, id);
  el.innerHTML = BV.placeHeader("🍄", "Forager's Field Guide", "Identify plants safely, learn their deadly look-alikes, and harvest ethically.") + `
  <section class="glass panel warn-panel"><h2>⚠️ The Forager's Oath</h2>${BV.list(BV.FORAGE_RULES)}<button class="btn primary" id="oath">${BV.state.flags.rules ? "✓ Oath taken" : "🤝 I take the oath (+10 XP)"}</button></section>
  <div class="row gap wrap"><a class="btn primary big" href="#/forager/game">🔍 Play the Field Identification Game</a></div>
  <div class="grid cards-4">${BV.FORAGE.map(f => `<a class="forage-card glass ${f.deadly ? "deadly" : f.edible ? "edible" : "toxic"}" href="#/forager/${f.id}">${BV.photo(f.wiki)}<div><span class="tag">${f.deadly ? "☠️ Deadly" : f.edible ? "🧺 Edible (with care)" : "⚠️ Poisonous"}</span><h3>${f.name}</h3><p class="latin">${f.latin}</p><small>${f.season}</small></div></a>`).join("")}</div>
  ${BV.nextPaths([["#/scanner", "📷 Nature Scanner"], ["#/earth/map", "🗺️ Plants near you"], ["#/codex", "🌿 Herbal Codex"], ["#/trials", "⚔️ Foraging trials"]])}`;
  BV.$("#oath").onclick = () => { if (!BV.state.flags.rules) { BV.state.flags.rules = true; BV.addXP(10, "Took the Forager's Oath"); BV.route(); } };
};

BV.foragePage = async (el, id) => {
  const f = BV.FORAGE.find(x => x.id === id);
  el.innerHTML = `<header class="place-head"><a href="#/forager" class="back">← Field Guide</a><div class="place-sigil">${f.deadly ? "☠️" : f.edible ? "🧺" : "⚠️"}</div><div><h1>${f.name}</h1><p class="sub"><em>${f.latin}</em> · ${f.season}</p></div></header>
  ${f.deadly ? `<div class="danger-banner">☠️ DEADLY POISONOUS — never eat, and learn it so you can avoid it.</div>` : ""}
  <div class="article"><div class="article-main">
    ${BV.photo(f.wiki, "hero").replace("data-wiki", 'data-size="big" data-wiki')}
    ${BV.accordion("Identification", `<p>${f.id_tips}</p>`, true, "🔍")}
    ${BV.accordion("Habitat & seasonal availability", `<p><strong>Habitat:</strong> ${f.habitat}</p><p><strong>Season:</strong> ${f.season}</p>`, true, "🌍")}
    ${f.lookalikes.length ? BV.accordion("Look-alikes — compare side by side", `<div class="compare">${[f].concat(f.lookalikes.map(l => BV.FORAGE.find(x => x.id === l))).map(x => `<a class="cmp ${x.deadly ? "deadly" : x.edible ? "edible" : "toxic"}" href="#/forager/${x.id}">${BV.photo(x.wiki)}<b>${x.name}</b><span class="tag">${x.deadly ? "☠️ Deadly" : x.edible ? "Edible" : "Poisonous"}</span><small>${x.id_tips}</small></a>`).join("")}</div>`, true, "👯") : ""}
    ${BV.accordion("Ethical harvesting & conservation", `<p>${f.harvest}</p>`, true, "🤲")}
    ${BV.accordion("Wildlife interactions", `<p>${f.wildlife}</p>`, false, "🦋")}
    ${BV.accordion("Real photographs", `<div class="gallery" id="fGal"><p class="muted">Loading…</p></div>`, true, "📷")}
    ${BV.accordion("Regional map — where it has been recorded", `<div class="range-map" id="rangeMap"><p class="muted">Loading occurrence map…</p></div><p class="fine">Occurrence records: GBIF.org. Dots show where it has been recorded, not where it's safe to harvest.</p>`, true, "🗺️")}
  </div><aside class="article-side"><div class="glass panel sticky"><h3>Field rules</h3>${BV.list(BV.FORAGE_RULES.slice(0, 3))}<a class="btn" href="#/forager/game">🔍 Practise identification</a></div></aside></div>`;
  BV.commonsGallery("#fGal", `${f.latin} filetype:bitmap`, 8);
  try {
    const m = await (await fetch(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(f.latin)}`)).json();
    if (m.usageKey) BV.$("#rangeMap").innerHTML = `<div class="rm-inner"><img src="https://cdn.jsdelivr.net/npm/three-globe@2.42.0/example/img/earth-dark.jpg" alt="" class="rm-base"><div class="rm-tiles">${[0, 1].map(x => `<img src="https://api.gbif.org/v2/map/occurrence/density/0/${x}/0@1x.png?srs=EPSG:4326&taxonKey=${m.usageKey}&style=orangeHeat.point" alt="Occurrence records of ${BV.esc(f.name)}">`).join("")}</div></div>`;
    else throw 0;
  } catch (e) { const r = BV.$("#rangeMap"); if (r) r.innerHTML = `<p class="muted">Map unavailable offline.</p>`; }
};

BV.idGame = el => {
  const pool = BV.FORAGE.map(f => ({ name: f.name, wiki: f.wiki, latin: f.latin, note: f.id_tips, deadly: f.deadly, href: `#/forager/${f.id}` }))
    .concat(BV.HERBS.map(h => ({ name: h.name, wiki: h.wiki, latin: h.latin, note: h.habitat, href: `#/codex/${h.id}` })));
  let round = 0, score = 0;
  el.innerHTML = BV.placeHeader("🔍", "Field Identification Game", "Real photographs. Real plants. Look closely — some of them could kill you.") + `<section class="glass panel game" id="game"></section>`;
  const next = () => {
    round++;
    const ans = pool[Math.floor(Math.random() * pool.length)];
    const opts = [ans]; while (opts.length < 4) { const o = pool[Math.floor(Math.random() * pool.length)]; if (!opts.includes(o)) opts.push(o); }
    opts.sort(() => Math.random() - .5);
    BV.$("#game").innerHTML = `<p class="eyebrow">Round ${round} · Score ${score}</p>${BV.photo(ans.wiki, "game-photo").replace("data-wiki", 'data-size="big" data-wiki')}<h3>What is this?</h3>
      <div class="grid cards-2 opts">${opts.map((o, i) => `<button class="btn opt" data-i="${i}">${o.name}</button>`).join("")}</div><div id="gfb"></div>`;
    BV.hydrate(BV.$("#game"));
    BV.$$(".opt", el).forEach(b => b.onclick = () => {
      const pickO = opts[+b.dataset.i], ok = pickO === ans;
      BV.$$(".opt", el).forEach((x, i) => { x.disabled = true; if (opts[i] === ans) x.classList.add("correct"); else if (x === b) x.classList.add("wrong"); });
      if (ok) { score++; BV.state.ids++; BV.save(); BV.addXP(8, "Correct identification"); }
      BV.$("#gfb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><h4>${ok ? "✅ Well spotted!" : `❌ It was ${ans.name}`}</h4><p><em>${ans.latin}</em> — ${ans.note}</p>${ans.deadly ? '<p class="danger">☠️ Deadly poisonous — memorize this one.</p>' : ""}<div class="row gap"><a class="btn" href="${ans.href}">Learn more</a><button class="btn primary" id="nextR">Next plant →</button></div></div>`;
      BV.$("#nextR").onclick = next; BV.checkAchievements();
    });
  };
  next();
};

/* ---------- ⚔️ HEALER'S TRIALS & DIS-EASE DECODING DEN ------------------ */
BV.views.trials = (el, [mode = "trials"]) => {
  const unlocked = BV.level(BV.state.xp) >= 2;
  el.innerHTML = BV.placeHeader("⚔️", "Healer's Trials", "Soft training through realistic scenarios — apply knowledge, don't just memorize it.") + `
  <div class="tabs"><a class="tab ${mode === "trials" ? "on" : ""}" href="#/trials/trials">⚔️ Healer's Trials</a><a class="tab ${mode === "den" ? "on" : ""}" href="#/trials/den">🕳️ Dis-Ease Decoding Den ${unlocked ? "" : "🔒"}</a></div><section class="glass panel game" id="trialBox"></section>`;
  const box = BV.$("#trialBox");
  if (mode === "den") {
    if (!unlocked) { box.innerHTML = `<div class="center"><h2>🔒 The cave is sealed</h2><p>Reach Level 2 to enter the Dis-Ease Decoding Den. Read a few herb or organ pages, or complete today's lesson.</p><a class="btn primary" href="#/">Back to the world</a></div>`; return; }
    let i = 0;
    const show = () => {
      const c = BV.CASES[i % BV.CASES.length];
      box.innerHTML = `<p class="eyebrow">Case ${i % BV.CASES.length + 1} of ${BV.CASES.length} · The cave of root-cause discovery</p><h2>🕯️ ${c.title}</h2><p class="lede">${c.story}</p><h4>Clues</h4><div class="chips">${c.clues.map(x => `<span class="chip alt">🔎 ${x}</span>`).join("")}</div><h4>Where might the root lie?</h4>
        <div class="grid cards-2 opts">${c.options.map((o, k) => `<button class="btn opt" data-k="${k}">${o}</button>`).join("")}</div><div id="cfb"></div>`;
      BV.$$(".opt", box).forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === c.c; BV.$$(".opt", box).forEach((x, k) => { x.disabled = true; if (k === c.c) x.classList.add("correct"); else if (x === b) x.classList.add("wrong"); });
        if (ok) { BV.state.cases++; BV.save(); BV.addXP(20, "Decoded a case"); }
        BV.$("#cfb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><h4>${ok ? "✅ Root found" : "🌫️ Not quite"}</h4><p>${c.lesson}</p><div class="row gap"><a class="btn" href="#/atlas/${c.organ}">Study the ${BV.ORGANS[c.organ].name}</a><button class="btn primary" id="nextC">Next case →</button></div></div>`;
        BV.$("#nextC").onclick = () => { i++; show(); };
      });
    };
    show(); return;
  }
  const qs = BV.QUIZ.slice().sort(() => Math.random() - .5).slice(0, 6);
  let i = 0, right = 0;
  const show = () => {
    if (i >= qs.length) {
      box.innerHTML = `<div class="center"><h2>${right >= 5 ? "🏆" : right >= 3 ? "🌿" : "🌱"} Trial complete: ${right}/${qs.length}</h2><p>${right >= 5 ? "A true healer's judgement." : "Every trial grows your roots. Review the explanations and try again."}</p><button class="btn primary" onclick="BV.route()">Begin another trial</button></div>`;
      if (right === qs.length) BV.addXP(25, "Perfect trial!"); return;
    }
    const q = qs[i];
    box.innerHTML = `<div class="progress-dots">${qs.map((_, k) => `<i class="${k < i ? "done" : k === i ? "cur" : ""}"></i>`).join("")}</div><p class="eyebrow">${q.cat} · Question ${i + 1}</p><h2>${q.q}</h2>
      <div class="opts-col">${q.a.map((a, k) => `<button class="btn opt" data-k="${k}">${a}</button>`).join("")}</div><div id="qfb"></div>`;
    BV.$$(".opt", box).forEach(b => b.onclick = () => {
      const ok = +b.dataset.k === q.c; BV.$$(".opt", box).forEach((x, k) => { x.disabled = true; if (k === q.c) x.classList.add("correct"); else if (x === b) x.classList.add("wrong"); });
      if (ok) { right++; BV.state.quizCorrect++; BV.save(); BV.addXP(10, "Trial passed"); }
      BV.$("#qfb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><h4>${ok ? "✅ Wise choice" : "🍂 Let's learn from this"}</h4><p>${q.why}</p><button class="btn primary" id="nextQ">${i + 1 < qs.length ? "Next →" : "See results"}</button></div>`;
      BV.$("#nextQ").onclick = () => { i++; show(); };
    });
  };
  show();
};

/* ---------- 🪞 MIRROR GARDEN — beauty from within ---------------------- */
BV.views.mirror = (el, [goal]) => {
  const b = BV.BEAUTY.find(x => x.id === goal);
  if (b) {
    el.innerHTML = `<header class="place-head"><a href="#/mirror" class="back">← Mirror Garden</a><div class="place-sigil">${b.icon}</div><div><p class="eyebrow">Beauty from within</p><h1>${b.name}</h1></div></header>
    <div class="grid cards-2">
      <section class="glass panel"><h2>🔬 The science</h2><p>${b.science}</p>${b.evidence.map(e => `<div class="claim">${BV.badge(e.level)}<p>${e.claim}</p></div>`).join("")}</section>
      <section class="glass panel"><h2>🌊 Inner roots</h2><p>${b.inner}</p><h4>Body connections</h4><div class="chips">${b.organs.map(o => `<a class="chip" href="#/atlas/${o}">${BV.ORGANS[o].emoji} ${BV.ORGANS[o].name}</a>`).join("")}${b.systems.map(s => `<a class="chip alt" href="#/rivers/${s}">${BV.system(s).icon} ${BV.system(s).name}</a>`).join("")}</div><h4>Nutrition</h4>${BV.list(b.nutrition)}</section>
      <section class="glass panel"><h2>🌿 Herbs</h2><div class="grid cards-3">${b.herbs.map(BV.herb).map(h => `<a class="mini-card glass" href="#/codex/${h.id}">${BV.photo(h.wiki)}<b>${h.name}</b></a>`).join("")}</div></section>
      <section class="glass panel"><h2>🧪 Recipes & rituals</h2><div class="chips">${b.recipes.map(r => BV.RECIPES.find(x => x.id === r)).filter(Boolean).map(r => `<a class="chip" href="#/apothecary/${r.id}">${BV.PREP_TYPES[r.type].icon} ${r.name}</a>`).join("")}</div><h4>Ritual</h4><p>${b.ritual}</p><div class="spirit-only"><h4>✨ Spiritual perspective (optional)</h4><p>${b.spirit}</p></div></section>
    </div>${BV.nextPaths(BV.BEAUTY.filter(x => x.id !== b.id).map(x => [`#/mirror/${x.id}`, `${x.icon} ${x.name}`]))}`;
    return;
  }
  el.innerHTML = BV.placeHeader("🪞", "Mirror Garden", "Soft rituals, inner–outer healing and beauty biology. Click a beauty goal to follow it back to its roots.") + `
  <div class="mirror-pond glass"><div class="ripple"></div><p class="handwritten">“The skin is the garden; the body is the soil.”</p></div>
  <div class="grid cards-3">${BV.BEAUTY.map(x => `<a class="beauty-card glass" href="#/mirror/${x.id}"><span class="bc-icon">${x.icon}</span><h3>${x.name}</h3><p>${x.science.split(".")[0]}.</p><div class="chips small">${x.herbs.slice(0, 3).map(h => `<span class="chip">${BV.herb(h).name}</span>`).join("")}</div></a>`).join("")}</div>
  ${BV.nextPaths([["#/atlas/skin", "✨ Skin in the Atlas"], ["#/apothecary", "🧪 Make a mask or scrub"], ["#/journal", "📔 Track your ritual"]])}`;
};

/* ---------- 🕯️ SOULBODY SHRINE — spiritual anatomy --------------------- */
BV.views.shrine = (el, [cid]) => {
  if (!BV.state.settings.spirit) {
    el.innerHTML = BV.placeHeader("🕯️", "Soulbody Shrine", "Spiritual anatomy") + `<section class="glass panel center"><p>The Spirit layer is turned off. Bodyverse keeps Body, Mind and Spirit separate so you can choose.</p><button class="btn primary" id="spOn">Turn on the Spirit layer</button></section>`;
    BV.$("#spOn").onclick = () => { BV.state.settings.spirit = true; BV.save(); BV.applySeason(); BV.route(); }; return;
  }
  const c = BV.CHAKRAS.find(x => x.id === cid) || BV.CHAKRAS[3];
  el.innerHTML = BV.placeHeader("🕯️", "Soulbody Shrine", "Where emotions live in the body — chakras, TCM and Ayurvedic zones, herbs, crystals and colours. A spiritual and cultural map, not a medical one.") + `
  <div class="shrine">
    <div class="glass shrine-body"><svg viewBox="0 0 200 400" class="chakra-svg">
      <ellipse cx="100" cy="46" rx="26" ry="32" class="silhouette"/><path d="M60 96 Q100 82 140 96 L144 230 Q100 246 56 230Z M60 96 L38 240 M140 96 L162 240 M70 232 L66 390 M130 232 L134 390" class="silhouette"/>
      <path d="M100 30 V 360" class="energy-line"/>
      ${BV.CHAKRAS.map(x => `<a href="#/shrine/${x.id}"><circle cx="100" cy="${x.y * 3.6 + 8}" r="${x.id === c.id ? 16 : 11}" fill="${x.color}" class="chakra ${x.id === c.id ? "on" : ""}" style="--cc:${x.color}"/></a>`).join("")}
    </svg></div>
    <section class="glass panel chakra-info" style="--cc:${c.color}">
      <h2><span class="dot" style="background:${c.color}"></span>${c.name}</h2>
      <table class="facts"><tr><th>Location</th><td>${c.place}</td></tr><tr><th>Element</th><td>${c.element}</td></tr><tr><th>Emotions held</th><td>${c.emotions}</td></tr><tr><th>When out of balance</th><td>${c.imbalance}</td></tr><tr><th>TCM zone</th><td>${c.tcm}</td></tr><tr><th>Ayurveda</th><td>${c.ayur}</td></tr><tr><th>Crystals</th><td>${c.crystals.join(", ")}</td></tr></table>
      <h3>Herbs</h3><div class="chips">${c.herbs.map(BV.herb).map(h => `<a class="chip" href="#/codex/${h.id}">${h.name}</a>`).join("")}</div>
      <h3>Energy flow & healing ritual</h3><p>${c.practice}</p>
      <p class="fine">Chakras come from Hindu and yogic traditions; meridians and dantian from Chinese medicine. They are presented as cultural and contemplative frameworks — there is no scientific evidence that they are physical structures. For trauma, a trauma-informed therapist is a powerful ally alongside ritual.</p>
    </section>
  </div>${BV.nextPaths([["#/journal", "📔 Starlit Hollow"], ["#/realms", "🜃 The Realms"], ["#/atlas", "🫀 Physical anatomy"]])}`;
};

/* ---------- 📔 STARLIT HOLLOW — journal + Moonwatcher's cycle log ------- */
BV.resizeImage = (file, max = 640) => new Promise(res => {
  const r = new FileReader(); r.onload = () => { const img = new Image(); img.onload = () => { const s = Math.min(1, max / Math.max(img.width, img.height)); const c = document.createElement("canvas"); c.width = img.width * s; c.height = img.height * s; c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); res(c.toDataURL("image/jpeg", .72)); }; img.src = r.result; }; r.readAsDataURL(file);
});

BV.cyclePhase = () => {
  const cy = BV.state.cycle; if (!cy.lastStart) return null;
  const day = Math.floor((new Date(BV.todayKey()) - new Date(cy.lastStart)) / 864e5) % cy.length + 1, L = cy.length;
  const ov = L - 14;
  const ph = day <= 5 ? { id: "menstrual", name: "Menstrual · Inner Winter", aura: "#b23a48", icon: "🌑", ritual: "Rest, warmth and a ginger womb compress. Lower expectations; dream and reflect.", aff: "My body is wise. Rest is sacred work.", herbs: ["ginger", "chamomile", "nettle"] }
    : day < ov - 1 ? { id: "follicular", name: "Follicular · Inner Spring", aura: "#9be7a8", icon: "🌒", ritual: "Begin new projects, try something new, fresh greens and nettle infusions.", aff: "I bloom at my own pace.", herbs: ["nettle", "lemonbalm", "rose"] }
      : day <= ov + 1 ? { id: "ovulatory", name: "Ovulatory · Inner Summer", aura: "#ffb36b", icon: "🌕", ritual: "Connect, create and celebrate. Hibiscus cooler and dancing.", aff: "I radiate and receive.", herbs: ["hibiscus", "rose", "calendula"] }
        : { id: "luteal", name: "Luteal · Inner Autumn", aura: "#cdb4ff", icon: "🌖", ritual: "Finish things, nest, protect your energy. Magnesium-rich foods, chamomile and lavender.", aff: "I honour my boundaries and my softness.", herbs: ["chamomile", "lavender", "ashwagandha"] };
  return { day, ...ph };
};

BV.views.journal = (el, [tab = "entries"]) => {
  const s = BV.state;
  el.innerHTML = BV.placeHeader("📔", "Starlit Hollow", "Your field journal & personal knowledge system — notes, observations, photos, harvests, intentions, dreams and your Moonwatcher's cycle log.") + `
  <div class="tabs"><a class="tab ${tab === "entries" ? "on" : ""}" href="#/journal/entries">📔 Field journal</a><a class="tab ${tab === "favorites" ? "on" : ""}" href="#/journal/favorites">♥ Favourites</a><a class="tab ${tab === "cycle" ? "on" : ""}" href="#/journal/cycle">🌙 Moonwatcher's Journal</a></div><div id="jBody"></div>`;
  const body = BV.$("#jBody");
  if (tab === "favorites") {
    body.innerHTML = s.favorites.length ? `<div class="grid cards-4">${s.favorites.map(BV.herb).filter(Boolean).map(h => `<a class="mini-card glass" href="#/codex/${h.id}">${BV.photo(h.wiki)}<b>${h.name}</b><small>${h.latin}</small></a>`).join("")}</div>` : `<section class="glass panel center"><p>No favourites yet — tap ♡ on any herb in the <a href="#/codex">Leaf Archive</a>.</p></section>`;
    return;
  }
  if (tab === "cycle") return BV.cycleView(body);
  const types = { note: "📝 Note", observation: "🔍 Observation", harvest: "🧺 Harvest", drying: "🌾 Drying method", garden: "🌱 Garden", recipe: "🧪 Recipe", intention: "🕯️ Intention", dream: "💭 Dream", gratitude: "🙏 Gratitude" };
  body.innerHTML = `
  <form class="glass panel journal-form" id="jForm">
    <div class="row gap wrap"><select id="jType">${Object.entries(types).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select><input id="jTitle" placeholder="Title (e.g. 'Elderflowers by the river')" required></div>
    <textarea id="jText" rows="4" placeholder="${BV.esc(BV.pick(BV.DAILY.prompts, 6))}"></textarea>
    <div class="row gap wrap"><input id="jTags" placeholder="Tags: lavender, sleep, spring"><label class="btn">📷 Add photo<input type="file" accept="image/*" id="jPhoto" hidden></label><span id="jPhotoName" class="fine"></span><button class="btn primary">Save entry</button></div>
  </form>
  <div class="journal-pages">${s.journal.length ? s.journal.map(j => `<article class="jpage"><div class="pressed">${["🌸", "🍂", "🌿", "🌼", "🍁", "🪻"][j.id % 6]}</div><p class="jmeta">${types[j.type] || j.type} · ${j.date}</p><h3>${BV.esc(j.title)}</h3>${j.photo ? `<img src="${j.photo}" alt="">` : ""}<p class="handwritten">${BV.esc(j.text).replace(/\n/g, "<br>")}</p>${j.tags?.length ? `<div class="chips small">${j.tags.map(t => `<span class="chip">#${BV.esc(t)}</span>`).join("")}</div>` : ""}<button class="link-btn" data-del="${j.id}">remove</button></article>`).join("") : `<p class="muted center">Your journal is waiting for its first pressed flower…</p>`}</div>`;
  let photo = null;
  BV.$("#jPhoto").onchange = async e => { const f = e.target.files[0]; if (f) { photo = await BV.resizeImage(f); BV.$("#jPhotoName").textContent = "📷 " + f.name; } };
  BV.$("#jForm").onsubmit = e => {
    e.preventDefault();
    s.journal.unshift({ id: Date.now(), type: BV.$("#jType").value, title: BV.$("#jTitle").value, text: BV.$("#jText").value, tags: BV.$("#jTags").value.split(",").map(t => t.trim()).filter(Boolean), date: BV.todayKey(), photo });
    BV.save(); BV.addXP(12, "Journal entry written"); BV.route();
  };
  BV.$$("[data-del]", body).forEach(b => b.onclick = () => { if (confirm("Remove this entry?")) { s.journal = s.journal.filter(j => j.id !== +b.dataset.del); BV.save(); BV.route(); } });
};

BV.cycleView = body => {
  const cy = BV.state.cycle, ph = BV.cyclePhase(), m = BV.moon(), today = BV.todayKey(), log = cy.logs[today] || {};
  const d = new Date(), y = d.getFullYear(), mo = d.getMonth(), first = new Date(y, mo, 1).getDay(), days = new Date(y, mo + 1, 0).getDate();
  if (ph) { BV.state.avatar.aura = ph.aura; BV.save(); BV.renderHUD(); }
  body.innerHTML = `
  <div class="grid cards-2">
    <section class="glass panel moonwatch">
      <div class="row gap">${BV.avatarSVG(BV.state.avatar, 120)}<div>${ph ? `<p class="eyebrow">Cycle day ${ph.day} of ${cy.length}</p><h2>${ph.icon} ${ph.name}</h2><p>Your aura has shifted to match your phase.</p>` : `<h2>🌙 Begin your Moonwatch</h2><p>Mark the first day of your period to sync your cycle with the moon.</p>`}<p>${m.emoji} Tonight: ${m.name}</p></div></div>
      <div class="row gap wrap"><button class="btn primary" id="periodStart">🩸 My period started today</button><label class="field inline">Cycle length <input type="number" id="cLen" min="20" max="45" value="${cy.length}"></label></div>
      ${ph ? `<h3>Phase ritual</h3><p>${ph.ritual}</p><h3>Womb affirmation</h3><p class="handwritten">“${ph.aff}”</p><div class="chips">${ph.herbs.map(BV.herb).map(h => `<a class="chip" href="#/codex/${h.id}">${h.name}</a>`).join("")}</div>` : ""}
      <p class="fine">Educational cycle awareness only — not contraception or diagnosis. Your data stays in this browser.</p>
    </section>
    <section class="glass panel"><h2>Log today</h2>
      <form id="cForm">
        <label class="field">Flow <select id="cFlow">${["none", "spotting", "light", "medium", "heavy"].map(f => `<option ${log.flow === f ? "selected" : ""}>${f}</option>`).join("")}</select></label>
        <label class="field">Mood <select id="cMood">${["calm", "joyful", "tender", "irritable", "anxious", "tired", "energized", "dreamy"].map(f => `<option ${log.mood === f ? "selected" : ""}>${f}</option>`).join("")}</select></label>
        <p><b>Symptoms</b></p><div class="checks">${["cramps", "bloating", "headache", "breast tenderness", "acne", "cravings", "low back pain", "insomnia"].map(x => `<label class="check"><input type="checkbox" value="${x}" ${log.sym?.includes(x) ? "checked" : ""}> ${x}</label>`).join("")}</div>
        <label class="field">Dream log / notes <textarea id="cNote" rows="3">${BV.esc(log.note || "")}</textarea></label>
        <button class="btn primary">Save today's log</button>
      </form></section>
  </div>
  <section class="glass panel"><h2>${d.toLocaleString([], { month: "long", year: "numeric" })}</h2><div class="cal-grid">${["S", "M", "T", "W", "T", "F", "S"].map(x => `<b>${x}</b>`).join("")}${Array(first).fill("<span></span>").join("")}${[...Array(days)].map((_, i) => { const k = BV.todayKey(new Date(Date.UTC(y, mo, i + 1))), L = cy.logs[k], mm = BV.moon(new Date(y, mo, i + 1, 21)); return `<span class="cday ${k === today ? "today" : ""} ${L?.flow && L.flow !== "none" ? "flow-" + L.flow : ""}" title="${mm.name}${L ? " · " + (L.mood || "") : ""}"><i>${i + 1}</i><small>${mm.idx % 2 === 0 ? mm.emoji : ""}</small>${L ? "<em>•</em>" : ""}</span>`; }).join("")}</div></section>`;
  BV.$("#periodStart").onclick = () => { cy.lastStart = today; cy.logs[today] = Object.assign(cy.logs[today] || {}, { flow: "medium" }); BV.save(); BV.toast("🌑 New cycle begun — be gentle with yourself"); BV.route(); };
  BV.$("#cLen").onchange = e => { cy.length = Math.max(20, Math.min(45, +e.target.value || 28)); BV.save(); BV.route(); };
  BV.$("#cForm").onsubmit = e => {
    e.preventDefault();
    const first = !cy.logs[today];
    cy.logs[today] = { flow: BV.$("#cFlow").value, mood: BV.$("#cMood").value, sym: BV.$$(".checks input:checked").map(i => i.value), note: BV.$("#cNote").value };
    BV.save(); if (first) BV.addXP(8, "Moonwatch logged"); else BV.toast("🌙 Log updated"); BV.route();
  };
};
