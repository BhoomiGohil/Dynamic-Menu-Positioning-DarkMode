
function category() {
    var block = document.querySelector(".category").style.display === "block";
    if (block) {
        document.querySelector(".category").style.display = "none";
    }
    else {
        document.querySelector(".category").style.display = "block";
    }
}

function categoryfilter() {
    document.querySelector(".category").style.display = "none";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function menu(text) {
    window.localStorage.setItem("Text", text);
    menuinner(text);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
