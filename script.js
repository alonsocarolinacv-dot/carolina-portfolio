document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("year").textContent = new Date().getFullYear();

// Limpia parámetros feos del URL (Formspree redirect)
if (location.search) {
  history.replaceState({}, document.title, location.pathname + location.hash);
}
