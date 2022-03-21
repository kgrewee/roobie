class Animation{static animationByElement(e,t){console.log("Animation [class="+t+"] -> [element="+e+"]"),e.classList.remove(t),e.offsetWidth,e.classList.add(t)}static animationById(e,t){console.log("Animation [class="+t+"] -> [id="+e+"]");let s=document.getElementById(e),l=s.classList;for(let e of l)e.startsWith("_")&&s.classList.remove(e);s.classList.remove(t),s.offsetWidth,s.classList.add(t)}static animationByClass(e,t){console.log("Animation [class="+t+"] -> [class="+e+"]");let s=document.getElementsByClassName(e);for(let e=0;e<s.length;e++){let l=s[e],a=l.classList;for(let e of a)e.startsWith("_")&&l.classList.remove(e);l.classList.remove(t),l.offsetWidth,l.classList.add(t)}}}class Logging{static debug(e){console.log("Roobie "+(new Date).toISOString()+"   "+e)}}class Attribute{static addById(e,t,s){console.log("Add Attribute ["+t+"="+s+"] -> [Id] "+e),document.getElementById(e).setAttribute(t,s)}static addByElement(e,t,s){console.log("Add Attribute ["+t+"="+s+"] -> [Element] "+e),e.setAttribute(t,s)}static addByTag(e,t,s){console.log("Add Attribute ["+t+"="+s+"] -> [Tag] "+e);var l=document.getElementsByTagName(e);for(let e=0;e<l.length;e++)l[e].setAttribute(t,s)}}class Class{static addById(e,t,s=!0){s&&(console.log("Add [Class] "+t+" -> [Id] "+e),document.getElementById(e).classList.add(t))}static addByElement(e,t,s=!0){s&&(console.log("Add [Class] "+t+" -> [Element] "+e),e.classList.add(t))}static removeByTag(e,t,s=!0){if(s){console.log("Remove [Class] "+t+" -> [Tag] "+e);var l=document.getElementsByTagName(e);for(let e=0;e<l.length;e++)l[e].classList.remove(t)}}static removeById(e,t){console.log("Remove [Class] "+t+" -> [Id] "+e),document.getElementById(e).classList.remove(t)}static removeByClass(e,t){console.log("Remove [Class] "+t+" -> [Class] "+e);var s=document.getElementsByClassName(e);for(let e=0;e<s.length;e++)s[e].classList.remove(t)}}class Element{static createElementByTag(e,t,s){console.log("Create element");let l=document.createElement(e);l.innerHTML=s;let a=document.getElementsByTagName(t);for(let e of a)e.appendChild(l)}static createElementByElement(e,t,s){console.log("Create element by element");let l=document.createElement(e);l.innerHTML=s,t.appendChild(l)}}function ready(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}function changes(e){new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}class Load{static loadById(e,t){console.log("Load [File] "+t+" -> [Id] "+e);var s=document.getElementById(e),l=new XMLHttpRequest;l.open("GET",t,!0),l.onload=(()=>{if(l.status>=200&&l.status<400){var e=l.responseText;s.innerHTML=e}}),l.send()}}class Rotate{static rotateById(e,t,s){var l=document.getElementById(e),a=l.style.transform;console.log("Before cut "+a);var n=a.match(/-?[\d\.]+/);console.log("After cut "+n),n>0&&s?(console.log("Reset rotation [Id] "+e),l.style.transform="rotate(0deg)"):(console.log("Rotate [Degrees] "+t+" -> [Id] "+e),l.style.transform="rotate("+t+"deg)")}}class Style{static styleByTag(e,t,s){console.log("Set [Style] "+t+" = "+s+" -> [Tag] "+e);var l=document.getElementsByTagName(e);for(let e=0;e<l.length;e++)l[e].style.setProperty(t,s)}}ready(()=>{Theme.defaultTheme()});class Theme{static defaultTheme(){const e=localStorage.getItem("theme");null!=e?Theme.switchTheme(e):Theme.switchTheme("light")}static switchTheme(e){console.log("Switch theme [theme="+e+"]"),localStorage.setItem("theme",e),document.body.setAttribute("theme",e)}}class Toggle{static toggleById(e){console.log("Toggle [Id] "+e);var t=document.getElementById(e);"none"===t.style.display?t.style.display="flex":t.style.display="none"}static toggleByTag(e){console.log("Toggle [Tag] "+e);var t=document.getElementsByTagName(e);for(let e=0;e<t.length;e++)"none"===t[e].style.display?t[e].style.display="flex":t[e].style.display="none"}}ready(()=>{Accordion.check()});class Accordion{static check(){let e=document.getElementsByClassName("accordion-header");console.log("Found "+e.length+" accordion headers");for(let t of e)t.removeEventListener("click",Accordion.toggleNextSibling),t.addEventListener("click",Accordion.toggleNextSibling)}static toggleNextSibling(){this.classList.toggle("accordion-active");let e=this.nextElementSibling;"block"===e.style.display?(e.style.display="none",console.log("Accordion panel toggle [display=none]")):(e.style.display="block",console.log("Accordion panel toggle [display=block]"))}}ready(()=>{Carousel.check()});class Carousel{static check(){let e=document.getElementsByClassName("carousel");for(let t of e){let e=t.getAttribute("index");""!=e&&null!=e||(e=0,t.setAttribute("index","0")),Carousel.showSlide(t.getAttribute("id"),e)}let t=document.getElementsByClassName("carousel-previous");for(let e of t)e.removeEventListener("click",Carousel.showPrevious),e.addEventListener("click",Carousel.showPrevious);let s=document.getElementsByClassName("carousel-next");for(let e of s)e.removeEventListener("click",Carousel.showNext),e.addEventListener("click",Carousel.showNext);let l=document.getElementsByClassName("carousel-indicators");for(let e of l)for(let t of e.children)t.removeEventListener("click",Carousel.showIndicator),t.addEventListener("click",Carousel.showIndicator)}static showPrevious(){Carousel.showSlide(this.closest(".carousel").getAttribute("id"),+this.closest(".carousel").getAttribute("index")-1)}static showNext(){Carousel.showSlide(this.closest(".carousel").getAttribute("id"),+this.closest(".carousel").getAttribute("index")+1)}static showIndicator(){Carousel.showSlide(this.closest(".carousel").getAttribute("id"),+this.getAttribute("index"))}static showSlide(e,t){console.log("Show slide [index="+t+"] => [id="+e+"]");let s=document.getElementById(e),l=s.querySelectorAll(".carousel-slide");t>l.length-1&&(t=0),t<0&&(t=l.length-1);for(let e=0;e<l.length;e++)l[e].style.display="none";l[t]&&(l[t].style.display="block");let a=s.querySelectorAll(".carousel-indicators")[0];if(a){a=a.children;for(let e=0;e<a.length;e++)a[e].classList.remove("carousel-active");a[t]&&a[t].classList.add("carousel-active")}s.setAttribute("index",t)}}ready(()=>{Navbar.check()});class Navbar{static check(){const e=window.matchMedia("(min-width: 600px)"),t=window.matchMedia("(max-width: 600px)"),s=window.matchMedia("(min-width: 1000px)"),l=window.matchMedia("(max-width: 1000px)"),a=window.matchMedia("(min-width: 1200px)"),n=window.matchMedia("(max-width: 1200px)"),o=window.matchMedia("(min-width: 1400px)"),i=window.matchMedia("(max-width: 1400px)");e.removeEventListener("change",e=>Navbar.expand(e,"rsp-menu-s")),t.removeEventListener("change",e=>Navbar.collapse(e,"rsp-menu-s")),s.removeEventListener("change",e=>Navbar.expand(e,"rsp-menu")),l.removeEventListener("change",e=>Navbar.collapse(e,"rsp-menu")),s.removeEventListener("change",e=>Navbar.expand(e,"rsp-menu-m")),l.removeEventListener("change",e=>Navbar.collapse(e,"rsp-menu-m")),a.removeEventListener("change",e=>Navbar.expand(e,"rsp-menu-l")),n.removeEventListener("change",e=>Navbar.collapse(e,"rsp-menu-l")),o.removeEventListener("change",e=>Navbar.expand(e,"rsp-menu-xl")),i.removeEventListener("change",e=>Navbar.collapse(e,"rsp-menu-xl")),e.addEventListener("change",e=>Navbar.expand(e,"rsp-menu-s")),t.addEventListener("change",e=>Navbar.collapse(e,"rsp-menu-s")),s.addEventListener("change",e=>Navbar.expand(e,"rsp-menu")),l.addEventListener("change",e=>Navbar.collapse(e,"rsp-menu")),s.addEventListener("change",e=>Navbar.expand(e,"rsp-menu-m")),l.addEventListener("change",e=>Navbar.collapse(e,"rsp-menu-m")),a.addEventListener("change",e=>Navbar.expand(e,"rsp-menu-l")),n.addEventListener("change",e=>Navbar.collapse(e,"rsp-menu-l")),o.addEventListener("change",e=>Navbar.expand(e,"rsp-menu-xl")),i.addEventListener("change",e=>Navbar.collapse(e,"rsp-menu-xl")),console.log("Checking menu media queries"),Navbar.collapse(t,"rsp-menu-s"),Navbar.expand(e,"rsp-menu-s"),Navbar.collapse(l,"rsp-menu"),Navbar.expand(s,"rsp-menu"),Navbar.collapse(l,"rsp-menu-m"),Navbar.expand(s,"rsp-menu-m"),Navbar.collapse(n,"rsp-menu-l"),Navbar.expand(a,"rsp-menu-l"),Navbar.collapse(i,"rsp-menu-xl"),Navbar.expand(o,"rsp-menu-xl")}static expand(e,t){if(e.matches){console.log("Expand Menu [class="+t+"]");var s=document.getElementsByClassName(t);for(let e=0;e<s.length;e++){let t=s[e].querySelector(".rsp-cnt");t&&t.classList.contains("rsp-cnt")&&(s[e].innerHTML=t.innerHTML)}}}static collapse(e,t){if(e.matches){console.log("Collapse Menu [class="+t+"]");var s=document.getElementsByClassName(t);for(let e=0;e<s.length;e++){let t=s[e].innerHTML;s[e].classList.contains("rsp-cnt")||(s[e].innerHTML='<div class="drp"> <button type="button" class="drp-btn btn btn-primary"><i class="icon icon-menu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">'+t+"</div> </div>")}}}}ready(()=>{Select.check(),document.addEventListener("click",Select.closeAllSelect())});class Select{static check(){let e=document.getElementsByClassName("select");for(let t of e){let e=t.getElementsByTagName("select")[0],s=document.createElement("div");s.setAttribute("class","select-selected"),s.innerHTML=e.options[e.selectedIndex].innerHTML,t.appendChild(s);let l=document.createElement("div");l.setAttribute("class","select-items hide"),t.appendChild(l);for(let t of e.options){let e=document.createElement("div");e.innerHTML=t.innerHTML,e.addEventListener("click",function(e){let t=0,s=this.parentNode.parentNode.getElementsByTagName("select")[0],l=this.parentNode.previousSibling;for(let e of s.options){if(e.innerHTML==this.innerHTML){s.selectedIndex=t,l.innerHTML=this.innerHTML;let e=this.parentNode.getElementsByClassName("is-selected");for(let t of e)t.removeAttribute("class");this.setAttribute("class","is-selected");break}t++}l.click()}),l.appendChild(e)}t.appendChild(l),s.addEventListener("click",function(e){e.stopPropagation(),Select.closeAllSelect(this),this.nextSibling.classList.toggle("hide"),this.classList.toggle("select-active")})}}static closeAllSelect(e){var t,s,l,a,n=[];t=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),l=t.length,a=s.length;for(let t=0;t<a;t++)e==s[t]?n.push(t):s[t].classList.remove("select-active");for(let e=0;e<l;e++)n.indexOf(e)&&t[e].classList.add("hide")}}ready(()=>{Tooltip.check()});class Tooltip{static check(){let e=document.querySelectorAll("[tooltip]");for(let t of e){t.style.position="relative",t.style.display="inline-block";let e=document.createElement("span");switch(e.innerHTML=t.getAttribute("tooltip"),e.classList.add("tooltip-text"),t.getAttribute("side")){case"left":e.classList.add("tooltip-left");break;case"right":e.classList.add("tooltip-right");break;case"top":e.classList.add("tooltip-top");break;case"bottom":default:e.classList.add("tooltip-bottom")}t.appendChild(e),t.addEventListener("mouseover",function(e){let t=this.querySelectorAll(".tooltip-text");t[0].style.animationName="fade",t[0].style.animationDuration="0.5s",t[0].style.visibility="visible"}),t.addEventListener("mouseout",function(e){let t=this.querySelectorAll(".tooltip-text");t[0].style.visibility="hidden",t[0].style.animationName="",t[0].style.animationDuration=""})}}}