let translations = {};
let currentLang = 'en'; // idioma por defecto

// 1️⃣ Función para cargar un HTML en un contenedor
function loadHTML(id, file) {
  return fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error cargando " + file, err));
}

// 2️⃣ Función para cargar el JSON de idioma
async function loadLanguage(lang) {
  try {
    const response = await fetch(`lenguage/${lang}.json`);
    translations = await response.json();
    updateTexts();
  } catch(err) {
    console.error("Error cargando idioma:", err);
  }
}

// 3️⃣ Función para actualizar todos los textos con data-i18n
function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}

// 4️⃣ Función principal de inicialización
async function init() {
  // Cargar todas las secciones HTML
  await loadHTML("header", "html/header.html");

  // Ahora sí existen los elementos, podemos asignar eventos
  const navBtn = document.querySelector('.nav-responsive');
  const navUl = document.querySelector('nav ul');

  if(navBtn && navUl){
    navBtn.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  }

  await loadHTML("init", "html/init.html");
  await loadHTML("aboutme", "html/aboutme.html");
  await loadHTML("skills", "html/skills.html");
  await loadHTML("curriculum", "html/curriculum.html");
  await loadHTML("portfolio", "html/portfolio.html");
  await loadHTML("contact", "html/contact.html");
  await loadHTML("footer", "html/footer.html");

  // Inicializar idioma por defecto
  await loadLanguage(currentLang);

  // Agregar listener al selector de idioma (ahora sí existe)
  const selector = document.getElementById('languageSelector');
  if(selector) {
    selector.addEventListener('change', (e) => {
      currentLang = e.target.value;
      loadLanguage(currentLang);
    });
  }
}

// 5️⃣ Ejecutar inicialización cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', init);