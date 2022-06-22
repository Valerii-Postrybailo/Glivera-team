(() => {
    const refs = {
        closeMenuBtn: document.querySelector(".close-btn_desk-hidden"),
        menu: document.querySelector("[alert-window]"),
    };

    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    
    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();