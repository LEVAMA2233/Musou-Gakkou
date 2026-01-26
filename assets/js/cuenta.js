document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-section]").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();

      const target = item.getAttribute("data-section");

      document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.remove("active");
      });

      const activeSection = document.getElementById(target);
      if (activeSection) {
        activeSection.classList.add("active");
      }

      document.querySelectorAll(".list-group-item").forEach(i => {
        i.classList.remove("active");
      });

      if (item.classList.contains("list-group-item")) {
        item.classList.add("active");
      }
    });
  });
});
