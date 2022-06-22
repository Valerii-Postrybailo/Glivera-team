(() => {
    const refs = {
        closeMenuBtn: document.querySelector(".close-btn_mobile-hidden"),
        menu: document.querySelector("[alert-window]"),
    };

    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();