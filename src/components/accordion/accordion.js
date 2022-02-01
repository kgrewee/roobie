ready(() => {
    let accordionHeaders = document.getElementsByClassName("accordion-header");
    for (let header of accordionHeaders) {
        header.addEventListener("click", function() {
            this.classList.toggle("active");

            /* Toggle panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});