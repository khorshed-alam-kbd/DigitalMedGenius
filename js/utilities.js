// onclick Collapsible

function toggleCollapsible() {
    var element = document.getElementById("collapsible-content");
    var button = document.getElementById("toggle-button");

    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        button.innerHTML = '<img src="./Assets/images/Minus@2x.png" class="w-8 h-8" alt="minus-sign">';

    } else {
        element.classList.add("hidden");
        button.innerHTML = '<img src="./Assets/images/Plus@2x.png" class="w-8 h-8" alt="plus-sign">';

    }
}

//  go to top 

let goTopButton = document.getElementById("goTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopButton.style.display = "block";
    } else {
        goTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

