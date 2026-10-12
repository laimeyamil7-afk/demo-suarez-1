(function () {
  "use strict";

  /** Cambiá solo este número para actualizar WhatsApp en todo el sitio (formato internacional sin +). */
  var WHATSAPP_NUMBER = "5491151249133";

  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.querySelector(".nav-menu");
  var navLinks = document.querySelectorAll(".nav-menu a");
  var contactForm = document.getElementById("contact-form");

  function buildWhatsAppUrl(text) {
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(text)
    );
  }

  document.querySelectorAll("[data-wa-link]").forEach(function (el) {
    var preset = el.getAttribute("data-wa-message") || "";
    el.setAttribute("href", buildWhatsAppUrl(preset));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.querySelector('[name="name"]').value.trim();
      var message = contactForm.querySelector('[name="message"]').value.trim();
      var body =
        "Hola Suarez Oil, soy " +
        (name || "un cliente") +
        ". " +
        (message || "Quisiera consultar por sus servicios.");
      window.open(buildWhatsAppUrl(body), "_blank", "noopener,noreferrer");
    });
  }

  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll('.nav-menu a[href^="#"]');

  if ("IntersectionObserver" in window && sections.length && navAnchors.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navAnchors.forEach(function (a) {
            a.classList.toggle(
              "is-active",
              a.getAttribute("href") === "#" + id
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      observer.observe(s);
    });
  }
})();
