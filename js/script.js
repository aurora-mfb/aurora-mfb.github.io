function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error cargando " + file, error));
}

window.onload = () => {
  loadHTML("header", "html/header.html");
  loadHTML("init", "html/init.html");
  loadHTML("aboutme", "html/aboutme.html");
  loadHTML("skills", "html/skills.html");
  loadHTML("curriculum", "html/curriculum.html");
  loadHTML("portfolio", "html/portfolio.html");
  loadHTML("contact", "html/contact.html");
  loadHTML("footer", "html/footer.html");
};