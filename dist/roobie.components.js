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
}ready(() => {
    Carousel.check();
});
class Carousel {
    static check() {
        let carousels = document.getElementsByClassName("carousel");
        for (let carousel of carousels) {
            let index = carousel.getAttribute("index");
            if (index == "" || index == null) {
                index = 0;
                carousel.setAttribute("index", "0");
            }
            Carousel.showSlide(carousel.getAttribute("id"), index);
        }

        // Previous button click event
        let previousButtons = document.getElementsByClassName("carousel-previous");
        for (let btn of previousButtons) {
            btn.removeEventListener("click", Carousel.showPrevious);
            btn.addEventListener("click", Carousel.showPrevious);
        }

        // Next button click event
        let nextButtons = document.getElementsByClassName("carousel-next");
        for (let btn of nextButtons) {
            btn.removeEventListener("click", Carousel.showNext);
            btn.addEventListener("click", Carousel.showNext);
        }

        // Indicator click event
        let indicatorContainers = document.getElementsByClassName("carousel-indicators");
        for (let container of indicatorContainers) {
            for (let indicator of container.children) {
                indicator.removeEventListener("click", Carousel.showIndicator);
                indicator.addEventListener("click", Carousel.showIndicator);
            }
        }
    }
    static showPrevious() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") - 1);
    }

    static showNext() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") + 1);
    }

    static showIndicator() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.getAttribute("index"));
    }

    /**
     * Show carousel slide by index.
     * 
     * @param {string} id Id of carousel element
     * @param {number} index Index of slide to show
     */
    static showSlide(id, index) {
        console.log("Show slide [index=" + index + "] => [id=" + id + "]");
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
                indicators[i].classList.remove("carousel-active");
            }

            // Highlight active indicator
            if (indicators[index]) {
                indicators[index].classList.add("carousel-active");
            }
        }

        // Update index attribute
        element.setAttribute("index", index);
    }
}ready(() => {
    Navbar.check();
});
class Navbar {
    /**
     * Checks menu media queries.
     */
    static check() {
        // Media Queries
        const MEDIA_EXPAND_1 = window.matchMedia('(min-width: 600px)');
        const MEDIA_COLLAPSE_1 = window.matchMedia('(max-width: 600px)');
        const MEDIA_EXPAND_2 = window.matchMedia('(min-width: 1000px)');
        const MEDIA_COLLAPSE_2 = window.matchMedia('(max-width: 1000px)');
        const MEDIA_EXPAND_3 = window.matchMedia('(min-width: 1200px)');
        const MEDIA_COLLAPSE_3 = window.matchMedia('(max-width: 1200px)');
        const MEDIA_EXPAND_4 = window.matchMedia('(min-width: 1400px)');
        const MEDIA_COLLAPSE_4 = window.matchMedia('(max-width: 1400px)');

        MEDIA_EXPAND_1.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-s'));
        MEDIA_COLLAPSE_1.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-s'));
        MEDIA_EXPAND_2.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu'));
        MEDIA_COLLAPSE_2.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu'));
        MEDIA_EXPAND_2.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-m'));
        MEDIA_COLLAPSE_2.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-m'));
        MEDIA_EXPAND_3.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-l'));
        MEDIA_COLLAPSE_3.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-l'));
        MEDIA_EXPAND_4.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-xl'));
        MEDIA_COLLAPSE_4.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-xl'));

        MEDIA_EXPAND_1.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-s'));
        MEDIA_COLLAPSE_1.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-s'));
        MEDIA_EXPAND_2.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu'));
        MEDIA_COLLAPSE_2.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu'));
        MEDIA_EXPAND_2.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-m'));
        MEDIA_COLLAPSE_2.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-m'));
        MEDIA_EXPAND_3.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-l'));
        MEDIA_COLLAPSE_3.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-l'));
        MEDIA_EXPAND_4.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-xl'));
        MEDIA_COLLAPSE_4.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-xl'));
        console.log("Checking menu media queries");
        Navbar.collapse(MEDIA_COLLAPSE_1, 'rsp-menu-s');
        Navbar.expand(MEDIA_EXPAND_1, 'rsp-menu-s');
        Navbar.collapse(MEDIA_COLLAPSE_2, 'rsp-menu');
        Navbar.expand(MEDIA_EXPAND_2, 'rsp-menu');
        Navbar.collapse(MEDIA_COLLAPSE_2, 'rsp-menu-m');
        Navbar.expand(MEDIA_EXPAND_2, 'rsp-menu-m');
        Navbar.collapse(MEDIA_COLLAPSE_3, 'rsp-menu-l');
        Navbar.expand(MEDIA_EXPAND_3, 'rsp-menu-l');
        Navbar.collapse(MEDIA_COLLAPSE_4, 'rsp-menu-xl');
        Navbar.expand(MEDIA_EXPAND_4, 'rsp-menu-xl');
    }

    /**
     * Expands a menu by CSS class name if an event is found to be true.
     * 
     * @param {MediaQueryListEvent} event Event to check for
     * @param {string} className Class name of menu to expand
     */
    static expand(event, className) {
        if (event.matches) {
            console.log('Expand Menu [class=' + className + "]");
            var menus = document.getElementsByClassName(className);
            for (let i = 0; i < menus.length; i++) {
                let content = menus[i].querySelector('.rsp-cnt');
                if (content) {
                    if (content.classList.contains('rsp-cnt')) {
                        menus[i].innerHTML = content.innerHTML;
                    }
                }
            }
        }
    }

    /**
     * Collapses a menu by CSS class name if an event is found to be true.
     * 
     * @param {MediaQueryListEvent} event Event to check for
     * @param {string} className Class name of menu to collapse
     */
    static collapse(event, className) {
        if (event.matches) {
            console.log('Collapse Menu [class=' + className + "]");
            var menus = document.getElementsByClassName(className);
            for (let i = 0; i < menus.length; i++) {
                let items = menus[i].innerHTML;
                if (!menus[i].classList.contains('rsp-cnt')) {
                    menus[i].innerHTML = '<div class="drp"> <button type="button" class="drp-btn btn btn-primary"><i class="icon icon-menu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
                }
            }
        }
    }
}/* If the user clicks anywhere outside the select box,
then close all select boxes: */
ready(() => {
    Select.check();
    document.addEventListener("click", Select.closeAll());
});
class Select {
    static check() {
        /* Look for any elements with the class "select": */
        let elements = document.getElementsByClassName("select");

        /* For each select component */
        for (let element of elements) {
            /* Get the default html select box */
            let selectBox = element.getElementsByTagName("select")[0];

            /* Create div to contain selected item */
            let selectedItem = document.createElement("div");
            selectedItem.setAttribute("class", "select-selected");
            selectedItem.innerHTML = selectBox.options[selectBox.selectedIndex].innerHTML;
            element.appendChild(selectedItem);

            /* Create div to contain select box options */
            let optionList = document.createElement("div");
            optionList.setAttribute("class", "select-items hide");
            element.appendChild(optionList);

            /* For each select box option, create a div */
            for (let option of selectBox.options) {
                let optionItem = document.createElement("div");
                optionItem.innerHTML = option.innerHTML;


                /* When an option is clicked, update the original select box,
                and the select-selected item */
                optionItem.addEventListener("click", function(e) {
                    let i = 0;
                    let selectBox = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    let selectedItem = this.parentNode.previousSibling;
                    for (let option of selectBox.options) {
                        if (option.innerHTML == this.innerHTML) {
                            // Set the index and selected item
                            selectBox.selectedIndex = i;
                            selectedItem.innerHTML = this.innerHTML;

                            // Remove the previously selected item
                            let removeSelected = this.parentNode.getElementsByClassName("is-selected");
                            for (let item of removeSelected) {
                                item.removeAttribute("class");
                            }

                            // Updated the select item
                            this.setAttribute("class", "is-selected");
                            break;
                        }
                        i++;
                    }
                    selectedItem.click();
                });

                optionList.appendChild(optionItem);
            }

            element.appendChild(optionList);

            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            selectedItem.addEventListener("click", function(e) {
                e.stopPropagation();
                Select.closeAll(this);
                this.nextSibling.classList.toggle("hide");
                this.classList.toggle("select-active");
            });
        }
    }


    /* A function that will close all select boxes in the document,
    except the current select box: */
    static closeAll(elmnt) {
        var elements, y, i, xl, yl, arrNo = [];
        elements = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = elements.length;
        yl = y.length;
        for (let i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-active");
            }
        }
        for (let i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                elements[i].classList.add("hide");
            }
        }
    }
}ready(() => {
    Tooltip.check();
});
class Tooltip {
    static check() {
        // Get all elements with tooltip attributes
        let tooltips = document.querySelectorAll('[tooltip]');
        for (let tooltip of tooltips) {
            // Required to show tooltip correctly
            tooltip.style.position = 'relative';
            tooltip.style.display = 'inline-block';

            // Create tooltip text element
            let text = document.createElement("span");
            text.innerHTML = tooltip.getAttribute("tooltip");
            text.classList.add("tooltip-text");

            // Determine where to show tooltip, default to bottom
            let side = tooltip.getAttribute('side');
            switch (side) {
                case 'left':
                    text.classList.add("tooltip-left");
                    break;
                case 'right':
                    text.classList.add("tooltip-right");
                    break;
                case 'top':
                    text.classList.add("tooltip-top");
                    break;
                case 'bottom':
                default:
                    text.classList.add("tooltip-bottom");
            }

            // Add tooltip text as a child of tooltip element
            tooltip.appendChild(text);

            // Show tooltip on mouseover
            tooltip.addEventListener("mouseover", function(e) {
                let tooltipText = this.querySelectorAll(".tooltip-text");
                tooltipText[0].style.animationName = 'fade';
                tooltipText[0].style.animationDuration = '0.5s';
                tooltipText[0].style.visibility = 'visible';
            });

            // Remove tooltip on mouseout
            tooltip.addEventListener("mouseout", function(e) {
                let tooltipText = this.querySelectorAll(".tooltip-text");
                tooltipText[0].style.visibility = 'hidden';
                tooltipText[0].style.animationName = '';
                tooltipText[0].style.animationDuration = '';
            });
        }
    }
}