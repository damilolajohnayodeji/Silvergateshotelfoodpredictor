/* ══════════════════════════════════════
   SILVERGATES HOTEL & SUITES
   Application Script — silvergates.js
   Link from HTML: <script src="silvergates.js"></script>
   (Place script tag at bottom of <body>, after all HTML)
══════════════════════════════════════ */

/* ─── MENU DATA ─────────────────────────────────────────── */
const DEFAULT_MENU = [
  // RICE & MEALS
  {name:"Jollof Rice",category:"Rice & Meals",taste:"Rich",spice:"Medium",weight:"Medium",style:"Traditional",availability:true},
  {name:"Fried Rice",category:"Rice & Meals",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Italian Rice",category:"Rice & Meals",taste:"Savory",spice:"None",weight:"Medium",style:"Continental",availability:true},
  {name:"Seafood Rice",category:"Rice & Meals",taste:"Rich",spice:"Mild",weight:"Heavy",style:"Continental",availability:true},
  {name:"Chicken Biryani",category:"Rice & Meals",taste:"Spicy",spice:"Medium",weight:"Heavy",style:"Continental",availability:true},
  {name:"Chicken Curry",category:"Rice & Meals",taste:"Spicy",spice:"Hot",weight:"Heavy",style:"Continental",availability:true},

  // PASTA & NOODLES
  {name:"Seafood Pasta",category:"Pasta & Noodles",taste:"Rich",spice:"Mild",weight:"Medium",style:"Continental",availability:true},
  {name:"Stir Fry Pasta",category:"Pasta & Noodles",taste:"Savory",spice:"Mild",weight:"Medium",style:"Continental",availability:true},
  {name:"Stir Fry Noodles",category:"Pasta & Noodles",taste:"Savory",spice:"Mild",weight:"Medium",style:"Quick",availability:true},
  {name:"Spaghetti Bolognese",category:"Pasta & Noodles",taste:"Rich",spice:"None",weight:"Medium",style:"Continental",availability:true},
  {name:"Spaghetti Arrabiata",category:"Pasta & Noodles",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Continental",availability:true},
  {name:"Spaghetti Carbonara",category:"Pasta & Noodles",taste:"Rich",spice:"None",weight:"Medium",style:"Continental",availability:true},

  // SWALLOW
  {name:"Amala",category:"Swallow",taste:"Rich",spice:"None",weight:"Heavy",style:"Traditional",availability:true},
  {name:"Pounded Yam",category:"Swallow",taste:"Rich",spice:"None",weight:"Heavy",style:"Traditional",availability:true},
  {name:"Eba",category:"Swallow",taste:"Rich",spice:"None",weight:"Heavy",style:"Traditional",availability:true},
  {name:"Fufu",category:"Swallow",taste:"Rich",spice:"None",weight:"Heavy",style:"Traditional",availability:true},
  {name:"Wheat",category:"Swallow",taste:"Rich",spice:"None",weight:"Heavy",style:"Traditional",availability:true},

  // SOUPS
  {name:"Egusi",category:"Soups",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Ogbono",category:"Soups",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Efo Riro",category:"Soups",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Traditional",availability:true},
  {name:"Oha Soup",category:"Soups",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Mixed Okro",category:"Soups",taste:"Savory",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Edikaikong",category:"Soups",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Afang Soup",category:"Soups",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},

  // PROTEINS
  {name:"Chicken",category:"Proteins",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Beef",category:"Proteins",taste:"Rich",spice:"None",weight:"Medium",style:"Traditional",availability:true},
  {name:"Goatmeat",category:"Proteins",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Assorted",category:"Proteins",taste:"Rich",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Titus Fish",category:"Proteins",taste:"Savory",spice:"Mild",weight:"Light",style:"Traditional",availability:true},
  {name:"Croaker Fish",category:"Proteins",taste:"Savory",spice:"Mild",weight:"Medium",style:"Traditional",availability:true},
  {name:"Snail",category:"Proteins",taste:"Savory",spice:"None",weight:"Light",style:"Traditional",availability:true},

  // GRILLS & PEPPERY
  {name:"Peppered Chicken",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Traditional",availability:true},
  {name:"Peppered Beef",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Traditional",availability:true},
  {name:"Peppered Fish",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Traditional",availability:true},
  {name:"Goatmeat Peppersoup",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Medium",style:"Traditional",availability:true},
  {name:"Chicken Peppersoup",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Light",style:"Traditional",availability:true},
  {name:"Catfish Peppersoup",category:"Grills & Peppery",taste:"Spicy",spice:"Hot",weight:"Light",style:"Traditional",availability:true},
  {name:"Grilled Chicken",category:"Grills & Peppery",taste:"Savory",spice:"Mild",weight:"Medium",style:"Continental",availability:true},
  {name:"Grilled Prawns",category:"Grills & Peppery",taste:"Savory",spice:"Mild",weight:"Light",style:"Continental",availability:true},

  // LIGHT MEALS
  {name:"Club Sandwich",category:"Light Meals",taste:"Savory",spice:"None",weight:"Light",style:"Quick",availability:true},
  {name:"Chicken Shawarma",category:"Light Meals",taste:"Savory",spice:"Mild",weight:"Light",style:"Quick",availability:true},
  {name:"Beef Shawarma",category:"Light Meals",taste:"Savory",spice:"Mild",weight:"Light",style:"Quick",availability:true},
  {name:"Vegetable Shawarma",category:"Light Meals",taste:"Light",spice:"None",weight:"Light",style:"Healthy",availability:true},
  {name:"Chicken Burger",category:"Light Meals",taste:"Rich",spice:"None",weight:"Medium",style:"Quick",availability:true},
  {name:"Beef Burger",category:"Light Meals",taste:"Rich",spice:"None",weight:"Medium",style:"Quick",availability:true},
  {name:"Noodles & Omelette",category:"Light Meals",taste:"Savory",spice:"Mild",weight:"Light",style:"Quick",availability:true},
  {name:"Yam Chips",category:"Light Meals",taste:"Savory",spice:"None",weight:"Light",style:"Quick",availability:true},
  {name:"Pancake",category:"Light Meals",taste:"Sweet",spice:"None",weight:"Light",style:"Quick",availability:true},
  {name:"Omelette",category:"Light Meals",taste:"Savory",spice:"None",weight:"Light",style:"Quick",availability:true},

  // CONTINENTAL
  {name:"Chicken Escalope",category:"Continental",taste:"Rich",spice:"None",weight:"Medium",style:"Continental",availability:true},
  {name:"Mixed Grilled",category:"Continental",taste:"Savory",spice:"Mild",weight:"Heavy",style:"Continental",availability:true},
  {name:"Seafood Delight",category:"Continental",taste:"Rich",spice:"Mild",weight:"Heavy",style:"Continental",availability:true},
  {name:"Chicken Cordon Bleu",category:"Continental",taste:"Rich",spice:"None",weight:"Medium",style:"Continental",availability:true},
  {name:"Silver Gate Signature Platter",category:"Continental",taste:"Rich",spice:"Mild",weight:"Heavy",style:"Continental",availability:true},

  // HEALTHY
  {name:"All Salads",category:"Healthy",taste:"Light",spice:"None",weight:"Light",style:"Healthy",availability:true},
  {name:"Fruit Platter",category:"Healthy",taste:"Sweet",spice:"None",weight:"Light",style:"Healthy",availability:true},

  // FINGER FOODS
  {name:"Finger Platter",category:"Finger Foods",taste:"Savory",spice:"Mild",weight:"Light",style:"Quick",availability:true},

  // NON-ALCOHOLIC DRINKS
  {name:"Milkshake",category:"Non-Alcoholic Drinks",taste:"Sweet",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Virgin Mojito",category:"Non-Alcoholic Drinks",taste:"Light",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Smoothies",category:"Non-Alcoholic Drinks",taste:"Sweet",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Lemonade",category:"Non-Alcoholic Drinks",taste:"Light",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Soft Drinks",category:"Non-Alcoholic Drinks",taste:"Sweet",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Water",category:"Non-Alcoholic Drinks",taste:"Neutral",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},
  {name:"Energy Drinks",category:"Non-Alcoholic Drinks",taste:"Sweet",spice:"None",weight:"Light",style:"Non-Alcoholic",availability:true},

  // ALCOHOLIC DRINKS
  {name:"Heineken",category:"Alcoholic Drinks",taste:"Savory",spice:"None",weight:"Light",style:"Alcoholic",availability:true},
  {name:"Gulder",category:"Alcoholic Drinks",taste:"Savory",spice:"None",weight:"Light",style:"Alcoholic",availability:true},
  {name:"Stout",category:"Alcoholic Drinks",taste:"Rich",spice:"None",weight:"Light",style:"Alcoholic",availability:true},
  {name:"Desperados",category:"Alcoholic Drinks",taste:"Spicy",spice:"None",weight:"Light",style:"Alcoholic",availability:true},
  {name:"Smirnoff Ice",category:"Alcoholic Drinks",taste:"Sweet",spice:"None",weight:"Light",style:"Alcoholic",availability:true},
];

/* ─── SWALLOW → SOUP MAP ────────────────────────────────── */
const SWALLOW_SOUP_MAP = {
  "Amala":       ["Ewedu","Efo Riro","Gbegiri"],
  "Pounded Yam": ["Egusi","Ogbono","Edikaikong","Afang Soup","Oha Soup"],
  "Eba":         ["Egusi","Okro","Ogbono","Mixed Okro"],
  "Fufu":        ["Egusi","Afang Soup","Ogbono","Edikaikong"],
  "Wheat":       ["Egusi","Efo Riro","Oha Soup","Afang Soup"],
};

/* ─── STATE ─────────────────────────────────────────────── */
let menu = [];
let answers = {taste:'',hunger:'',style:'',spice:'',drink:''};
let guestName = '';

function loadMenu(){
  const saved = localStorage.getItem('sg_menu');
  menu = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_MENU));
}
function saveMenu(){localStorage.setItem('sg_menu',JSON.stringify(menu));}
loadMenu();

/* ─── DARK MODE ─────────────────────────────────────────── */
function initTheme(){
  const saved = localStorage.getItem('sg_theme') || 'light';
  document.documentElement.setAttribute('data-theme',saved);
  document.getElementById('theme-label').textContent = saved === 'dark' ? 'Dark' : 'Light';
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('sg_theme',next);
  document.getElementById('theme-label').textContent = next === 'dark' ? 'Dark' : 'Light';
});
initTheme();

/* ─── PAGE ROUTER ────────────────────────────────────────── */
function goTo(pageId){
  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  // Block direct navigation to dashboard if not authenticated
  if(pageId === 'page-dashboard' && !isAdmin){
    pageId = 'page-admin-login';
  }

  // Hide ALL pages — remove both .active and .admin-visible from everything
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
    p.classList.remove('admin-visible');
  });

  // Clear dashboard content whenever we navigate away from it
  if(pageId !== 'page-dashboard'){
    clearDashboardContent();
  }

  const target = document.getElementById(pageId);
  if(!target) return;

  // Dashboard uses its own show class to bypass the CSS hard-lock
  if(pageId === 'page-dashboard' && isAdmin){
    target.classList.add('admin-visible');
  } else {
    target.classList.add('active');
  }

  window.scrollTo(0,0);
}

/* ─── NAME PAGE ─────────────────────────────────────────── */
function handleNameContinue(){
  const val = document.getElementById('guestName').value.trim();
  if(!val){
    document.getElementById('guestName').style.borderColor='#EF4444';
    document.getElementById('guestName').placeholder='Please enter your name…';
    return;
  }
  document.getElementById('guestName').style.borderColor='';
  guestName = val.split(' ')[0];
  answers = {taste:'',hunger:'',style:'',spice:'',drink:''};
  resetQuiz();
  goTo('page-quiz');
}
document.getElementById('guestName').addEventListener('keydown',e=>{if(e.key==='Enter')handleNameContinue();});

/* ─── QUIZ ───────────────────────────────────────────────── */
let currentStep = 1;
const TOTAL_STEPS = 5;
const ANSWER_KEYS = ['taste','hunger','style','spice','drink'];

function resetQuiz(){
  currentStep = 1;
  document.querySelectorAll('.quiz-step').forEach(s=>s.classList.remove('active'));
  document.getElementById('step-1').classList.add('active');
  document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  answers = {taste:'',hunger:'',style:'',spice:'',drink:''};
  updateProgress(1);
}

function updateProgress(step){
  const pct = Math.round((step/TOTAL_STEPS)*100);
  document.getElementById('progressFill').style.width = pct+'%';
  document.getElementById('progressLabel').textContent = `Question ${step} of ${TOTAL_STEPS}`;
  document.getElementById('progressPct').textContent = pct+'%';
}

function selectOption(el,key,value){
  const parent = el.closest('.option-grid');
  parent.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  answers[key] = value;
}

function nextStep(step){
  const key = ANSWER_KEYS[step-1];
  if(!answers[key]){
    const grid = document.querySelector(`#step-${step} .option-grid`);
    grid.style.outline='2px solid rgba(239,68,68,0.4)';
    grid.style.borderRadius='12px';
    setTimeout(()=>{grid.style.outline='';grid.style.borderRadius='';},1000);
    return;
  }
  document.getElementById(`step-${step}`).classList.remove('active');
  currentStep = step + 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateProgress(currentStep);
}

function prevStep(step){
  document.getElementById(`step-${step}`).classList.remove('active');
  currentStep = step - 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateProgress(currentStep);
}

/* ─── RECOMMENDATION ENGINE ─────────────────────────────── */
function scoreItem(item, ans){
  let score = 0;

  // Taste match
  const tasteMap = {'Spicy':'Spicy','Rich':'Rich','Light':'Light','Sweet':'Sweet'};
  if(item.taste === tasteMap[ans.taste]) score += 4;
  else if(item.taste === 'Savory' && ans.taste === 'Rich') score += 2;
  else if(item.taste === 'Savory' && ans.taste === 'Light') score += 1;

  // Weight match
  if(item.weight === ans.hunger) score += 3;
  else if(
    (ans.hunger === 'Medium' && (item.weight === 'Light' || item.weight === 'Heavy')) ||
    (ans.hunger === 'Heavy' && item.weight === 'Medium')
  ) score += 1;

  // Style match
  const styleMap = {'Traditional':'Traditional','Continental':'Continental','Quick':'Quick','Healthy':'Healthy'};
  if(item.style === styleMap[ans.style]) score += 3;

  // Spice match
  const spiceCompat = {
    'None': ['None','Mild'],
    'Mild': ['None','Mild','Medium'],
    'Hot':  ['Mild','Medium','Hot']
  };
  if(spiceCompat[ans.spice] && spiceCompat[ans.spice].includes(item.spice)) score += 2;

  return score;
}

function pickBest(items){
  if(!items.length) return null;
  return items.reduce((best,cur)=>cur._score > best._score ? cur : best, items[0]);
}

function pickDrink(ans, mealItem){
  const drinkCat = ans.drink === 'Alcoholic' ? 'Alcoholic Drinks' : 'Non-Alcoholic Drinks';
  const available = menu.filter(d=>d.category === drinkCat && d.availability);
  if(!available.length) return null;

  // Pair logic: spicy food → refreshing drink
  if(ans.drink === 'Non-Alcoholic'){
    if(ans.taste === 'Spicy' || ans.spice === 'Hot'){
      const cool = available.find(d=>d.name === 'Virgin Mojito' || d.name === 'Lemonade');
      if(cool) return cool;
    }
    if(ans.taste === 'Sweet'){
      const sweet = available.find(d=>d.name === 'Smoothies' || d.name === 'Milkshake');
      if(sweet) return sweet;
    }
    return available[Math.floor(Math.random()*available.length)];
  } else {
    if(ans.spice === 'Hot'){
      const lager = available.find(d=>d.name === 'Heineken' || d.name === 'Gulder');
      if(lager) return lager;
    }
    if(ans.taste === 'Sweet'){
      const sweet = available.find(d=>d.name === 'Smirnoff Ice' || d.name === 'Desperados');
      if(sweet) return sweet;
    }
    return available[Math.floor(Math.random()*available.length)];
  }
}

function pickSoup(swallowName){
  const compatible = SWALLOW_SOUP_MAP[swallowName] || [];
  for(const soupName of compatible){
    const found = menu.find(m=>m.name === soupName && m.category === 'Soups' && m.availability);
    if(found) return found;
  }
  // Fallback: any available soup
  const any = menu.filter(m=>m.category === 'Soups' && m.availability);
  return any.length ? any[0] : null;
}

function buildWhyText(meal, soup, drink, ans){
  const name = guestName;
  let reasons = [];
  if(ans.taste === 'Spicy') reasons.push('your craving for bold, fiery flavours');
  else if(ans.taste === 'Rich') reasons.push('your preference for hearty, satisfying dishes');
  else if(ans.taste === 'Light') reasons.push('your desire for something crisp and light');
  else if(ans.taste === 'Sweet') reasons.push('your sweet-tooth and comfort-food preference');

  if(ans.hunger === 'Heavy') reasons.push(`a generous ${ans.hunger.toLowerCase()} portion to fill you up`);
  else if(ans.hunger === 'Light') reasons.push("a lighter meal that won't weigh you down");

  if(ans.style === 'Traditional') reasons.push('your love for authentic Nigerian classics');
  else if(ans.style === 'Continental') reasons.push('your taste for premium continental cuisine');
  else if(ans.style === 'Healthy') reasons.push('your commitment to a healthy lifestyle');
  else if(ans.style === 'Quick') reasons.push('your need for something quick yet satisfying');

  const drinkReason = drink ? `, perfectly complemented by a chilled ${drink.name}` : '';

  return `${name}, this selection was curated just for you — balancing ${reasons.join(', ')}${drinkReason}. Our culinary team is confident this combination will deliver an exceptional dining experience at Silvergates.`;
}

function getRecommendation(){
  if(!answers.drink){
    alert('Please select your drink preference.');
    return;
  }

  const available = menu.filter(m=>m.availability && !['Non-Alcoholic Drinks','Alcoholic Drinks','Soups','Swallow'].includes(m.category));
  if(!available.length){
    alert('Sorry, no menu items are available right now. Please contact our staff.');
    return;
  }

  // Score and sort
  let pool = available.map(item=>({...item, _score: scoreItem(item,answers)}));
  pool.sort((a,b)=>b._score-a._score);

  // Pick from top 3 for variety
  const top5 = pool.slice(0,5);
  const meal = top5[Math.floor(Math.random()*Math.min(3,top5.length))];

  // Swallow logic
  let swallow = null, soup = null;
  if(answers.style === 'Traditional' && answers.hunger === 'Heavy'){
    const swallowPool = menu.filter(m=>m.category === 'Swallow' && m.availability);
    if(swallowPool.length){
      swallow = swallowPool[Math.floor(Math.random()*swallowPool.length)];
      soup = pickSoup(swallow.name);
    }
  }

  const finalMeal = swallow || meal;
  const drink = pickDrink(answers, finalMeal);

  // Render result
  document.getElementById('resultName').textContent = guestName;

  document.getElementById('mealName').textContent = finalMeal.name;
  document.getElementById('mealMeta').innerHTML =
    `<span class="rc-tag">${finalMeal.category}</span>
     <span class="rc-tag gold">${finalMeal.taste}</span>
     <span class="rc-tag">${finalMeal.weight} Portion</span>`;

  if(soup){
    document.getElementById('cardSoup').classList.remove('hidden');
    document.getElementById('soupName').textContent = soup.name;
    document.getElementById('soupMeta').innerHTML =
      `<span class="rc-tag gold">${soup.category}</span><span class="rc-tag">${soup.taste}</span>`;
  } else {
    document.getElementById('cardSoup').classList.add('hidden');
  }

  if(drink){
    document.getElementById('drinkName').textContent = drink.name;
    document.getElementById('drinkMeta').innerHTML =
      `<span class="rc-tag green">${drink.category}</span><span class="rc-tag">${answers.drink}</span>`;
  } else {
    document.getElementById('drinkName').textContent = "Ask our staff for today's selection";
    document.getElementById('drinkMeta').innerHTML = '';
  }

  document.getElementById('whyText').textContent = buildWhyText(finalMeal, soup, drink, answers);

  goTo('page-result');
}

function tryAgain(){
  answers = {taste:'',hunger:'',style:'',spice:'',drink:''};
  resetQuiz();
  goTo('page-quiz');
}

/* ─── ADMIN AUTH ─────────────────────────────────────────── */
const ADMIN_USER = 'info@silvergatehotel.com';
const ADMIN_PASS = 'Gat35ilva@1';

/* Clear all dashboard content so nothing leaks into the DOM */
function clearDashboardContent(){
  const statsEl = document.getElementById('dashStats');
  const tbodyEl = document.getElementById('menuTableBody');
  if(statsEl) statsEl.innerHTML = '';
  if(tbodyEl) tbodyEl.innerHTML = '';
}

function handleAdminLogin(){
  const u = document.getElementById('adminUser').value.trim();
  const p = document.getElementById('adminPass').value;
  const err = document.getElementById('loginError');
  if(u === ADMIN_USER && p === ADMIN_PASS){
    err.style.display='none';
    localStorage.setItem('isAdminLoggedIn','true');
    renderDashboard();
    goTo('page-dashboard');
  } else {
    err.style.display='block';
  }
}

document.getElementById('adminPass').addEventListener('keydown',e=>{if(e.key==='Enter')handleAdminLogin();});

function handleLogout(){
  localStorage.removeItem('isAdminLoggedIn');
  clearDashboardContent();
  document.getElementById('adminUser').value='';
  document.getElementById('adminPass').value='';
  goTo('page-landing');
}

/* On every page load: enforce auth. Strip dashboard classes unconditionally. */
(function enforceAuthOnLoad(){
  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';
  const dash = document.getElementById('page-dashboard');
  // Always strip dashboard classes on load regardless
  if(dash){
    dash.classList.remove('active');
    dash.classList.remove('admin-visible');
  }
  // Clear any stale dashboard content in the DOM
  if(!isAdmin){
    clearDashboardContent();
  }
})();

/* ─── DASHBOARD ──────────────────────────────────────────── */
function renderDashboard(){
  /* Safety guard: never render dashboard content unless authenticated */
  if(localStorage.getItem('isAdminLoggedIn') !== 'true') return;
  renderStats();
  renderTable();
}

function renderStats(){
  const total = menu.length;
  const avail = menu.filter(m=>m.availability).length;
  const unavail = total - avail;
  const cats = [...new Set(menu.map(m=>m.category))].length;
  document.getElementById('dashStats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Total Items</div>
      <div class="stat-value">${total}</div>
      <div class="stat-sub">Menu items</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Available</div>
      <div class="stat-value" style="color:#10B981">${avail}</div>
      <div class="stat-sub">Currently on menu</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Unavailable</div>
      <div class="stat-value" style="color:#EF4444">${unavail}</div>
      <div class="stat-sub">Temporarily off</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Categories</div>
      <div class="stat-value">${cats}</div>
      <div class="stat-sub">Menu sections</div>
    </div>
  `;
}

function renderTable(){
  const catF = document.getElementById('catFilter').value;
  const availF = document.getElementById('availFilter').value;
  const searchF = document.getElementById('dashSearch').value.toLowerCase();

  let filtered = menu.filter(item=>{
    if(catF && item.category !== catF) return false;
    if(availF !== '' && String(item.availability) !== availF) return false;
    if(searchF && !item.name.toLowerCase().includes(searchF) && !item.category.toLowerCase().includes(searchF)) return false;
    return true;
  });

  const tbody = document.getElementById('menuTableBody');
  if(!filtered.length){
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:32px;">No items match your filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item,idx)=>{
    const realIdx = menu.indexOf(item);
    return `
    <tr>
      <td style="color:var(--text-muted);font-size:0.78rem;">${idx+1}</td>
      <td style="font-weight:500;">${item.name}</td>
      <td><span class="cat-badge">${item.category}</span></td>
      <td>${item.taste}</td>
      <td>${item.spice}</td>
      <td>${item.weight}</td>
      <td>${item.style}</td>
      <td>
        <button class="avail-toggle ${item.availability?'on':'off'}"
          onclick="toggleAvailability(${realIdx})"
          title="${item.availability?'Mark Unavailable':'Mark Available'}">
        </button>
      </td>
    </tr>`;
  }).join('');
}

function toggleAvailability(idx){
  menu[idx].availability = !menu[idx].availability;
  saveMenu();
  renderStats();
  renderTable();
}

function addMenuItem(){
  const name = document.getElementById('newName').value.trim();
  const cat  = document.getElementById('newCategory').value;
  if(!name || !cat){
    alert('Please fill in at least the item name and category.');
    return;
  }
  menu.push({
    name,
    category:cat,
    taste:document.getElementById('newTaste').value,
    spice:document.getElementById('newSpice').value,
    weight:document.getElementById('newWeight').value,
    style:document.getElementById('newStyle').value,
    availability:true
  });
  saveMenu();
  document.getElementById('newName').value='';
  document.getElementById('newCategory').value='';
  document.getElementById('addModal').classList.remove('open');
  renderDashboard();
}

/* ─── CLOSE MODALS ON OVERLAY CLICK ─────────────────────── */
document.getElementById('waiterModal').addEventListener('click',function(e){
  if(e.target===this) this.classList.remove('open');
});
document.getElementById('addModal').addEventListener('click',function(e){
  if(e.target===this) this.classList.remove('open');
});
