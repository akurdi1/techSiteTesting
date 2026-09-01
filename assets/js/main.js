
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.dataset.open === "true";
      links.dataset.open = String(!open);
      links.style.display = open ? "" : "flex";
      links.style.position = open ? "" : "absolute";
      links.style.top = "68px";
      links.style.left = "14px";
      links.style.right = "14px";
      links.style.padding = open ? "" : "18px";
      links.style.background = open ? "" : "#fff";
      links.style.border = open ? "" : "1px solid #e7ebef";
      links.style.borderRadius = open ? "" : "18px";
      links.style.flexDirection = open ? "" : "column";
      links.style.alignItems = open ? "" : "flex-start";
      links.style.boxShadow = open ? "" : "0 18px 50px rgba(7,31,53,.14)";
    });
  }

  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll("[data-category]").forEach(card => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  const form = document.querySelector("#project-form");
  const formStatus = document.querySelector("#form-status");
  if (form && formStatus) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "there";
      formStatus.textContent = `Thanks, ${name}. Your request is ready to be connected to your backend or email service.`;
      formStatus.hidden = false;
      form.reset();
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  // Basic language preference hook. Full localized pages can be added later.
  const langSelect = document.querySelector("#language");
  if (langSelect) {
    const saved = localStorage.getItem("techcamp-language");
    if (saved) langSelect.value = saved;
    langSelect.addEventListener("change", () => {
      localStorage.setItem("techcamp-language", langSelect.value);
      if (langSelect.value !== "en") {
        alert("The Kurdish and Arabic SEO pages are ready to be added as separate localized routes. English is the current production page.");
        langSelect.value = "en";
      }
    });
  }
});
