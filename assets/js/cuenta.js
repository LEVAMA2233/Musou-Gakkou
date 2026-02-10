document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-section]").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();

      const target = item.getAttribute("data-section");

      // Mostrar sección
      document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.remove("active");
      });
      document.getElementById(target)?.classList.add("active");

      // List-group
      document.querySelectorAll(".list-group-item").forEach(i => {
        i.classList.remove("active");
      });

      if (item.classList.contains("list-group-item")) {
        item.classList.add("active");
      }

      // Dropdown
      document.querySelectorAll(".dropdown-item").forEach(i => {
        i.classList.remove("active");
      });

      if (item.classList.contains("dropdown-item")) {
        item.classList.add("active");
      }

      const mobileBtn = document.getElementById("mobileMenuButton");

      if (mobileBtn) {
        mobileBtn.textContent = item.textContent;
      }
    });
  });
});
