/* ==========================================================================
   BODYVERSE · WORLD DATA — places, apothecary, forager, garden, trials,
   daily nature, beauty, soulbody, realms, seasons, quests
   ========================================================================== */
window.BV = window.BV || {};

/* ---------- The world map: places people remember ------------------------ */
BV.PLACES = [
  { id: "oracle",      name: "Oracle Tree",          icon: "🌳", x: 50, y: 44, route: "#/oracle",      blurb: "Heart of Bodyverse — ask, search, and receive your Daily Dose.", ring: "core" },
  { id: "codex",       name: "Leaf Archive",         icon: "🌿", x: 30, y: 30, route: "#/codex",       blurb: "The Herbal Codex — an encyclopedia of plant allies." },
  { id: "atlas",       name: "Human Atlas",          icon: "🫀", x: 70, y: 30, route: "#/atlas",       blurb: "Anatomy Grove — tap the living body." },
  { id: "rivers",      name: "Roots & Rivers",       icon: "🌊", x: 72, y: 56, route: "#/rivers",      blurb: "Body systems ↔ herbal connections." },
  { id: "apothecary",  name: "Apothecary",           icon: "🧪", x: 28, y: 56, route: "#/apothecary",  blurb: "Soft Alchemist Studio — drag, mix, alchemize." },
  { id: "garden",      name: "Living Garden",        icon: "🌱", x: 16, y: 74, route: "#/garden",      blurb: "Seeds, soil life, companions & seasons." },
  { id: "forest",      name: "Forager's Field",      icon: "🍄", x: 38, y: 80, route: "#/forager",     blurb: "Identify safely, harvest ethically." },
  { id: "web",         name: "Knowledge Web",        icon: "🕸️", x: 50, y: 18, route: "#/web",         blurb: "Every topic connected to dozens more." },
  { id: "observatory", name: "Celestial Observatory",icon: "🔭", x: 84, y: 14, route: "#/observatory", blurb: "Moon, sky, and the Circle of Seasons." },
  { id: "earth",       name: "Earth Atlas",          icon: "🌎", x: 86, y: 76, route: "#/earth",       blurb: "Living dashboard, nearby plants & Digital Twin Earth." },
  { id: "mirror",      name: "Mirror Garden",        icon: "🪞", x: 62, y: 82, route: "#/mirror",      blurb: "Beauty from within — goals, rituals, recipes." },
  { id: "shrine",      name: "Soulbody Shrine",      icon: "🕯️", x: 14, y: 40, route: "#/shrine",      blurb: "Spiritual anatomy (optional Spirit layer)." },
  { id: "hollow",      name: "Starlit Hollow",       icon: "📔", x: 16, y: 14, route: "#/journal",     blurb: "Field journal, intentions & Moonwatcher's cycle log." },
  { id: "trials",      name: "Healer's Trials",      icon: "⚔️", x: 50, y: 66, route: "#/trials",      blurb: "Scenario quizzes & the Dis-Ease Decoding Den." },
  { id: "realms",      name: "The Realms",           icon: "🜃", x: 84, y: 44, route: "#/realms",      blurb: "Choose your elemental healer path." },
  { id: "lake",        name: "Mirror Lake",          icon: "🧝", x: 30, y: 8,  route: "#/avatar",      blurb: "Create your healer — aura, element, tools." },
  { id: "spiral",      name: "The Spiral Path",      icon: "🌀", x: 66, y: 8,  route: "#/path",        blurb: "Quests, titles, badges & collections." },
  { id: "scanner",     name: "Nature Scanner",       icon: "📷", x: 92, y: 30, route: "#/scanner",     blurb: "Scan a plant and link it to the Codex." }
];

/* ---------- Apothecary: ingredients ------------------------------------- */
BV.INGREDIENTS = [
  { id: "water", name: "Spring Water", icon: "💧", cat: "water" },
  { id: "honey", name: "Raw Honey", icon: "🍯", cat: "honey" },
  { id: "acv", name: "Apple Cider Vinegar", icon: "🍎", cat: "vinegar" },
  { id: "vodka", name: "Vodka (40%)", icon: "🥃", cat: "alcohol" },
  { id: "glycerin", name: "Vegetable Glycerin", icon: "🫙", cat: "glycerin" },
  { id: "coconut", name: "Coconut Oil", icon: "🥥", cat: "oil" },
  { id: "olive", name: "Olive Oil", icon: "🫒", cat: "oil" },
  { id: "jojoba", name: "Jojoba Oil", icon: "🌰", cat: "oil" },
  { id: "shea", name: "Shea Butter", icon: "🧈", cat: "butter" },
  { id: "beeswax", name: "Beeswax", icon: "🐝", cat: "wax" },
  { id: "coffee", name: "Coffee Grounds", icon: "☕", cat: "exfoliant" },
  { id: "sugar", name: "Brown Sugar", icon: "🟫", cat: "exfoliant" },
  { id: "seasalt", name: "Sea Salt", icon: "🧂", cat: "salt" },
  { id: "epsom", name: "Epsom Salt", icon: "🧊", cat: "salt" },
  { id: "oats", name: "Colloidal Oats", icon: "🌾", cat: "oats" },
  { id: "clay", name: "Kaolin Clay", icon: "🏺", cat: "clay" },
  { id: "aloe", name: "Aloe Gel", icon: "🪴", cat: "aloe" },
  { id: "milk", name: "Oat Milk", icon: "🥛", cat: "milk" },
  { id: "lemon", name: "Lemon", icon: "🍋", cat: "citrus" },
  { id: "garlic", name: "Garlic", icon: "🧄", cat: "pungent" },
  { id: "onion", name: "Onion", icon: "🧅", cat: "pungent" },
  { id: "horseradish", name: "Horseradish", icon: "🥕", cat: "pungent" },
  { id: "pepper", name: "Black Pepper", icon: "⚫", cat: "spice" },
  { id: "h_lavender", name: "Lavender", icon: "💜", cat: "herb", herb: "lavender", part: "flower" },
  { id: "h_chamomile", name: "Chamomile", icon: "🌼", cat: "herb", herb: "chamomile", part: "flower" },
  { id: "h_peppermint", name: "Peppermint", icon: "🌱", cat: "herb", herb: "peppermint", part: "leaf" },
  { id: "h_rose", name: "Rose Petals", icon: "🌹", cat: "herb", herb: "rose", part: "flower" },
  { id: "h_bluelotus", name: "Blue Lotus", icon: "🪷", cat: "herb", herb: "bluelotus", part: "flower" },
  { id: "h_calendula", name: "Calendula", icon: "🏵️", cat: "herb", herb: "calendula", part: "flower" },
  { id: "h_hibiscus", name: "Hibiscus", icon: "🌺", cat: "herb", herb: "hibiscus", part: "flower" },
  { id: "h_lemonbalm", name: "Lemon Balm", icon: "🍃", cat: "herb", herb: "lemonbalm", part: "leaf" },
  { id: "h_rosemary", name: "Rosemary", icon: "🌲", cat: "herb", herb: "rosemary", part: "leaf" },
  { id: "h_nettle", name: "Nettle", icon: "🌿", cat: "herb", herb: "nettle", part: "leaf" },
  { id: "h_thyme", name: "Thyme", icon: "☘️", cat: "herb", herb: "thyme", part: "leaf" },
  { id: "h_sage", name: "Sage", icon: "🪴", cat: "herb", herb: "sage", part: "leaf" },
  { id: "h_tulsi", name: "Holy Basil", icon: "🌿", cat: "herb", herb: "tulsi", part: "leaf" },
  { id: "h_ginger", name: "Ginger", icon: "🫚", cat: "herb", herb: "ginger", part: "root" },
  { id: "h_turmeric", name: "Turmeric", icon: "🟠", cat: "herb", herb: "turmeric", part: "root" },
  { id: "h_cinnamon", name: "Cinnamon", icon: "🪵", cat: "herb", herb: "cinnamon", part: "bark" },
  { id: "h_elderberry", name: "Elderberries", icon: "🫐", cat: "herb", herb: "elderberry", part: "berry" },
  { id: "h_ashwagandha", name: "Ashwagandha", icon: "🟤", cat: "herb", herb: "ashwagandha", part: "root" },
  { id: "h_dandelion", name: "Dandelion Root", icon: "🌻", cat: "herb", herb: "dandelion", part: "root" },
  { id: "h_echinacea", name: "Echinacea", icon: "🌸", cat: "herb", herb: "echinacea", part: "root" },
  { id: "h_licorice", name: "Licorice Root", icon: "🪵", cat: "herb", herb: "licorice", part: "root" },
  { id: "h_yarrow", name: "Yarrow", icon: "🤍", cat: "herb", herb: "yarrow", part: "flower" },
  { id: "h_valerian", name: "Valerian Root", icon: "🌙", cat: "herb", herb: "valerian", part: "root" }
];

/* ---------- Preparation types (the alchemy rules) ------------------------- */
BV.PREP_TYPES = {
  tea:       { name: "Herbal Tea", icon: "🍵", method: "Pour just-boiled water over the herbs, cover (to keep aromatic oils in) and steep.", time: "5–15 minutes, covered", storage: "Drink fresh; refrigerate up to 24 h.", shelf: "1 day", evidence: "Varies by herb — see each herb's page.", safety: "Check each herb's contraindications, pregnancy notes and drug interactions." },
  overnight: { name: "Nourishing Infusion", icon: "🫖", method: "A large handful of dried herb in a litre jar, filled with boiling water, lidded and left 4–8 hours to extract minerals.", time: "4–8 hours", storage: "Refrigerate.", shelf: "2 days", evidence: "Traditional mineral-extraction method.", safety: "Check each herb." },
  decoction: { name: "Decoction", icon: "🍲", method: "Roots, barks and berries are simmered (lid on) to break down tough plant tissue.", time: "Simmer 15–30 minutes", storage: "Refrigerate.", shelf: "2–3 days", evidence: "Simmering extracts more from dense material than steeping.", safety: "Check each herb." },
  syrup:     { name: "Herbal Syrup", icon: "🫙", method: "Make a strong decoction, reduce by half, strain, then stir in honey once cooled to warm.", time: "45 minutes + cooling", storage: "Refrigerate in a sterilized bottle.", shelf: "2–3 months refrigerated", evidence: "Honey is a soothing demulcent — it eased children's night cough in trials (never give honey to infants under 1).", safety: "Never give honey to babies under 12 months." },
  tincture:  { name: "Tincture", icon: "🧴", method: "Herb fully covered by alcohol in a jar; shake daily, then strain (folk method).", time: "4–6 weeks", storage: "Amber dropper bottle, cool & dark.", shelf: "3–5 years", evidence: "Alcohol extracts both water- and fat-soluble constituents.", safety: "Contains alcohol — not for children, pregnancy, or those avoiding alcohol." },
  glycerite: { name: "Glycerite", icon: "🍶", method: "Herb macerated in 3 parts glycerin : 1 part water; a sweet, alcohol-free extract.", time: "4 weeks", storage: "Cool and dark.", shelf: "1–2 years", evidence: "Weaker than alcohol extraction for many constituents.", safety: "Alcohol-free — often chosen for children (with professional guidance)." },
  oxymel:    { name: "Oxymel", icon: "🍯", method: "Equal parts honey and vinegar poured over herbs; shake daily. One of the oldest preparations (Hippocrates).", time: "2–4 weeks", storage: "Cool cupboard or fridge.", shelf: "6–12 months", evidence: "Traditional; vinegar extracts minerals and some alkaloids.", safety: "Acidic — rinse mouth after; no honey for infants." },
  vinegar:   { name: "Herbal Vinegar", icon: "🍎", method: "Herbs steeped in apple cider vinegar under a non-metal lid.", time: "2–4 weeks", storage: "Cool and dark.", shelf: "6–12 months", evidence: "Extracts minerals; used in food and hair rinses.", safety: "Dilute for skin and hair." },
  oil:       { name: "Infused Oil", icon: "🫗", method: "Dried herb covered in oil; infuse 4–6 weeks in a warm spot (or gentle double boiler 3–4 h). Use DRIED herbs — water in fresh herbs can grow bacteria.", time: "4–6 weeks (or 3–4 h warm)", storage: "Amber glass, cool, dark.", shelf: "~1 year", evidence: "Oil extracts fat-soluble constituents (resins, carotenoids).", safety: "Patch test before broad use. Garlic-in-oil carries botulism risk — refrigerate & use within days." },
  salve:     { name: "Salve", icon: "🫕", method: "Melt about 1 part beeswax into 4–5 parts infused oil, pour into tins.", time: "30 minutes + setting", storage: "Tins, cool place.", shelf: "1–2 years", evidence: "Occlusive barrier; evidence depends on the herb (e.g. calendula).", safety: "External use only; patch test." },
  balm:      { name: "Body Balm", icon: "🧈", method: "Melt butter, oil and wax together, cool to set; whip for a lighter texture.", time: "30 minutes", storage: "Cool place.", shelf: "~1 year", evidence: "Emollients reduce water loss from skin.", safety: "Patch test." },
  butter:    { name: "Whipped Body Butter", icon: "☁️", method: "Melt butter with oil, chill until semi-firm, then whip into clouds.", time: "1 hour", storage: "Cool, sealed jar.", shelf: "6–12 months", evidence: "Emollient.", safety: "External only." },
  scrub:     { name: "Body Scrub", icon: "✨", method: "Mix exfoliant with oil until it feels like wet sand. Massage in circles on damp skin, rinse.", time: "5 minutes", storage: "Sealed jar; keep water out.", shelf: "1–3 months", evidence: "Physical exfoliation removes dead cells; caffeine may temporarily tighten skin.", safety: "Not for face (except fine sugar), broken skin or right after shaving. Oils make tubs slippery!" },
  bath:      { name: "Bath Soak", icon: "🛁", method: "Mix salts and herbs; tie herbs in muslin or use a tea bag to avoid clogging drains.", time: "Soak 20 minutes", storage: "Airtight jar.", shelf: "6–12 months", evidence: "Warm baths improve sleep onset; magnesium absorption through skin is unproven.", safety: "Avoid very hot baths in pregnancy or with heart conditions." },
  oatbath:   { name: "Oat Milk Bath", icon: "🫧", method: "Colloidal oats (and herbs) in a muslin bag swished in warm water.", time: "Soak 15–20 minutes", storage: "Airtight jar.", shelf: "6 months", evidence: "Colloidal oatmeal is an FDA-recognized skin protectant for itch.", safety: "Gentle — great for sensitive skin." },
  steam:     { name: "Herbal Steam", icon: "♨️", method: "Pour hot (not boiling) water over herbs in a bowl; tent a towel over your head ~30 cm away.", time: "5–10 minutes", storage: "Make fresh.", shelf: "Single use", evidence: "Steam hydrates airways; aromatic herbs may ease congestion.", safety: "Keep eyes closed; avoid with asthma triggered by steam; supervise children (burn risk)." },
  mask:      { name: "Face Mask", icon: "🧖", method: "Mix into a smooth paste, apply to clean skin, rinse before it fully dries.", time: "10 minutes on skin", storage: "Make fresh.", shelf: "Single use", evidence: "Clay absorbs oil; honey is a humectant with antimicrobial properties.", safety: "Patch test; turmeric stains." },
  compress:  { name: "Warm Compress", icon: "🩹", method: "Soak a cloth in a strong warm tea or decoction, wring out and lay over the area.", time: "10–20 minutes", storage: "Make fresh.", shelf: "Single use", evidence: "Heat relaxes muscle and increases local circulation.", safety: "Check temperature first." },
  firecider: { name: "Fire Cider", icon: "🔥", method: "Chopped pungent roots, citrus and spices covered in apple cider vinegar, shaken daily, then sweetened with honey.", time: "4 weeks", storage: "Fridge or cool cupboard.", shelf: "~1 year", evidence: "Traditional folk tonic popularized by herbalist Rosemary Gladstar; little formal research.", safety: "Very acidic — dilute; avoid with reflux or ulcers." },
  goldenmilk:{ name: "Golden Moon Milk", icon: "🌕", method: "Warm milk with spices gently (don't boil), whisk, sweeten.", time: "10 minutes", storage: "Drink fresh.", shelf: "1 day", evidence: "Black pepper and fat improve curcumin absorption.", safety: "See turmeric & ashwagandha notes." },
  rinse:     { name: "Hair Rinse", icon: "💇", method: "Strong tea + a splash of vinegar, cooled and poured over hair as a final rinse.", time: "30 minutes to steep", storage: "Fridge.", shelf: "1 week", evidence: "Diluted vinegar smooths cuticles; rosemary has small human trial support for hair growth.", safety: "Dilute vinegar; avoid eyes." },
  lemonade:  { name: "Herbal Lemonade", icon: "🍋", method: "Cooled strong tea with lemon juice and honey over ice.", time: "15 minutes + chill", storage: "Fridge.", shelf: "2 days", evidence: "Hydrating.", safety: "Check herbs." },
  powder:    { name: "Herbal Powder", icon: "🥄", method: "Dried herbs ground fine and sifted; stir into food or drinks.", time: "10 minutes", storage: "Airtight, dark.", shelf: "6–12 months (powders lose potency faster)", evidence: "Whole-herb dosing.", safety: "Check herbs." }
};

/* Named, special recipes — matched first (all `need` ids must be present) */
BV.RECIPES = [
  { id: "coffee-scrub", name: "Coffee Glow Scrub", type: "scrub", need: ["coffee", "coconut"], color: "Espresso brown", taste: "—", aroma: "Fresh roasted coffee", uses: "Invigorating body exfoliation; temporarily smooths the look of skin.", synergy: "Coconut oil's lauric acid moisturizes while grounds buff." },
  { id: "sugar-lip", name: "Honey Sugar Lip Polish", type: "scrub", need: ["sugar", "honey"], color: "Amber", taste: "Sweet", aroma: "Caramel", uses: "Gentle lip exfoliation.", synergy: "Honey is a humectant that draws in moisture." },
  { id: "salt-scrub", name: "Sea Salt Body Polish", type: "scrub", need: ["seasalt", "olive"], color: "Pearl & gold", taste: "—", aroma: "Ocean", uses: "Rough skin on feet, elbows, knees.", synergy: "Salt grains buff; olive oil softens." },
  { id: "dreamy-lotus", name: "Blue Lotus Cinnamon Honey Tea", type: "tea", need: ["water", "honey", "h_bluelotus", "h_cinnamon"], color: "Pale gold-blue", taste: "Floral, sweet, warm", aroma: "Honeyed lotus and cinnamon", uses: "Traditional evening relaxation and dreamwork ritual.", synergy: "Cinnamon warms the cool, moist energetics of lotus; honey softens bitterness." },
  { id: "sleep-tea", name: "Moonlit Sleep Tea", type: "tea", need: ["water", "h_chamomile", "h_lavender"], color: "Pale gold", taste: "Floral, apple, honeyed", aroma: "Lavender fields", uses: "Winding down before sleep.", synergy: "Apigenin (chamomile) + linalool (lavender) both act on GABA pathways." },
  { id: "sore-throat", name: "Sore Throat Honey Tea", type: "tea", need: ["water", "honey", "h_thyme", "lemon"], color: "Golden", taste: "Herbal, lemony, sweet", aroma: "Thyme and citrus", uses: "Soothing scratchy throats.", synergy: "Thymol is antimicrobial; honey coats; lemon adds vitamin C." },
  { id: "ginger-lemon", name: "Ginger Lemon Honey", type: "decoction", need: ["water", "h_ginger", "lemon", "honey"], color: "Cloudy gold", taste: "Spicy, sour, sweet", aroma: "Zesty", uses: "Warming during chills; settling nausea.", synergy: "Ginger warms and settles; lemon brightens." },
  { id: "elder-syrup", name: "Elderberry Syrup", type: "syrup", need: ["water", "h_elderberry", "honey"], color: "Deep violet-black", taste: "Rich, tart berry", aroma: "Jammy, spiced", uses: "Traditional cold-and-flu season support.", synergy: "Add ginger and cinnamon for warming, classic variations." },
  { id: "fire-cider", name: "Fire Cider", type: "firecider", need: ["acv", "garlic", "onion", "horseradish"], color: "Sunset orange", taste: "Fiery, sour, pungent", aroma: "Sharp and spicy", uses: "A folk winter tonic taken by the spoonful.", synergy: "Pungent sulphur compounds + vinegar's mineral extraction." },
  { id: "calendula-oil", name: "Calendula Oil", type: "oil", need: ["olive", "h_calendula"], color: "Sunny orange", taste: "—", aroma: "Resinous, faint", uses: "Base for salves; soothing dry or irritated skin.", synergy: "Olive oil pulls out calendula's carotenoids and resins.", becomes: "calendula-oil" },
  { id: "skin-salve", name: "Calendula Healing Salve", type: "salve", need: ["calendula-oil", "beeswax"], color: "Golden", taste: "—", aroma: "Honeyed beeswax", uses: "Dry hands, chapped lips, minor scrapes.", synergy: "Beeswax seals in calendula's soothing oil." },
  { id: "golden-milk", name: "Golden Milk", type: "goldenmilk", need: ["milk", "h_turmeric", "pepper"], color: "Molten gold", taste: "Earthy, warm, sweet", aroma: "Spiced", uses: "Comforting evening drink.", synergy: "Piperine in pepper raises curcumin absorption." },
  { id: "moon-milk", name: "Ashwagandha Moon Milk", type: "goldenmilk", need: ["milk", "h_ashwagandha", "honey"], color: "Soft beige", taste: "Earthy, creamy", aroma: "Warm", uses: "Traditional Ayurvedic bedtime tonic.", synergy: "Fat and warmth carry the root's rejuvenative qualities." },
  { id: "hair-rinse", name: "Rosemary Shine Rinse", type: "rinse", need: ["water", "h_rosemary", "acv"], color: "Clear amber", taste: "—", aroma: "Piney, fresh", uses: "Final rinse for shine and scalp.", synergy: "Vinegar smooths cuticles; rosemary stimulates the scalp." },
  { id: "facial-steam", name: "Herbal Facial Steam", type: "steam", need: ["water", "h_rose", "h_calendula"], color: "Rosy gold", taste: "—", aroma: "Rose garden", uses: "Softening pores before cleansing.", synergy: "Rose tones and calendula soothes." },
  { id: "chest-steam", name: "Breathe Easy Steam", type: "steam", need: ["water", "h_thyme", "h_peppermint"], color: "Green", taste: "—", aroma: "Cool menthol & thyme", uses: "Congested sinuses.", synergy: "Menthol opens, thyme clears." },
  { id: "lavender-bath", name: "Lavender Epsom Soak", type: "bath", need: ["epsom", "h_lavender"], color: "Lilac crystals", taste: "—", aroma: "Lavender", uses: "Evening wind-down bath.", synergy: "Warm water + calming aroma." },
  { id: "oat-bath", name: "Chamomile Oat Bath", type: "oatbath", need: ["oats", "h_chamomile"], color: "Milky", taste: "—", aroma: "Honeyed apple", uses: "Itchy, sensitive skin.", synergy: "Colloidal oats protect; chamomile soothes." },
  { id: "clay-mask", name: "Honey Clay Mask", type: "mask", need: ["clay", "honey"], color: "Cream", taste: "—", aroma: "Faint honey", uses: "Oily or congested skin.", synergy: "Clay absorbs; honey hydrates." },
  { id: "turmeric-mask", name: "Haldi Glow Mask", type: "mask", need: ["h_turmeric", "honey", "oats"], color: "Saffron", taste: "—", aroma: "Earthy", uses: "Traditional pre-wedding brightening ritual.", synergy: "Turmeric + honey are a classic Ayurvedic pairing." },
  { id: "body-butter", name: "Whipped Cloud Butter", type: "butter", need: ["shea", "coconut"], color: "Ivory", taste: "—", aroma: "Nutty, soft", uses: "Deep moisture for dry skin.", synergy: "Shea's fatty acids + coconut's glide." },
  { id: "lip-balm", name: "Beeswax Lip Balm", type: "balm", need: ["beeswax", "shea", "olive"], color: "Honey", taste: "—", aroma: "Honey", uses: "Chapped lips.", synergy: "Wax seals, butter nourishes." },
  { id: "aloe-gel", name: "Cooling Aloe Lavender Gel", type: "mask", need: ["aloe", "h_lavender"], color: "Clear lilac", taste: "—", aroma: "Lavender", uses: "Soothing after-sun (unbroken skin).", synergy: "Aloe cools; lavender soothes." },
  { id: "nettle-infusion", name: "Nettle Mineral Infusion", type: "overnight", need: ["water", "h_nettle"], color: "Deep forest green", taste: "Green, mineral, like broth", aroma: "Hay", uses: "Nourishing daily tonic.", synergy: "Long steeping extracts minerals." },
  { id: "hibiscus-cooler", name: "Hibiscus Rose Cooler", type: "lemonade", need: ["water", "h_hibiscus", "h_rose", "lemon"], color: "Ruby red", taste: "Tart, floral", aroma: "Berry-rose", uses: "Summer refreshment.", synergy: "Hibiscus anthocyanins + rose aroma." },
  { id: "thyme-oxymel", name: "Thyme & Sage Oxymel", type: "oxymel", need: ["honey", "acv", "h_thyme", "h_sage"], color: "Amber", taste: "Sweet-sour, herbal", aroma: "Savoury herbs", uses: "Traditional cold-season spoonful.", synergy: "Honey + vinegar carry aromatic antimicrobials." },
  { id: "dandelion-coffee", name: "Roasted Dandelion 'Coffee'", type: "decoction", need: ["water", "h_dandelion", "h_cinnamon"], color: "Dark brown", taste: "Roasty, bittersweet", aroma: "Chocolatey", uses: "A caffeine-free coffee ritual.", synergy: "Bitters + cinnamon warmth." },
  { id: "cramp-compress", name: "Ginger Womb Compress", type: "compress", need: ["water", "h_ginger", "h_chamomile"], color: "Gold", taste: "—", aroma: "Spice & apple", uses: "Warming the lower belly during menstrual cramps.", synergy: "Heat + antispasmodic herbs." }
];

/* ---------- Forager's Field Guide ------------------------------------------ */
BV.FORAGE = [
  { id: "wildgarlic", name: "Wild Garlic (Ramsons)", latin: "Allium ursinum", wiki: "Allium_ursinum", edible: true, season: "Early spring", habitat: "Damp deciduous woodland, often near bluebells",
    id_tips: "Broad, soft, lance-shaped leaves; each leaf grows on its own stalk from the ground; crush a leaf — it MUST smell strongly of garlic. White star-shaped flowers in a ball.",
    lookalikes: ["lilyofvalley", "colchicum"], harvest: "Pick one leaf per plant, never uproot; leave bulbs.", wildlife: "Early nectar for hoverflies and bees." },
  { id: "lilyofvalley", name: "Lily of the Valley", latin: "Convallaria majalis", wiki: "Lily_of_the_valley", edible: false, deadly: true, season: "Spring", habitat: "Woodland, gardens",
    id_tips: "Leaves in pairs wrapping one stem, no garlic smell, nodding white bell flowers.", lookalikes: ["wildgarlic"], harvest: "DO NOT EAT — cardiac glycosides can stop the heart.", wildlife: "Toxic to pets." },
  { id: "elderwild", name: "Elder", latin: "Sambucus nigra", wiki: "Sambucus_nigra", edible: true, season: "Flowers late spring; berries late summer", habitat: "Hedgerows, woodland edges",
    id_tips: "Shrub with corky-bark stems, opposite compound leaves of 5–7 serrated leaflets, flat creamy umbels, then drooping purple-black berry clusters.",
    lookalikes: ["waterhemlock", "pokeweed"], harvest: "Cook berries always. Take only a third from each bush — birds need them.", wildlife: "40+ bird species eat the berries." },
  { id: "waterhemlock", name: "Water Hemlock", latin: "Cicuta maculata", wiki: "Cicuta_maculata", edible: false, deadly: true, season: "Summer", habitat: "Wet meadows, stream banks",
    id_tips: "Umbels of white flowers (unlike elder, it's an herb, not a woody shrub); chambered root base; purple-streaked stems.", lookalikes: ["queenannes", "elderwild"], harvest: "DEADLY — considered North America's most toxic plant (cicutoxin).", wildlife: "Kills livestock." },
  { id: "queenannes", name: "Queen Anne's Lace (Wild Carrot)", latin: "Daucus carota", wiki: "Daucus_carota", edible: true, season: "Summer", habitat: "Fields, roadsides",
    id_tips: "Hairy stems ('Queen Anne has hairy legs'), often a single dark purple floret in the centre, carrot-smelling root, bird's-nest seed head.",
    lookalikes: ["poisonhemlock", "waterhemlock"], harvest: "Only with expert confirmation — deadly look-alikes. Many foragers avoid wild carrot family plants entirely.", wildlife: "Host for black swallowtail caterpillars." },
  { id: "poisonhemlock", name: "Poison Hemlock", latin: "Conium maculatum", wiki: "Conium_maculatum", edible: false, deadly: true, season: "Late spring–summer", habitat: "Ditches, field edges, disturbed ground",
    id_tips: "Smooth (hairless) hollow stem with purple blotches, unpleasant mousy smell, tall (up to 2.5 m).", lookalikes: ["queenannes"], harvest: "DEADLY — the plant that killed Socrates. Avoid skin contact.", wildlife: "Toxic to all livestock." },
  { id: "chanterelle", name: "Golden Chanterelle", latin: "Cantharellus cibarius", wiki: "Cantharellus_cibarius", edible: true, season: "Summer–autumn", habitat: "Mossy woodland near oak, beech, birch, conifers",
    id_tips: "Egg-yolk yellow; blunt forking ridges (false gills) running down the stem; solid pale flesh; fruity apricot scent.", lookalikes: ["jackolantern"], harvest: "Cut at the base; leave small ones; carry in a mesh basket to spread spores.", wildlife: "Mycorrhizal partner of trees." },
  { id: "jackolantern", name: "Jack-o'-lantern Mushroom", latin: "Omphalotus olearius", wiki: "Omphalotus_olearius", edible: false, deadly: false, season: "Autumn", habitat: "Clusters on wood or buried roots",
    id_tips: "Orange, grows in dense clusters on wood, true sharp gills, faintly bioluminescent.", lookalikes: ["chanterelle"], harvest: "POISONOUS — severe vomiting and cramps.", wildlife: "Its gills can glow green in the dark." },
  { id: "morel", name: "Morel", latin: "Morchella esculenta", wiki: "Morchella_esculenta", edible: true, season: "Spring", habitat: "Old orchards, ash and elm woods, burn sites",
    id_tips: "Honeycomb pitted cap fused to the stem; completely HOLLOW when sliced lengthwise.", lookalikes: ["falsemorel"], harvest: "Always cook thoroughly — raw morels are toxic.", wildlife: "Fruits after forest fires." },
  { id: "falsemorel", name: "False Morel", latin: "Gyromitra esculenta", wiki: "Gyromitra_esculenta", edible: false, deadly: true, season: "Spring", habitat: "Conifer woods",
    id_tips: "Brain-like wrinkled (not pitted) cap; cotton-like filling inside, not hollow.", lookalikes: ["morel"], harvest: "DEADLY — contains gyromitrin (rocket-fuel-like compound).", wildlife: "—" },
  { id: "dandelionwild", name: "Dandelion", latin: "Taraxacum officinale", wiki: "Taraxacum_officinale", edible: true, season: "Spring–autumn", habitat: "Lawns, meadows",
    id_tips: "Rosette of toothed hairless leaves, one flower per hollow stem that bleeds milky latex.", lookalikes: ["catsear"], harvest: "Avoid sprayed lawns and roadsides.", wildlife: "Vital early pollinator food." },
  { id: "catsear", name: "Cat's-ear", latin: "Hypochaeris radicata", wiki: "Hypochaeris_radicata", edible: true, season: "Summer", habitat: "Lawns, dunes",
    id_tips: "Like dandelion but leaves are hairy and stems branch with several flowers. Edible and safe — a harmless look-alike.", lookalikes: ["dandelionwild"], harvest: "Leaves edible.", wildlife: "Bees and hoverflies." },
  { id: "plantain", name: "Broadleaf Plantain", latin: "Plantago major", wiki: "Plantago_major", edible: true, season: "Spring–autumn", habitat: "Paths, lawns, compacted soil",
    id_tips: "Low rosette of broad oval leaves with 5–7 parallel stringy veins; rat-tail seed spikes.", lookalikes: [], harvest: "Chew a leaf into a 'spit poultice' for bee stings (folk).", wildlife: "Called 'white man's footprint' by some Indigenous peoples — it followed colonists." },
  { id: "chickweed", name: "Chickweed", latin: "Stellaria media", wiki: "Stellaria_media", edible: true, season: "Cool seasons", habitat: "Garden beds, moist shade",
    id_tips: "Tiny white star flowers with 5 deeply split petals (look like 10); a single line of hairs runs up one side of the stem.", lookalikes: ["scarletpimpernel"], harvest: "Snip tender tips; delicious raw.", wildlife: "Seeds eaten by finches." },
  { id: "scarletpimpernel", name: "Scarlet Pimpernel", latin: "Lysimachia arvensis", wiki: "Lysimachia_arvensis", edible: false, deadly: false, season: "Summer", habitat: "Fields, gardens",
    id_tips: "Similar leaves to chickweed but stems are square and hairless; salmon-red flowers.", lookalikes: ["chickweed"], harvest: "Mildly toxic — avoid.", wildlife: "Closes flowers before rain ('poor man's weatherglass')." },
  { id: "blackberry", name: "Blackberry", latin: "Rubus fruticosus", wiki: "Blackberry", edible: true, season: "Late summer", habitat: "Hedgerows, scrub",
    id_tips: "Thorny arching canes, leaves of 3–5 toothed leaflets, aggregate berries that keep their core when picked.", lookalikes: [], harvest: "Pick above dog height; leave plenty for wildlife.", wildlife: "Shelter for nesting birds; food for mammals and insects." },
  { id: "nettlewild", name: "Stinging Nettle", latin: "Urtica dioica", wiki: "Urtica_dioica", edible: true, season: "Spring", habitat: "Rich damp soil",
    id_tips: "Opposite heart-shaped serrated leaves, square stem covered in stinging hairs, dangling green flower tassels.", lookalikes: ["deadnettle"], harvest: "Gloves! Top 4–6 leaves before flowering. Cooking or drying removes the sting.", wildlife: "Caterpillar food for many butterflies." },
  { id: "deadnettle", name: "White Dead-nettle", latin: "Lamium album", wiki: "Lamium_album", edible: true, season: "Spring–autumn", habitat: "Hedgerows, verges",
    id_tips: "Looks like nettle but doesn't sting, with white hooded mint-family flowers. A harmless look-alike.", lookalikes: ["nettlewild"], harvest: "Edible flowers and leaves.", wildlife: "Long-tongued bumblebees." },
  { id: "colchicum", name: "Autumn Crocus", latin: "Colchicum autumnale", wiki: "Colchicum_autumnale", edible: false, deadly: true, season: "Leaves in spring, flowers in autumn", habitat: "Damp meadows",
    id_tips: "Spring leaves can resemble wild garlic but have NO garlic smell and grow in clusters from a corm.", lookalikes: ["wildgarlic"], harvest: "DEADLY — colchicine poisoning.", wildlife: "Toxic to grazing animals." },
  { id: "yarrowwild", name: "Yarrow", latin: "Achillea millefolium", wiki: "Achillea_millefolium", edible: true, season: "Summer", habitat: "Meadows, roadsides",
    id_tips: "Feathery, finely divided 'thousand-leaf' foliage, flat clusters of tiny white flowers, strong aromatic smell.", lookalikes: ["poisonhemlock"], harvest: "Flowering tops; leave roots.", wildlife: "Insectary superstar." }
];

/* Foraging ethics */
BV.FORAGE_RULES = [
  "Never eat anything unless you are 100% certain of its identity — cross-check with multiple field guides and an experienced local forager.",
  "Learn the deadly plants of your region first, before the edible ones.",
  "Harvest no more than 10% of a patch (the 'honourable harvest'); leave the best plants to reproduce.",
  "Avoid roadsides, sprayed lawns, industrial sites and dog-walking zones.",
  "Know the law — foraging is restricted in many parks and reserves.",
  "Never harvest at-risk species (check United Plant Savers or local red lists).",
  "Introduce a new wild food in small amounts — individual allergies happen."
];

/* ---------- Living Garden ---------------------------------------------- */
BV.GARDEN_TOPICS = [
  { id: "seeds", title: "Seed Starting", icon: "🌱", wiki: "Seedling", body: "Most seeds need moisture, warmth and oxygen to germinate — many tiny seeds (chamomile, lettuce) also need light, so press them onto the surface. Sow at a depth of ~2× the seed's diameter. Start warm-season crops indoors 6–8 weeks before your last frost, then 'harden off' seedlings by setting them outside for longer each day over 7–10 days.", tips: ["Use sterile seed-starting mix", "Bottom-water to prevent damping-off", "Gentle fan breeze strengthens stems", "Label everything!"] },
  { id: "compost", title: "Composting", icon: "♻️", wiki: "Compost", body: "Compost is a feast for decomposers. Balance 'browns' (carbon: dry leaves, cardboard, straw) with 'greens' (nitrogen: kitchen scraps, grass, coffee grounds) at roughly 3:1 by volume. Keep it as moist as a wrung-out sponge and turn it for oxygen. A hot pile reaches 55–65 °C, killing weed seeds.", tips: ["No meat, dairy or oils in home piles", "Chop scraps small to speed decay", "Nettle and comfrey are 'activators'", "Finished compost smells like forest floor"] },
  { id: "soil", title: "Soil Health", icon: "🟫", wiki: "Soil_health", body: "Healthy soil is ~45% minerals, 25% air, 25% water and 5% organic matter. Structure (crumbly aggregates) matters as much as nutrients. Avoid compaction, keep soil covered with mulch or plants, and minimize digging to protect fungal networks.", tips: ["Do the jar test to learn your soil texture", "Mulch 5–8 cm deep", "Grow cover crops in winter", "Test pH every few years"] },
  { id: "microbes", title: "Soil Microbiology", icon: "🦠", wiki: "Soil_microbiology", body: "A teaspoon of healthy soil holds more microorganisms than there are people on Earth. Mycorrhizal fungi wrap or enter roots, trading water and phosphorus for plant sugars — and linking plants in 'wood wide web' networks. Bacteria fix nitrogen in legume root nodules.", tips: ["Avoid synthetic fungicides on soil", "Add diverse organic matter", "Inoculate with a handful of forest soil (ethically)", "Gardening exposes you to Mycobacterium vaccae, studied for mood benefits"] },
  { id: "companions", title: "Companion Planting", icon: "🤝", wiki: "Companion_planting", body: "Plants can help each other by deterring pests, attracting predators, providing shade or support, or fixing nitrogen. The Haudenosaunee 'Three Sisters' — corn, beans and squash — is a famous example: corn supports beans, beans feed nitrogen, squash shades the soil.", tips: ["Use the planner below to test pairings", "Basil near tomatoes", "Marigolds deter nematodes", "Keep fennel apart — it inhibits many plants"] },
  { id: "permaculture", title: "Permaculture & Food Forests", icon: "🌳", wiki: "Forest_gardening", body: "Permaculture designs gardens like ecosystems. A food forest stacks seven layers: canopy trees, small trees, shrubs, herbaceous plants, ground cover, roots and climbers. Once established it largely maintains itself.", tips: ["Observe a full year before big changes", "Put frequently visited plants nearest the door (Zone 1)", "Stack functions: each plant does 3+ jobs", "Catch and store water"] },
  { id: "water", title: "Water Conservation", icon: "💧", wiki: "Rainwater_harvesting", body: "Water deeply and less often to train deep roots. Mulch reduces evaporation up to 70%. Drip irrigation, rain barrels, swales and rain gardens keep water on site.", tips: ["Water at dawn", "Group plants by thirst", "Ollas (buried clay pots) irrigate slowly", "Choose drought-adapted natives"] },
  { id: "pests", title: "Natural Pest Management", icon: "🐞", wiki: "Integrated_pest_management", body: "Integrated Pest Management starts with tolerance and observation. Encourage predators (ladybirds, lacewings, hoverflies, birds, frogs) with diverse flowers, water and shelter. Hand-pick, use barriers, rotate crops — and only then targeted, gentle sprays.", tips: ["A few aphids feed ladybird larvae", "Beer traps for slugs", "Row covers for brassicas", "Avoid broad-spectrum pesticides"] },
  { id: "pollinators", title: "Pollinator Gardens", icon: "🐝", wiki: "Pollinator_garden", body: "Plant flowers in clumps of at least 1 m² for bloom from early spring to late autumn. Include native plants, single (not double) flowers, bare ground for ground-nesting bees, and leave hollow stems standing over winter.", tips: ["Dandelions & willows feed early bees", "Leave the leaves in autumn", "Shallow water dish with stones", "No pesticides on flowers"] },
  { id: "natives", title: "Native Plants & Invasives", icon: "🗺️", wiki: "Invasive_species", body: "Native plants co-evolved with local insects — an oak supports hundreds of caterpillar species, an exotic ornamental maybe a handful. Invasive species (like Japanese knotweed, kudzu, purple loosestrife) spread aggressively and displace natives.", tips: ["Check your region's invasive list", "Never compost invasive seeds", "Replace lawn edges with natives", "Join a local removal day"] },
  { id: "seedsaving", title: "Seed Saving", icon: "🫘", wiki: "Seed_saving", body: "Save seed from open-pollinated or heirloom plants (hybrids don't come true). Choose the healthiest plants, let seeds fully mature and dry, then store cool, dark and dry. Self-pollinating beans, peas, lettuce and tomatoes are the easiest start.", tips: ["Label with variety and year", "Envelopes in a jar with silica", "Most seeds last 2–5 years", "Share at seed swaps"] }
];

BV.GARDEN_CALENDAR = {
  1: ["Plan beds & order seeds", "Check stored seeds", "Prune dormant fruit trees"],
  2: ["Start onions & slow peppers indoors", "Build/turn compost", "Prepare seed trays"],
  3: ["Start tomatoes & herbs indoors", "Sow peas & spinach outdoors", "Divide perennials"],
  4: ["Harden off seedlings", "Sow chamomile & calendula", "Mulch beds"],
  5: ["Plant out after last frost", "Harvest nettle tops & elderflower", "Set up rain barrels"],
  6: ["Harvest lavender & lemon balm", "Succession-sow lettuce", "Watch for aphids"],
  7: ["Dry herbs in bundles", "Water deeply at dawn", "Harvest calendula every few days"],
  8: ["Save seeds", "Harvest elderberries", "Sow autumn greens"],
  9: ["Dig dandelion & burdock roots", "Plant garlic", "Sow cover crops"],
  10: ["Harvest roots (echinacea, valerian)", "Leave seed heads for birds", "Collect leaves for leaf mould"],
  11: ["Mulch perennials", "Plant bare-root roses & trees", "Clean tools"],
  12: ["Garden dreaming & journaling", "Make winter teas from your harvest", "Feed the birds"]
};

BV.COMPANIONS = {
  plants: ["Tomato", "Basil", "Carrot", "Onion", "Beans", "Corn", "Squash", "Cabbage", "Lettuce", "Lavender", "Calendula", "Rosemary", "Mint", "Fennel", "Marigold", "Strawberry", "Cucumber", "Dill"],
  good: [["Tomato","Basil"],["Tomato","Calendula"],["Tomato","Marigold"],["Tomato","Onion"],["Carrot","Onion"],["Carrot","Rosemary"],["Beans","Corn"],["Corn","Squash"],["Beans","Squash"],["Cabbage","Rosemary"],["Cabbage","Lavender"],["Cabbage","Dill"],["Lettuce","Carrot"],["Lettuce","Strawberry"],["Cucumber","Dill"],["Cucumber","Beans"],["Strawberry","Onion"],["Mint","Cabbage"],["Calendula","Beans"],["Marigold","Squash"],["Lavender","Strawberry"]],
  bad: [["Tomato","Fennel"],["Beans","Onion"],["Tomato","Cabbage"],["Fennel","Beans"],["Fennel","Carrot"],["Fennel","Dill"],["Carrot","Dill"],["Cucumber","Rosemary"],["Strawberry","Cabbage"],["Mint","Strawberry"]]
};

/* ---------- Healer's Trials: scenario quizzes ------------------------------ */
BV.QUIZ = [
  { cat: "Herbs", q: "Your friend wants a calming herbal tea, but she's on prescription sedatives for sleep. What's the wisest first step?",
    a: ["Brew valerian, lavender and chamomile together — more is better", "Suggest she checks with her doctor or pharmacist about additive sedative effects", "Herbs never interact with medicine", "Use essential oil in her tea instead"], c: 1,
    why: "Valerian, lavender, chamomile and others may add to sedative drugs. Asking a pharmacist is the safest first step — that's what a skilled healer does." },
  { cat: "Safety", q: "You picked elderberries for syrup. How should you prepare them?",
    a: ["Eat them raw for maximum vitamins", "Cook them thoroughly and remove stems", "Blend them with stems and leaves", "Freeze, then eat raw"], c: 1,
    why: "Raw elder berries, stems and leaves contain cyanogenic glycosides that cause nausea. Cooking and de-stemming makes them safe." },
  { cat: "Anatomy", q: "A client has cold hands, low energy, dry skin and thinning hair. Which gland might a doctor check first?",
    a: ["Thyroid", "Pineal", "Salivary glands", "Tear glands"], c: 0,
    why: "These are classic signs of an underactive thyroid. Herbs can't replace the blood test." },
  { cat: "Anatomy", q: "Where is about 90% of the body's serotonin produced?",
    a: ["Brain", "Gut", "Heart", "Skin"], c: 1, why: "Enterochromaffin cells in the gut make most of the body's serotonin, a key part of the gut–brain axis." },
  { cat: "Foraging", q: "You find white umbrella-shaped flowers by a stream with smooth, purple-blotched stems and a mousy smell. What do you do?",
    a: ["Harvest — it's wild carrot", "Leave it — likely poison hemlock", "Taste a small leaf to check", "Make tea from the flowers"], c: 1,
    why: "Smooth purple-blotched stems + mousy smell = poison hemlock. Wild carrot has hairy stems. Never taste-test." },
  { cat: "Herbs", q: "Someone with high blood pressure loves licorice tea daily. What should you know?",
    a: ["Licorice lowers blood pressure", "Glycyrrhizin can raise blood pressure and lower potassium", "It's safe in any amount", "Only the leaves matter"], c: 1,
    why: "Glycyrrhizin blocks 11β-HSD2, causing sodium retention. DGL (deglycyrrhizinated) licorice avoids this." },
  { cat: "Apothecary", q: "Why should you use DRIED rather than fresh herbs for a homemade infused oil?",
    a: ["Dried herbs smell better", "Water in fresh herbs can cause mould and bacterial growth", "Fresh herbs don't contain oils", "It's only tradition"], c: 1,
    why: "Water + oil + plant matter = spoilage risk. Dry herbs well first (or wilt them and heat-infuse carefully)." },
  { cat: "Herbs", q: "Turmeric is poorly absorbed alone. Which pairing helps most?",
    a: ["Water and ice", "Black pepper and a little fat", "Vinegar", "Sugar"], c: 1, why: "Piperine increased curcumin bioavailability by up to 2,000% in one human study; curcumin is fat-soluble." },
  { cat: "Pets", q: "A cat lives in the home. Which practice is riskiest?",
    a: ["Growing rosemary on the windowsill", "Diffusing lavender essential oil daily", "Storing dried nettle in a jar", "Drinking chamomile tea yourself"], c: 1,
    why: "Cats lack key liver enzymes to process many essential oil compounds; diffusing around cats is strongly discouraged." },
  { cat: "Garden", q: "Your compost pile smells like ammonia and is slimy. What does it need?",
    a: ["More kitchen scraps", "More browns (carbon) like dry leaves and cardboard", "More water", "A lid to seal it"], c: 1, why: "Ammonia smell = too much nitrogen. Add browns and turn for oxygen." },
  { cat: "Anatomy", q: "Which practice most directly activates the parasympathetic 'rest and digest' state?",
    a: ["Fast shallow chest breathing", "Long slow exhales", "Strong coffee", "Doom-scrolling"], c: 1, why: "Longer exhales stimulate the vagus nerve and slow the heart." },
  { cat: "Evidence", q: "A label claims 'clinically proven to cure anxiety' for a tea. Based on the evidence ratings, how should you think about it?",
    a: ["Believe it — it's on the label", "Look for the actual human trials, their size and whether results were replicated", "All herbs are proven", "Evidence doesn't matter for herbs"], c: 1,
    why: "'Cure' is a red flag. Good herbalists separate traditional use, lab findings and human clinical evidence." },
  { cat: "Herbs", q: "A pregnant friend wants a herb for morning sickness. Which has the most human research?",
    a: ["Ginger (with her midwife's OK)", "Yarrow", "Sage", "Blue lotus"], c: 0, why: "Ginger is the best-studied herb for pregnancy nausea. Yarrow and sage are avoided in pregnancy; blue lotus is unstudied." },
  { cat: "Garden", q: "Which plant should you keep away from most garden vegetables?",
    a: ["Calendula", "Fennel", "Basil", "Marigold"], c: 1, why: "Fennel exudes compounds that inhibit the growth of many neighbours." },
  { cat: "Foraging", q: "Your 'morel' is filled with cottony fibres when sliced. What is it?",
    a: ["A perfect morel", "A false morel — toxic", "A chanterelle", "A puffball"], c: 1, why: "True morels are completely hollow from cap to stem." }
];

/* Dis-Ease Decoding Den — root-cause cases */
BV.CASES = [
  { title: "The Exhausted Gardener", story: "Maya, 34, feels tired, cold all the time, has dry skin, constipation and hair falling out in the shower. Her periods have become heavier.", clues: ["Cold intolerance", "Dry skin", "Hair shedding", "Constipation", "Heavy periods"],
    options: ["Thyroid (endocrine)", "Lungs (respiratory)", "Bones (skeletal)", "Eyes (sensory)"], c: 0,
    lesson: "Slow metabolism signs point to the thyroid. A doctor can test TSH, T4 and thyroid antibodies. Iron levels are also worth checking with heavy periods.", organ: "thyroid" },
  { title: "The Glowing Then Breaking Out Student", story: "Leo, 19, has acne around the jaw that worsens during exams. He sleeps 5 hours, drinks energy drinks and eats mostly fast food.", clues: ["Jawline acne", "Stress-linked flares", "Sleep loss", "High-sugar diet"],
    options: ["Kidneys only", "Stress (nervous/endocrine) + blood sugar + gut–skin axis", "Bones", "Eyes"], c: 1,
    lesson: "Skin is a mirror: cortisol and insulin spikes raise oil and inflammation. Sleep, steady meals and stress care work alongside dermatology.", organ: "skin" },
  { title: "The Heartburn Mystery", story: "Grandpa Ray gets burning chest pain after big late dinners, worse lying down. He takes ibuprofen most days for his knee.", clues: ["Burning after large meals", "Worse lying down", "Daily NSAIDs"],
    options: ["Stomach & oesophagus (digestive)", "Thyroid", "Skin", "Lymph nodes"], c: 0,
    lesson: "Classic reflux pattern, and NSAIDs can irritate the stomach lining. Chest pain must ALWAYS be checked by a doctor to rule out heart causes first.", organ: "stomach" },
  { title: "The Puffy Morning Face", story: "Ana wakes with puffy eyes and face, feels heavy, sits at a desk 10 hours and drinks little water.", clues: ["Morning puffiness", "Sedentary", "Low water intake"],
    options: ["Lymphatic flow & fluid balance", "Bones", "Brain only", "Eyes only"], c: 0,
    lesson: "Lymph has no pump — it relies on movement and breath. Hydration, walking and gentle facial drainage help. Persistent swelling needs medical review (kidneys, heart).", organ: "lymph" },
  { title: "The Restless Night Owl", story: "Sam can't fall asleep before 2 am, scrolls on the phone in bed, drinks coffee at 4 pm and feels anxious during the day.", clues: ["Late sleep onset", "Evening screens", "Afternoon caffeine", "Daytime anxiety"],
    options: ["Circadian rhythm & nervous system", "Kidneys", "Bones", "Liver only"], c: 0,
    lesson: "Caffeine's half-life is ~5 hours; blue light delays melatonin. Morning light, caffeine before noon and a wind-down ritual (lavender, chamomile) help reset the clock.", organ: "brain" }
];

/* ---------- Daily Nature ------------------------------------------------- */
BV.DAILY = {
  trees: [["Oak","Quercus_robur"],["Silver Birch","Betula_pendula"],["Ginkgo","Ginkgo_biloba"],["Coast Redwood","Sequoia_sempervirens"],["Linden","Tilia_cordata"],["Willow","Salix_alba"],["Baobab","Adansonia_digitata"],["Yew","Taxus_baccata"],["Hawthorn","Crataegus_monogyna"],["Elder","Sambucus_nigra"],["Cedar of Lebanon","Cedrus_libani"],["Sugar Maple","Acer_saccharum"]],
  mushrooms: [["Lion's Mane","Hericium_erinaceus"],["Turkey Tail","Trametes_versicolor"],["Reishi","Ganoderma_lucidum"],["Chaga","Inonotus_obliquus"],["Fly Agaric (toxic)","Amanita_muscaria"],["Chanterelle","Cantharellus_cibarius"],["Oyster Mushroom","Pleurotus_ostreatus"],["Death Cap (deadly)","Amanita_phalloides"],["Shiitake","Shiitake"],["Cordyceps","Cordyceps_militaris"]],
  wildflowers: [["Bluebell","Hyacinthoides_non-scripta"],["Poppy","Papaver_rhoeas"],["Cornflower","Centaurea_cyanus"],["Foxglove (toxic)","Digitalis_purpurea"],["California Poppy","Eschscholzia_californica"],["Red Clover","Trifolium_pratense"],["Violet","Viola_odorata"],["Black-eyed Susan","Rudbeckia_hirta"],["Meadowsweet","Filipendula_ulmaria"],["St John's Wort","Hypericum_perforatum"]],
  birds: [["European Robin","European_robin"],["Northern Cardinal","Northern_cardinal"],["Barn Owl","Barn_owl"],["Ruby-throated Hummingbird","Ruby-throated_hummingbird"],["Common Kingfisher","Common_kingfisher"],["Blue Jay","Blue_jay"],["Eurasian Wren","Eurasian_wren"],["American Goldfinch","American_goldfinch"],["Great Tit","Great_tit"],["Song Thrush","Song_thrush"]],
  pollinators: [["Western Honey Bee","Western_honey_bee"],["Buff-tailed Bumblebee","Bombus_terrestris"],["Monarch Butterfly","Monarch_butterfly"],["Hummingbird Hawk-moth","Hummingbird_hawk-moth"],["Marmalade Hoverfly","Episyrphus_balteatus"],["Mason Bee","Osmia_bicornis"],["Lesser Long-nosed Bat","Lesser_long-nosed_bat"],["Seven-spot Ladybird","Coccinella_septempunctata"]],
  anatomy: [
    "Your stomach gets a new lining every 3–5 days so it doesn't digest itself.",
    "Bone is constantly remodelled — you get a 'new' skeleton roughly every 10 years.",
    "The cornea is one of the only tissues with no blood supply — it gets oxygen from the air.",
    "Your nose can detect over a trillion different scents.",
    "Humans share about 60% of their genes with a banana plant.",
    "The vagus nerve wanders from brainstem to belly — 80% of its fibres carry messages from body to brain.",
    "The liver performs over 500 functions.",
    "There are as many bacterial cells in your body as human cells — roughly 38 trillion.",
    "Your heart pumps about 7,500 litres of blood a day.",
    "Fingernails grow about four times faster than toenails.",
    "Laughing for 10–15 minutes burns about 40 calories.",
    "Your brain uses about 20% of your oxygen and calories."
  ],
  prompts: [
    "What plant would you be today, and why?", "Describe a scent that takes you back to childhood.", "Where in your body do you feel calm right now?",
    "What did nature teach you this week?", "Write a thank-you note to one of your organs.", "Which season lives in your heart today?",
    "What are you ready to let compost?", "What small seed of intention will you plant this moon?", "Sit outside for 5 minutes. List every sound you hear.",
    "What does 'rest' look like for your body today?", "Draw (or describe) a leaf you found today.", "Which herb feels like a friend? What would it say to you?"
  ],
  constellations: { 1: "Orion", 2: "Canis Major", 3: "Gemini", 4: "Leo", 5: "Ursa Major", 6: "Boötes", 7: "Scorpius", 8: "Cygnus", 9: "Lyra", 10: "Pegasus", 11: "Andromeda", 12: "Taurus" },
  constellationLore: { "Orion": "The Hunter — find the three-star belt; red Betelgeuse marks his shoulder.", "Canis Major": "Home of Sirius, the brightest star in the night sky.", "Gemini": "Twin stars Castor and Pollux.", "Leo": "A backwards question mark forms the lion's mane; Regulus is its heart.", "Ursa Major": "The Big Dipper points to Polaris, the North Star.", "Boötes": "The Herdsman with brilliant orange Arcturus.", "Scorpius": "Its heart is red giant Antares — 'rival of Mars'.", "Cygnus": "The Swan flies along the Milky Way as the Northern Cross.", "Lyra": "Small but holds Vega, once (and future) pole star.", "Pegasus": "Look for the Great Square of autumn.", "Andromeda": "Hosts the Andromeda Galaxy, visible to the naked eye 2.5 million light years away.", "Taurus": "The Bull's eye is Aldebaran; the Pleiades ride its shoulder." }
};

/* ---------- Mirror Garden: beauty from within ---------------------------- */
BV.BEAUTY = [
  { id: "hyperpig", name: "Hyperpigmentation", icon: "🌗", systems: ["integumentary", "endocrine", "digestive"], organs: ["skin", "liver"],
    science: "Excess melanin triggered by UV, inflammation (post-inflammatory hyperpigmentation) and hormones (melasma). Daily broad-spectrum sunscreen is the single most evidence-based step.",
    inner: "Traditional systems link pigmentation with the liver and 'heat'. Hormone clearance (liver, fibre) and anti-inflammatory nutrition support skin from within.",
    nutrition: ["Vitamin C foods", "Colourful polyphenols", "Fibre for hormone clearance"], herbs: ["licorice", "turmeric", "dandelion", "rose"],
    recipes: ["turmeric-mask", "facial-steam"], ritual: "Morning SPF as a ritual of self-protection; a weekly gentle mask under a waxing moon.",
    spirit: "Seen in some traditions as holding onto 'stored heat' or unexpressed emotion — journaling and cooling practices.", evidence: [{ claim: "Licorice extract (glabridin) inhibits tyrosinase in lab studies and is used in brightening cosmetics.", level: "lab" }, { claim: "Daily sunscreen prevents and improves pigmentation.", level: "strong" }] },
  { id: "hairthin", name: "Hair Thinning", icon: "💇‍♀️", systems: ["endocrine", "nervous", "cardiovascular"], organs: ["thyroid", "skin"],
    science: "Common causes: stress-triggered shedding (telogen effluvium) ~3 months after a stressor, iron or protein deficiency, thyroid imbalance, postpartum changes and androgenetic patterns.",
    inner: "Check ferritin, thyroid and vitamin D with a doctor. Stress care and protein-rich meals matter. In TCM, hair is linked to 'blood' and kidney essence.",
    nutrition: ["Protein", "Iron (with vitamin C)", "Zinc", "Biotin (only if deficient)", "Omega-3s"], herbs: ["rosemary", "nettle", "ashwagandha"],
    recipes: ["hair-rinse", "nettle-infusion"], ritual: "Nightly 4-minute scalp massage with rosemary-infused oil — blood flow plus calm.",
    spirit: "Hair as antenna and strength in many cultures; cutting hair as release ritual.", evidence: [{ claim: "Rosemary oil comparable to 2% minoxidil after 6 months in one small RCT.", level: "human" }, { claim: "Daily scalp massage increased hair thickness in a small study.", level: "human" }] },
  { id: "acne", name: "Breakouts", icon: "🌋", systems: ["endocrine", "digestive", "integumentary", "microbiome"], organs: ["skin", "intestines"],
    science: "Oil (sebum) + clogged pores + C. acnes bacteria + inflammation. Androgens, high-glycemic diets and stress all play roles.",
    inner: "Balanced blood sugar, sleep, gut health and stress care support conventional treatment.",
    nutrition: ["Low-glycemic foods", "Zinc", "Omega-3s", "Fermented foods"], herbs: ["burdock", "calendula", "thyme", "dandelion"],
    recipes: ["clay-mask", "facial-steam"], ritual: "Clean pillowcases on each new moon; hands-off-face awareness.",
    spirit: "Some traditions read jawline breakouts as connected to the womb and hormonal cycle.", evidence: [{ claim: "Low-glycemic-load diets reduced acne lesions in RCTs.", level: "human" }] },
  { id: "dry", name: "Dry, Tight Skin", icon: "🏜️", systems: ["integumentary", "endocrine"], organs: ["skin", "thyroid"],
    science: "A weakened lipid barrier lets water escape (TEWL). Hot showers, harsh cleansers, low humidity and hypothyroidism contribute.",
    inner: "Healthy fats, hydration and thyroid health; humidify winter air.", nutrition: ["Omega-3s", "Avocado & olive oil", "Water"], herbs: ["calendula", "chamomile", "rose"],
    recipes: ["body-butter", "oat-bath", "calendula-oil"], ritual: "Abhyanga — warm oil self-massage before a shower, moving toward the heart.",
    spirit: "Moistening, Water-element practices: slow, soft, nourishing.", evidence: [{ claim: "Colloidal oatmeal strengthens the skin barrier.", level: "strong" }] },
  { id: "darkcircles", name: "Dark Circles & Puffiness", icon: "🌙", systems: ["lymphatic", "nervous", "cardiovascular"], organs: ["lymph", "eyes"],
    science: "Thin under-eye skin shows blood vessels; genetics, allergies, sleep loss, fluid retention and iron deficiency contribute.",
    inner: "Sleep, allergy care, iron status and salt balance.", nutrition: ["Iron", "Vitamin K greens", "Lower salt"], herbs: ["chamomile", "calendula", "nettle"],
    recipes: ["sleep-tea"], ritual: "Cool chamomile tea-bag compresses + gentle lymph sweeps toward the ears.",
    spirit: "The eyes as windows — rest them from screens at sunset.", evidence: [{ claim: "Caffeine and cold compresses temporarily constrict vessels and reduce puffiness.", level: "human" }] },
  { id: "dull", name: "Dull Skin", icon: "🌫️", systems: ["cardiovascular", "digestive", "respiratory"], organs: ["skin", "heart", "lungs"],
    science: "Build-up of dead cells, poor circulation, dehydration and sleep debt reduce skin's light reflection.",
    inner: "Movement for circulation, colourful plants, water, sleep.", nutrition: ["Carotenoids (associated with a healthy golden glow)", "Water", "Vitamin C"], herbs: ["rose", "hibiscus", "ginger", "calendula"],
    recipes: ["coffee-scrub", "hibiscus-cooler", "sugar-lip"], ritual: "Morning brisk walk + gentle weekly exfoliation.",
    spirit: "Glow as inner fire — Fire Realm practices of joy and movement.", evidence: [{ claim: "Higher fruit and vegetable intake increased skin yellowness perceived as healthy and attractive.", level: "human" }] }
];

/* ---------- Soulbody Shrine — spiritual anatomy (optional layer) ---------- */
BV.CHAKRAS = [
  { id: "root", name: "Root · Muladhara", y: 88, color: "#c0392b", element: "Earth", place: "Base of spine, pelvic floor", emotions: "Safety, belonging, trust", imbalance: "Fear, scarcity, feeling unrooted", tcm: "Kidney & lower dantian (jing, essence)", ayur: "Apana vayu (downward energy)", herbs: ["ashwagandha", "dandelion", "burdock", "ginger"], crystals: ["Red jasper", "Smoky quartz", "Hematite"], practice: "Barefoot grounding, slow squats, root vegetables, 4-7-8 breath." },
  { id: "sacral", name: "Sacral · Svadhisthana", y: 76, color: "#e67e22", element: "Water", place: "Lower belly, womb space", emotions: "Creativity, pleasure, flow", imbalance: "Numbness, guilt, creative block", tcm: "Lower dantian, Ren meridian", ayur: "Kapha / Apana", herbs: ["rose", "calendula", "hibiscus"], crystals: ["Carnelian", "Moonstone"], practice: "Hip circles, dance, womb-warming compress, moon journaling." },
  { id: "solar", name: "Solar Plexus · Manipura", y: 63, color: "#f1c40f", element: "Fire", place: "Upper belly, diaphragm", emotions: "Confidence, will, digestion of experience", imbalance: "Anger, people-pleasing, digestive tension", tcm: "Spleen–Stomach, middle dantian", ayur: "Samana vayu, Pitta", herbs: ["ginger", "turmeric", "peppermint", "cinnamon"], crystals: ["Citrine", "Tiger's eye"], practice: "Breath of fire (gently), core strength, bitter herbs before meals." },
  { id: "heart", name: "Heart · Anahata", y: 49, color: "#27ae60", element: "Air", place: "Centre of chest", emotions: "Love, grief, compassion", imbalance: "Closed off, grief held in the chest", tcm: "Heart (Shen — spirit)", ayur: "Prana / Vyana vayu", herbs: ["rose", "hibiscus", "lemonbalm", "tulsi"], crystals: ["Rose quartz", "Green aventurine"], practice: "Heart-opening backbends, loving-kindness meditation, rose tea." },
  { id: "throat", name: "Throat · Vishuddha", y: 36, color: "#3498db", element: "Ether / Sound", place: "Throat, thyroid", emotions: "Truth, expression", imbalance: "Holding back words, tight jaw", tcm: "Lung meridian (grief, letting go)", ayur: "Udana vayu", herbs: ["thyme", "sage", "licorice", "peppermint"], crystals: ["Blue lace agate", "Aquamarine"], practice: "Humming, singing, journaling honest truths, throat-soothing teas." },
  { id: "third", name: "Third Eye · Ajna", y: 24, color: "#5b4bb7", element: "Light", place: "Between the brows", emotions: "Intuition, insight", imbalance: "Confusion, overthinking", tcm: "Upper dantian (Yintang point)", ayur: "Prana vayu, mind (manas)", herbs: ["lavender", "rosemary", "bluelotus"], crystals: ["Amethyst", "Lapis lazuli"], practice: "Candle gazing, dream journaling, sleep hygiene." },
  { id: "crown", name: "Crown · Sahasrara", y: 12, color: "#9b59b6", element: "Thought / Spirit", place: "Top of the head", emotions: "Connection, meaning, awe", imbalance: "Isolation, cynicism", tcm: "Baihui (GV20) point", ayur: "Sattva", herbs: ["tulsi", "lavender", "chamomile"], crystals: ["Clear quartz", "Selenite"], practice: "Silent meditation, stargazing in the Observatory, awe walks." }
];

/* ---------- The four elemental Realms ------------------------------------- */
BV.REALMS = [
  { id: "earth", name: "Earth Realm", place: "Rootlands", icon: "🜃", color: "#7a5b3a", aura: "#a8854f", focus: "Digestion, blood, fertility, protection", systems: ["digestive", "skeletal", "reproductive"], herbs: ["dandelion", "burdock", "nettle", "ashwagandha"], ritual: "Root-vegetable soups, barefoot walks, nettle infusions, slow grounding breath.", quest: "Grow one plant from seed this moon." },
  { id: "air", name: "Air Realm", place: "Whisperwind Cliffs", icon: "🜁", color: "#7fa7b8", aura: "#bfe3f0", focus: "Lungs, breathwork, clarity, flower medicine", systems: ["respiratory", "nervous"], herbs: ["thyme", "peppermint", "lavender", "tulsi"], ritual: "Morning breathwork on a hill or balcony, flower essences, herbal steams.", quest: "Practise 5 minutes of slow breath for 7 days." },
  { id: "fire", name: "Fire Realm", place: "Ember Vale", icon: "🜂", color: "#c0582f", aura: "#ffb36b", focus: "Inflammation, metabolism, anger release, courage", systems: ["cardiovascular", "immune", "digestive"], herbs: ["ginger", "turmeric", "cinnamon", "rosemary"], ritual: "Candle intention-setting, dance, fire cider, cooling the over-heat with hibiscus.", quest: "Craft fire cider in the Apothecary." },
  { id: "water", name: "Water Realm", place: "Moonflow Marsh", icon: "🜄", color: "#3d6f8f", aura: "#8fc4e8", focus: "Womb, intuition, emotions, sea herbs", systems: ["reproductive", "urinary", "lymphatic"], herbs: ["rose", "chamomile", "bluelotus", "hibiscus"], ritual: "Moon baths, cycle tracking, dream journaling, sea-salt soaks.", quest: "Log your cycle and moon phase for one full moon." }
];

/* ---------- Circle of Seasons --------------------------------------------- */
BV.SEASONS = {
  spring: { name: "Spring", icon: "🌸", element: "Wood / Air", months: [3, 4, 5], herbs: ["nettle", "dandelion", "elderberry", "lemonbalm"], foods: "Bitter greens, sprouts, wild garlic, asparagus", rituals: "Spring cleaning (home & body), seed blessing, sunrise walks", cosmic: "Equinox — equal light and dark; the sun rises into Aries", focus: "Liver & renewal", visual: "Blossoms, fresh greenery, pollinators return" },
  summer: { name: "Summer", icon: "☀️", element: "Fire", months: [6, 7, 8], herbs: ["hibiscus", "peppermint", "calendula", "lavender", "rose"], foods: "Berries, cucumbers, cooling salads, herbal iced teas", rituals: "Solstice bonfires, herb harvesting & drying, gathering with friends", cosmic: "Solstice — the longest day", focus: "Heart & joy; heat safety", visual: "Harvest calendars, drying racks, golden light" },
  autumn: { name: "Autumn", icon: "🍂", element: "Metal / Earth", months: [9, 10, 11], herbs: ["elderberry", "echinacea", "burdock", "thyme", "ashwagandha"], foods: "Roots, squash, mushrooms, apples, warming spices", rituals: "Gratitude harvest, seed saving, letting go (like the trees)", cosmic: "Equinox — balance returns before the dark", focus: "Lungs & immunity; grief and release", visual: "Falling leaves, root harvest, mushroom season" },
  winter: { name: "Winter", icon: "❄️", element: "Water", months: [12, 1, 2], herbs: ["ginger", "cinnamon", "licorice", "rosemary", "turmeric"], foods: "Broths, stews, golden milk, preserved harvest", rituals: "Solstice candle vigil, dreaming & planning, rest", cosmic: "Solstice — the longest night; the light begins to return", focus: "Kidneys & deep rest", visual: "Evergreens, frost, cosy candlelight" }
};

/* ---------- Progression ---------------------------------------------------- */
BV.TITLES = [
  { xp: 0, name: "Seedling", icon: "🌱" },
  { xp: 120, name: "Sprout", icon: "🌿" },
  { xp: 300, name: "Apprentice Herbalist", icon: "🍃" },
  { xp: 650, name: "Forager", icon: "🧺" },
  { xp: 1100, name: "Green Witch", icon: "🧙‍♀️" },
  { xp: 1800, name: "Master Herbalist", icon: "⚗️" },
  { xp: 3000, name: "Keeper of the Grove", icon: "🌳" }
];

BV.ACHIEVEMENTS = [
  { id: "first-step", name: "First Step into the Grove", icon: "👣", desc: "Visit Bodyverse.", test: s => true },
  { id: "herb-5", name: "Leaf Collector", icon: "🍃", desc: "Read 5 herb pages.", test: s => s.herbsRead.length >= 5 },
  { id: "herb-all", name: "Codex Scholar", icon: "📚", desc: "Read every herb in the Codex.", test: s => s.herbsRead.length >= BV.HERBS.length },
  { id: "organ-5", name: "Anatomist", icon: "🫀", desc: "Explore 5 organs.", test: s => s.organsRead.length >= 5 },
  { id: "alch-1", name: "First Brew", icon: "🧪", desc: "Craft your first preparation.", test: s => s.crafted.length >= 1 },
  { id: "alch-10", name: "Soft Alchemist", icon: "⚗️", desc: "Discover 10 preparations.", test: s => s.crafted.length >= 10 },
  { id: "quiz-10", name: "Trial Walker", icon: "⚔️", desc: "Answer 10 trial questions correctly.", test: s => s.quizCorrect >= 10 },
  { id: "id-5", name: "Keen Eye", icon: "🔍", desc: "Identify 5 plants in the Field game.", test: s => s.ids >= 5 },
  { id: "journal-3", name: "Field Scribe", icon: "📔", desc: "Write 3 journal entries.", test: s => s.journal.length >= 3 },
  { id: "streak-3", name: "Returning Bird", icon: "🐦", desc: "Visit 3 days in a row.", test: s => s.streak >= 3 },
  { id: "streak-7", name: "Moon Cycle Devotee", icon: "🌙", desc: "Visit 7 days in a row.", test: s => s.streak >= 7 },
  { id: "realm", name: "Path Chosen", icon: "🜃", desc: "Choose an elemental Realm.", test: s => !!s.realm },
  { id: "avatar", name: "Mirror Gazer", icon: "🪞", desc: "Create your healer at Mirror Lake.", test: s => !!s.avatarSaved },
  { id: "web", name: "Web Weaver", icon: "🕸️", desc: "Follow 10 threads in the Knowledge Web.", test: s => s.webHops >= 10 },
  { id: "case", name: "Root Seeker", icon: "🕳️", desc: "Solve a case in the Decoding Den.", test: s => s.cases >= 1 },
  { id: "places", name: "Wanderer", icon: "🗺️", desc: "Visit 10 places in the world.", test: s => s.places.length >= 10 }
];

BV.QUESTS = [
  { id: "q-sleep", cat: "Herbalism", name: "The Sleep Weaver", steps: [["Read Lavender", s => s.herbsRead.includes("lavender")], ["Read Chamomile", s => s.herbsRead.includes("chamomile")], ["Brew Moonlit Sleep Tea", s => s.crafted.includes("sleep-tea")]], reward: "Unlocks the 'Dream Ritual' in Daily Dose" },
  { id: "q-skin", cat: "Beauty", name: "Inner Glow", steps: [["Explore Skin in the Atlas", s => s.organsRead.includes("skin")], ["Read Calendula", s => s.herbsRead.includes("calendula")], ["Make Calendula Oil", s => s.crafted.includes("calendula-oil")], ["Make a Healing Salve", s => s.crafted.includes("skin-salve")]], reward: "Badge: Salve Maker" },
  { id: "q-forager", cat: "Foraging", name: "Safe Hands", steps: [["Identify 3 plants", s => s.ids >= 3], ["Read the foraging rules", s => s.flags.rules]], reward: "Title progress toward Forager" },
  { id: "q-heart", cat: "Soft skills", name: "Open Heart", steps: [["Visit the Soulbody Shrine", s => s.places.includes("shrine")], ["Write a journal entry", s => s.journal.length >= 1], ["Explore the Heart", s => s.organsRead.includes("heart")]], reward: "Rose aura shimmer for your avatar" },
  { id: "q-winter", cat: "Herbalism", name: "Winter Hearth", steps: [["Make Fire Cider", s => s.crafted.includes("fire-cider")], ["Make Elderberry Syrup", s => s.crafted.includes("elder-syrup")], ["Make Golden Milk", s => s.crafted.includes("golden-milk")]], reward: "Badge: Hearth Keeper" },
  { id: "q-trauma", cat: "Trauma healing", name: "Gentle Return", steps: [["Learn about the Nervous System", s => s.organsRead.includes("brain")], ["Receive a Daily Dose", s => s.flags.dose], ["Log an intention", s => s.journal.some(j => j.type === "intention")]], reward: "A soft reminder: healing isn't linear." }
];

/* ---------- Digital Twin Earth: regions & traditions ----------------------- */
BV.REGIONS = [
  { lat: 22, lng: 79, name: "Indian Subcontinent", tradition: "Ayurveda, Siddha, Unani", plants: ["Ashwagandha", "Tulsi", "Turmeric", "Neem", "Brahmi"], ecosystem: "Monsoon forests, Himalayan foothills, deserts", note: "Ayurveda's written texts (Charaka Samhita) date back over 2,000 years." },
  { lat: 35, lng: 105, name: "China", tradition: "Traditional Chinese Medicine", plants: ["Ginseng", "Astragalus", "Licorice (gan cao)", "Ginkgo", "Goji"], ecosystem: "Temperate forests, mountains, river plains", note: "The Shennong Bencao Jing catalogued 365 medicinals around 2,000 years ago." },
  { lat: -3, lng: -60, name: "Amazon Basin", tradition: "Indigenous Amazonian plant knowledge", plants: ["Cat's claw", "Guayusa", "Dragon's blood (sangre de grado)", "Cacao"], ecosystem: "Tropical rainforest — ~10% of known species", note: "Respect: much of this knowledge belongs to living Indigenous communities; support their land rights." },
  { lat: 9, lng: 38, name: "Horn of Africa & Ethiopia", tradition: "Ethiopian traditional medicine", plants: ["Coffee (wild origin)", "Koseret", "Frankincense", "Myrrh"], ecosystem: "Highlands, dry forests", note: "Wild Coffea arabica originated in Ethiopia's forests." },
  { lat: -29, lng: 24, name: "Southern Africa", tradition: "Khoi-San & Zulu traditional healing", plants: ["Rooibos", "Buchu", "Pelargonium sidoides", "Devil's claw"], ecosystem: "Fynbos — one of Earth's richest floral kingdoms", note: "Benefit-sharing agreements now recognize San and Khoi knowledge of rooibos." },
  { lat: 46, lng: 2, name: "Europe", tradition: "Western herbalism, monastic medicine", plants: ["Chamomile", "Elder", "Nettle", "Calendula", "Hawthorn"], ecosystem: "Temperate deciduous forests, meadows", note: "Hildegard of Bingen (12th c.) wrote Physica, describing hundreds of plants." },
  { lat: 37, lng: -97, name: "North America (Great Plains)", tradition: "Native American plant medicine (many distinct Nations)", plants: ["Echinacea", "Sweetgrass", "Yarrow", "Sage (Salvia apiana — at risk)"], ecosystem: "Tallgrass prairie, now <5% remaining", note: "White sage is threatened by over-harvest; many Nations ask non-Natives not to buy it." },
  { lat: 26, lng: 30, name: "Nile Valley", tradition: "Ancient Egyptian medicine", plants: ["Blue lotus", "Aloe", "Frankincense", "Garlic", "Hibiscus (karkadé)"], ecosystem: "River oasis in desert", note: "The Ebers Papyrus (c. 1550 BCE) lists ~700 remedies." },
  { lat: -25, lng: 134, name: "Australia", tradition: "Aboriginal bush medicine", plants: ["Tea tree", "Eucalyptus", "Kakadu plum", "Lemon myrtle"], ecosystem: "Desert, savanna, rainforest", note: "Over 60,000 years of continuous ecological knowledge." },
  { lat: 19, lng: -99, name: "Mesoamerica", tradition: "Aztec (Nahua) & Maya medicine, curanderismo", plants: ["Cacao", "Vanilla", "Damiana", "Epazote", "Hibiscus (flor de Jamaica)"], ecosystem: "Highland pine-oak forests, tropical lowlands", note: "The Badianus Manuscript (1552) is the earliest herbal written in the Americas." },
  { lat: 36, lng: 138, name: "Japan", tradition: "Kampo medicine, shinrin-yoku", plants: ["Shiso", "Burdock (gobō)", "Yuzu", "Reishi"], ecosystem: "Temperate forests, volcanic mountains", note: "Japan coined 'forest bathing' (shinrin-yoku) in 1982." },
  { lat: 64, lng: 26, name: "Nordic & Sámi lands", tradition: "Nordic folk herbalism, Sámi knowledge", plants: ["Angelica", "Chaga", "Lingonberry", "Rhodiola"], ecosystem: "Boreal forest (taiga), tundra", note: "Rhodiola rosea ('golden root') was used for endurance in harsh winters." },
  { lat: -41, lng: 174, name: "Aotearoa New Zealand", tradition: "Rongoā Māori", plants: ["Kawakawa", "Mānuka", "Harakeke (flax)", "Kūmarahou"], ecosystem: "Temperate rainforest", note: "Rongoā is a holistic system that includes spiritual and physical healing." }
];
