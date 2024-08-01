//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// Bouncy Letters
document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
  element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
    letter.classList.add("bounce");
    setTimeout(function () {
      letter.classList.remove("bounce");
    }, 1000);
  }
}

// Typing Animation
var typed = new Typed(".typing", {
  strings: ["", "Full-Stack Developer", "Web Developer", "Front-End Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
  // cursor:NamedNodeMap;
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const portfolioItem = document.querySelectorAll(".portfolio-item");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

portfolioItem.forEach((portfolioItem, i) => {
  portfolioItem.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

//Portfolio - Swiper
// var swiper = new Swiper(".portfolio-container", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//Skills toggle
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
  delay: 100,
  origin: "right",
});
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".media-icons i, .contact-left li", {
  delay: 100,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".home-img, .about-img", {
  delay: 100,
  origin: "bottom",
});
ScrollReveal().reveal(".about .description, .contact-right", {
  delay: 100,
  origin: "right",
});
ScrollReveal().reveal(".about .professional-list li", {
  delay: 100,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(
  ".skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2, .skills-box, .skills-toggle",
  { delay: 100, origin: "left" }
);
ScrollReveal().reveal(
  ".experience-card, .service-card, .education, .portfolio .portfolio-item",
  {
    delay: 100,
    origin: "bottom",
    interval: 200,
  }
);
ScrollReveal().reveal("footer .group", {
  delay: 100,
  origin: "top",
  interval: 200,
});

/*=============== SET YEAR ===============*/
date.innerHTML = new Date().getFullYear();

/* ================================== LIGHT/DARK THEME ================================= */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
} else {
  // Set dark theme as main theme
  document.body.classList.add("dark-theme");
  themeBtn.classList.remove("moon");
  themeBtn.classList.add("sun");
}
