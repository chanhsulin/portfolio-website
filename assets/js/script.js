"use strict";

// element toggle helper
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar (guarded in case elements don't exist)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// PAGE NAV — robust and order-independent
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.textContent.trim().toLowerCase();

    // show the target page
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    // set active link
    navigationLinks.forEach((btn) => {
      btn.classList.toggle("active", btn === link);
    });

    window.scrollTo(0, 0);
  });
});
