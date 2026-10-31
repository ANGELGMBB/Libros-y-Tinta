/**
 * Libros y Tinta · Lógica Interactiva y Experiencia de Usuario
 * Gestión de Catálogo, Carrito, Favoritos, Modales, Vistas y Temas
 */

// =============================================================================
// 1. BASE DE DATOS DE LIBROS (Colección enriquecida)
// =============================================================================
const LIBROS = [
  {
    id: "el-principito",
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Infantil",
    portada: "img/el-principito.jpg",
    precio: 195,
    rating: 4.9,
    anio: 1943,
    paginas: 96,
    editorial: "Reynal & Hitchcock",
    isbn: "978-0156012195",
    destacado: true,
    descripcion: "Un aviador varado en el corazón del desierto del Sahara se encuentra con un pequeño príncipe proveniente del asteroide B 612. A través de conversaciones llenas de sabiduría, la historia explora la soledad, el amor, la amistad y la pérdida, recordándonos la inocencia olvidada de la infancia.",
    cita: "“He aquí mi secreto, que no puede ser más simple: solo con el corazón se puede ver bien; lo esencial es invisible a los ojos.”",
    fragmento: "Pido perdón a los niños por haber dedicado este libro a una persona grande. Tengo una seria razón para ello: esta persona grande es el mejor amigo que tengo en el mundo.\n\nTiene otra razón: esta persona grande puede comprenderlo todo, incluso los libros para niños. Tiene una tercera razón: vive en Francia, donde tiene hambre y frío. Tiene verdadera necesidad de consuelo.\n\nSi todas estas razones no fueran suficientes, quiero dedicar este libro al niño que esta persona grande fue en otro tiempo. Todas las personas grandes han sido niños antes (pero pocas lo recuerdan)."
  },
  {
    id: "cien-anos-de-soledad",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    categoria: "Novela",
    portada: "img/cien-anos-de-soledad.jpg",
    precio: 380,
    rating: 4.95,
    anio: 1967,
    paginas: 471,
    editorial: "Editorial Sudamericana",
    isbn: "978-0307474728",
    destacado: false,
    descripcion: "La cumbre del realismo mágico narra la epopeya de siete generaciones de la familia Buendía en el mítico pueblo de Macondo. Amor, guerras civiles, milagros cotidianos y la inevitable soledad humana entrelazados en una prosa hipnótica.",
    cita: "“Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.”",
    fragmento: "Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.\n\nEl mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo."
  },
  {
    id: "orgullo-y-prejuicio",
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    categoria: "Novela",
    portada: "img/orgullo-y-prejuicio.jpg",
    precio: 290,
    rating: 4.85,
    anio: 1813,
    paginas: 424,
    editorial: "T. Egerton",
    isbn: "978-0141439518",
    destacado: false,
    descripcion: "Una aguda comedia de costumbres y una de las historias de amor más queridas de la literatura. Elizabeth Bennet y el aristocrático señor Darcy deben superar sus primeras impresiones y falsos orgullos para encontrar la verdadera comprensión.",
    cita: "“Es una verdad mundialmente reconocida que un hombre soltero, poseedor de una gran fortuna, necesita una esposa.”",
    fragmento: "Sin embargo, poco se sabe de los sentimientos u opiniones de un hombre semejante cuando llega por primera vez a un vecindario; mas esta verdad está tan bien arraigada en las mentes de las familias circunvecinas que es considerado propiedad legítima de una u otra de sus hijas."
  },
  {
    id: "don-quijote",
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    categoria: "Clásico",
    portada: "img/don-quijote.jpg",
    precio: 450,
    rating: 4.9,
    anio: 1605,
    paginas: 864,
    editorial: "Juan de la Cuesta",
    isbn: "978-8420412146",
    destacado: false,
    descripcion: "La máxima obra de la lengua española. Las aventuras y desventuras del hidalgo don Alonso Quijano, quien tras enloquecer por leer libros de caballerías decide recorrer los caminos del mundo como caballero andante junto a su fiel escudero Sancho Panza.",
    cita: "“La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.”",
    fragmento: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.\n\nUna olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda."
  },
  {
    id: "la-sombra-del-viento",
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    categoria: "Novela",
    portada: "img/la-sombra-del-viento.jpg",
    precio: 360,
    rating: 4.88,
    anio: 2001,
    paginas: 576,
    editorial: "Planeta",
    isbn: "978-8408163381",
    destacado: false,
    descripcion: "En una Barcelona misteriosa tras la posguerra, el joven Daniel Sempere es conducido al Cementerio de los Libros Olvidados, donde descubre un ejemplar de Julián Carax que cambiará su vida para siempre, abriendo una trama de amor prohibido y sombras del pasado.",
    cita: "“Cada libro, cada tomo que ves, tiene alma. El alma de quien lo escribió, y el alma de quienes lo leyeron y vivieron y soñaron con él.”",
    fragmento: "Todavía recuerdo aquel amanecer en que mi padre me llevó por primera vez a visitar el Cementerio de los Libros Olvidados. Desgranaban los primeros días del verano de 1945 y caminábamos por las calles de una Barcelona atrapada bajo cielos de ceniza y un sol de vapor que se derramaba sobre la rambla de Santa Mónica en una guirnalda de cobre líquido."
  },
  {
    id: "harry-potter",
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    categoria: "Fantasía",
    portada: "img/harry-potter.jpg",
    precio: 320,
    rating: 4.92,
    anio: 1997,
    paginas: 256,
    editorial: "Bloomsbury",
    isbn: "978-8478884452",
    destacado: false,
    descripcion: "El inicio del fenómeno mágico universal. En su undécimo cumpleaños, el huérfano Harry Potter descubre que es un mago y es invitado al Colegio Hogwarts de Magia y Hechicería, donde forjará amistades eternas y descubrirá la verdad sobre sus padres.",
    cita: "“No es bueno dejarse arrastrar por los sueños y olvidarse de vivir, recuérdalo.”",
    fragmento: "El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, estaban orgullosos de decir que eran muy normales, afortunadamente. Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, porque no estaban para tales tonterías."
  },
  {
    id: "rayuela",
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    categoria: "Novela",
    portada: "img/rayuela.jpg",
    precio: 345,
    rating: 4.78,
    anio: 1963,
    paginas: 600,
    editorial: "Editorial Sudamericana",
    isbn: "978-8466331906",
    destacado: false,
    descripcion: "Obra maestra de la contranovela latinoamericana. La historia de amor y búsqueda existencial de Horacio Oliveira y la Maga entre las calles de París y Buenos Aires, diseñada con múltiples caminos posibles de lectura.",
    cita: "“Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.”",
    fragmento: "¿Encontraría a la Maga? Tantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y apenas la luz de ceniza y olivo que flota sobre el río me dejaba distinguir las formas, ya su silueta delgada se inscribía en el Pont des Arts, a veces andando de un lado a otro, a veces detenida en el pretil de hierro, inclinada sobre el agua."
  },
  {
    id: "el-alquimista",
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    categoria: "Novela",
    portada: "img/el-alquimista.jpg",
    precio: 250,
    rating: 4.65,
    anio: 1988,
    paginas: 192,
    editorial: "Rocco",
    isbn: "978-0062502179",
    destacado: false,
    descripcion: "La inspiradora travesía de Santiago, un joven pastor andaluz que emprende un viaje hacia las pirámides de Egipto en busca de un tesoro soñado, descubriendo en el camino el valor de escuchar al corazón y perseguir la Leyenda Personal.",
    cita: "“Cuando deseas algo con fuerza, todo el universo conspira para ayudarte a conseguirlo.”",
    fragmento: "El muchacho se llamaba Santiago. Comenzaba a anochecer cuando llegó con su rebaño ante una vieja iglesia abandonada. El techo se había derrumbado hacía mucho tiempo y un enorme sicómoro había crecido en el lugar que antes ocupaba la sacristía.\n\nDecidió pasar la noche allí. Hizo entrar a todas las ovejas por la puerta en ruinas y luego colocó unas tablas para impedir que escaparan durante la noche."
  },
  {
    id: "cronica-de-una-muerte-anunciada",
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    categoria: "Novela",
    portada: "img/cronica-de-una-muerte-anunciada.jpg",
    precio: 225,
    rating: 4.82,
    anio: 1981,
    paginas: 128,
    editorial: "La Oveja Negra",
    isbn: "978-0307387226",
    destacado: false,
    descripcion: "Una apasionante reconstrucción casi periodística y trágica. Todo un pueblo sabía de antemano que los hermanos Vicario iban a matar a Santiago Nasar para vengar el honor familiar, pero una cadena de azares y desidias impide evitarlo.",
    cita: "“El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo.”",
    fragmento: "Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertar se sintió por completo salpicado de cagada de pájaros. «Siempre soñaba con árboles», me dijo Plácida Linero, su madre, 27 años después, recordando los pormenores de aquel lunes ingrato."
  },
  {
    id: "los-miserables",
    titulo: "Los miserables",
    autor: "Victor Hugo",
    categoria: "Clásico",
    portada: "img/los-miserables.jpg",
    precio: 490,
    rating: 4.93,
    anio: 1862,
    paginas: 1200,
    editorial: "A. Lacroix, Verboeckhoven & Cie",
    isbn: "978-8420684857",
    destacado: false,
    descripcion: "Un monumento a la justicia, la redención y la compasión. La lucha del ex presidiario Jean Valjean por rehacer su vida bajo la incansable persecución del inspector Javert, ambientada en el turbulento París de las revueltas decimonónicas.",
    cita: "“Amar o haber amado: esto es suficiente. No pidas más. No hay otra perla que encontrar en los oscuros pliegues de la vida.”",
    fragmento: "En 1815, monseñor Charles-François-Bienvenu Myriel era obispo de Digne. Era un anciano de unos setenta y cinco años; ocupaba la sede de Digne desde 1806.\n\nAunque este detalle no concierne en nada al fondo mismo de lo que vamos a relatar, tal vez no sea inútil hacer mención de los rumores que corrían por su cuenta en el momento en que llegó a su diócesis."
  }
];

// =============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// =============================================================================
const state = {
  currentView: "Inicio",
  searchQuery: "",
  selectedCategory: "Todos",
  sortBy: "destacados",
  onlyFavorites: false,
  cart: JSON.parse(localStorage.getItem("libros_tinta_cart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("libros_tinta_favs") || "[]"),
  appliedDiscount: 0,
  theme: localStorage.getItem("libros_tinta_theme") || "dark"
};

// =============================================================================
// 3. INICIALIZACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupNavListeners();
  setupCatalogListeners();
  setupCartDrawer();
  setupModals();
  setupForms();
  renderFeaturedBook();
  renderCategoryPills();
  renderCatalog();
  updateCartBadge();
  updateFavoritesCount();
});

// =============================================================================
// 4. GESTIÓN DE TEMA (CLARO / OSCURO)
// =============================================================================
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("libros_tinta_theme", state.theme);
      updateThemeIcon();
      showToast(state.theme === "dark" ? "Modo Tinta Noche activado" : "Modo Papel Claro activado", "info");
    });
  }
}

function updateThemeIcon() {
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  if (!iconSun || !iconMoon) return;
  if (state.theme === "dark") {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  } else {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  }
}

// =============================================================================
// 5. NAVEGACIÓN Y VISTAS
// =============================================================================
function setupNavListeners() {
  document.querySelectorAll("[data-nav-target]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-nav-target");
      selectView(target);
    });
  });

  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav-panel");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }
}

function selectView(viewName) {
  state.currentView = viewName;

  // Actualizar visibilidad de secciones
  const sections = ["Inicio", "Catálogo", "Libro-del-mes", "Club", "Ubicación"];
  sections.forEach(sec => {
    const el = document.getElementById(`view-${sec}`);
    if (el) {
      if (sec === viewName) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    }
  });

  // Actualizar enlaces activos
  document.querySelectorAll("[data-nav-target]").forEach(link => {
    if (link.getAttribute("data-nav-target") === viewName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Cerrar menú móvil
  const mobileNav = document.getElementById("mobile-nav-panel");
  if (mobileNav) mobileNav.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================================================
// 6. RENDERIZADO: LIBRO DEL MES
// =============================================================================
function renderFeaturedBook() {
  const libro = LIBROS.find(b => b.id === "el-principito") || LIBROS[0];
  const container = document.getElementById("featured-book-container");
  if (!container) return;

  container.innerHTML = `
    <div class="featured-layout">
      <div class="book-cover-wrap">
        <div class="book-cover-3d" onclick="openBookModal('${libro.id}')" style="cursor: pointer;" title="Clic para ver detalles">
          <img src="${libro.portada}" alt="Portada de ${libro.titulo}" />
        </div>
      </div>
      <div class="featured-info">
        <span class="badge-featured">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Selección del Librero · Octubre
        </span>
        <h3>${libro.titulo}</h3>
        <div class="meta-row">
          <span><strong>${libro.autor}</strong></span>
          <span>·</span>
          <span class="meta-tag">${libro.categoria}</span>
          <span>·</span>
          <span class="rating-stars">★ ${libro.rating} / 5</span>
        </div>
        <p class="featured-desc">${libro.descripcion}</p>
        <blockquote class="featured-quote">${libro.cita}</blockquote>
        <div class="featured-actions">
          <span class="price-tag">$${libro.precio} MXN</span>
          <button class="btn-primary" onclick="addToCart('${libro.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Añadir a mi cesta
          </button>
          <button class="btn-outline" onclick="openExcerptModal('${libro.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Leer primer capítulo
          </button>
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// 7. RENDERIZADO Y CONTROL DEL CATÁLOGO
// =============================================================================
function setupCatalogListeners() {
  const searchInput = document.getElementById("catalog-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  const sortSelect = document.getElementById("sort-by-select");
  const favFilterBtn = document.getElementById("filter-fav-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle("visible", state.searchQuery.length > 0);
      }
      renderCatalog();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      state.searchQuery = "";
      clearBtn.classList.remove("visible");
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  if (favFilterBtn) {
    favFilterBtn.addEventListener("click", () => {
      state.onlyFavorites = !state.onlyFavorites;
      favFilterBtn.classList.toggle("active", state.onlyFavorites);
      renderCatalog();
    });
  }
}

function renderCategoryPills() {
  const container = document.getElementById("category-pills-container");
  if (!container) return;

  const categories = ["Todos", "Novela", "Clásico", "Infantil", "Fantasía"];
  container.innerHTML = categories.map(cat => {
    const count = cat === "Todos" 
      ? LIBROS.length 
      : LIBROS.filter(b => b.categoria.toLowerCase() === cat.toLowerCase()).length;
    
    const isActive = state.selectedCategory === cat ? "active" : "";
    return `
      <button class="pill-btn ${isActive}" onclick="setCategoryFilter('${cat}')">
        ${cat} <span class="count">(${count})</span>
      </button>
    `;
  }).join("");
}

function setCategoryFilter(category) {
  state.selectedCategory = category;
  renderCategoryPills();
  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  let filtered = LIBROS.filter(libro => {
    // Filtro por categoría
    if (state.selectedCategory !== "Todos" && libro.categoria.toLowerCase() !== state.selectedCategory.toLowerCase()) {
      return false;
    }
    // Filtro por favoritos
    if (state.onlyFavorites && !state.favorites.includes(libro.id)) {
      return false;
    }
    // Filtro por búsqueda
    if (state.searchQuery) {
      const matchTitle = libro.titulo.toLowerCase().includes(state.searchQuery);
      const matchAuthor = libro.autor.toLowerCase().includes(state.searchQuery);
      if (!matchTitle && !matchAuthor) return false;
    }
    return true;
  });

  // Ordenación
  filtered.sort((a, b) => {
    if (state.sortBy === "precio-asc") return a.precio - b.precio;
    if (state.sortBy === "precio-desc") return b.precio - a.precio;
    if (state.sortBy === "rating") return b.rating - a.rating;
    if (state.sortBy === "titulo") return a.titulo.localeCompare(b.titulo);
    // 'destacados' por defecto
    return (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3>No encontramos lecturas coincidentes</h3>
        <p>Prueba buscando con otro término o desactiva los filtros activos.</p>
        <button class="btn-outline btn-sm" onclick="resetFilters()">Restablecer filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(libro => {
    const isFav = state.favorites.includes(libro.id);
    return `
      <article class="book-card" data-book-id="${libro.id}">
        <div class="card-cover-container">
          <img src="${libro.portada}" alt="Portada de ${libro.titulo}" loading="lazy" />
          <button class="fav-toggle-btn ${isFav ? 'is-favorite' : ''}" 
                  onclick="toggleFavorite('${libro.id}', event)" 
                  title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <span class="card-category-badge">${libro.categoria}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title" onclick="openBookModal('${libro.id}')">${libro.titulo}</h3>
          <p class="card-author">${libro.autor}</p>
          <div class="card-rating">
            <span>★</span>
            <span class="score">${libro.rating}</span>
            <span style="opacity:0.6;">(${libro.anio})</span>
          </div>
          <div class="card-footer">
            <span class="card-price">$${libro.precio} MXN</span>
            <div class="card-actions">
              <button class="btn-card-details" onclick="openBookModal('${libro.id}')">Detalles</button>
              <button class="btn-card-add" onclick="addToCart('${libro.id}')" title="Añadir a la bolsa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function resetFilters() {
  state.searchQuery = "";
  state.selectedCategory = "Todos";
  state.onlyFavorites = false;
  state.sortBy = "destacados";

  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) clearBtn.classList.remove("visible");
  const favBtn = document.getElementById("filter-fav-btn");
  if (favBtn) favBtn.classList.remove("active");
  const sortSelect = document.getElementById("sort-by-select");
  if (sortSelect) sortSelect.value = "destacados";

  renderCategoryPills();
  renderCatalog();
}

// =============================================================================
// 8. FAVORITOS / WISHLIST
// =============================================================================
function toggleFavorite(bookId, event) {
  if (event) event.stopPropagation();

  const index = state.favorites.indexOf(bookId);
  const libro = LIBROS.find(b => b.id === bookId);
  const title = libro ? libro.titulo : "Libro";

  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast(`"${title}" eliminado de tus favoritos`, "info");
  } else {
    state.favorites.push(bookId);
    showToast(`"${title}" añadido a tus favoritos ❤️`, "success");
  }

  localStorage.setItem("libros_tinta_favs", JSON.stringify(state.favorites));
  updateFavoritesCount();
  renderCatalog();
}

function updateFavoritesCount() {
  const favBadges = document.querySelectorAll(".fav-count-badge");
  favBadges.forEach(b => {
    b.textContent = state.favorites.length;
    b.style.display = state.favorites.length > 0 ? "flex" : "none";
  });
}

// =============================================================================
// 9. CARRITO DE COMPRAS / BOLSA DE LECTURA
// =============================================================================
function setupCartDrawer() {
  const openBtns = document.querySelectorAll("[data-open-cart]");
  const closeBtns = document.querySelectorAll("[data-close-cart]");
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");

  openBtns.forEach(btn => btn.addEventListener("click", openCart));
  closeBtns.forEach(btn => btn.addEventListener("click", closeCart));

  if (overlay) {
    overlay.addEventListener("click", closeCart);
  }

  const couponBtn = document.getElementById("apply-coupon-btn");
  if (couponBtn) {
    couponBtn.addEventListener("click", applyCoupon);
  }

  const whatsappBtn = document.getElementById("checkout-whatsapp-btn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", checkoutWhatsApp);
  }
}

function openCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay && drawer) {
    overlay.classList.add("open");
    drawer.classList.add("open");
    renderCart();
  }
}

function closeCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay && drawer) {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
  }
}

function addToCart(bookId, qty = 1) {
  const existing = state.cart.find(item => item.id === bookId);
  if (existing) {
    existing.cantidad += qty;
  } else {
    state.cart.push({ id: bookId, cantidad: qty });
  }

  saveCart();
  updateCartBadge();
  renderCart();

  const libro = LIBROS.find(b => b.id === bookId);
  showToast(`"${libro ? libro.titulo : 'Libro'}" añadido a la bolsa 🛍️`, "success");
}

function updateCartQty(bookId, delta) {
  const item = state.cart.find(i => i.id === bookId);
  if (!item) return;

  item.cantidad += delta;
  if (item.cantidad <= 0) {
    state.cart = state.cart.filter(i => i.id !== bookId);
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(i => i.id !== bookId);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Libro eliminado de la bolsa", "info");
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Bolsa de lectura vaciada", "info");
}

function saveCart() {
  localStorage.setItem("libros_tinta_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const totalItems = state.cart.reduce((acc, item) => acc + item.cantidad, 0);
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }
}

function renderCart() {
  const body = document.getElementById("cart-body");
  const footer = document.getElementById("cart-footer");
  if (!body) return;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h4>Tu bolsa de lectura está vacía</h4>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-top:6px;">Explora nuestro catálogo y elige una gran historia.</p>
        <button class="btn-primary btn-sm" style="margin-top:16px;" onclick="closeCart(); selectView('Catálogo');">Explorar Catálogo</button>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "flex";

  let subtotal = 0;

  body.innerHTML = state.cart.map(item => {
    const libro = LIBROS.find(b => b.id === item.id);
    if (!libro) return "";
    const itemTotal = libro.precio * item.cantidad;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${libro.portada}" alt="${libro.titulo}" />
        <div class="cart-item-info">
          <div>
            <div class="cart-item-title">${libro.titulo}</div>
            <div class="cart-item-author">${libro.autor}</div>
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${itemTotal} MXN</span>
            <div class="cart-qty-ctrls">
              <button class="qty-btn" onclick="updateCartQty('${libro.id}', -1)">-</button>
              <span class="qty-val">${item.cantidad}</span>
              <button class="qty-btn" onclick="updateCartQty('${libro.id}', 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Cálculos
  const discountAmount = Math.round(subtotal * state.appliedDiscount);
  const total = subtotal - discountAmount;

  document.getElementById("cart-subtotal").textContent = `$${subtotal} MXN`;
  const discLine = document.getElementById("cart-discount-line");
  if (discLine) {
    discLine.style.display = state.appliedDiscount > 0 ? "flex" : "none";
    document.getElementById("cart-discount-val").textContent = `-$${discountAmount} MXN`;
  }
  document.getElementById("cart-total").textContent = `$${total} MXN`;
}

function applyCoupon() {
  const input = document.getElementById("coupon-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "TINTA10" || code === "LIBROS10") {
    state.appliedDiscount = 0.10;
    showToast("¡Cupón del 10% de descuento aplicado!", "success");
  } else if (code === "LEERESVIVIR") {
    state.appliedDiscount = 0.15;
    showToast("¡Cupón especial del 15% aplicado!", "success");
  } else {
    showToast("Cupón no válido. Prueba con TINTA10", "info");
    return;
  }
  input.value = "";
  renderCart();
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) return;

  let msg = "¡Hola, Libros y Tinta! 📚✨\nMe gustaría hacer el siguiente pedido:\n\n";
  let subtotal = 0;

  state.cart.forEach(item => {
    const libro = LIBROS.find(b => b.id === item.id);
    if (libro) {
      const lineTotal = libro.precio * item.cantidad;
      subtotal += lineTotal;
      msg += `• ${item.cantidad}x "${libro.titulo}" de ${libro.autor} ($${lineTotal} MXN)\n`;
    }
  });

  const discountAmount = Math.round(subtotal * state.appliedDiscount);
  const total = subtotal - discountAmount;

  if (state.appliedDiscount > 0) {
    msg += `\nDescuento aplicado: -$${discountAmount} MXN`;
  }
  msg += `\n*TOTAL: $${total} MXN*\n\n¿Tienen disponibilidad para envío a domicilio? Muchas gracias.`;

  const phone = "522212160294"; // WhatsApp de la librería (+52 221 216 0294)
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
}

// =============================================================================
// 10. MODALES (Detalles y Fragmento)
// =============================================================================
function setupModals() {
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", closeModals);
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModals();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });
}

function openBookModal(bookId) {
  const libro = LIBROS.find(b => b.id === bookId);
  if (!libro) return;

  const content = document.getElementById("book-modal-content");
  if (!content) return;

  const isFav = state.favorites.includes(libro.id);

  content.innerHTML = `
    <div class="modal-book-layout">
      <div>
        <img class="modal-cover" src="${libro.portada}" alt="Portada de ${libro.titulo}" />
      </div>
      <div class="modal-details">
        <span class="badge-featured">${libro.categoria}</span>
        <h2>${libro.titulo}</h2>
        <div class="meta-row">
          <span><strong>${libro.autor}</strong></span>
          <span>·</span>
          <span class="rating-stars">★ ${libro.rating}</span>
        </div>

        <div class="modal-specs">
          <div><span>Publicado:</span> <strong>${libro.anio}</strong></div>
          <div><span>Páginas:</span> <strong>${libro.paginas}</strong></div>
          <div><span>Editorial:</span> <strong>${libro.editorial}</strong></div>
          <div><span>ISBN:</span> <strong>${libro.isbn}</strong></div>
        </div>

        <p class="modal-synopsis">${libro.descripcion}</p>
        <blockquote class="featured-quote" style="font-size:0.95rem;">${libro.cita}</blockquote>

        <div class="modal-footer">
          <span class="price-tag">$${libro.precio} MXN</span>
          <div style="display:flex;gap:10px;">
            <button class="btn-outline btn-sm" onclick="openExcerptModal('${libro.id}')">Leer fragmento</button>
            <button class="btn-primary btn-sm" onclick="addToCart('${libro.id}'); closeModals();">
              Añadir a la bolsa
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("book-modal-overlay").classList.add("open");
}

function openExcerptModal(bookId) {
  const libro = LIBROS.find(b => b.id === bookId);
  if (!libro) return;

  const content = document.getElementById("excerpt-modal-body");
  if (!content) return;

  content.innerHTML = `
    <div class="excerpt-modal-content">
      <h3>${libro.titulo}</h3>
      <p class="author-sub">Por ${libro.autor} · Primer capítulo / Fragmento</p>
      <div class="excerpt-text">${libro.fragmento}</div>
      <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
        <button class="btn-outline btn-sm" onclick="closeModals()">Cerrar</button>
        <button class="btn-primary btn-sm" onclick="addToCart('${libro.id}'); closeModals();">
          Me encanta, comprar ($${libro.precio} MXN)
        </button>
      </div>
    </div>
  `;

  // Cerrar el modal de detalles si estaba abierto para abrir el de lectura
  const bookModal = document.getElementById("book-modal-overlay");
  if (bookModal) bookModal.classList.remove("open");

  document.getElementById("excerpt-modal-overlay").classList.add("open");
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(o => o.classList.remove("open"));
}

// =============================================================================
// 11. FORMULARIOS (Club de Lectura, Contacto, Newsletter)
// =============================================================================
function setupForms() {
  const clubForm = document.getElementById("club-signup-form");
  if (clubForm) {
    clubForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = clubForm.querySelector("input[type='email']").value;
      showToast(`¡Bienvenido al Club de Lectura! Te enviamos los detalles a ${email}`, "success");
      clubForm.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("¡Mensaje recibido! Te responderemos muy pronto.", "success");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("¡Te has suscrito a La Carta del Librero! 💌", "success");
      newsletterForm.reset();
    });
  }
}

// =============================================================================
// 12. SISTEMA DE TOASTS FLOTANTES
// =============================================================================
function showToast(message, type = "default") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  if (type === "success") {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  // Animación de entrada
  setTimeout(() => toast.classList.add("show"), 10);

  // Animación de salida y remoción
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// =============================================================================
// 13. EXPOSICIÓN GLOBAL PARA MANEJADORES EN EL HTML
// =============================================================================
window.state = state;
window.LIBROS = LIBROS;
window.selectView = selectView;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.clearCart = clearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.openBookModal = openBookModal;
window.openExcerptModal = openExcerptModal;
window.closeModals = closeModals;
window.toggleFavorite = toggleFavorite;
window.setCategoryFilter = setCategoryFilter;
window.resetFilters = resetFilters;
window.renderCatalog = renderCatalog;
window.showToast = showToast;

