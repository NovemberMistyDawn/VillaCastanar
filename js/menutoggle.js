document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  // Mostrar botón hamburguesa al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      menuButton.style.display = 'block';
    } else {
      menuButton.style.display = 'none';
    }
  });

  // Alternar menú al hacer clic en hamburguesa
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que cierre por el otro eventListener
    sidebar.classList.toggle("active");
  });

  // Cerrar al hacer clic en el botón de cerrar
  if (closeSidebar) {
    closeSidebar.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.classList.remove("active");
    });
  }

  // Cerrar si haces clic fuera del sidebar
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuButton.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
});
