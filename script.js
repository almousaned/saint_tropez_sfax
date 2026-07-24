/* =====================================================================
   SAINT TROPEZ CHAFFAR — MENU DATA & INTERACTIONS
   =====================================================================
   HOW TO EDIT PRICES / ITEMS
   ---------------------------------------------------------------------
   Every single menu item lives in the MENU_DATA array below and nowhere
   else. To add a price, just fill in the `price` field, e.g.:
       { name: "Expresso", price: "3.500 DT" }
   Leave price as "" to show a soft placeholder ("—") on the site.
   The original PDF menu supplied for this build did not contain prices,
   so every item currently ships with price: "" — fill them in here.

   Each group becomes one pill in the sticky nav. Each group can contain
   several categories (matching the exact subheadings from the paper
   menu), and each category holds its list of items.
===================================================================== */

const MENU_DATA = [
  {
    id: "cafe",
    eyebrow: "Chaud & torréfié",
    title: "Café",
    categories: [
      {
        title: "Coffee",
        items: [
          { name: "Expresso", price: "" },
          { name: "Americano", price: "" },
          { name: "Capucin", price: "" },
          { name: "Direct", price: "" },
          { name: "Chocolat au lait", price: "" },
          { name: "Necsafé", price: "" },
          { name: "Cappuccino", price: "" },
          { name: "Café turc", price: "" },
        ]
      },
      {
        title: "Nespresso",
        sub: "Sélection Nespresso",
        items: [
          { name: "Express", price: "" },
          { name: "Capucin", price: "" },
          { name: "Café Crème", price: "" },
        ]
      },
      {
        title: "Lavazza",
        sub: "Sélection Lavazza",
        items: [
          { name: "Express", price: "" },
          { name: "Capucin", price: "" },
          { name: "Café Crème", price: "" },
        ]
      },
    ]
  },
  {
    id: "boissons",
    eyebrow: "Fraîches & gourmandes",
    title: "Boissons & Thé",
    categories: [
      {
        title: "Boisson",
        items: [
          { name: "Eau 1L", price: "" },
          { name: "Eau 0.5L", price: "" },
          { name: "Canette", price: "" },
          { name: "Boisson énergétique", price: "" },
        ]
      },
      {
        title: "Thé",
        items: [
          { name: "Thé", price: "" },
          { name: "Thé à l'amande", price: "" },
          { name: "Thé aux pignons", price: "" },
          { name: "Thé infusion", price: "" },
        ]
      },
      {
        title: "Jus frais",
        items: [
          { name: "Citron", price: "" },
          { name: "Manga", price: "" },
          { name: "Citron fraise", price: "" },
          { name: "Banane", price: "" },
          { name: "Citron glacé", price: "" },
        ]
      },
      {
        title: "Latte glacé aromatisé",
        items: [
          { name: "Caramel", price: "" },
          { name: "Noisette", price: "" },
          { name: "Cookies", price: "" },
          { name: "Brownies", price: "" },
        ]
      },
      {
        title: "Frappuccino",
        items: [
          { name: "Caramel", price: "" },
          { name: "Noisette", price: "" },
          { name: "Nutella", price: "" },
          { name: "Brownies", price: "" },
        ]
      },
    ]
  },
  {
    id: "cocktails",
    eyebrow: "Fraîcheur & vagues",
    title: "Cocktails, Mojitos & Chicha",
    categories: [
      {
        title: "Exotic cocktail",
        items: [
          { name: "Blu", price: "" },
          { name: "Piña Colada", price: "" },
          { name: "Golden Mango", price: "" },
          { name: "Pink", price: "" },
        ]
      },
      {
        title: "Mojito",
        items: [
          { name: "Virgin", price: "" },
          { name: "Bleu", price: "" },
          { name: "Red", price: "" },
          { name: "Melon", price: "" },
          { name: "Piña Colada", price: "" },
        ]
      },
      {
        title: "Chicha",
        items: [
          { name: "Fakher", price: "" },
          { name: "Fakher Kaloud", price: "" },
          { name: "Chicha Saint Tropez", price: "" },
        ]
      },
    ]
  },
  {
    id: "crepes-pates",
    eyebrow: "Faits minute",
    title: "Crêpes & Pâtes",
    categories: [
      {
        title: "Crêpe",
        items: [
          { name: "Crêpe Nutella", price: "" },
          { name: "Crêpe Nutella fruits secs", price: "" },
          { name: "Crêpe Saint Tropez", price: "" },
          { name: "Crêpe salée thon fromage", price: "" },
        ]
      },
      {
        title: "Pasta",
        items: [
          { name: "Pâtes à la crevette", price: "" },
          { name: "Pâtes au fruit de mer", price: "" },
          { name: "Pâtes poulet champignon", price: "" },
          { name: "Puttanesca", price: "" },
          { name: "Bolognaise", price: "" },
          { name: "Pâtes à la viande", price: "" },
          { name: "Cheesy", price: "" },
          { name: "Pesto", price: "" },
        ]
      },
    ]
  },
  {
    id: "pizza-snacks",
    eyebrow: "Four & sandwicherie",
    title: "Pizza & Snacks",
    categories: [
      {
        title: "Pizza",
        items: [
          { name: "Margherita", price: "" },
          { name: "Neptune", price: "" },
          { name: "4 Saisons", price: "" },
          { name: "Poulet", price: "" },
          { name: "Fruit de mer", price: "" },
          { name: "Orientale", price: "" },
        ]
      },
      {
        title: "Soufflé",
        items: [
          { name: "Thon", price: "" },
          { name: "Escalope panée", price: "" },
          { name: "Escalope grillée", price: "" },
          { name: "Viande hachée", price: "" },
        ]
      },
      {
        title: "Baguette farcie",
        items: [
          { name: "Thon", price: "" },
          { name: "Escalope panée", price: "" },
          { name: "Escalope grillée", price: "" },
          { name: "Viande hachée", price: "" },
        ]
      },
    ]
  },
  {
    id: "plats",
    eyebrow: "Sortis du grill",
    title: "Plats",
    categories: [
      {
        title: "Plats",
        items: [
          { name: "Escalope grillée", price: "" },
          { name: "Escalope panée", price: "" },
          { name: "Crevette panée", price: "" },
          { name: "Kabeb", price: "" },
          { name: "Dorade grillée", price: "" },
          { name: "Côte à l'os grillée", price: "" },
          { name: "Grillade mixte royale", price: "" },
          { name: "Poisson du jour", price: "", desc: "100 g" },
          { name: "Loup de mer", price: "", desc: "100 g" },
          { name: "Suprême de poulet", price: "" },
          { name: "Kamounia", price: "" },
          { name: "Spaghetti viande", price: "" },
          { name: "Spaghetti sauce blanche aux crevettes", price: "" },
          { name: "Fruits de mer sautés", price: "" },
          { name: "Mazza", price: "" },
        ]
      },
      {
        title: "Supplément",
        items: [
          { name: "Salade riz", price: "" },
          { name: "Salade méchouia", price: "" },
          { name: "Frites", price: "" },
          { name: "Salade tunisienne", price: "" },
          { name: "Salade poulpe", price: "" },
        ]
      },
    ]
  },
  {
    id: "desserts",
    eyebrow: "Pour finir en douceur",
    title: "Desserts",
    categories: [
      {
        title: "Dessert",
        items: [
          { name: "Glace 2 boules", price: "" },
          { name: "Glace 3 boules", price: "" },
          { name: "Assiette fruits Saint Tropez", price: "" },
          { name: "Assiette fruits de saison", price: "" },
          { name: "Cheesecake", price: "" },
          { name: "Saint Sébastien", price: "" },
          { name: "Jwajem", price: "" },
          { name: "Sorbet de citron", price: "" },
        ]
      },
    ]
  },
];

/* ===================================================================
   RENDERING
=================================================================== */
const menuGroupsEl = document.getElementById("menuGroups");
const navPillsEl = document.getElementById("navPills");
const emptyStateEl = document.getElementById("emptyState");

function renderNavPills(){
  const frag = document.createDocumentFragment();
  MENU_DATA.forEach((group, i) => {
    const a = document.createElement("a");
    a.href = `#${group.id}`;
    a.className = "nav__pill" + (i === 0 ? " is-active" : "");
    a.textContent = group.title;
    a.dataset.target = group.id;
    frag.appendChild(a);
  });
  navPillsEl.appendChild(frag);
}

function renderMenu(){
  const frag = document.createDocumentFragment();

  MENU_DATA.forEach(group => {
    const section = document.createElement("section");
    section.className = "group";
    section.id = group.id;

    const header = document.createElement("div");
    header.className = "group__header";
    header.innerHTML = `
      <span class="group__eyebrow">${group.eyebrow}</span>
      <h2 class="group__title">${group.title}</h2>
      <div class="wave-divider group__wave"></div>
    `;
    section.appendChild(header);

    group.categories.forEach(cat => {
      const catEl = document.createElement("div");
      catEl.className = "category";
      catEl.innerHTML = `
        ${cat.sub ? `<p class="category__sub">${cat.sub}</p>` : ""}
        <h3 class="category__title">${cat.title}</h3>
        <div class="items"></div>
      `;
      const itemsEl = catEl.querySelector(".items");

      cat.items.forEach(item => {
        const priceText = item.price && item.price.trim() ? item.price : "—";
        const priceClass = item.price && item.price.trim() ? "" : " is-empty";
        const itemEl = document.createElement("article");
        itemEl.className = "item";
        itemEl.dataset.name = item.name.toLowerCase();
        itemEl.dataset.category = cat.title.toLowerCase();
        itemEl.innerHTML = `
          <span>
            <span class="item__name">${item.name}</span>
            ${item.desc ? `<span class="item__desc">${item.desc}</span>` : ""}
          </span>
          <span class="item__price${priceClass}">${priceText}</span>
        `;
        itemsEl.appendChild(itemEl);
      });

      catEl.appendChild(itemsEl);
      section.appendChild(catEl);
    });

    frag.appendChild(section);
  });

  menuGroupsEl.appendChild(frag);
}

renderNavPills();
renderMenu();

/* ===================================================================
   STICKY NAV: active pill on scroll + mobile burger toggle
=================================================================== */
const pills = Array.from(document.querySelectorAll(".nav__pill"));
const groups = Array.from(document.querySelectorAll(".group"));
const navPillsWrap = document.getElementById("navPills");
const burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", () => {
  const isOpen = navPillsWrap.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-open", isOpen);
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
});

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    navPillsWrap.classList.remove("is-open");
    burgerBtn.classList.remove("is-open");
    burgerBtn.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      pills.forEach(p => p.classList.toggle("is-active", p.dataset.target === entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

groups.forEach(g => sectionObserver.observe(g));

/* ===================================================================
   SEARCH / FILTER
=================================================================== */
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");

searchToggle.addEventListener("click", () => {
  searchBar.classList.add("is-open");
  searchInput.focus();
});
searchClose.addEventListener("click", () => {
  searchBar.classList.remove("is-open");
  searchInput.value = "";
  filterItems("");
});

searchInput.addEventListener("input", (e) => filterItems(e.target.value.trim().toLowerCase()));

function filterItems(query){
  const items = document.querySelectorAll(".item");
  const cats = document.querySelectorAll(".category");
  const grps = document.querySelectorAll(".group");
  let anyVisible = false;

  items.forEach(item => {
    const match = !query || item.dataset.name.includes(query) || item.dataset.category.includes(query);
    item.classList.toggle("is-hidden", !match);
    if (match) anyVisible = true;
  });

  cats.forEach(cat => {
    const hasVisible = cat.querySelectorAll(".item:not(.is-hidden)").length > 0;
    cat.style.display = hasVisible ? "" : "none";
  });

  grps.forEach(grp => {
    const hasVisible = grp.querySelectorAll(".item:not(.is-hidden)").length > 0;
    grp.style.display = hasVisible ? "" : "none";
  });

  emptyStateEl.hidden = anyVisible || !query;
}

/* ===================================================================
   THEME TOGGLE (light / dark), persisted for the session
=================================================================== */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme){
  body.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  try { sessionStorage.setItem("stc-theme", theme); } catch(e){ /* storage may be unavailable */ }
}

let savedTheme = "light";
try { savedTheme = sessionStorage.getItem("stc-theme") || "light"; } catch(e){}
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  setTheme(body.dataset.theme === "dark" ? "light" : "dark");
});

/* ===================================================================
   AMBIENT MUSIC TOGGLE — muted by default.
   Add a file at assets/ambience.mp3 to enable actual playback.
=================================================================== */
const musicToggle = document.getElementById("musicToggle");
const ambientAudio = document.getElementById("ambientAudio");
let musicOn = false;

musicToggle.addEventListener("click", () => {
  musicOn = !musicOn;
  musicToggle.textContent = musicOn ? "🔊" : "🔇";
  musicToggle.setAttribute("aria-pressed", String(musicOn));
  if (musicOn){
    ambientAudio.volume = 0.4;
    ambientAudio.play().catch(() => {
      /* No audio file present yet — silently ignore until owner adds assets/ambience.mp3 */
    });
  } else {
    ambientAudio.pause();
  }
});

/* ===================================================================
   BACK TO TOP
=================================================================== */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===================================================================
   QR CODE — encodes the page's own URL so guests can reopen the menu
=================================================================== */
const qrHolder = document.getElementById("qrHolder");
if (window.QRCode && qrHolder){
  new QRCode(qrHolder, {
    text: window.location.href,
    width: 114,
    height: 114,
    colorDark: "#16283f",
    colorLight: "#fffdf7",
  });
}

/* ===================================================================
   FOOTER YEAR
=================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();