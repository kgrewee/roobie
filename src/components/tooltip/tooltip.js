ready(() => {
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
})