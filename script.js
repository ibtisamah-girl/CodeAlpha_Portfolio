/* ==========================
   IBTISAMAH PORTFOLIO
   JavaScript
========================== */


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


// CLOSE THE MOBILE MENU WHEN A LINK IS CLICKED

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});


// UPDATE THE FOOTER YEAR AUTOMATICALLY

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-visual, .about-copy, .project-card, " +
    ".skills-intro, .skill-item, .journey-inner, .contact-content"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ADD A LITTLE STAGGER TO PROJECT CARDS

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay = `${(index % 2) * 100}ms`;

});


// PREVENT PLACEHOLDER SOCIAL LINKS FROM JUMPING TO THE TOP

const placeholderLinks = document.querySelectorAll('.social-links a[href="#"]');

placeholderLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Add your actual social media profile link to this button."
        );

    });

});


// SIMPLE CONSOLE MESSAGE

console.log(
    "Welcome to IBTISAMAH. — Built with creativity, curiosity, and code."
);