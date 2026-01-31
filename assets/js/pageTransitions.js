document.body.classList.add("page-enter");

window.addEventListener("pageshow", () => {
  requestAnimationFrame(() => {
    document.body.classList.remove("page-enter");
    document.body.classList.remove("page-exit");
  });
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;
  if (link.target === "_blank") return;
  if (href.startsWith("#")) return;
  if (href.startsWith("javascript:")) return;
  if (link.hasAttribute("download")) return;
  if (/^https?:\/\//i.test(href)) return;

  e.preventDefault();
  document.body.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = href;
  }, 420);
});