/* ==========================================================================
   BODYVERSE · CORE — state, progression, router, seasons, ambience, images
   ========================================================================== */
window.BV = window.BV || {};
BV.views = {};

/* ---------- tiny helpers ------------------------------------------------- */
BV.$ = (s, r = document) => r.querySelector(s);
BV.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
BV.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
BV.herb = id => BV.HERBS.find(h => h.id === id);
BV.system = id => BV.SYSTEMS.find(s => s.id === id);
BV.compound = id => BV.COMPOUNDS.find(c => c.id === id);
BV.todayKey = (d = new Date()) => d.toISOString().slice(0, 10);
BV.dayOfYear = (d = new Date()) => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
BV.pick = (arr, salt = 0) => arr[(BV.dayOfYear() + salt) % arr.length];
BV.store = {
  get(k, f) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage full or blocked */ } }
};

/* ---------- state ---------------------------------------------------------- */
const DEFAULT_STATE = {
  xp: 0, streak: 0, lastVisit: null, herbsRead: [], organsRead: [], crafted: [], shelf: [],
  quizCorrect: 0, ids: 0, journal: [], favorites: [], realm: null, avatarSaved: false,
  avatar: { skin: "#c68e64", hair: "#3b2416", hairStyle: "long", outfit: "#3f6b3a", aura: "#9be7a8", element: "earth", tool: "mortar", name: "Healer" },
  webHops: 0, cases: 0, places: [], flags: {}, achievements: [], dailyClaim: null,
  cycle: { logs: {}, lastStart: null, length: 28 },
  settings: { season: "auto", hemisphere: "north", sound: false, spirit: true, motion: true, plantnetKey: "", units: "metric" },
  location: null
};
BV.state = Object.assign(structuredClone(DEFAULT_STATE), BV.store.get("bv-state", {}));
BV.state.settings = Object.assign({}, DEFAULT_STATE.settings, BV.state.settings);
BV.state.flags = BV.state.flags || {};
BV.save = () => BV.store.set("bv-state", BV.state);

/* ---------- progression ---------------------------------------------------- */
BV.titleFor = xp => { let t = BV.TITLES[0]; for (const x of BV.TITLES) if (xp >= x.xp) t = x; return t; };
BV.nextTitle = xp => BV.TITLES.find(t => t.xp > xp);
BV.level = xp => Math.floor(Math.sqrt(xp / 25)) + 1;

BV.addXP = (n, reason) => {
  const before = BV.titleFor(BV.state.xp), lvlBefore = BV.level(BV.state.xp);
  BV.state.xp += n; BV.save();
  BV.toast(`+${n} XP · ${reason}`, "xp");
  const after = BV.titleFor(BV.state.xp);
  if (after.name !== before.name) BV.celebrate(`${after.icon} New title: ${after.name}`, "Your roots grow deeper. New areas of the grove glow brighter.");
  else if (BV.level(BV.state.xp) > lvlBefore) BV.toast(`🌟 Level ${BV.level(BV.state.xp)}!`, "level");
  BV.checkAchievements(); BV.renderHUD();
};
BV.track = (list, id, xp, reason) => {
  if (!BV.state[list].includes(id)) { BV.state[list].push(id); BV.save(); if (xp) BV.addXP(xp, reason); return true; }
  return false;
};
BV.checkAchievements = () => {
  for (const a of BV.ACHIEVEMENTS) {
    if (!BV.state.achievements.includes(a.id) && a.test(BV.state)) {
      BV.state.achievements.push(a.id); BV.save();
      setTimeout(() => BV.toast(`${a.icon} Achievement: ${a.name}`, "ach"), 600);
    }
  }
};
BV.updateStreak = () => {
  const today = BV.todayKey(), last = BV.state.lastVisit;
  if (last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  BV.state.streak = last === BV.todayKey(y) ? BV.state.streak + 1 : 1;
  BV.state.lastVisit = today; BV.save();
  setTimeout(() => BV.addXP(10, `Daily visit · ${BV.state.streak}-day streak 🔥`), 1200);
};

/* ---------- toasts, modals, celebrations ---------------------------------- */
BV.toast = (msg, kind = "") => {
  const t = document.createElement("div"); t.className = `toast ${kind}`; t.textContent = msg;
  const box = BV.$("#toasts"); box.appendChild(t);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => t.classList.add("out"), 2800); setTimeout(() => t.remove(), 3400);
};
BV.modal = (html, cls = "") => {
  const m = BV.$("#modal"); m.className = `modal open ${cls}`;
  m.innerHTML = `<div class="modal-card glass" role="dialog" aria-modal="true"><button class="modal-x" aria-label="Close">✕</button>${html}</div>`;
  m.onclick = e => { if (e.target === m || e.target.closest(".modal-x")) BV.closeModal(); };
  BV.hydrate(m); return m;
};
BV.closeModal = () => { const m = BV.$("#modal"); m.className = "modal"; m.innerHTML = ""; };
BV.celebrate = (title, sub) => {
  BV.modal(`<div class="celebrate"><div class="burst">✨🌿✨</div><h2>${BV.esc(title)}</h2><p>${BV.esc(sub)}</p><button class="btn primary" onclick="BV.closeModal()">Continue exploring</button></div>`);
  BV.sound.chime();
};

/* ---------- evidence badges ------------------------------------------------ */
BV.badge = lvl => { const e = BV.EVIDENCE[lvl] || BV.EVIDENCE.trad; return `<span class="ev" style="--ev:${e.color}" title="${BV.esc(e.label)}"><i class="ev-dots">${"●".repeat(e.score)}${"○".repeat(4 - e.score)}</i>${e.short}</span>`; };
BV.evidenceLegend = () => `<div class="ev-legend">${Object.values(BV.EVIDENCE).map(e => `<span class="ev" style="--ev:${e.color}"><i class="ev-dots">${"●".repeat(e.score)}${"○".repeat(4 - e.score)}</i>${e.label}</span>`).join("")}</div>`;

/* ---------- real photographs via Wikipedia (CORS-friendly REST API) ------- */
BV.imgCache = BV.store.get("bv-img", {});
BV.wikiInfo = async title => {
  if (BV.imgCache[title] !== undefined) return BV.imgCache[title];
  try {
    const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if (!r.ok) throw 0;
    const j = await r.json();
    const info = { src: j.thumbnail?.source || null, big: j.originalimage?.source || null, extract: j.extract || "", url: j.content_urls?.desktop?.page || "" };
    BV.imgCache[title] = info; BV.store.set("bv-img", BV.imgCache); return info;
  } catch (e) { return null; }
};
/* Hand-drawn botanical fallback so every card still looks like art offline */
BV.sketch = (seed = 1, hue = 110) => {
  const r = n => { seed = (seed * 9301 + 49297) % 233280; return (seed / 233280) * n; };
  let leaves = "";
  for (let i = 0; i < 7; i++) {
    const y = 160 - i * 18, side = i % 2 ? 1 : -1, len = 40 + r(25), ang = side * (35 + r(20));
    leaves += `<g transform="translate(100 ${y}) rotate(${ang})"><path d="M0 0 C ${len * .35} -${len * .28}, ${len * .75} -${len * .22}, ${len} 0 C ${len * .75} ${len * .22}, ${len * .35} ${len * .28}, 0 0Z" fill="hsl(${hue} 35% ${48 + r(18)}% / .55)" stroke="hsl(${hue} 40% 22%)" stroke-width="1.2"/><path d="M0 0 L ${len * .95} 0" stroke="hsl(${hue} 40% 22%)" stroke-width=".8"/></g>`;
  }
  return `<svg viewBox="0 0 200 200" class="sketch" aria-hidden="true"><path d="M100 190 C 98 140, 104 80, 100 30" stroke="hsl(${hue} 40% 22%)" stroke-width="2" fill="none"/>${leaves}<circle cx="100" cy="28" r="${7 + r(6)}" fill="hsl(${(hue + 200) % 360} 55% 70% / .8)" stroke="hsl(${hue} 40% 22%)"/></svg>`;
};
BV.hydrate = root => {
  BV.$$("[data-wiki]", root).forEach(async el => {
    if (el.dataset.done) return; el.dataset.done = 1;
    const seed = [...el.dataset.wiki].reduce((a, c) => a + c.charCodeAt(0), 0);
    if (!el.innerHTML.trim()) el.innerHTML = BV.sketch(seed, 80 + (seed % 70));
    const info = await BV.wikiInfo(el.dataset.wiki);
    if (info && info.src) {
      const img = new Image(); img.alt = el.dataset.alt || el.dataset.wiki.replace(/_/g, " "); img.loading = "lazy"; img.referrerPolicy = "no-referrer";
      img.onload = () => { el.innerHTML = ""; el.appendChild(img); el.classList.add("has-photo"); };
      img.src = el.dataset.size === "big" && info.big ? info.big : info.src;
    }
    if (el.dataset.extract && info && info.extract) { const t = BV.$(el.dataset.extract); if (t) t.textContent = info.extract; }
  });
};
BV.photo = (wiki, cls = "", alt = "") => `<div class="photo ${cls}" data-wiki="${BV.esc(wiki)}" data-alt="${BV.esc(alt)}"></div>`;

/* ---------- moon & sun ----------------------------------------------------- */
BV.moon = (d = new Date()) => {
  const jd = d.getTime() / 864e5 + 2440587.5;
  const age = (((jd - 2451550.1) / 29.530588853) % 1 + 1) % 1;
  const names = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"];
  const idx = Math.floor(age * 8 + 0.5) % 8;
  return { age, days: age * 29.53, name: names[idx], idx, illum: (1 - Math.cos(2 * Math.PI * age)) / 2, emoji: ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"][idx] };
};
BV.moonSVG = (p, size = 120) => {
  const r = size / 2, k = Math.cos(2 * Math.PI * p), rx = Math.abs(k) * r, wax = p < 0.5;
  let d;
  if (wax) d = `M${r} 0 A${r} ${r} 0 0 1 ${r} ${size} A${rx} ${r} 0 0 ${k > 0 ? 0 : 1} ${r} 0Z`;
  else d = `M${r} 0 A${r} ${r} 0 0 0 ${r} ${size} A${rx} ${r} 0 0 ${k > 0 ? 1 : 0} ${r} 0Z`;
  return `<svg class="moon-svg" viewBox="-4 -4 ${size + 8} ${size + 8}" width="${size}" height="${size}" aria-label="Moon phase"><defs><radialGradient id="mg${size}"><stop offset="0" stop-color="#fffbe6"/><stop offset="1" stop-color="#e8dcae"/></radialGradient><filter id="mglow"><feGaussianBlur stdDeviation="3"/></filter></defs><circle cx="${r}" cy="${r}" r="${r}" fill="#1b2a24" stroke="#3c5446"/><path d="${d}" fill="url(#mg${size})" filter="url(#mglow)" opacity=".5"/><path d="${d}" fill="url(#mg${size})"/></svg>`;
};
/* NOAA-style sunrise/sunset approximation (minutes accuracy) */
BV.sunTimes = (lat, lng, date = new Date()) => {
  const rad = Math.PI / 180, n = BV.dayOfYear(date);
  const g = 2 * Math.PI / 365 * (n - 1);
  const eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
  const cosH = (Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(decl))) - Math.tan(lat * rad) * Math.tan(decl);
  if (cosH > 1 || cosH < -1) return null;
  const ha = Math.acos(cosH) / rad;
  const toDate = mins => { const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())); d.setUTCMinutes(mins); return d; };
  return { rise: toDate(720 - 4 * (lng + ha) - eqt), set: toDate(720 - 4 * (lng - ha) - eqt) };
};
BV.fmtTime = d => d ? d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "—";

/* ---------- season --------------------------------------------------------- */
BV.season = () => {
  const s = BV.state.settings.season; if (s && s !== "auto") return s;
  let m = new Date().getMonth() + 1;
  if (BV.state.settings.hemisphere === "south") m = ((m + 5) % 12) + 1;
  return m >= 3 && m <= 5 ? "spring" : m >= 6 && m <= 8 ? "summer" : m >= 9 && m <= 11 ? "autumn" : "winter";
};
BV.applySeason = () => {
  const s = BV.season();
  document.body.classList.remove("season-spring", "season-summer", "season-autumn", "season-winter");
  document.body.classList.add(`season-${s}`);
  const hr = new Date().getHours();
  document.body.classList.toggle("night", hr >= 20 || hr < 6);
  document.body.classList.toggle("no-spirit", !BV.state.settings.spirit);
  BV.particles.setMode(s);
};

/* ---------- ambient particles (petals · fireflies · leaves · snow) -------- */
BV.particles = (() => {
  let cvs, ctx, W, H, parts = [], mode = "spring", raf;
  const palettes = {
    spring: ["#f7c6d9", "#fde2ea", "#ffffff", "#e9a8c4"], summer: ["#fff3a0", "#ffe066", "#d8ff8a"],
    autumn: ["#d9822b", "#b8461b", "#e3b23c", "#8c3b1a"], winter: ["#ffffff", "#e8f4ff", "#cfe6f5"]
  };
  const spawn = (init) => {
    const c = palettes[mode];
    return { x: Math.random() * W, y: init ? Math.random() * H : (mode === "summer" ? Math.random() * H : -20), r: mode === "summer" ? 1.5 + Math.random() * 2 : 3 + Math.random() * 5,
      vx: (Math.random() - .5) * .6, vy: mode === "summer" ? (Math.random() - .5) * .3 : .3 + Math.random() * .8, a: Math.random() * 6.28, va: (Math.random() - .5) * .04,
      c: c[Math.floor(Math.random() * c.length)], t: Math.random() * 100 };
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.t += .02; p.x += p.vx + Math.sin(p.t) * .3; p.y += p.vy; p.a += p.va;
      if (p.y > H + 20 || p.x < -30 || p.x > W + 30 || (mode === "summer" && (p.y < -10 || p.y > H + 10))) Object.assign(p, spawn(false));
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
      if (mode === "summer") {
        const g = .5 + .5 * Math.sin(p.t * 3); ctx.shadowBlur = 12; ctx.shadowColor = p.c; ctx.globalAlpha = .35 + .6 * g;
        ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(0, 0, p.r, 0, 6.28); ctx.fill();
      } else if (mode === "winter") {
        ctx.globalAlpha = .8; ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(0, 0, p.r * .5, 0, 6.28); ctx.fill();
      } else if (mode === "autumn") {
        ctx.globalAlpha = .85; ctx.fillStyle = p.c; ctx.beginPath(); ctx.moveTo(0, -p.r * 1.4);
        ctx.quadraticCurveTo(p.r * 1.3, 0, 0, p.r * 1.4); ctx.quadraticCurveTo(-p.r * 1.3, 0, 0, -p.r * 1.4); ctx.fill();
        ctx.strokeStyle = "rgba(60,30,10,.5)"; ctx.beginPath(); ctx.moveTo(0, -p.r * 1.4); ctx.lineTo(0, p.r * 1.6); ctx.stroke();
      } else {
        ctx.globalAlpha = .8; ctx.fillStyle = p.c; ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * .6, 0, 0, 6.28); ctx.fill();
      }
      ctx.restore();
    }
    raf = requestAnimationFrame(draw);
  };
  const resize = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight; };
  return {
    init() { cvs = BV.$("#ambient"); ctx = cvs.getContext("2d"); resize(); addEventListener("resize", resize); },
    setMode(m) {
      mode = m; cancelAnimationFrame(raf);
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || !BV.state.settings.motion;
      if (!ctx) return; ctx.clearRect(0, 0, W, H); if (reduce) return;
      const n = Math.min(60, Math.floor(W / 28)); parts = Array.from({ length: n }, () => spawn(true)); draw();
    }
  };
})();

/* ---------- ambient nature soundscape (synthesized — no files) ------------ */
BV.sound = (() => {
  let ac, master, nodes = [], birdTimer, on = false;
  const noise = (type) => {
    const len = ac.sampleRate * 4, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; if (type === "brown") { last = (last + .02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w * .4; }
    const s = ac.createBufferSource(); s.buffer = buf; s.loop = true; return s;
  };
  const chirp = () => {
    if (!on) return;
    const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(), base = 2200 + Math.random() * 2200, notes = 2 + Math.floor(Math.random() * 4);
    o.type = "sine"; o.connect(g); g.connect(master); g.gain.value = 0;
    for (let i = 0; i < notes; i++) {
      const s = t + i * .13; o.frequency.setValueAtTime(base, s); o.frequency.exponentialRampToValueAtTime(base * (1.2 + Math.random() * .5), s + .08);
      g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(.05, s + .02); g.gain.linearRampToValueAtTime(0, s + .1);
    }
    o.start(t); o.stop(t + notes * .13 + .1);
    birdTimer = setTimeout(chirp, 1800 + Math.random() * 6000);
  };
  return {
    get on() { return on; },
    start() {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)(); ac.resume();
      master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
      master.gain.linearRampToValueAtTime(.6, ac.currentTime + 2);
      // wind
      const w = noise("brown"), wf = ac.createBiquadFilter(), wg = ac.createGain(), lfo = ac.createOscillator(), lg = ac.createGain();
      wf.type = "lowpass"; wf.frequency.value = 500; wg.gain.value = .25; lfo.frequency.value = .08; lg.gain.value = 300;
      lfo.connect(lg); lg.connect(wf.frequency); w.connect(wf); wf.connect(wg); wg.connect(master); w.start(); lfo.start();
      // stream
      const s = noise("white"), sf = ac.createBiquadFilter(), sg = ac.createGain();
      sf.type = "bandpass"; sf.frequency.value = 1400; sf.Q.value = .6; sg.gain.value = .05; s.connect(sf); sf.connect(sg); sg.connect(master); s.start();
      nodes = [w, lfo, s]; on = true; chirp();
    },
    stop() { on = false; clearTimeout(birdTimer); if (master) master.gain.linearRampToValueAtTime(0, ac.currentTime + .8); setTimeout(() => nodes.forEach(n => { try { n.stop(); } catch (e) { } }), 900); },
    toggle() { this.on ? this.stop() : this.start(); BV.state.settings.sound = this.on; BV.save(); BV.renderHUD(); },
    chime() {
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
          const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * .09;
          o.type = "triangle"; o.frequency.value = f; o.connect(g); g.connect(ac.destination);
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.08, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + 1.2); o.start(t); o.stop(t + 1.3);
        });
      } catch (e) { }
    }
  };
})();

/* ---------- avatar renderer (Mirror Lake) ---------------------------------- */
BV.avatarSVG = (a = BV.state.avatar, size = 160) => {
  const tools = { mortar: "🥣", staff: "🪄", basket: "🧺", crystal: "🔮", book: "📖", lantern: "🏮" };
  const elems = { earth: "🜃", air: "🜁", fire: "🜂", water: "🜄" };
  const hair = {
    long: `<path d="M50 62 C 46 30, 114 30, 110 62 L 116 128 C 104 136, 98 120, 98 104 L 62 104 C 62 120, 56 136, 44 128Z" fill="${a.hair}"/>`,
    bun: `<circle cx="80" cy="30" r="16" fill="${a.hair}"/><path d="M52 64 C 50 36, 110 36, 108 64 C 100 50, 60 50, 52 64Z" fill="${a.hair}"/>`,
    curls: [...Array(11)].map((_, i) => `<circle cx="${52 + (i % 6) * 11}" cy="${44 + Math.floor(i / 6) * 10 + (i % 2) * 3}" r="10" fill="${a.hair}"/>`).join("") + `<circle cx="50" cy="72" r="9" fill="${a.hair}"/><circle cx="110" cy="72" r="9" fill="${a.hair}"/>`,
    short: `<path d="M52 66 C 48 34, 112 34, 108 66 C 104 52, 92 48, 80 50 C 68 48, 56 52, 52 66Z" fill="${a.hair}"/>`,
    braids: `<path d="M52 64 C 50 34, 110 34, 108 64 C 100 50, 60 50, 52 64Z" fill="${a.hair}"/>` + [...Array(5)].map((_, i) => `<ellipse cx="54" cy="${76 + i * 11}" rx="5" ry="6" fill="${a.hair}"/><ellipse cx="106" cy="${76 + i * 11}" rx="5" ry="6" fill="${a.hair}"/>`).join("")
  };
  return `<svg class="avatar-svg" viewBox="0 0 160 170" width="${size}" height="${size * 170 / 160}" aria-label="Your healer avatar">
    <defs><radialGradient id="aura-${size}"><stop offset=".35" stop-color="${a.aura}" stop-opacity=".9"/><stop offset="1" stop-color="${a.aura}" stop-opacity="0"/></radialGradient></defs>
    <circle class="aura-pulse" cx="80" cy="86" r="80" fill="url(#aura-${size})"/>
    ${a.hairStyle === "long" ? hair.long : ""}
    <path d="M36 170 C 38 128, 60 112, 80 112 C 100 112, 122 128, 124 170Z" fill="${a.outfit}"/>
    <path d="M70 112 L80 132 L90 112" fill="none" stroke="#f3eedb" stroke-width="2" opacity=".7"/>
    <rect x="72" y="96" width="16" height="18" rx="6" fill="${a.skin}"/>
    <ellipse cx="80" cy="70" rx="27" ry="31" fill="${a.skin}"/>
    ${a.hairStyle !== "long" ? hair[a.hairStyle] || "" : `<path d="M52 64 C 50 36, 110 36, 108 64 C 100 48, 60 48, 52 64Z" fill="${a.hair}"/>`}
    <ellipse cx="70" cy="72" rx="3" ry="3.6" fill="#2a1a12"/><ellipse cx="90" cy="72" rx="3" ry="3.6" fill="#2a1a12"/>
    <circle cx="71" cy="71" r="1" fill="#fff"/><circle cx="91" cy="71" r="1" fill="#fff"/>
    <path d="M73 85 Q80 90 87 85" stroke="#7a3b2e" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="64" cy="82" rx="5" ry="3" fill="#e88a8a" opacity=".35"/><ellipse cx="96" cy="82" rx="5" ry="3" fill="#e88a8a" opacity=".35"/>
    <path d="M60 46 q8 -10 20 -6 q10 -6 20 6" fill="none" stroke="#7fbf6a" stroke-width="3" stroke-linecap="round"/>
    <circle cx="66" cy="42" r="3" fill="#f7c6d9"/><circle cx="94" cy="42" r="3" fill="#fff3a0"/><circle cx="80" cy="38" r="3.4" fill="#cdb4ff"/>
    <text x="16" y="160" font-size="24">${tools[a.tool] || ""}</text>
    <text x="122" y="30" font-size="22" fill="${a.aura}" class="elem-glyph">${elems[a.element] || ""}</text>
  </svg>`;
};

/* ---------- HUD ------------------------------------------------------------ */
BV.renderHUD = () => {
  const s = BV.state, t = BV.titleFor(s.xp), n = BV.nextTitle(s.xp);
  const pct = n ? Math.round((s.xp - t.xp) / (n.xp - t.xp) * 100) : 100;
  const m = BV.moon();
  BV.$("#hud").innerHTML = `
    <a class="hud-avatar" href="#/avatar" title="Mirror Lake — your healer">${BV.avatarSVG(s.avatar, 40)}</a>
    <a class="hud-title" href="#/path" title="Spiral Path — your progress">
      <span class="hud-name">${t.icon} ${t.name} <small>Lv ${BV.level(s.xp)}</small></span>
      <span class="xpbar"><i style="width:${pct}%"></i></span>
      <span class="hud-sub">${s.xp} XP${n ? ` · ${n.xp - s.xp} to ${n.name}` : " · Grove keeper"}</span>
    </a>
    <span class="hud-chip" title="Daily streak">🔥 ${s.streak}</span>
    <a class="hud-chip hud-moon" href="#/observatory" title="${m.name}">${m.emoji}</a>
    <button class="hud-chip" id="soundBtn" title="Ambient nature sounds" aria-pressed="${BV.sound.on}">${BV.sound.on ? "🔊" : "🔈"}</button>
    <button class="hud-chip" id="settingsBtn" title="Settings">⚙️</button>`;
  BV.$("#soundBtn").onclick = () => BV.sound.toggle();
  BV.$("#settingsBtn").onclick = BV.openSettings;
};

BV.openSettings = () => {
  const st = BV.state.settings;
  BV.modal(`<h2>⚙️ Grove Settings</h2>
    <label class="field">Season visuals <select id="setSeason">${["auto", "spring", "summer", "autumn", "winter"].map(x => `<option ${st.season === x ? "selected" : ""}>${x}</option>`).join("")}</select></label>
    <label class="field">Hemisphere <select id="setHemi"><option value="north" ${st.hemisphere === "north" ? "selected" : ""}>Northern</option><option value="south" ${st.hemisphere === "south" ? "selected" : ""}>Southern</option></select></label>
    <label class="field">Units <select id="setUnits"><option value="metric" ${st.units === "metric" ? "selected" : ""}>Metric (°C, km/h)</option><option value="imperial" ${st.units === "imperial" ? "selected" : ""}>Imperial (°F, mph)</option></select></label>
    <label class="check"><input type="checkbox" id="setSpirit" ${st.spirit ? "checked" : ""}> Show Spirit layer (correspondences, chakras, rituals)</label>
    <label class="check"><input type="checkbox" id="setMotion" ${st.motion ? "checked" : ""}> Animated seasonal particles</label>
    <label class="field">Pl@ntNet API key (optional — powers the real Nature Scanner) <input id="setKey" value="${BV.esc(st.plantnetKey)}" placeholder="Get a free key at my.plantnet.org"></label>
    <div class="row gap"><button class="btn primary" id="setSave">Save</button><button class="btn ghost" id="setReset">Reset all progress</button></div>
    <p class="fine">Your progress lives privately in this browser (localStorage). Nothing is sent to a server.</p>`);
  BV.$("#setSave").onclick = () => {
    Object.assign(st, { season: BV.$("#setSeason").value, hemisphere: BV.$("#setHemi").value, units: BV.$("#setUnits").value, spirit: BV.$("#setSpirit").checked, motion: BV.$("#setMotion").checked, plantnetKey: BV.$("#setKey").value.trim() });
    BV.save(); BV.applySeason(); BV.closeModal(); BV.route(); BV.toast("Settings saved 🌿");
  };
  BV.$("#setReset").onclick = () => { if (confirm("Reset all XP, journal entries and progress? This can't be undone.")) { localStorage.removeItem("bv-state"); location.reload(); } };
};

/* ---------- router --------------------------------------------------------- */
BV.route = () => {
  const [name = "", ...params] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  const view = BV.views[name || "world"] || BV.views.world;
  const el = BV.$("#view");
  el.classList.remove("enter"); void el.offsetWidth; el.classList.add("enter");
  el.innerHTML = "";
  const place = BV.PLACES.find(p => p.route === `#/${name}`);
  if (place && !BV.state.places.includes(place.id)) BV.track("places", place.id, 5, `Discovered ${place.name}`);
  BV.$$("#nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#/${name}` || (!name && a.getAttribute("href") === "#/")));
  try { view(el, params); } catch (err) { console.error(err); el.innerHTML = `<div class="panel glass"><h2>A branch snapped 🍂</h2><p>${BV.esc(err.message)}</p></div>`; }
  BV.hydrate(el);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
};

/* Breadcrumb-ish header for each place */
BV.placeHeader = (icon, title, sub, extra = "") => `
  <header class="place-head">
    <a href="#/" class="back" title="Back to the world map">← World</a>
    <div class="place-sigil">${icon}</div>
    <div><h1>${title}</h1><p class="sub">${sub}</p></div>${extra}
  </header>`;

/* Related-links "next path" footer — every page leads somewhere new */
BV.nextPaths = links => `<nav class="next-paths"><h3>🌿 Where this path leads</h3><div class="chips">${links.map(([href, label]) => `<a class="chip" href="${href}">${label}</a>`).join("")}</div></nav>`;

/* ---------- boot ---------------------------------------------------------- */
BV.boot = () => {
  BV.particles.init(); BV.applySeason(); BV.updateStreak(); BV.renderHUD(); BV.checkAchievements();
  addEventListener("hashchange", BV.route); BV.route();
  addEventListener("keydown", e => { if (e.key === "Escape") BV.closeModal(); });
  if (BV.state.settings.sound) {
    const resume = () => { if (!BV.sound.on) { BV.sound.start(); BV.renderHUD(); } removeEventListener("pointerdown", resume); };
    addEventListener("pointerdown", resume);
  }
  setInterval(BV.applySeason, 10 * 60 * 1000);
};
