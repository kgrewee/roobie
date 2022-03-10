ready(() => {
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
}