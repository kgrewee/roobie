ready(() => {
    let tooltips = document.querySelectorAll('[tooltip]');
    for (let tooltip of tooltips) {
        tooltip.style.position = 'relative';
        tooltip.style.display = 'inline-block';
        tooltip.style.color = 'var(--t2)';
        let text = document.createElement("span");
        text.classList.add("class", "tooltip-text");

        let side = tooltip.getAttribute('side');
        switch (side) {
            case 'left':
                text.classList.add("class", "tooltip-left");
                break;
            case 'right':
                text.classList.add("class", "tooltip-right");
                break;
            case 'top':
                text.classList.add("class", "tooltip-top");
                break;
            case 'bottom':
                text.classList.add("class", "tooltip-bottom");
                break;
        }
        text.innerHTML = tooltip.getAttribute("tooltip");
        tooltip.appendChild(text);
    }
})