ready(() => {
    Accordion.check();
});
class Accordion {
    static check() {
        let accordionHeaders = document.getElementsByClassName("accordion-header");
        console.log("Found " + accordionHeaders.length + " accordion headers");
        for (let header of accordionHeaders) {
            header.removeEventListener("click", Accordion.toggleNextSibling);
            header.addEventListener("click", Accordion.toggleNextSibling)
        }
    }

    static toggleNextSibling() {
        this.classList.toggle("accordion-active");

        /* Toggle panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            console.log("Accordion panel toggle [display=none]");
        } else {
            panel.style.display = "block";
            console.log("Accordion panel toggle [display=block]");
        }
    }
}