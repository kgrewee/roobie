class Animation{static animationByElement(s,t){console.log("Animation [class="+t+"] -> [element="+s+"]"),s.classList.remove(t),s.offsetWidth,s.classList.add(t)}static animationById(s,t){console.log("Animation [class="+t+"] -> [id="+s+"]");let e=document.getElementById(s),a=e.classList;for(let s of a)s.startsWith("_")&&e.classList.remove(s);e.classList.remove(t),e.offsetWidth,e.classList.add(t)}static animationByClass(s,t){console.log("Animation [class="+t+"] -> [class="+s+"]");let e=document.getElementsByClassName(s);for(let s=0;s<e.length;s++){let a=e[s],l=a.classList;for(let s of l)s.startsWith("_")&&a.classList.remove(s);a.classList.remove(t),a.offsetWidth,a.classList.add(t)}}}