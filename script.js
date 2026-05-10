/* =========================
    BUTTON INTERACTION
========================== */

// Email button
const emailBtn = document.querySelector("#emailBtn");

emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:danah.ahmad55@gmail.com";
});

// Phone button
const phoneBtn = document.querySelector("#phoneBtn");

phoneBtn.addEventListener("click", () => {
    window.location.href = "tel:+966558058044";
});