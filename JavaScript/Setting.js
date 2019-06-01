
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setValue(top, right, bottom, left) {
    document.querySelector("#top").style.left = top;
    document.querySelector("#bottom").style.left = bottom;
    document.querySelector("#right").style.left = right;
    document.querySelector("#left").style.left = left;
}

var localtop = window.localStorage.getItem("Top");
var localbottom = window.localStorage.getItem("Bottom");
var localright = window.localStorage.getItem("Right");
var localleft = window.localStorage.getItem("Left");
var localtext = window.localStorage.getItem("Text");

if (localtop === "true") {
    setValue("43%", "0%", "0%", "0%");
    menuUpDown(localtext);
}
else if (localbottom === "true") {
    setValue("0%", "0%", "43%", "0%");
    menuUpDown(localtext);
}
else if (localright === "true") {
    setValue("0%", "43%", "0%", "0%");
    menuSides(localtext);
}
else if (localleft === "true") {
    setValue("0%", "0%", "0%", "43%");
    menuSides(localtext);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setMenuValue(top, right, bottom, left, topStorage, rightStorage, bottomStorage, leftStorage) {
    document.querySelector("#top").style.left = top;
    document.querySelector("#right").style.left = right;
    document.querySelector("#bottom").style.left = bottom;
    document.querySelector("#left").style.left = left;
    window.localStorage.setItem("Top", topStorage);
    window.localStorage.setItem("Right", rightStorage);
    window.localStorage.setItem("Bottom", bottomStorage);
    window.localStorage.setItem("Left", leftStorage);
}

function menuinner(text)
{
    if (text === "top") {
        setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
        menuUpDown(text);
    }
    else if (text === "right") {
        setMenuValue("0%", "43%", "0%", "0%", false, true, false, false);
        menuSides(text);
    }
    else if (text === "bottom") {
        setMenuValue("0%", "0%", "43%", "0%", false, false, true, false);
        menuUpDown(text);
    }
    else if (text === "left") {
        setMenuValue("0%", "0%", "0%", "43%", false, false, false, true);
        menuSides(text);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function menuSides(text) {
    var menu = document.querySelector(".menu");
    menu.style.width = "15%";
    menu.style.minHeight = "100px";
    if (text === "right") {
        menu.style.left = "85%";
        menu.style.top = "0%";
        menu.style.bottom = "unset";
        menu.style.right = "unset";
        menu.style.position = "absolute";
    }
    else {
        menu.style.left = "0%";
        menu.style.top = "0%";
        menu.style.bottom = "unset";
        menu.style.right = "unset";
        menu.style.position = "absolute";
    }
    menu.style.display = "block";

    var menugrid = document.querySelector(".menu-grid");
    menugrid.style.width = "100%";
    menugrid.style.gridTemplateColumns = "13.5em";
    menugrid.style.gridTemplateRows = "repeat(5, 2fr)";

    var menunav = document.querySelectorAll(".menu-nav");
    for (i = 0; i < menunav.length; i++) {
        menunav[i].style.height = "150px";
        menunav[i].style.padding = "63px 0px";
    }

    var category = document.querySelector(".category");
    category.style.width = "80%";
    category.style.top = "43%";
    if (text === "right") {

        category.style.left = "-80%";
        category.style.bottom = "unset";
    }
    else {
        category.style.left = "100%";
        category.style.bottom = "unset";
    }
    
    var social = document.querySelector(".social");
    social.style.width = "7%";
    social.style.height = "46%";
    social.style.position = "absolute";
    social.style.bottom = "unset";
    social.style.top = "25%";
    if (text === "right") {
        social.style.left = "0%";
    }
    else {
        social.style.left = "93%";
    }

    var socialgrid = document.querySelector(".socialgrid");
    socialgrid.style.gridTemplateColumns = "6em";
    socialgrid.style.gridTemplateRows = "repeat(4, 5em)";

    var right = document.querySelector("#dark").style.left === "43%";
    var left = document.querySelector("#dark").style.left === "0%";

    if (right) {
        menu.style.backgroundColor = "rgb(142,142,142)";
        category.style.backgroundColor = "rgb(142,142,142)";
        category.style.color = "white";
        social.style.backgroundColor = "black";
    }
    else if (left) {
        menu.style.backgroundColor = "#560606";
        category.style.backgroundColor = "white";
        category.style.color = "#560606";
        social.style.backgroundColor = "white";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function menuUpDown(text) {
    var menu = document.querySelector(".menu");
    menu.style.width = "100%";
    menu.style.minHeight = "65px";
    if (text === "top") {
        menu.style.left = "0%";
        menu.style.top = "0%";
        menu.style.bottom = "unset";
        menu.style.right = "unset";
        menu.style.position = "absolute";
    }
    else {
        menu.style.left = "0%";
        menu.style.top = "unset";
        menu.style.bottom = "0%";
        menu.style.right = "unset";
        menu.style.position = "fixed";
    }
    menu.style.display = "flex";

    var menugrid = document.querySelector(".menu-grid");
    menugrid.style.width = "70%";
    menugrid.style.gridTemplateColumns = "repeat(5, 1fr)";
    menugrid.style.gridTemplateRows = "unset";

    var menunav = document.querySelectorAll(".menu-nav");
    for (i = 0; i < menunav.length; i++) {
        menunav[i].style.height = "90%";
        menunav[i].style.padding = "0px";
    }

    var category = document.querySelector(".category");
    category.style.width = "14%";
    category.style.left = "43%";
    if (text === "top") {

        category.style.top = "98%";
        category.style.bottom = "unset";
    }
    else {
        category.style.bottom = "98%";
        category.style.top = "unset";
    }

    var social = document.querySelector(".social");
    social.style.width = "100%";
    social.style.height = "70px";
    social.style.left = "0%";
    if (text === "top") {
        social.style.top = "unset";
        social.style.bottom = "0%";
        social.style.position = "fixed";
    }
    else {
        social.style.top = "0%";
        social.style.bottom = "unset";
        social.style.position = "absolute";
    }

    var socialgrid = document.querySelector(".socialgrid");
    socialgrid.style.gridTemplateColumns = "repeat(4, 100px)";
    socialgrid.style.gridTemplateRows = "unset";

    var right = document.querySelector("#dark").style.left === "43%";
    var left = document.querySelector("#dark").style.left === "0%";

    if (right) {
        menu.style.backgroundColor = "black";
        category.style.backgroundColor = "rgb(142,142,142)";
        category.style.color = "white";
        social.style.backgroundColor = "rgb(15,15,15)";
    }
    else if (left) {
        menu.style.backgroundColor = "black";
        category.style.backgroundColor = "#560606";
        category.style.color = "white";
        social.style.backgroundColor = "white";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

