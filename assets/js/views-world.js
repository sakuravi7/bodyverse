/* ==========================================================================
   BODYVERSE · WORLD VIEWS — World map, Oracle Tree, Observatory, Earth Atlas,
   Realms, Mirror Lake, Spiral Path, Nature Scanner
   ========================================================================== */

/* ---------- 🌍 THE WORLD (home) ------------------------------------------ */
BV.views.world = el => {
  const s = BV.state, season = BV.SEASONS[BV.season()], m = BV.moon(), hr = new Date().getHours();
  const greet = hr < 5 ? "The grove is hushed under the stars" : hr < 12 ? "Good morning, the dew is still on the leaves" : hr < 17 ? "Good afternoon, the bees are busy" : hr < 21 ? "Good evening, the light is turning gold" : "The fireflies are out tonight";
  const herb = BV.pick(BV.HERBS), tree = BV.pick(BV.DAILY.trees, 3), shroom = BV.pick(BV.DAILY.mushrooms, 5), flower = BV.pick(BV.DAILY.wildflowers, 7),
    bird = BV.pick(BV.DAILY.birds, 2), pol = BV.pick(BV.DAILY.pollinators, 4), fact = BV.pick(BV.DAILY.anatomy, 1), prompt = BV.pick(BV.DAILY.prompts, 6),
    recipe = BV.pick(BV.RECIPES, 9), task = BV.pick(BV.GARDEN_CALENDAR[new Date().getMonth() + 1]), con = BV.DAILY.constellations[new Date().getMonth() + 1];
  const claimed = s.dailyClaim === BV.todayKey();

  // connections between places (the "living world" paths)
  const links = [["oracle", "codex"], ["oracle", "atlas"], ["oracle", "rivers"], ["oracle", "apothecary"], ["oracle", "web"], ["oracle", "trials"], ["codex", "apothecary"], ["codex", "shrine"], ["codex", "web"], ["atlas", "rivers"], ["atlas", "web"], ["atlas", "realms"], ["rivers", "mirror"], ["rivers", "earth"], ["apothecary", "garden"], ["garden", "forest"], ["forest", "trials"], ["forest", "mirror"], ["mirror", "earth"], ["web", "spiral"], ["web", "lake"], ["lake", "hollow"], ["spiral", "observatory"], ["observatory", "realms"], ["realms", "scanner"], ["scanner", "earth"], ["hollow", "shrine"], ["shrine", "garden"], ["trials", "mirror"]];
  const P = Object.fromEntries(BV.PLACES.map(p => [p.id, p]));

  el.innerHTML = `
  <section class="hero">
    <div class="hero-text">
      <p class="eyebrow">${season.icon} ${season.name} in the Bodyverse · ${m.emoji} ${m.name}</p>
      <h1 class="display">${greet}.</h1>
      <p class="lede">Step into a living library of the body, the plants and the Earth. Every place connects to another — wander, collect, brew and grow.</p>
      <div class="row gap wrap">
        <a class="btn primary" href="#/oracle">🌳 Visit the Oracle Tree</a>
        <a class="btn" href="#/atlas">🫀 Explore the body</a>
        <a class="btn" href="#/apothecary">🧪 Start alchemizing</a>
      </div>
    </div>
    <div class="hero-avatar">${BV.avatarSVG(s.avatar, 180)}<p class="fine">${BV.esc(s.avatar.name)} · ${s.realm ? BV.REALMS.find(r => r.id === s.realm).name : "No realm chosen yet"}</p></div>
  </section>

  <section class="map-wrap glass">
    <div class="map-title"><h2>🗺️ The World of Bodyverse</h2><p class="sub">Tap a place to travel. Glowing places are ones you haven't discovered yet.</p></div>
    <div class="map-scroll"><div class="world-map" id="worldMap">
      <svg class="map-art" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--map-sky1)"/><stop offset="1" stop-color="var(--map-sky2)"/></linearGradient>
          <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--map-hill1)"/><stop offset="1" stop-color="var(--map-hill2)"/></linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#sky)"/>
        <path d="M0 40 Q 15 30 30 38 T 60 36 T 100 34 V100 H0Z" fill="url(#hill1)" opacity=".55"/>
        <path d="M0 58 Q 20 48 40 56 T 75 52 T 100 56 V100 H0Z" fill="url(#hill1)" opacity=".75"/>
        <path d="M0 78 Q 25 68 50 76 T 100 72 V100 H0Z" fill="url(#hill1)"/>
        <path class="river" d="M100 50 C 85 54, 80 62, 72 58 S 58 66, 50 70 S 30 78, 22 88 S 10 96, 0 98" fill="none" stroke="var(--map-water)" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>
        ${links.map(([a, b]) => `<path class="map-trail" d="M${P[a].x} ${P[a].y} Q ${(P[a].x + P[b].x) / 2 + 3} ${(P[a].y + P[b].y) / 2 - 3} ${P[b].x} ${P[b].y}" />`).join("")}
      </svg>
      ${[...Array(14)].map((_, i) => `<span class="map-tree" style="left:${(i * 37) % 96 + 2}%;top:${52 + (i * 23) % 40}%;font-size:${14 + (i % 3) * 6}px">${["🌲", "🌳", "🌿", "🌾", "🍄"][i % 5]}</span>`).join("")}
      ${BV.PLACES.map(p => `<a class="place ${s.places.includes(p.id) ? "known" : "new"} ${p.ring || ""}" href="${p.route}" style="left:${p.x}%;top:${p.y}%" title="${BV.esc(p.blurb)}">
        <span class="place-icon">${p.icon}</span><span class="place-name">${p.name}</span></a>`).join("")}
    </div></div>
  </section>

  <section>
    <div class="section-head"><h2>☀️ Daily Nature · ${new Date().toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })}</h2>
      <button class="btn ${claimed ? "ghost" : "primary"}" id="claimDaily" ${claimed ? "disabled" : ""}>${claimed ? "✓ Today's lesson complete" : "🌱 Complete today's lesson (+25 XP)"}</button></div>
    <div class="daily-grid">
      <a class="daily-card big" href="#/codex/${herb.id}">${BV.photo(herb.wiki)}<div class="dc-body"><span class="dc-label">Plant of the Day</span><h3>${herb.name}</h3><p><em>${herb.latin}</em></p><p>${BV.esc(herb.traditional.slice(0, 140))}…</p></div></a>
      ${[["Tree of the Day", tree], ["Mushroom of the Day", shroom], ["Wildflower of the Day", flower], ["Bird of the Day", bird], ["Pollinator Spotlight", pol]].map(([l, [n, w]]) =>
        `<button class="daily-card" data-wikimodal="${w}" data-name="${BV.esc(n)}">${BV.photo(w)}<div class="dc-body"><span class="dc-label">${l}</span><h3>${n}</h3></div></button>`).join("")}
      <div class="daily-card text"><span class="dc-label">🫀 Anatomy Fact</span><p class="big-quote">${fact}</p><a href="#/atlas" class="link">Open the Human Atlas →</a></div>
      <a class="daily-card text" href="#/apothecary"><span class="dc-label">🧪 Herbal Recipe</span><h3>${BV.PREP_TYPES[recipe.type].icon} ${recipe.name}</h3><p>${recipe.uses}</p><p class="fine">Try: ${recipe.need.map(n => (BV.INGREDIENTS.find(i => i.id === n) || { name: n.replace(/-/g, " ") }).name).join(" + ")}</p></a>
      <a class="daily-card text" href="#/journal"><span class="dc-label">📔 Journal Prompt</span><p class="handwritten">“${prompt}”</p></a>
      <a class="daily-card text" href="#/garden"><span class="dc-label">🌱 Garden Task</span><h3>${task}</h3><p class="fine">From this month's seasonal calendar.</p></a>
      <a class="daily-card text night-card" href="#/observatory"><span class="dc-label">✨ Constellation of the Night</span><h3>${con}</h3><p>${BV.DAILY.constellationLore[con]}</p></a>
    </div>
  </section>

  <section class="season-banner glass">
    <div class="sb-icon">${season.icon}</div>
    <div><h2>The ${season.name} World</h2><p>${season.visual}. <strong>Focus:</strong> ${season.focus}. <strong>Element:</strong> ${season.element}.</p>
    <div class="chips">${season.herbs.map(h => `<a class="chip" href="#/codex/${h}">${BV.herb(h).name}</a>`).join("")}<a class="chip alt" href="#/observatory">Circle of Seasons →</a></div></div>
  </section>

  <section class="places-list">
    <h2>🧭 All places</h2>
    <div class="grid cards-3">${BV.PLACES.map(p => `<a class="place-card glass" href="${p.route}"><span class="pc-icon">${p.icon}</span><div><h3>${p.name}${s.places.includes(p.id) ? "" : ' <span class="new-dot">new</span>'}</h3><p>${p.blurb}</p></div></a>`).join("")}</div>
  </section>`;

  BV.$("#claimDaily", el).onclick = e => {
    BV.state.dailyClaim = BV.todayKey(); BV.save(); BV.addXP(25, "Daily lesson");
    e.target.textContent = "✓ Today's lesson complete"; e.target.disabled = true; e.target.className = "btn ghost";
  };
  BV.$$("[data-wikimodal]", el).forEach(b => b.onclick = () => BV.wikiModal(b.dataset.wikimodal, b.dataset.name));
};

BV.wikiModal = async (wiki, name) => {
  BV.modal(`<div class="wiki-modal">${BV.photo(wiki, "tall", name).replace('data-wiki', 'data-size="big" data-wiki')}<h2>${BV.esc(name)}</h2><p id="wikiExtract" class="muted">Opening the field notes…</p><p class="fine">Photo & summary: Wikipedia / Wikimedia Commons (CC BY-SA).</p></div>`);
  const info = await BV.wikiInfo(wiki); const t = BV.$("#wikiExtract");
  if (t) t.innerHTML = info ? `${BV.esc(info.extract)} ${info.url ? `<a href="${info.url}" target="_blank" rel="noopener">Read more ↗</a>` : ""}` : "Connect to the internet to load field notes and real photographs.";
};

/* ---------- 🌳 ORACLE TREE — Ask the Oracle + Daily Dose ----------------- */
BV.searchAll = q => {
  q = q.toLowerCase().trim(); if (!q) return [];
  const words = q.split(/\s+/).filter(w => w.length > 2);
  const score = text => { text = text.toLowerCase(); let s = 0; for (const w of words) if (text.includes(w)) s += 1; if (text.includes(q)) s += 3; return s; };
  const out = [];
  BV.HERBS.forEach(h => { const s = score([h.name, h.latin, h.common.join(" "), h.actions.join(" "), h.systems.join(" "), h.traditional, h.preparations.join(" "), h.beauty, h.spirit.uses, h.constituents.join(" ")].join(" ")); if (s) out.push({ s: s + (h.name.toLowerCase().includes(q) ? 5 : 0), type: "Herb", icon: "🌿", title: h.name, sub: h.actions.slice(0, 3).join(" · "), href: `#/codex/${h.id}` }); });
  Object.entries(BV.ORGANS).forEach(([id, o]) => { const s = score([o.name, o.anatomy, o.physiology, o.functions.join(" "), o.disorders.map(d => d.name + d.symptoms).join(" "), o.beauty].join(" ")); if (s) out.push({ s: s + (o.name.toLowerCase().includes(q) ? 5 : 0), type: "Organ", icon: o.emoji, title: o.name, sub: o.functions[0], href: `#/atlas/${id}` }); });
  BV.SYSTEMS.forEach(x => { const s = score([x.name, x.how, x.imbalance, x.beauty].join(" ")); if (s) out.push({ s, type: "System", icon: x.icon, title: x.name, sub: x.imbalance, href: `#/rivers/${x.id}` }); });
  BV.RECIPES.forEach(r => { const s = score([r.name, r.uses, r.type].join(" ")); if (s) out.push({ s, type: "Recipe", icon: BV.PREP_TYPES[r.type].icon, title: r.name, sub: r.uses, href: `#/apothecary/${r.id}` }); });
  BV.BEAUTY.forEach(b => { const s = score([b.name, b.science, b.inner].join(" ")); if (s) out.push({ s, type: "Beauty", icon: b.icon, title: b.name, sub: "Mirror Garden", href: `#/mirror/${b.id}` }); });
  BV.COMPOUNDS.forEach(c => { const s = score([c.name, c.cls, c.mech].join(" ")); if (s) out.push({ s, type: "Compound", icon: "⚗️", title: c.name, sub: c.cls, href: `#/compound/${c.id}` }); });
  BV.GARDEN_TOPICS.forEach(g => { const s = score([g.title, g.body].join(" ")); if (s) out.push({ s, type: "Garden", icon: g.icon, title: g.title, sub: "Living Garden", href: `#/garden/${g.id}` }); });
  BV.FORAGE.forEach(f => { const s = score([f.name, f.latin, f.id_tips].join(" ")); if (s) out.push({ s, type: f.deadly ? "⚠ Poisonous" : "Forage", icon: f.deadly ? "☠️" : "🧺", title: f.name, sub: f.habitat, href: `#/forager/${f.id}` }); });
  out.forEach(r => { if (r.title.toLowerCase().includes(q)) r.s += 8; });
  return out.sort((a, b) => b.s - a.s).slice(0, 18);
};

BV.dailyDose = (mood, symptom, phase) => {
  const map = {
    anxious: { herbs: ["lemonbalm", "lavender", "chamomile"], move: "Slow walk outdoors, eyes on the horizon", mantra: "I am safe in this breath.", bath: "Lavender Epsom soak" },
    tired: { herbs: ["tulsi", "rosemary", "nettle"], move: "Gentle sun salutations by a window", mantra: "I rise like sap in spring.", bath: "Rosemary foot soak" },
    sad: { herbs: ["rose", "lemonbalm", "tulsi"], move: "Dance to one song you loved at 15", mantra: "My heart is a garden; it is allowed to rain.", bath: "Rose petal bath" },
    restless: { herbs: ["valerian", "chamomile", "lavender"], move: "Legs up the wall for 10 minutes", mantra: "I slow down to the speed of trees.", bath: "Chamomile oat bath" },
    radiant: { herbs: ["hibiscus", "calendula", "rose"], move: "Hike or swim — share your energy with the world", mantra: "I shine and I share my light.", bath: "Hibiscus face mist" },
    foggy: { herbs: ["rosemary", "peppermint", "sage"], move: "Brisk 10-minute walk", mantra: "My mind clears like morning mist.", bath: "Peppermint steam" }
  }[mood];
  const sym = {
    none: null, cramps: { herb: "ginger", tip: "Warm ginger compress on the lower belly (Ginger Womb Compress)." }, bloating: { herb: "peppermint", tip: "Peppermint tea after meals; a slow walk." },
    sleep: { herb: "chamomile", tip: "Moonlit Sleep Tea an hour before bed; screens off." }, throat: { herb: "thyme", tip: "Sore Throat Honey Tea." }, skin: { herb: "calendula", tip: "Calendula salve or a chamomile oat bath." }, headache: { herb: "peppermint", tip: "Hydrate; diluted peppermint oil on temples (not for young children)." }
  }[symptom];
  const phases = {
    new: { title: "New Moon · Seed", ritual: "Set one intention and write it on a bay leaf or paper. Plant a seed.", journal: "What do I want to grow this cycle?" },
    waxing: { title: "Waxing Moon · Grow", ritual: "Take one brave action towards your intention.", journal: "What is beginning to sprout in my life?" },
    full: { title: "Full Moon · Bloom", ritual: "Moon bath: sit in moonlight with rose tea. Celebrate what has bloomed.", journal: "What am I proud of? What is illuminated?" },
    waning: { title: "Waning Moon · Release", ritual: "Clear a drawer, a habit or a grudge. Compost it.", journal: "What am I ready to release?" }
  }[phase];
  const herbs = [...new Set([...(sym ? [sym.herb] : []), ...map.herbs])].slice(0, 3).map(BV.herb);
  return { herbs, map, sym, phases };
};

BV.views.oracle = el => {
  const m = BV.moon(), autoPhase = m.idx === 0 ? "new" : m.idx < 4 ? "waxing" : m.idx === 4 ? "full" : "waning";
  el.innerHTML = BV.placeHeader("🌳", "The Oracle Tree", "Heart of Bodyverse · a soft search engine & living library. Every branch leads to knowledge, ritual or remedy.") + `
  <section class="oracle glass">
    <div class="oracle-tree" aria-hidden="true">
      <svg viewBox="0 0 300 220"><defs><radialGradient id="canopy"><stop offset="0" stop-color="var(--leaf-2)"/><stop offset="1" stop-color="var(--leaf-1)"/></radialGradient></defs>
      <path d="M150 220 C 146 170, 140 150, 150 110 M150 160 C 120 140, 100 130, 80 110 M150 150 C 180 130, 205 125, 225 105" stroke="var(--bark)" stroke-width="10" fill="none" stroke-linecap="round"/>
      <circle cx="150" cy="80" r="62" fill="url(#canopy)"/><circle cx="90" cy="95" r="40" fill="url(#canopy)"/><circle cx="215" cy="92" r="42" fill="url(#canopy)"/>
      ${[...Array(16)].map((_, i) => `<circle class="glow-fruit" cx="${70 + (i * 47) % 170}" cy="${50 + (i * 29) % 80}" r="3" style="animation-delay:${i * .3}s"/>`).join("")}</svg>
    </div>
    <h2>🔮 Ask the Oracle</h2>
    <p class="sub">Search every library at once — herbs, organs, symptoms, recipes, compounds, beauty goals, garden topics, wild plants.</p>
    <form id="askForm" class="ask"><input id="askQ" placeholder="Try: sleep, hair thinning, liver, linalool, salve, bloating, poison hemlock…" autocomplete="off"><button class="btn primary">Ask</button></form>
    <div class="chips" id="askChips">${["sleep", "anxiety", "skin glow", "hair", "digestion", "immune", "cramps", "cough", "liver", "inflammation"].map(q => `<button class="chip" data-q="${q}">${q}</button>`).join("")}</div>
    <div id="askOut" class="results"></div>
    <p class="fine">The Oracle searches Bodyverse's own library offline. It is educational, not medical advice — for symptoms that worry you, see a qualified clinician.</p>
  </section>

  <div class="grid cards-4 branches">
    <a class="branch glass" href="#/codex"><span>🌿</span><h3>Leaf Archive</h3><p>Soft herbal database — search by name, body system, preparation and energetics.</p></a>
    <a class="branch glass" href="#/rivers"><span>🌊</span><h3>Roots & Rivers Map</h3><p>Click a body system: biology, imbalance, harmony, herbs and beauty links.</p></a>
    <a class="branch glass" href="#/mirror"><span>🪞</span><h3>Mirror Garden</h3><p>Beauty from within — hyperpigmentation, hair thinning, breakouts and more.</p></a>
    <a class="branch glass spirit-only" href="#/shrine"><span>🕯️</span><h3>Soulbody Shrine</h3><p>Spiritual anatomy — where emotions live in the body.</p></a>
  </div>

  <section class="dose glass" id="dose">
    <h2>🍵 Daily Dose Oracle</h2>
    <p class="sub">Tell the grove how you are. It weaves a gentle ritual for today.</p>
    <form id="doseForm" class="dose-form">
      <label class="field">Mood <select id="dMood"><option value="anxious">Anxious / wired</option><option value="tired">Tired / depleted</option><option value="sad">Tender / sad</option><option value="restless">Restless / can't sleep</option><option value="foggy">Foggy / unfocused</option><option value="radiant">Radiant / energized</option></select></label>
      <label class="field">Body feels <select id="dSym"><option value="none">Pretty good</option><option value="cramps">Cramps</option><option value="bloating">Bloated</option><option value="sleep">Poor sleep</option><option value="throat">Scratchy throat</option><option value="skin">Irritated skin</option><option value="headache">Tension headache</option></select></label>
      <label class="field">Moon phase <select id="dPhase">${["new", "waxing", "full", "waning"].map(p => `<option value="${p}" ${p === autoPhase ? "selected" : ""}>${p[0].toUpperCase() + p.slice(1)}${p === autoPhase ? " (tonight " + m.emoji + ")" : ""}</option>`).join("")}</select></label>
      <button class="btn primary">✨ Receive my Daily Dose</button>
    </form>
    <div id="doseOut"></div>
  </section>
  ${BV.nextPaths([["#/journal", "📔 Log it in Starlit Hollow"], ["#/observatory", "🔭 Moon & Seasons"], ["#/realms", "🜃 Choose your Realm"], ["#/web", "🕸️ Knowledge Web"]])}`;

  const ask = q => {
    const res = BV.searchAll(q), out = BV.$("#askOut");
    out.innerHTML = res.length ? res.map(r => `<a class="result" href="${r.href}"><span class="r-icon">${r.icon}</span><span><strong>${BV.esc(r.title)}</strong><small>${BV.esc(r.type)} · ${BV.esc(r.sub || "")}</small></span></a>`).join("")
      : `<p class="muted">The leaves are quiet on “${BV.esc(q)}”. Try a body part, a feeling, or a plant name.</p>`;
    if (!BV.state.flags.asked) { BV.state.flags.asked = true; BV.addXP(5, "First question to the Oracle"); }
  };
  BV.$("#askForm").onsubmit = e => { e.preventDefault(); ask(BV.$("#askQ").value); };
  BV.$$("#askChips .chip").forEach(c => c.onclick = () => { BV.$("#askQ").value = c.dataset.q; ask(c.dataset.q); });

  BV.$("#doseForm").onsubmit = e => {
    e.preventDefault();
    const d = BV.dailyDose(BV.$("#dMood").value, BV.$("#dSym").value, BV.$("#dPhase").value);
    const realm = BV.state.realm ? BV.REALMS.find(r => r.id === BV.state.realm) : null;
    BV.$("#doseOut").innerHTML = `<div class="dose-card">
      <div class="dose-head"><h3>${d.phases.title}</h3>${realm ? `<span class="chip" style="--c:${realm.color}">${realm.icon} ${realm.name}</span>` : ""}</div>
      <div class="grid cards-3">
        <div class="dose-item"><span>🌙</span><h4>Ritual of the day</h4><p>${d.phases.ritual}${realm ? ` <em>${realm.place} twist:</em> ${realm.ritual}` : ""}</p></div>
        <div class="dose-item"><span>🍵</span><h4>Tea blend</h4><p>${d.herbs.map(h => `<a href="#/codex/${h.id}">${h.name}</a>`).join(" + ")} — 1 tsp each per cup, covered 10 min.</p><p class="fine">Check each herb's safety notes first.</p></div>
        <div class="dose-item"><span>🛁</span><h4>Bath & body</h4><p>${d.map.bath}${d.sym ? `. ${d.sym.tip}` : ""}</p></div>
        <div class="dose-item"><span>🗣️</span><h4>Mantra</h4><p class="handwritten">“${d.map.mantra}”</p></div>
        <div class="dose-item"><span>🧘</span><h4>Movement or rest</h4><p>${d.map.move}</p></div>
        <div class="dose-item"><span>📔</span><h4>Journal prompt</h4><p>${d.phases.journal}</p><a class="link" href="#/journal">Write it →</a></div>
      </div></div>`;
    if (!BV.state.flags.dose || BV.state.flags.doseDay !== BV.todayKey()) { BV.state.flags.dose = true; BV.state.flags.doseDay = BV.todayKey(); BV.addXP(10, "Received your Daily Dose"); }
  };
};

/* ---------- 🔭 CELESTIAL OBSERVATORY + Circle of Seasons ----------------- */
BV.views.observatory = el => {
  const m = BV.moon(), month = new Date().getMonth() + 1, con = BV.DAILY.constellations[month];
  const loc = BV.state.location, sun = loc ? BV.sunTimes(loc.lat, loc.lng) : null;
  const next = [...Array(30)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() + i); return { d, m: BV.moon(d) }; });
  const nextFull = next.find(x => x.m.idx === 4 && x.d > new Date()), nextNew = next.find(x => x.m.idx === 0 && x.d > new Date());
  const cur = BV.season();
  // Circle of Seasons wheel
  const doy = BV.dayOfYear(), ang = doy / 365 * 360;
  const seasonArcs = BV.state.settings.hemisphere === "south" ? ["autumn", "winter", "spring", "summer"] : ["spring", "summer", "autumn", "winter"];
  const arc = (i, r1, r2) => { const a0 = (i * 90 + 59 - 90) * Math.PI / 180, a1 = ((i + 1) * 90 + 59 - 90) * Math.PI / 180; const p = (r, a) => `${150 + r * Math.cos(a)} ${150 + r * Math.sin(a)}`; return `M${p(r2, a0)} A${r2} ${r2} 0 0 1 ${p(r2, a1)} L${p(r1, a1)} A${r1} ${r1} 0 0 0 ${p(r1, a0)}Z`; };
  const sColors = { spring: "#f2b8cf", summer: "#f4d35e", autumn: "#d9822b", winter: "#a9cbe0" };
  el.innerHTML = BV.placeHeader("🔭", "Celestial Observatory", "Moon, sky and the turning wheel of the year.") + `
  <div class="grid cards-2">
    <section class="glass panel night-panel">
      <h2>Tonight's Moon</h2>
      <div class="moon-row">${BV.moonSVG(m.age, 150)}<div><h3>${m.emoji} ${m.name}</h3><p>${Math.round(m.illum * 100)}% illuminated · day ${m.days.toFixed(1)} of 29.5</p>
      <p>Next full moon: <strong>${nextFull ? nextFull.d.toLocaleDateString([], { month: "short", day: "numeric" }) : "—"}</strong><br>Next new moon: <strong>${nextNew ? nextNew.d.toLocaleDateString([], { month: "short", day: "numeric" }) : "—"}</strong></p></div></div>
      <div class="moon-strip">${next.slice(0, 14).map(x => `<span title="${x.d.toDateString()} · ${x.m.name}">${x.m.emoji}<small>${x.d.getDate()}</small></span>`).join("")}</div>
      <p class="fine spirit-only">Gardeners' folklore: sow leafy crops on the waxing moon, roots on the waning moon. (Traditional practice; evidence is limited.)</p>
    </section>
    <section class="glass panel night-panel">
      <h2>✨ Constellation of the Night</h2>
      <div class="con-art">${BV.photo(con.replace(/ /g, "_") === "Boötes" ? "Boötes" : con.replace(/ /g, "_"), "wide")}</div>
      <h3>${con}</h3><p>${BV.DAILY.constellationLore[con]}</p>
      <h3>☀️ Sun</h3>
      ${sun ? `<p>Sunrise <strong>${BV.fmtTime(sun.rise)}</strong> · Sunset <strong>${BV.fmtTime(sun.set)}</strong> · Daylight ${((sun.set - sun.rise) / 36e5).toFixed(1)} h</p>` : `<p>Share your location in the <a href="#/earth">Earth Atlas</a> to see your sunrise & sunset.</p>`}
    </section>
  </div>
  <section class="glass panel">
    <h2>🎡 Circle of Seasons</h2><p class="sub">The wheel turns with the real calendar. The golden needle is today. Tap a season.</p>
    <div class="wheel-wrap">
      <svg class="wheel" viewBox="0 0 300 300">
        ${seasonArcs.map((s, i) => `<path class="wheel-seg ${s === cur ? "cur" : ""}" data-s="${s}" d="${arc(i, 58, 140)}" fill="${sColors[s]}"/>`).join("")}
        ${[...Array(12)].map((_, i) => { const a = (i * 30 - 90 + 15) * Math.PI / 180; return `<text x="${150 + 124 * Math.cos(a)}" y="${150 + 124 * Math.sin(a) + 4}" class="wheel-month">${["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}</text>`; }).join("")}
        ${seasonArcs.map((s, i) => { const a = ((i + .5) * 90 + 59 - 90) * Math.PI / 180; return `<text x="${150 + 92 * Math.cos(a)}" y="${150 + 92 * Math.sin(a) + 8}" class="wheel-icon">${BV.SEASONS[s].icon}</text>`; }).join("")}
        <circle cx="150" cy="150" r="56" fill="var(--surface-2)" stroke="var(--line)"/>
        <g class="needle" style="transform:rotate(${ang}deg)"><line x1="150" y1="150" x2="150" y2="14" stroke="#d8b45a" stroke-width="3" stroke-linecap="round"/><circle cx="150" cy="14" r="5" fill="#d8b45a"/></g>
        <text x="150" y="146" class="wheel-center">${BV.SEASONS[cur].name}</text><text x="150" y="164" class="wheel-center small">${new Date().toLocaleDateString([], { month: "short", day: "numeric" })}</text>
      </svg>
      <div id="seasonInfo" class="season-info"></div>
    </div>
  </section>
  ${BV.nextPaths([["#/oracle", "🍵 Daily Dose (moon-aware)"], ["#/journal/cycle", "🌙 Moonwatcher's Journal"], ["#/garden", "🌱 Seasonal garden calendar"], ["#/earth", "🌎 Earth Atlas"]])}`;
  const show = s => {
    const x = BV.SEASONS[s];
    BV.$("#seasonInfo").innerHTML = `<h3>${x.icon} ${x.name}</h3><p><strong>Element:</strong> ${x.element} · <strong>Focus:</strong> ${x.focus}</p>
    <p><strong>Herbs:</strong> ${x.herbs.map(h => `<a href="#/codex/${h}">${BV.herb(h).name}</a>`).join(", ")}</p><p><strong>Foods:</strong> ${x.foods}</p>
    <p class="spirit-only"><strong>Rituals:</strong> ${x.rituals}</p><p><strong>Cosmic support:</strong> ${x.cosmic}</p><p class="fine">${x.visual}</p>`;
  };
  show(cur); BV.$$(".wheel-seg", el).forEach(p => p.onclick = () => show(p.dataset.s));
};

/* ---------- 🌎 EARTH ATLAS — live dashboard, map, Digital Twin Earth ----- */
BV.loadScript = src => new Promise((res, rej) => { if (BV.$(`script[src="${src}"]`)) return res(); const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
BV.loadCSS = href => { if (!BV.$(`link[href="${href}"]`)) { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = href; document.head.appendChild(l); } };

BV.views.earth = (el, [tab = "live"]) => {
  el.innerHTML = BV.placeHeader("🌎", "Earth Atlas", "Your living world — real-time conditions, plants blooming near you, and a Digital Twin of Earth.") + `
  <div class="tabs"><a class="tab ${tab === "live" ? "on" : ""}" href="#/earth/live">🌦️ Environmental Dashboard</a><a class="tab ${tab === "map" ? "on" : ""}" href="#/earth/map">🗺️ Nearby Nature Map</a><a class="tab ${tab === "globe" ? "on" : ""}" href="#/earth/globe">🌐 Digital Twin Earth</a></div>
  <div id="earthBody"></div>`;
  const body = BV.$("#earthBody");
  if (tab === "globe") return BV.globe(body);
  const loc = BV.state.location;
  if (!loc) {
    body.innerHTML = `<section class="glass panel center"><h2>📍 Share your location to bring the world alive</h2>
      <p>Bodyverse will show your weather, UV, air quality, pollen, soil temperature & moisture, sunrise and sunset, moon, plants observed near you, botanical & community gardens, farmers markets and nature reserves.</p>
      <p class="fine">Your location is stored only in this browser. Data comes from free open services: Open-Meteo (weather & air), iNaturalist (plant observations), OpenStreetMap (places).</p>
      <button class="btn primary" id="locBtn">📍 Use my location</button></section>`;
    BV.$("#locBtn").onclick = () => {
      if (!navigator.geolocation) return BV.toast("Location isn't available in this browser");
      navigator.geolocation.getCurrentPosition(p => { BV.state.location = { lat: +p.coords.latitude.toFixed(3), lng: +p.coords.longitude.toFixed(3) }; BV.state.settings.hemisphere = p.coords.latitude < 0 ? "south" : "north"; BV.save(); BV.applySeason(); BV.addXP(10, "Rooted your location"); BV.route(); },
        () => BV.toast("Location permission was declined"));
    };
    return;
  }
  if (tab === "map") return BV.nearbyMap(body, loc);
  BV.dashboard(body, loc);
};

BV.dashboard = async (body, loc) => {
  const imp = BV.state.settings.units === "imperial";
  const m = BV.moon(), sun = BV.sunTimes(loc.lat, loc.lng);
  body.innerHTML = `<div class="dash-grid" id="dash"><div class="glass tile wide"><p class="muted">Listening to the sky…</p></div></div>
    <p class="fine">Weather & air: <a href="https://open-meteo.com" target="_blank" rel="noopener">Open-Meteo</a> (CC BY 4.0). Pollen data is available mainly for Europe. <button class="link-btn" id="forget">Forget my location</button></p>`;
  BV.$("#forget").onclick = () => { BV.state.location = null; BV.save(); BV.route(); };
  const u = imp ? "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch" : "";
  try {
    const [w, a, place] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index&hourly=soil_temperature_0cm,soil_moisture_0_to_1cm&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max&timezone=auto&forecast_days=7${u}`).then(r => r.json()),
      fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${loc.lat}&longitude=${loc.lng}&current=us_aqi,pm2_5,grass_pollen,birch_pollen,ragweed_pollen,alder_pollen,olive_pollen,mugwort_pollen&timezone=auto`).then(r => r.json()).catch(() => null),
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${loc.lat}&longitude=${loc.lng}&localityLanguage=en`).then(r => r.json()).catch(() => null)
    ]);
    const c = w.current, d = w.daily, T = imp ? "°F" : "°C";
    const hIdx = Math.max(0, (w.hourly?.time || []).findIndex(t => t >= c.time.slice(0, 13)));
    const soilT = w.hourly?.soil_temperature_0cm?.[hIdx], soilM = w.hourly?.soil_moisture_0_to_1cm?.[hIdx];
    const wx = code => ({ 0: ["☀️", "Clear"], 1: ["🌤️", "Mostly clear"], 2: ["⛅", "Partly cloudy"], 3: ["☁️", "Overcast"], 45: ["🌫️", "Fog"], 48: ["🌫️", "Rime fog"], 51: ["🌦️", "Light drizzle"], 53: ["🌦️", "Drizzle"], 55: ["🌧️", "Heavy drizzle"], 61: ["🌧️", "Light rain"], 63: ["🌧️", "Rain"], 65: ["🌧️", "Heavy rain"], 71: ["🌨️", "Light snow"], 73: ["🌨️", "Snow"], 75: ["❄️", "Heavy snow"], 80: ["🌦️", "Showers"], 81: ["🌧️", "Showers"], 82: ["⛈️", "Violent showers"], 95: ["⛈️", "Thunderstorm"], 96: ["⛈️", "Storm & hail"], 99: ["⛈️", "Storm & hail"] }[code] || ["🌡️", "—"]);
    const uvTxt = uv => uv < 3 ? "Low" : uv < 6 ? "Moderate — hat & SPF at midday" : uv < 8 ? "High — SPF, shade 11–3" : uv < 11 ? "Very high" : "Extreme";
    const aqi = a?.current?.us_aqi, aqiTxt = aqi == null ? "—" : aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : aqi <= 150 ? "Unhealthy for sensitive groups" : "Unhealthy";
    const pollen = a?.current ? ["grass_pollen", "birch_pollen", "ragweed_pollen", "alder_pollen", "olive_pollen", "mugwort_pollen"].map(k => [k.replace("_pollen", ""), a.current[k]]).filter(([, v]) => v != null) : [];
    const fire = c.relative_humidity_2m < 25 && c.wind_speed_10m > (imp ? 12 : 20) ? "Elevated — check local authorities" : c.relative_humidity_2m < 35 ? "Moderate" : "Low (estimated)";
    const city = place ? [place.city || place.locality, place.principalSubdivision, place.countryName].filter(Boolean).join(", ") : `${loc.lat}, ${loc.lng}`;
    const tip = c.temperature_2m > (imp ? 90 : 32) ? "Heat safety: harvest herbs at dawn, hydrate, rest in shade." : c.precipitation > 0 ? "Rain today — perfect for checking where water pools in your garden." : soilT != null && soilT > (imp ? 50 : 10) ? "Soil is warm enough for many seeds to germinate." : "Cool soil — plan, prune and dream of seeds.";
    BV.$("#dash").innerHTML = `
      <div class="glass tile wide hero-tile"><div><p class="eyebrow">📍 ${BV.esc(city)}</p><h2>${wx(c.weather_code)[0]} ${Math.round(c.temperature_2m)}${T} · ${wx(c.weather_code)[1]}</h2><p>Feels like ${Math.round(c.apparent_temperature)}${T}. ${tip}</p></div>${BV.moonSVG(m.age, 90)}</div>
      <div class="glass tile"><span class="t-label">💧 Humidity</span><b>${c.relative_humidity_2m}%</b></div>
      <div class="glass tile"><span class="t-label">🌧️ Rainfall now</span><b>${c.precipitation} ${imp ? "in" : "mm"}</b></div>
      <div class="glass tile"><span class="t-label">🌬️ Wind</span><b>${Math.round(c.wind_speed_10m)} ${imp ? "mph" : "km/h"}</b></div>
      <div class="glass tile"><span class="t-label">🕶️ UV index</span><b>${c.uv_index?.toFixed?.(1) ?? "—"}</b><small>${uvTxt(c.uv_index || 0)}</small></div>
      <div class="glass tile"><span class="t-label">🫁 Air quality (US AQI)</span><b>${aqi ?? "—"}</b><small>${aqiTxt}</small></div>
      <div class="glass tile"><span class="t-label">🌡️ Soil temperature (surface)</span><b>${soilT != null ? Math.round(soilT) + T : "—"}</b></div>
      <div class="glass tile"><span class="t-label">🪱 Soil moisture (0–1 cm)</span><b>${soilM != null ? Math.round(soilM * 100) + "%" : "—"}</b><small>volumetric water</small></div>
      <div class="glass tile"><span class="t-label">🌅 Sunrise · Sunset</span><b>${BV.fmtTime(sun?.rise)} · ${BV.fmtTime(sun?.set)}</b></div>
      <div class="glass tile"><span class="t-label">${m.emoji} Moon</span><b>${m.name}</b><small>${Math.round(m.illum * 100)}% lit</small></div>
      <div class="glass tile"><span class="t-label">🔥 Fire danger</span><b>${fire}</b><small>Estimated from humidity & wind</small></div>
      <div class="glass tile"><span class="t-label">🌾 Pollen</span>${pollen.length ? pollen.map(([k, v]) => `<small>${k}: <b>${Math.round(v)}</b> grains/m³</small>`).join("") : "<small>Not available for this region</small>"}</div>
      <div class="glass tile"><span class="t-label">🗺️ Zone & ecoregion</span><small>USDA hardiness zones (US): <a href="https://planthardiness.ars.usda.gov" target="_blank" rel="noopener">USDA map ↗</a></small><small>Ecoregions: <a href="https://ecoregions.appspot.com" target="_blank" rel="noopener">Resolve Ecoregions ↗</a></small><small>Drought (US): <a href="https://droughtmonitor.unl.edu" target="_blank" rel="noopener">Drought Monitor ↗</a></small></div>
      <div class="glass tile wide"><span class="t-label">📅 7-day forecast</span><div class="forecast">${d.time.map((t, i) => `<div><small>${new Date(t + "T12:00").toLocaleDateString([], { weekday: "short" })}</small><span>${wx(d.weather_code[i])[0]}</span><b>${Math.round(d.temperature_2m_max[i])}°</b><small>${Math.round(d.temperature_2m_min[i])}°</small><small>💧${d.precipitation_sum[i]}</small></div>`).join("")}</div></div>`;
  } catch (e) {
    BV.$("#dash").innerHTML = `<div class="glass tile wide"><p>Couldn't reach the weather spirits right now — check your connection. 🌧️</p></div>`;
  }
};

BV.nearbyMap = async (body, loc) => {
  body.innerHTML = `<div class="glass panel"><div id="leaf" class="leaf-map"></div>
    <div class="legend"><span>🌿 Plants observed nearby (last 30 days)</span><span>🌷 Botanical / community gardens</span><span>🧺 Farmers markets</span><span>🌲 Nature reserves & parks</span></div></div>
    <h2>🌸 Blooming & growing near you</h2><p class="sub">Real research-grade observations by naturalists on iNaturalist within 15 km.</p><div class="grid cards-4" id="obs"><p class="muted">Looking around…</p></div>`;
  BV.loadCSS("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
  try { await BV.loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"); } catch (e) { BV.$("#leaf").innerHTML = "<p class='muted'>Map library couldn't load.</p>"; }
  let map;
  if (window.L) {
    map = L.map("leaf").setView([loc.lat, loc.lng], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors", maxZoom: 18 }).addTo(map);
    L.circleMarker([loc.lat, loc.lng], { radius: 8, color: "#d8b45a", fillOpacity: .9 }).addTo(map).bindPopup("You are here");
  }
  const icon = e => window.L && L.divIcon({ className: "emoji-pin", html: e, iconSize: [26, 26] });
  // iNaturalist plant observations
  const d30 = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  fetch(`https://api.inaturalist.org/v1/observations?lat=${loc.lat}&lng=${loc.lng}&radius=15&iconic_taxa=Plantae,Fungi&quality_grade=research&d1=${d30}&per_page=24&order_by=observed_on&photos=true`)
    .then(r => r.json()).then(j => {
      const res = j.results || [];
      BV.$("#obs").innerHTML = res.length ? res.map(o => {
        const t = o.taxon || {}, ph = o.photos?.[0]?.url?.replace("square", "medium"), codex = BV.HERBS.find(h => t.name && h.latin.toLowerCase().startsWith(t.name.toLowerCase().split(" ").slice(0, 2).join(" ")));
        if (map && o.geojson) L.marker([o.geojson.coordinates[1], o.geojson.coordinates[0]], { icon: icon(t.iconic_taxon_name === "Fungi" ? "🍄" : "🌿") }).addTo(map).bindPopup(`<b>${BV.esc(t.preferred_common_name || t.name)}</b><br><i>${BV.esc(t.name)}</i>`);
        return `<a class="obs-card glass" href="${codex ? "#/codex/" + codex.id : `https://www.inaturalist.org/observations/${o.id}`}" ${codex ? "" : 'target="_blank" rel="noopener"'}>${ph ? `<img src="${ph}" alt="${BV.esc(t.name)}" loading="lazy">` : ""}<div><strong>${BV.esc(t.preferred_common_name || t.name)}</strong><small><em>${BV.esc(t.name)}</em> · ${o.observed_on || ""}</small>${codex ? '<span class="chip">In the Codex</span>' : ""}</div></a>`;
      }).join("") : "<p class='muted'>No recent observations here — be the first! Upload one on iNaturalist.</p>";
    }).catch(() => BV.$("#obs").innerHTML = "<p class='muted'>Couldn't reach iNaturalist.</p>");
  // OpenStreetMap places via Overpass
  const q = `[out:json][timeout:20];(nwr["garden:type"~"botanical|community"](around:20000,${loc.lat},${loc.lng});nwr["leisure"="garden"]["garden:type"](around:20000,${loc.lat},${loc.lng});nwr["amenity"="marketplace"](around:20000,${loc.lat},${loc.lng});nwr["leisure"="nature_reserve"](around:20000,${loc.lat},${loc.lng}););out center 60;`;
  fetch("https://overpass-api.de/api/interpreter", { method: "POST", body: "data=" + encodeURIComponent(q) }).then(r => r.json()).then(j => {
    if (!map) return;
    (j.elements || []).forEach(e => {
      const lat = e.lat || e.center?.lat, lng = e.lon || e.center?.lon, tg = e.tags || {}; if (!lat) return;
      const ic = tg.amenity === "marketplace" ? "🧺" : tg.leisure === "nature_reserve" ? "🌲" : "🌷";
      L.marker([lat, lng], { icon: icon(ic) }).addTo(map).bindPopup(`<b>${BV.esc(tg.name || "Unnamed")}</b><br>${BV.esc(tg["garden:type"] || tg.leisure || tg.amenity || "")}`);
    });
  }).catch(() => { });
};

BV.globe = async body => {
  body.innerHTML = `<div class="globe-wrap glass"><div id="globe"></div><div class="globe-panel" id="globeInfo"><h3>🌐 Digital Twin Earth</h3><p>Drag to spin, scroll to zoom. Tap a glowing point to explore native medicinal plants, healing traditions and ecosystems.</p><p class="fine">Traditions are presented respectfully and educationally. Much of this knowledge belongs to living communities — learn from them, credit them, and support their land and cultural rights.</p></div></div>`;
  try { await BV.loadScript("https://cdn.jsdelivr.net/npm/globe.gl@2.45.3/dist/globe.gl.min.js"); } catch (e) { const gl = BV.$("#globe"); if (gl) gl.innerHTML = "<p class='muted pad'>The globe needs an internet connection to load.</p>"; return; }
  const g = BV.$("#globe"), info = BV.$("#globeInfo");
  if (!g || !window.Globe) return; // user navigated away while loading
  const show = r => { info.innerHTML = `<h3>${r.name}</h3><p><strong>Tradition:</strong> ${r.tradition}</p><p><strong>Ecosystems:</strong> ${r.ecosystem}</p><p><strong>Native & traditional plants:</strong></p><div class="chips">${r.plants.map(p => { const h = BV.HERBS.find(x => p.toLowerCase().includes(x.name.toLowerCase().split(" ").pop())); return h ? `<a class="chip" href="#/codex/${h.id}">${p}</a>` : `<span class="chip alt">${p}</span>`; }).join("")}</div><p class="fine">${r.note}</p>`; };
  const world = Globe()(g)
    .globeImageUrl("https://cdn.jsdelivr.net/npm/three-globe@2.42.0/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("https://cdn.jsdelivr.net/npm/three-globe@2.42.0/example/img/earth-topology.png")
    .backgroundImageUrl("https://cdn.jsdelivr.net/npm/three-globe@2.42.0/example/img/night-sky.png")
    .width(g.clientWidth).height(Math.max(380, Math.min(620, innerHeight * .7)))
    .pointsData(BV.REGIONS).pointLat("lat").pointLng("lng").pointColor(() => "#9be7a8").pointAltitude(0.06).pointRadius(1.1)
    .pointLabel(r => `<div class="globe-label">${r.name}<br><small>${r.tradition}</small></div>`)
    .ringsData(BV.REGIONS).ringLat("lat").ringLng("lng").ringColor(() => t => `rgba(155,231,168,${1 - t})`).ringMaxRadius(5).ringPropagationSpeed(1.5).ringRepeatPeriod(1600)
    .onPointClick(r => { show(r); world.pointOfView({ lat: r.lat, lng: r.lng, altitude: 1.6 }, 1200); });
  if (BV.state.location) world.pointOfView({ lat: BV.state.location.lat, lng: BV.state.location.lng, altitude: 2.2 });
  world.controls().autoRotate = true; world.controls().autoRotateSpeed = .35;
  addEventListener("resize", () => world.width(g.clientWidth), { once: true });
};

/* ---------- 🜃 THE REALMS ----------------------------------------------- */
BV.views.realms = el => {
  el.innerHTML = BV.placeHeader("🜃", "The Realms", "Four elemental healer paths. Your path shapes ritual recommendations, your avatar's aura and your healing quests.") + `
  <div class="grid cards-2 realms">${BV.REALMS.map(r => `
    <article class="realm glass ${BV.state.realm === r.id ? "chosen" : ""}" style="--realm:${r.color};--aura:${r.aura}">
      <div class="realm-glyph">${r.icon}</div>
      <h2>${r.name}</h2><p class="eyebrow">${r.place}</p>
      <p><strong>Focus:</strong> ${r.focus}</p>
      <p><strong>Systems:</strong> ${r.systems.map(s => `<a href="#/rivers/${s}">${BV.system(s).name}</a>`).join(", ")}</p>
      <div class="chips">${r.herbs.map(h => `<a class="chip" href="#/codex/${h}">${BV.herb(h).name}</a>`).join("")}</div>
      <p class="spirit-only"><strong>Ritual:</strong> ${r.ritual}</p>
      <p><strong>Healing quest:</strong> ${r.quest}</p>
      <button class="btn ${BV.state.realm === r.id ? "ghost" : "primary"}" data-realm="${r.id}">${BV.state.realm === r.id ? "✓ Your path" : "Walk this path"}</button>
    </article>`).join("")}</div>
  <p class="center fine">You can change paths anytime — or blend them. Real healers rarely belong to only one element.</p>
  ${BV.nextPaths([["#/avatar", "🧝 See your aura at Mirror Lake"], ["#/oracle", "🍵 Daily Dose"], ["#/path", "🌀 Spiral Path quests"]])}`;
  BV.$$("[data-realm]", el).forEach(b => b.onclick = () => {
    const r = BV.REALMS.find(x => x.id === b.dataset.realm), first = !BV.state.realm;
    BV.state.realm = r.id; BV.state.avatar.aura = r.aura; BV.state.avatar.element = r.id; BV.save();
    if (first) BV.addXP(20, `Chose the ${r.name}`); else BV.toast(`${r.icon} You now walk the ${r.name}`);
    BV.checkAchievements(); BV.renderHUD(); BV.route();
  });
};

/* ---------- 🧝 MIRROR LAKE — create your healer ------------------------ */
BV.views.avatar = el => {
  const a = BV.state.avatar;
  const opt = (k, vals) => vals.map(([v, label]) => `<button class="swatch ${a[k] === v ? "on" : ""}" data-k="${k}" data-v="${v}" ${v.startsWith("#") ? `style="--sw:${v}"` : ""} title="${label}">${v.startsWith("#") ? "" : label}</button>`).join("");
  el.innerHTML = BV.placeHeader("🧝", "Mirror Lake", "Create your healer. Your aura shifts with your Realm and your cycle.") + `
  <div class="avatar-studio">
    <div class="lake glass"><div class="lake-reflect">${BV.avatarSVG(a, 260)}</div><input id="avName" value="${BV.esc(a.name)}" maxlength="24" aria-label="Healer name"><button class="btn primary" id="avSave">Save my healer</button></div>
    <div class="glass panel controls">
      <h3>Skin</h3><div class="swatches">${opt("skin", [["#f6d7c3", "Fair"], ["#e8b796", "Light"], ["#c68e64", "Tan"], ["#a26a42", "Brown"], ["#7a4a2c", "Deep brown"], ["#4f2f1c", "Ebony"]])}</div>
      <h3>Hair style</h3><div class="swatches">${opt("hairStyle", [["long", "Long"], ["bun", "Bun"], ["curls", "Curls"], ["short", "Short"], ["braids", "Braids"]])}</div>
      <h3>Hair colour</h3><div class="swatches">${opt("hair", [["#1d1410", "Black"], ["#3b2416", "Dark brown"], ["#7b4a26", "Auburn"], ["#c98c4a", "Honey"], ["#e9d18c", "Blonde"], ["#b9b4c9", "Silver"], ["#7fbf6a", "Moss"], ["#c48bd6", "Lilac"]])}</div>
      <h3>Robe</h3><div class="swatches">${opt("outfit", [["#3f6b3a", "Forest"], ["#5b4bb7", "Twilight"], ["#9b3d3d", "Ember"], ["#3d6f8f", "Tide"], ["#c9a86b", "Wheat"], ["#e9e2cf", "Linen"]])}</div>
      <h3>Aura</h3><div class="swatches">${opt("aura", [["#9be7a8", "Verdant"], ["#ffb36b", "Ember"], ["#8fc4e8", "Moonwater"], ["#bfe3f0", "Whisperwind"], ["#f7c6d9", "Rose"], ["#cdb4ff", "Amethyst"], ["#fff3a0", "Sunlit"]])}</div>
      <h3>Element</h3><div class="swatches">${opt("element", [["earth", "🜃 Earth"], ["air", "🜁 Air"], ["fire", "🜂 Fire"], ["water", "🜄 Water"]])}</div>
      <h3>Toolset</h3><div class="swatches">${opt("tool", [["mortar", "🥣 Mortar"], ["staff", "🪄 Staff"], ["basket", "🧺 Basket"], ["crystal", "🔮 Crystal"], ["book", "📖 Grimoire"], ["lantern", "🏮 Lantern"]])}</div>
    </div>
  </div>`;
  BV.$$(".swatch", el).forEach(b => b.onclick = () => { a[b.dataset.k] = b.dataset.v; BV.save(); BV.views.avatar(el); BV.renderHUD(); });
  BV.$("#avName").oninput = e => { a.name = e.target.value || "Healer"; BV.save(); };
  BV.$("#avSave").onclick = () => { if (!BV.state.avatarSaved) { BV.state.avatarSaved = true; BV.addXP(15, "Created your healer"); } else BV.toast("Your reflection shimmers ✨"); BV.save(); BV.renderHUD(); };
};

/* ---------- 🌀 THE SPIRAL PATH — quests, titles, badges, collections --- */
BV.views.path = el => {
  const s = BV.state, t = BV.titleFor(s.xp);
  el.innerHTML = BV.placeHeader("🌀", "The Spiral Path", "Gentle quests that unlock badges, rituals and deeper content. No stress, just progress.") + `
  <section class="glass panel">
    <h2>${t.icon} ${t.name} · Level ${BV.level(s.xp)} · ${s.xp} XP · 🔥 ${s.streak}-day streak</h2>
    <div class="title-road">${BV.TITLES.map(x => `<div class="title-step ${s.xp >= x.xp ? "got" : ""}"><span>${x.icon}</span><b>${x.name}</b><small>${x.xp} XP</small></div>`).join("")}</div>
    <p class="fine">Earn XP by reading herb & organ pages, completing the daily lesson, crafting in the Apothecary, identifying plants, solving trials, journaling and returning each day.</p>
  </section>
  <h2>🗝️ Healing Quests</h2>
  <div class="grid cards-3">${BV.QUESTS.map(q => { const done = q.steps.filter(([, f]) => f(s)).length; return `<article class="quest glass ${done === q.steps.length ? "done" : ""}"><span class="chip alt">${q.cat}</span><h3>${q.name}</h3><ol>${q.steps.map(([n, f]) => `<li class="${f(s) ? "ok" : ""}">${f(s) ? "✅" : "⬜"} ${n}</li>`).join("")}</ol><div class="xpbar"><i style="width:${done / q.steps.length * 100}%"></i></div><p class="fine">🎁 ${q.reward}</p></article>`; }).join("")}</div>
  <h2>🏅 Achievements · ${s.achievements.length}/${BV.ACHIEVEMENTS.length}</h2>
  <div class="badges">${BV.ACHIEVEMENTS.map(a => `<div class="badge-tile ${s.achievements.includes(a.id) ? "got" : ""}" title="${a.desc}"><span>${a.icon}</span><b>${a.name}</b><small>${a.desc}</small></div>`).join("")}</div>
  <h2>🧺 Collections</h2>
  <div class="grid cards-4">
    <div class="glass panel"><h3>🌿 Herbs studied · ${s.herbsRead.length}/${BV.HERBS.length}</h3><div class="collect">${BV.HERBS.map(h => `<a href="#/codex/${h.id}" class="cdot ${s.herbsRead.includes(h.id) ? "got" : ""}" title="${h.name}">${s.herbsRead.includes(h.id) ? "🌿" : "·"}</a>`).join("")}</div></div>
    <div class="glass panel"><h3>🫀 Organs explored · ${s.organsRead.length}/${Object.keys(BV.ORGANS).length}</h3><div class="collect">${Object.entries(BV.ORGANS).map(([id, o]) => `<a href="#/atlas/${id}" class="cdot ${s.organsRead.includes(id) ? "got" : ""}" title="${o.name}">${s.organsRead.includes(id) ? o.emoji : "·"}</a>`).join("")}</div></div>
    <div class="glass panel"><h3>🧪 Preparations discovered · ${s.crafted.length}</h3><div class="collect">${BV.RECIPES.map(r => `<span class="cdot ${s.crafted.includes(r.id) ? "got" : ""}" title="${s.crafted.includes(r.id) ? r.name : "Undiscovered"}">${s.crafted.includes(r.id) ? BV.PREP_TYPES[r.type].icon : "?"}</span>`).join("")}</div></div>
    <div class="glass panel"><h3>🔍 Field identifications · ${s.ids}</h3><p>Play the identification game in the <a href="#/forager/game">Forager's Field</a>.</p><h3>🗺️ Places · ${s.places.length}/${BV.PLACES.length}</h3><div class="collect">${BV.PLACES.map(p => `<a href="${p.route}" class="cdot ${s.places.includes(p.id) ? "got" : ""}" title="${p.name}">${s.places.includes(p.id) ? p.icon : "·"}</a>`).join("")}</div></div>
  </div>`;
};

/* ---------- 📷 NATURE SCANNER ------------------------------------------- */
BV.views.scanner = el => {
  const key = BV.state.settings.plantnetKey;
  el.innerHTML = BV.placeHeader("📷", "Nature Scanner", "Scan plants, flowers, leaves, bark and fruit — and follow the thread into the Codex.") + `
  <section class="glass panel scanner">
    <div class="scan-frame" id="scanFrame"><div class="scan-line"></div><p>📸 Take or upload a clear photo of one plant part</p></div>
    <div class="row gap wrap"><label class="btn primary">📷 Camera / Upload<input type="file" accept="image/*" capture="environment" id="scanFile" hidden></label>
      <select id="organ" class="select"><option value="auto">Auto</option><option value="leaf">Leaf</option><option value="flower">Flower</option><option value="fruit">Fruit / seed</option><option value="bark">Bark</option></select></div>
    <div id="scanOut"></div>
    ${key ? `<p class="fine">Powered by Pl@ntNet with your API key. Results include confidence scores — always confirm with field guides.</p>` : `<div class="note"><strong>Connect real AI identification:</strong> add a free <a href="https://my.plantnet.org" target="_blank" rel="noopener">Pl@ntNet API key</a> in ⚙️ Settings to identify plants from photos. Without a key, the scanner shows your photo and helps you match it manually against the Codex. Birds, insects, mushrooms and animal tracks are on the roadmap (they need dedicated models such as iNaturalist's).</div>`}
  </section>
  <section class="glass panel"><h3>⚠️ Scanner safety</h3><p>AI can be confidently wrong. Never eat or use a plant based only on an app. Check look-alikes in the <a href="#/forager">Forager's Field Guide</a>.</p></section>`;
  BV.$("#scanFile").onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    const url = URL.createObjectURL(f); BV.$("#scanFrame").innerHTML = `<img src="${url}" alt="Your photo"><div class="scan-line"></div>`;
    const out = BV.$("#scanOut");
    if (!key) { out.innerHTML = `<h3>Match it yourself</h3><p>Compare with these Codex plants:</p><div class="grid cards-4">${BV.HERBS.slice(0, 8).map(h => `<a class="mini-card glass" href="#/codex/${h.id}">${BV.photo(h.wiki)}<b>${h.name}</b></a>`).join("")}</div>`; BV.hydrate(out); return; }
    out.innerHTML = `<p class="muted">🔍 Consulting the botanists…</p>`;
    try {
      const fd = new FormData(); fd.append("images", f); fd.append("organs", BV.$("#organ").value);
      const r = await fetch(`https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(key)}&include-related-images=true&lang=en`, { method: "POST", body: fd });
      const j = await r.json(); if (!r.ok) throw new Error(j.message || "Identification failed");
      out.innerHTML = `<h3>Possible matches</h3>` + j.results.slice(0, 5).map(res => {
        const sp = res.species, sci = sp.scientificNameWithoutAuthor, codex = BV.HERBS.find(h => h.latin.toLowerCase().includes(sci.toLowerCase().split(" ").slice(0, 2).join(" "))) ;
        const poison = BV.FORAGE.find(x => x.deadly && x.latin.toLowerCase() === sci.toLowerCase());
        return `<div class="match glass"><div class="conf" style="--p:${Math.round(res.score * 100)}"><span>${Math.round(res.score * 100)}%</span></div><div><strong>${BV.esc(sp.commonNames?.[0] || sci)}</strong><br><em>${BV.esc(sci)}</em> · ${BV.esc(sp.family?.scientificNameWithoutAuthor || "")}
          ${poison ? `<p class="danger">☠️ Potentially deadly — see <a href="#/forager/${poison.id}">${poison.name}</a></p>` : ""}${codex ? `<p><a class="chip" href="#/codex/${codex.id}">Open ${codex.name} in the Codex →</a></p>` : ""}</div></div>`;
      }).join("");
      BV.state.ids += 1; BV.save(); BV.addXP(10, "Scanned a plant");
    } catch (err) { out.innerHTML = `<p class="danger">${BV.esc(err.message)}</p>`; }
  };
};
