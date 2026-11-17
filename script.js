
// =====================================
// MOBILE NAVIGATION
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

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

revealElements.forEach(element => {
    observer.observe(element);
});


// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll("main section");

const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(link => {
                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }
                });

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formStatus.textContent = "Please fill in all fields.";

        return;
    }

    const recipient = "pratikpatilpp284@gmail.com";

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailLink =
        "mailto:" + recipient +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

    formStatus.textContent =
        "Opening your email application. Please send the prepared message.";

    window.location.href = mailLink;

});
