const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");


// =========================
// MOBILE MENU
// =========================

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const business =
            document.getElementById("business").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        // Your WhatsApp number
        // Country code included, without +
        const whatsappNumber = "2347073389306";


        const whatsappMessage =
`Hello Nova Web Studio,

I would like to start a project.

Name: ${name}
Email: ${email}
Business: ${business || "Not provided"}
Service: ${service || "Not selected"}

Project details:
${message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");

    });

}