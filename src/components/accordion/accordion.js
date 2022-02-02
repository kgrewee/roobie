ready(() => {
    accordion();
});

function accordion() {
    let accordionHeaders = document.getElementsByClassName("accordion-header");
    debug("Found " + accordionHeaders.length + " accordion headers");
    for (let header of accordionHeaders) {
        header.addEventListener("click", function() {
            this.classList.toggle("active");

            /* Toggle panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                debug("Accordion panel toggle [display=none]");
            } else {
                panel.style.display = "block";
                debug("Accordion panel toggle [display=block]");
            }
        });
    }
}