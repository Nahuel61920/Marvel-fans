const menuBoton = document.querySelector("#mobile-menu");

menuBoton.addEventListener("click", e => {
    const menu = document.querySelector(".mobile-links");

    menu.classList.toggle("hidden");
})