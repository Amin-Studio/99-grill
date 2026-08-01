/* ============ 99 GRILL — interactions & menu ============ */

/* ---------- MENU DATA (authoritative — prices before tax) ---------- */
const COMBO_NOTE = {
  title: 'Make It a Combo — +$6.49',
  body: '<strong>Fries + Fountain Drink.</strong> Add it to any main.'
};

const MENU = [
  {
    id: 'burgers', label: 'Beef Burgers', combo: true,
    items: [
      { name: 'The Blueprint', price: '$11.99', desc: 'Premium beef patty with your choice of toppings and sauces' },
      { name: 'Hot Lava', tag: 'spicy', price: '$12.99', desc: 'Premium beef patty, cheddar, 99 Fire Sauce, lettuce, tomato, pickles & grilled jalapeños' },
      { name: '99 Stack', price: '$13.99', desc: 'Premium beef patty, cheddar, 99 Sauce, lettuce, tomato, pickles & onions' },
      { name: 'BBQ Burger', price: '$14.99', desc: 'Premium beef patty, lettuce, tomato, pickles, BBQ sauce, onion ring & beef bacon' },
      { name: 'Mushroom Swiss', price: '$14.99', desc: 'Premium beef patty, Swiss cheese, grilled mushrooms, lettuce, tomato & 99 Sauce' },
      { name: 'The Big Nine', price: '$15.99', desc: 'Two premium beef patties, double cheddar, grilled onions, lettuce, tomato, pickles & 99 Sauce' },
      { name: 'Sunrise Burger', price: '$15.99', desc: 'Premium beef patty, cheddar, fried egg, hash brown, beef bacon, lettuce, tomato, pickles, ketchup & 99 Sauce' },
      { name: 'Niner Jam', price: '$16.49', desc: 'Premium beef patty, Swiss cheese, beef bacon jam, lettuce, tomato & 99 Sauce' },
      { name: '99 Veggie Burger', tag: 'veg', price: '$9.99', desc: 'Veggie patty, lettuce, tomato, pickles, banana peppers & 99 Sauce' }
    ]
  },
  {
    id: 'chicken', label: 'Chicken', combo: true,
    items: [
      { name: 'The OG Chicken', price: '$10.49', desc: 'Crispy chicken, pickles & 99 Sauce' },
      { name: '99 Grilled Chicken', price: '$11.49', desc: 'Grilled chicken, mayonnaise, lettuce & pickles' },
      { name: 'OG Spicy Chicken', tag: 'spicy', price: '$11.49', desc: 'Spicy crispy chicken, grilled jalapeños, lettuce, pickles & 99 Fire Sauce' }
    ]
  },
  {
    id: 'dogs', label: 'Hot Dogs', combo: true,
    items: [
      { name: 'Classic Dog', price: '$6.99', desc: 'All-beef hot dog topped with ketchup, mustard & mayonnaise' },
      { name: 'Loaded Dog', price: '$8.99', desc: 'All-beef hot dog, grilled mushrooms, grilled onions, grilled jalapeños & cheddar' }
    ]
  },
  {
    id: 'extras', label: 'Extras & Upgrades', combo: true,
    items: [
      { name: 'Double Beef', price: '$7.49' },
      { name: 'Triple Beef', price: '$10.49' },
      { name: 'Double Chicken', price: '$6.49' },
      { name: 'Triple Chicken', price: '$10.49' },
      { name: 'Extra Steak (Philly)', price: '$6.49' },
      { name: 'Beef Bacon', price: '$2.49' },
      { name: 'Extra Cheese', price: '$1.49' },
      { name: 'Fried Egg', price: '$1.99' },
      { name: 'Hash Brown', price: '$2.49' },
      { name: 'Onion Rings on Burger', price: '$1.49' },
      { name: 'Gravy', price: '$2.49' },
      { name: 'Extra Sauce', price: '$0.99' }
    ]
  },
  {
    id: 'philly', label: 'Philly Cheesesteaks', combo: true,
    items: [
      { name: 'Classic Philly', price: '$17.99', desc: 'Sliced steak, grilled onions & cheddar cheese' },
      { name: 'Southwest Philly', tag: 'spicy', price: '$19.99', desc: 'Sliced steak, grilled jalapeños, grilled peppers, cheddar cheese & 99 Fire Sauce' },
      { name: 'Loaded Philly', price: '$21.99', desc: 'Sliced steak, grilled onions, peppers, mushrooms, beef bacon, cheddar cheese & 99 Sauce' }
    ]
  },
  {
    id: 'wings', label: 'Wings', combo: true,
    note: 'Choose plain or saucy.',
    items: [
      { name: '6 Wings', price: '$10.99' },
      { name: '12 Wings', price: '$19.99' },
      { name: '24 Wings', price: '$37.99' }
    ]
  },
  {
    id: 'tenders', label: 'Tenders', combo: true,
    note: 'Choose plain or saucy.',
    items: [
      { name: '3 Tenders', price: '$9.49' },
      { name: '5 Tenders', price: '$12.49' }
    ]
  },
  {
    id: 'nuggets', label: 'Nuggets', combo: true,
    note: 'Crispy golden bites, sauce on the side.',
    items: [
      { name: '6 Pieces', price: '$6.49' },
      { name: '10 Pieces', price: '$9.49' },
      { name: '20 Pieces', price: '$17.49' }
    ]
  },
  {
    id: 'corn', label: 'Corn Cups', combo: true,
    items: [
      { name: 'Classic Corn Cup', price: '$5.49', desc: 'Sweet corn, butter & seasoning' },
      { name: 'Loaded Corn Cup', price: '$7.99', desc: 'Seasoned corn, butter, parmesan cheese & Takis' }
    ]
  },
  {
    id: 'boxes', label: 'Loaded Boxes', combo: true,
    items: [
      { name: 'Cheesy Box', price: '$11.99', desc: 'Waffle fries loaded with melted cheese sauce' },
      { name: 'Loaded Box', tag: 'spicy', price: '$13.99', desc: 'Seasoned waffle fries, grilled jalapeños, grilled mushrooms, grilled onions, chicken & 99 Fire Sauce' },
      { name: 'Poutine', price: '$10.99', desc: 'Waffle fries, cheese curds & hot gravy' },
      { name: 'Spicy Poutine', tag: 'spicy', price: '$12.49', desc: 'Seasoned waffle fries, grilled jalapeños, cheese curds & hot gravy' }
    ]
  },
  {
    id: 'sides', label: 'Sides',
    items: [
      { name: 'Waffle Fries', price: '$5.49', desc: 'Golden, salted waffle fries' },
      { name: 'Cajun Waffle Fries', tag: 'spicy', price: '$6.49', desc: 'Golden waffle fries tossed in Cajun seasoning' },
      { name: 'Onion Rings', price: '$5.99', desc: 'Golden, crispy onion rings' }
    ]
  },
  {
    id: 'kids', label: 'Kids Meals',
    items: [
      { name: 'Junior Hot Dog Meal', price: '$10.49', desc: 'Junior hot dog served with small fries and a juice box' },
      { name: 'Junior Chicken Meal', price: '$10.49', desc: 'Junior chicken served with small fries and a juice box' },
      { name: 'Grilled Cheese Meal', price: '$8.99', desc: 'Melty grilled cheese served with small fries and a juice box' }
    ]
  },
  {
    id: 'family', label: 'Family Meals',
    items: [
      { name: 'The Grill Master', price: '$55.99', desc: 'Family bundle of burgers, fries & drinks — feeds 4' },
      { name: 'The Feast Squad', price: '$69.99', desc: 'The full spread — burgers, wings, fries & drinks — feeds 6' }
    ]
  },
  {
    id: 'drinks', label: 'Drinks',
    items: [
      { name: 'Handcrafted Shakes', price: '$7.49', desc: 'Strawberry, Chocolate, Vanilla • Biscoff, Oreo or KitKat $8.49' },
      { name: 'Lemonade & Mojitos', price: '$4.49 / $6.49', desc: 'Blue raspberry, mango, peach, watermelon, pineapple, raspberry' },
      { name: 'Smoothies — All Flavours', price: '$8.49', desc: 'Blended fresh to order' }
    ]
  },
  {
    id: 'sweets', label: 'Sweet Treats',
    items: [
      { name: 'Deep-Fried Oreos (10 Pieces)', price: '$9.99', desc: 'Golden-fried & dusted with powdered sugar' },
      { name: 'Ice Cream Cone', price: '$3.99' },
      { name: 'Cookies', price: '$3.49', desc: 'Chocolate Chip, Oreo or 99 Grill' }
    ]
  },
  {
    id: 'breakfast-plates', label: 'Breakfast Plates',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Wake Up Meal', price: '$11.99', desc: '2 eggs, beef bacon, home fries & toast' },
      { name: '99 Grand Slam', price: '$14.99', desc: '3 eggs, sausage, home fries, toast & beef bacon jam' },
      { name: 'Steak & Eggs', price: '$18.99', desc: 'Grilled steak, 3 eggs, home fries & toast' }
    ]
  },
  {
    id: 'pancakes', label: 'Pancakes',
    note: 'Served with butter, powdered sugar & maple syrup. Breakfast coming soon.',
    items: [
      { name: '2 Pancakes', price: '$5.99' },
      { name: '3 Pancakes', price: '$7.49' },
      { name: '4 Pancakes', price: '$8.99' }
    ]
  },
  {
    id: 'breakfast-sandwiches', label: 'Breakfast Sandwiches',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Breakfast Grilled Cheese', price: '$10.99', desc: 'Two grilled cheese sandwiches served with eggs & beef bacon' }
    ]
  },
  {
    id: 'breakfast-bowls', label: 'Breakfast Bowls',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Grilled Chicken Bowl', price: '$12.99', desc: 'Grilled chicken, scrambled eggs, lettuce, tomatoes, cucumbers, onions & your choice of sauce' },
      { name: 'Steak & Egg Bowl', price: '$14.99', desc: 'Grilled steak, scrambled eggs, lettuce, tomatoes, peppers, onions & your choice of sauce' }
    ]
  },
  {
    id: 'salads', label: 'Salads',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Caesar Salad', price: '$9.99', desc: 'Fresh romaine, parmesan, croutons & Caesar dressing' },
      { name: 'Cheese Salad', price: '$10.99', desc: 'Fresh lettuce, tomatoes, cucumbers, cheddar, mozzarella & red onions (add grilled chicken or steak)' }
    ]
  },
  {
    id: 'homefries', label: 'Home Fries',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Loaded Home Fries', price: '$12.99', desc: 'Seasoned home fries, diced beef bacon, scrambled eggs, cheddar cheese sauce & chives' },
      { name: '99 Fire Home Fries', tag: 'spicy', price: '$8.99', desc: 'Cajun-seasoned home fries topped with 99 Fire Sauce' },
      { name: 'Parmesan Home Fries', price: '$8.99', desc: 'Seasoned home fries topped with parmesan' }
    ]
  },
  {
    id: 'hotdrinks', label: 'Hot Drinks',
    note: 'Breakfast coming soon.',
    items: [
      { name: 'Coffee', price: '$2.99', desc: 'Fresh brewed coffee' },
      { name: 'Tea', price: '$2.99', desc: 'Fresh hot tea' }
    ]
  }
];

/* ---------- RENDER MENU ---------- */
const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

MENU.forEach((cat, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.textContent = cat.label;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.dataset.cat = cat.id;
  tab.addEventListener('click', () => activateTab(cat.id));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + cat.id;
  panel.setAttribute('role', 'tabpanel');

  let html = '';
  if (cat.combo) {
    html += `<div class="byo-banner"><span class="byo-flame" aria-hidden="true"></span><div><h3>${COMBO_NOTE.title}</h3><p>${COMBO_NOTE.body}</p></div></div>`;
  }
  if (cat.note) html += `<p class="cat-note">${cat.note}</p>`;
  html += '<div class="menu-grid">';
  cat.items.forEach(item => {
    const tagHtml = item.tag === 'spicy' ? ' <span class="card-tag tag-spicy">Spicy</span>'
                  : item.tag === 'veg' ? ' <span class="card-tag tag-veg">Veg</span>' : '';
    html += `<article class="menu-card"><h4>${item.name}${tagHtml}</h4><span class="menu-price">${item.price}</span>${item.desc ? `<p>${item.desc}</p>` : ''}</article>`;
  });
  html += '</div>';
  panel.innerHTML = html;
  panelsEl.appendChild(panel);
});

function activateTab(id) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const on = t.dataset.cat === id;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on ? 'true' : 'false');
    if (on) t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));
}

/* Dig In strip → open matching tab, then scroll to menu */
document.querySelectorAll('.dig-item').forEach(item => {
  item.addEventListener('click', e => {
    const tab = item.dataset.tab;
    if (tab && document.getElementById('panel-' + tab)) {
      e.preventDefault();
      activateTab(tab);
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- HERO SCROLL-SCRUB ---------- */
const hero = document.getElementById('hero');
const heroVideo = document.getElementById('heroVideo');
let targetTime = 0;
let currentTime = 0;
let videoReady = false;

heroVideo.pause();

/* Scrubbing needs a seekable source. Static servers without Range support
   (e.g. python http.server) report seekable [0,0], so load the clip as a
   blob — in-memory playback is always fully seekable. */
fetch(heroVideo.querySelector('source').src)
  .then(r => { if (!r.ok) throw new Error('video fetch failed'); return r.blob(); })
  .then(b => {
    const resumeAt = heroVideo.currentTime; // keep position if user already scrolled
    heroVideo.src = URL.createObjectURL(b);
    heroVideo.load();
    heroVideo.pause();
    heroVideo.addEventListener('loadeddata', () => {
      try { heroVideo.currentTime = resumeAt; } catch (e) { /* ignore */ }
    }, { once: true });
  })
  .catch(() => { /* fall back to the <source> as-is */ });

/* Two separate milestones: show the video as soon as the browser can paint a
   frame from the streaming <source> (otherwise the poster sits there for the
   whole blob download), but only enable scrubbing once it's actually seekable. */
const readyPoll = setInterval(() => {
  if (heroVideo.readyState >= 2) heroVideo.classList.add('ready');
  if (heroVideo.readyState >= 2 && heroVideo.seekable.length > 0 && heroVideo.seekable.end(0) > 0) {
    videoReady = true;
    clearInterval(readyPoll);
  }
}, 100);

function heroProgress() {
  const rect = hero.getBoundingClientRect();
  const scrollable = hero.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  return Math.min(1, Math.max(0, -rect.top / scrollable));
}

function onScroll() {
  const p = heroProgress();
  if (videoReady && heroVideo.duration) {
    targetTime = p * Math.max(0, heroVideo.duration - 0.08);
  }
  // fade copy out over the last stretch of the scrub
  const copy = document.querySelector('.hero-copy');
  const hint = document.querySelector('.hero-scroll-hint');
  const fade = p < 0.55 ? 1 : Math.max(0, 1 - (p - 0.55) / 0.35);
  copy.style.opacity = fade;
  copy.style.transform = `translateY(${p * -40}px)`;
  if (hint) hint.style.opacity = p > 0.05 ? 0 : 0.8;
}

/* Seek gating: issuing a new seek every frame outruns the decoder and causes
   dropped frames and flashes. Only seek when the previous one has finished. */
let seekBusy = false;
let seekStarted = 0;
heroVideo.addEventListener('seeked', () => { seekBusy = false; });

function scrubLoop() {
  if (videoReady && heroVideo.duration) {
    targetTime = heroProgress() * Math.max(0, heroVideo.duration - 0.08);
    if (seekBusy && performance.now() - seekStarted > 300) seekBusy = false; // stuck-seek escape hatch
    const delta = targetTime - currentTime;
    if (!seekBusy && Math.abs(delta) > 0.02) {
      currentTime += delta * 0.25;
      seekBusy = true;
      seekStarted = performance.now();
      try { heroVideo.currentTime = currentTime; } catch (e) { seekBusy = false; }
    }
  }
  requestAnimationFrame(scrubLoop);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
requestAnimationFrame(scrubLoop);

/* headline track-in. Once the words have finished sliding up, release the
   line clip (see .words-done in styles.css) so the headline's text-shadow
   isn't cut into a grey rectangle by overflow:hidden. */
function trackInHeadline() {
  if (hero.classList.contains('words-in')) return;
  hero.classList.add('words-in');
  // longest word delay (4 * 90ms) + 700ms transition, plus margin
  setTimeout(() => hero.classList.add('words-done'), 1400);
}
window.addEventListener('load', () => setTimeout(trackInHeadline, 150));
setTimeout(trackInHeadline, 900); // fallback if load already fired

/* stagger the words */
document.querySelectorAll('.hl-word').forEach((w, i) => {
  w.style.transitionDelay = (i * 90) + 'ms';
});

/* ---------- MOBILE NAV ---------- */
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

/* ---------- REVIEW CAROUSEL ---------- */
const track = document.getElementById('carouselTrack');
const cards = track.children.length;
const dotsWrap = document.getElementById('carouselDots');
let slide = 0;
for (let i = 0; i < cards; i++) {
  const d = document.createElement('button');
  d.setAttribute('aria-label', 'Go to review ' + (i + 1));
  if (i === 0) d.classList.add('active');
  d.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(d);
}
function goTo(i) {
  slide = (i + cards) % cards;
  track.style.transform = `translateX(-${slide * 100}%)`;
  dotsWrap.querySelectorAll('button').forEach((d, j) => d.classList.toggle('active', j === slide));
}
document.getElementById('prevReview').addEventListener('click', () => goTo(slide - 1));
document.getElementById('nextReview').addEventListener('click', () => goTo(slide + 1));
let autoSpin = setInterval(() => goTo(slide + 1), 6000);
document.getElementById('reviewCarousel').addEventListener('pointerdown', () => clearInterval(autoSpin));

/* ---------- MISC ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* hide sticky order bar while the order section is on screen */
const stickyOrder = document.getElementById('stickyOrder');
const orderSection = document.getElementById('order');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    stickyOrder.style.display = entries[0].isIntersecting ? 'none' : '';
  }).observe(orderSection);
}

/* reveal-on-scroll for section heads and cards */
const revealables = document.querySelectorAll('.section-head, .dig-item, .story-copy');
revealables.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  revealables.forEach(el => io.observe(el));
} else {
  revealables.forEach(el => el.classList.add('in'));
}

/* ---------- SIGNUP FORM (FormSubmit → 99Grillca@gmail.com) ---------- */
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = signupForm.querySelector('button');
    const email = signupForm.querySelector('input[type="email"]').value;
    btn.disabled = true;
    btn.textContent = '...';
    try {
      const res = await fetch('https://formsubmit.co/ajax/99Grillca@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: email, _subject: 'New signup — 99 Grill website', _template: 'table' })
      });
      if (!res.ok) throw new Error('formsubmit responded ' + res.status);
      document.getElementById('signupThanks').hidden = false;
      document.getElementById('signupError').hidden = true;
      signupForm.reset();
    } catch (err) {
      document.getElementById('signupError').hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Join';
    }
  });
}
