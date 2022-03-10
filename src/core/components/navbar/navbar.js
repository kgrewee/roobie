// Media Queries
const MEDIA_EXPAND_1 = window.matchMedia('(min-width: 600px)');
const MEDIA_COLLAPSE_1 = window.matchMedia('(max-width: 600px)');
const MEDIA_EXPAND_2 = window.matchMedia('(min-width: 1000px)');
const MEDIA_COLLAPSE_2 = window.matchMedia('(max-width: 1000px)');
const MEDIA_EXPAND_3 = window.matchMedia('(min-width: 1200px)');
const MEDIA_COLLAPSE_3 = window.matchMedia('(max-width: 1200px)');
const MEDIA_EXPAND_4 = window.matchMedia('(min-width: 1400px)');
const MEDIA_COLLAPSE_4 = window.matchMedia('(max-width: 1400px)');

ready(() => {
    MEDIA_EXPAND_1.removeEventListener("change", (event) => expandMenu(event, 'rsp-menu-s'));
    MEDIA_COLLAPSE_1.removeEventListener("change", (event) => collapseMenu(event, 'rsp-menu-s'));
    MEDIA_EXPAND_2.removeEventListener("change", (event) => expandMenu(event, 'rsp-menu'));
    MEDIA_COLLAPSE_2.removeEventListener("change", (event) => collapseMenu(event, 'rsp-menu'));
    MEDIA_EXPAND_2.removeEventListener("change", (event) => expandMenu(event, 'rsp-menu-m'));
    MEDIA_COLLAPSE_2.removeEventListener("change", (event) => collapseMenu(event, 'rsp-menu-m'));
    MEDIA_EXPAND_3.removeEventListener("change", (event) => expandMenu(event, 'rsp-menu-l'));
    MEDIA_COLLAPSE_3.removeEventListener("change", (event) => collapseMenu(event, 'rsp-menu-l'));
    MEDIA_EXPAND_4.removeEventListener("change", (event) => expandMenu(event, 'rsp-menu-xl'));
    MEDIA_COLLAPSE_4.removeEventListener("change", (event) => collapseMenu(event, 'rsp-menu-xl'));
    
    MEDIA_EXPAND_1.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-s'));
    MEDIA_COLLAPSE_1.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-s'));
    MEDIA_EXPAND_2.addEventListener("change", (event) => expandMenu(event, 'rsp-menu'));
    MEDIA_COLLAPSE_2.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu'));
    MEDIA_EXPAND_2.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-m'));
    MEDIA_COLLAPSE_2.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-m'));
    MEDIA_EXPAND_3.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-l'));
    MEDIA_COLLAPSE_3.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-l'));
    MEDIA_EXPAND_4.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-xl'));
    MEDIA_COLLAPSE_4.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-xl'));
    checkMenu();
})


/**
 * Checks menu media queries.
 */
function checkMenu() {
    debug("Checking menu media queries");
    collapseMenu(MEDIA_COLLAPSE_1, 'rsp-menu-s');
    expandMenu(MEDIA_EXPAND_1, 'rsp-menu-s');
    collapseMenu(MEDIA_COLLAPSE_2, 'rsp-menu');
    expandMenu(MEDIA_EXPAND_2, 'rsp-menu');
    collapseMenu(MEDIA_COLLAPSE_2, 'rsp-menu-m');
    expandMenu(MEDIA_EXPAND_2, 'rsp-menu-m');
    collapseMenu(MEDIA_COLLAPSE_3, 'rsp-menu-l');
    expandMenu(MEDIA_EXPAND_3, 'rsp-menu-l');
    collapseMenu(MEDIA_COLLAPSE_4, 'rsp-menu-xl');
    expandMenu(MEDIA_EXPAND_4, 'rsp-menu-xl');
}

/**
 * Expands a menu by CSS class name if an event is found to be true.
 * 
 * @param {MediaQueryListEvent} event Event to check for
 * @param {string} className Class name of menu to expand
 */
function expandMenu(event, className) {
    if (event.matches) {
        debug('Expand Menu [class=' + className + "]");
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
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
function collapseMenu(event, className) {
    if (event.matches) {
        debug('Collapse Menu [class=' + className + "]");
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            items = menus[i].innerHTML;
            if (!menus[i].classList.contains('rsp-cnt')) {
                menus[i].innerHTML = '<div class="drp"> <button type="button" class="drp-btn btn btn-primary"><i class="icon icon-menu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
            }
        }
    }
}