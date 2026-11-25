# 🌿 Bodyverse

**A living library of the body, the plants and the Earth.** Bodyverse is an explorable world, not a menu of articles: you travel between *places* (the Oracle Tree, Leaf Archive, Human Atlas, Apothecary…), every page leads to another, and the world changes with the seasons, the moon and your own progress.

It's a static website with no build step and no server. Open `index.html` or host the folder anywhere (GitHub Pages works out of the box).

```
index.html                 the Bodyverse world (single-page app, hash routes)
links/index.html           your green "link in bio" page (self-contained)
assets/css/bodyverse.css   the "Living Forest" design system + seasonal themes
assets/js/data-herbs.js    Herbal Codex (24 herbs) + Phytochemistry Library (21 compounds)
assets/js/data-body.js     14 body systems + 13 detailed organ pages
assets/js/data-world.js    places, apothecary ingredients & recipes, forager guide, garden,
                           trials, daily nature, beauty, chakras, realms, seasons, quests, globe regions
assets/js/core.js          state, XP/levels/streaks, router, seasons, particles, soundscape, avatar, photos
assets/js/views-*.js       every place in the world
```

## 🗺️ The world today

| Place | What's there |
|---|---|
| 🗺️ **World map** | Illustrated map of every place, connected by trails. Undiscovered places glow. Daily Nature: plant, tree, mushroom, wildflower, bird and pollinator of the day, plus an anatomy fact, recipe, journal prompt, garden task and constellation of the night. |
| 🌳 **Oracle Tree** | *Ask the Oracle* searches every library at once. The *Daily Dose Oracle* takes your mood, symptoms and moon phase and gives a ritual, tea blend, bath, mantra, movement and journal prompt. |
| 🫀 **Human Atlas** | Interactive body you can tap, with layers for organs, skeleton, muscles, nerves and vessels. 13 organ pages with anatomy, physiology, processes, hormones, neurotransmitters, disorders (symptoms, risks, prevention), nutrition, herbs, lifestyle, beauty links, facts, history and references. |
| 🌊 **Roots & Rivers** | 14 body systems laid out as pools along a river. Each shows how the system works, signs of imbalance and of harmony, herbs, rituals and beauty connections. |
| 🌿 **Leaf Archive / Herbal Codex** | 24 encyclopedia pages. Filter by body system, energetics, preparation or plant part. Each page has a real photo gallery and old botanical illustrations from Wikimedia Commons, plus taxonomy and growing info, traditional use vs. research with **evidence ratings**, full safety (pregnancy, children, **pets**, drug interactions), ecology, an optional spirit layer and references. |
| ⚗️ **Phytochemistry** | 21 compounds with chemical structures (PubChem), mechanisms, evidence level and the herbs that contain them. |
| 🧪 **Apothecary** | **Drag-and-drop alchemy.** Coconut oil + coffee becomes a scrub. Honey + water + blue lotus + cinnamon becomes a tea. It has 28 named recipes to discover plus a rule engine, so almost any mix becomes something (tea, decoction, syrup, tincture, glycerite, oxymel, infused oil, salve, balm, scrub, bath, steam, mask, compress, powder…). Infused oils go onto your shelf and can be alchemized again, e.g. calendula oil + beeswax makes a salve. |
| 🕸️ **Knowledge Web** | ~130 connected nodes (herbs, organs, systems, compounds, recipes, beauty goals and topics such as Sleep or Pollinators). Each click becomes a trail: Lavender ↓ Sleep ↓ Nervous System ↓ … |
| 🌱 **Living Garden** | 11 illustrated topics (seed starting, composting, soil life, permaculture, pollinators, seed saving…), a **companion-planting bed planner** and a seasonal calendar that knows your hemisphere. |
| 🍄 **Forager's Field** | Deadly and edible look-alikes side by side, real photos, GBIF range maps, the Forager's Oath and a **photo identification game**. |
| ⚔️ **Healer's Trials** | Scenario quizzes (application, not memorization) and the **Dis-Ease Decoding Den**, which has root-cause case puzzles and unlocks at Level 2. |
| 🪞 **Mirror Garden** | Beauty from within: hyperpigmentation, hair thinning, breakouts, dryness, dark circles and dullness. Each links to the science, the organs involved, herbs, recipes, rituals and an optional spiritual view. |
| 🕯️ **Soulbody Shrine** | Chakras, TCM and Ayurvedic zones with emotions, herbs, crystals and practices, clearly labelled as cultural frameworks. |
| 🔭 **Celestial Observatory** | Live moon phase, 14-day moon strip, constellation of the month, sunrise and sunset, and the **Circle of Seasons** wheel turning with the real calendar. |
| 🌎 **Earth Atlas** | Real-time **environmental dashboard** with weather, 7-day forecast, humidity, rain, wind, UV, air quality, pollen, soil temperature and moisture, sun, moon and a fire-danger estimate. A **nearby nature map** shows iNaturalist plant and fungi observations, botanical and community gardens, farmers markets and reserves. **Digital Twin Earth** is a 3D globe of healing traditions and native medicinal plants. |
| 🜃 **The Realms** | Earth (Rootlands), Air (Whisperwind Cliffs), Fire (Ember Vale) and Water (Moonflow Marsh). Your path tints your aura and Daily Dose. |
| 🧝 **Mirror Lake** | Create your healer: skin, hair, robe, aura, element and toolset. |
| 📔 **Starlit Hollow** | Field journal (notes, observations with photos, harvests, drying methods, garden, recipes, intentions, dreams), favourites, and **Moonwatcher's Journal** for cycle, flow, mood and symptoms with phase rituals. Your avatar's aura shifts with your phase. |
| 🌀 **Spiral Path** | Titles (Seedling → Keeper of the Grove), XP, levels, streaks, 16 achievements, 6 healing quests and collections. |
| 📷 **Nature Scanner** | Upload or take a photo. With a free Pl@ntNet API key (⚙️ Settings) it gives real identification with confidence scores, links to the Codex and warnings for deadly species. |

**Living-world touches:** the visuals change with the season (spring petals, summer fireflies, autumn leaves, winter snow), there's an optional ambient soundscape of wind, a stream and birdsong synthesised in the browser, a Body / Mind / Spirit toggle that hides all spiritual content, and an honest evidence badge on every claim.

## 🔒 Privacy
All progress (XP, journal, cycle logs, location) is stored **only in the visitor's browser** (`localStorage`). There's no account and no server. Location is only requested when someone taps "Use my location."

## 🌐 Free data sources (no API keys needed)
Wikipedia/Wikimedia Commons (photos and illustrations, CC BY-SA) · Open-Meteo (weather, air quality, pollen, soil) · iNaturalist (nearby observations) · OpenStreetMap / Overpass (gardens, markets, reserves) · GBIF (range maps) · PubChem (structures) · BigDataCloud (place names). Optional: Pl@ntNet for the scanner.

## 🚀 Put it online (GitHub Pages)
1. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, then pick the branch and the `/ (root)` folder.
2. Your site will be at `https://<your-username>.github.io/bodyverse/`, and your link page at `.../bodyverse/links/`.

## 🔗 Updating your linktree
Open `links/index.html` and edit the **`window.LINKTREE`** block at the top. It holds your name, @handle, photo URL, bio, links and social URLs. Replace each `#` with a real link.

**If you use linktr.ee itself** (where you can't upload custom code), match the theme in *Appearance*:
- **Background:** gradient from `#0F2A1C` (top) to `#07140D` (bottom), or upload a forest image
- **Buttons:** fill `#1E4A30` at about 60% opacity, text `#EEF6E8`, rounded or pill style, with a soft shadow
- **Highlight / first button:** `#9BE7A8` with text `#08200F`
- **Accent:** antique gold `#D8B45A`
- **Fonts:** a serif for your name (Fraunces or similar) and a rounded sans (Nunito or similar) for buttons
- **Profile photo:** add a thin cream `#F3EEDB` ring

## ✍️ Adding content
- **New herb:** copy an entry in `BV.HERBS` (`data-herbs.js`). The `wiki` field is the Wikipedia page title used for its photo. It appears in the Codex, search, Knowledge Web and Trials automatically.
- **New recipe:** add to `BV.RECIPES` with the ingredient ids it `need`s.
- **New organ:** add to `BV.ORGANS` and to the `organs` list of its system.

## 🌱 Roadmap (from the master vision)
- Grow the Codex toward 1,000+ herbs (consider moving data to JSON files or a CMS)
- Real AI for "Ask the Oracle" and for bird, insect, mushroom and track scanning (needs a small backend to keep API keys private)
- Accounts and cloud sync for journals across devices
- Video lessons (Healer Academy) and narrated audio
- Local herbal events and workshops feeds; USDA zone lookup by ZIP; tide data
- Hand-painted illustration set to replace emoji icons

---
*Bodyverse is educational. It separates traditional knowledge from scientific evidence and is never a substitute for a qualified healthcare professional.*
