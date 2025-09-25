function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error cargando " + file, error));
}

window.onload = () => {
  loadHTML("header", "header.html");
  loadHTML("init", "init.html");
  loadHTML("aboutme", "aboutme.html");
  loadHTML("skills", "skills.html");
  loadHTML("curriculum", "curriculum.html");
  loadHTML("portfolio", "portfolio.html");
  loadHTML("contact", "contact.html");
  loadHTML("footer", "footer.html");
};