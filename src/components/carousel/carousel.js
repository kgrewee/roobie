ready(() => {
    let carousels = document.getElementsByClassName("carousel");
    for (let carousel of carousels) {
        let index = carousel.getAttribute("index");
        if (index == "" || index == null) {
            index = 0;
            carousel.setAttribute("index", "0");
        }
        showSlide(carousel.getAttribute("id"), index);
    }

    // Previous button click event
    let previousButtons = document.getElementsByClassName("carousel-previous");
    for (let btn of previousButtons) {
        btn.addEventListener("click", function(e) {
            showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") - 1);
        });
    }

    // Next button click event
    let nextButtons = document.getElementsByClassName("carousel-next");
    for (let btn of nextButtons) {
        btn.addEventListener("click", function(e) {
            showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") + 1);
        });
    }

    // Indicator click event
    let indicatorContainers = document.getElementsByClassName("carousel-indicators");
    for (let container of indicatorContainers) {
        for (let indicator of container.children) {
            indicator.addEventListener("click", function(e) {
                showSlide(this.closest(".carousel").getAttribute("id"), +this.getAttribute("index"));
            });
        }
    }
});

/**
 * Show carousel slide by index.
 * 
 * @param {string} id Id of carousel element
 * @param {number} index Index of slide to show
 */
function showSlide(id, index) {
    debug("Show slide [id=" + id + "] [index=" + index + "]");
    let element = document.getElementById(id);

    // Get carousel slides
    let slides = element.querySelectorAll(".carousel-slide");

    // Check if the index is out of bounds
    if (index > slides.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show slide index
    if (slides[index]) {
        slides[index].style.display = "block";
    }

    let indicators = element.querySelectorAll(".carousel-indicators")[0];
    if (indicators) {
        indicators = indicators.children;
        // Remove highlighted indicators
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove("active");
        }

        // Highlight active indicator
        if (indicators[index]) {
            indicators[index].classList.add("active");
        }
    }

    // Update index attribute
    element.setAttribute("index", index);
}