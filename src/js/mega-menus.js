/**
 * Created by Nelly on 05/10/2018.
 */
var dropdown = document.getElementsByClassName("dropdown-btn");
var click=0;
var icon;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
function Arrow(y) {
    if (click === 0){
        icon = y.classList.remove("fa-angle-down");
        y.classList.add("fa-angle-up");
        ++click;
    }else {
        icon = y.classList.remove("fa-angle-up");
        y.classList.add("fa-angle-down");
        --click;
    }
}