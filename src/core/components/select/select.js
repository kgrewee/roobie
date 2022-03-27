/* If the user clicks anywhere outside the select box,
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
}