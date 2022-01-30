// Media Queries
const MEDIAEXPANDS = window.matchMedia('(min-width: 600px)');
const MEDIACOLLAPSES = window.matchMedia('(max-width: 600px)');
const MEDIAEXPANDM = window.matchMedia('(min-width: 1000px)');
const MEDIACOLLAPSEM = window.matchMedia('(max-width: 1000px)');
const MEDIAEXPANDL = window.matchMedia('(min-width: 1200px)');
const MEDIACOLLAPSEL = window.matchMedia('(max-width: 1200px)');
const MEDIAEXPANDXL = window.matchMedia('(min-width: 1400px)');
const MEDIACOLLAPSEXL = window.matchMedia('(max-width: 1400px)');

ready(() => {
    MEDIAEXPANDS.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-s'));
    MEDIACOLLAPSES.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-s'));
    MEDIAEXPANDM.addEventListener("change", (event) => expandMenu(event, 'rsp-menu'));
    MEDIACOLLAPSEM.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu'));
    MEDIAEXPANDM.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-m'));
    MEDIACOLLAPSEM.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-m'));
    MEDIAEXPANDL.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-l'));
    MEDIACOLLAPSEL.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-l'));
    MEDIAEXPANDXL.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-xl'));
    MEDIACOLLAPSEXL.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-xl'));
})


/**
 * Checks menu for media queries.
 */
function checkMenu() {
    debug("Checking media queries");
    collapseMenu(MEDIACOLLAPSES, 'rsp-menu-s');
    expandMenu(MEDIAEXPANDS, 'rsp-menu-s');
    collapseMenu(MEDIACOLLAPSEM, 'rsp-menu');
    expandMenu(MEDIAEXPANDM, 'rsp-menu');
    collapseMenu(MEDIACOLLAPSEM, 'rsp-menu-m');
    expandMenu(MEDIAEXPANDM, 'rsp-menu-m');
    collapseMenu(MEDIACOLLAPSEL, 'rsp-menu-l');
    expandMenu(MEDIAEXPANDL, 'rsp-menu-l');
    collapseMenu(MEDIACOLLAPSEXL, 'rsp-menu-xl');
    expandMenu(MEDIAEXPANDXL, 'rsp-menu-xl');
}

/**
 * Expands a menu by CSS class name if an event is found to be true.
 * 
 * @param {MediaQueryListEvent} event Event to check for
 * @param {string} className Class name of menu to expand
 */
function expandMenu(event, className) {
    if (event.matches) {
        debug('Expand Menu [Class] ' + className);
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            let cnt = menus[i].querySelector('.rsp-cnt');
            if (cnt) {
                if (cnt.classList.contains('rsp-cnt')) {
                    menus[i].innerHTML = cnt.innerHTML;
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
function collapseMenu(event, className) {
    if (event.matches) {
        debug('Collapse Menu [Class] ' + className);
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            items = menus[i].innerHTML;
            if (!menus[i].classList.contains('rsp-cnt')) {
                menus[i].innerHTML = '<div class="drp"> <button type="button" class="drp-btn btnp"><i class="imenu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
            }
        }
    }
}