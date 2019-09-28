///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// This section for setting values for all pages.

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// This section for change major objects like menu, header and social to top, right, left and bottom

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

function menuinner(text) {
    if (text === "top") {
        var left = document.querySelector("#top").style.left === '0%';
        if (left) {
            setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
            menuUpDown('top');
        }
        else {
            setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
            menuUpDown('top');
        }
    }

    if (text === "right") {
        var left = document.querySelector("#right").style.left === '0%';
        if (left) {
            setMenuValue("0%", "43%", "0%", "0%", false, true, false, false);
            menuSides('right');
        }
        else {
            setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
            menuUpDown('top');
        }
    }

    if (text === "bottom") {
        var left = document.querySelector("#bottom").style.left === '0%';
        if (left) {
            setMenuValue("0%", "0%", "43%", "0%", false, false, true, false);
            menuUpDown('bottom');
        }
        else {
            setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
            menuUpDown('top');
        }
    }

    if (text === "left") {
        var left = document.querySelector("#left").style.left === '0%';
        if (left) {
            setMenuValue("0%", "0%", "0%", "43%", false, false, false, true);
            menuSides('left');
        }
        else {
            setMenuValue("43%", "0%", "0%", "0%", true, false, false, false);
            menuUpDown('top');
        }
    }
}

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
        menu.style.backgroundColor = "#8e8e8e";
        category.style.backgroundColor = "#8e8e8e";
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

/////////////////////////////////////////////////////////////////////////////////////////////

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
        category.style.backgroundColor = "#8e8e8e";
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// This section is for changing the theme into dark or light

var localStoragedarktrue = window.localStorage.getItem("Dark");

if (localStoragedarktrue === "true") {
    document.querySelector("#dark").style.left = "43%";
    changeTheme();
}
else if (localStoragedarktrue === "false") {
    document.querySelector("#dark").style.left = "0%";
    noChangeTheme();
}

function theme() {
    var right = document.querySelector("#dark").style.left === "43%";

    if (right) {
        document.querySelector("#dark").style.left = "0%";
        window.localStorage.setItem("Dark", false);
        noChangeTheme();
    }
    else {
        document.querySelector("#dark").style.left = "43%";
        window.localStorage.setItem("Dark", true);
        changeTheme();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// This section is common for theme

function changeTheme() {
    document.querySelector("body").style.backgroundColor = "black";

    var header = document.querySelector("header");
    header.style.borderBottom = "6px solid white";
    header.style.backgroundImage = "linear-gradient(to right, white, black)";

    document.querySelector("header h1").style.color = "black";
    document.querySelector("header .log a").style.color = "white";

    document.querySelector(".menu").style.borderBottom = "3px solid #8e8e8e";

    var category = document.querySelector(".category");
    category.style.backgroundColor = "#8e8e8e";
    category.style.color = "white";

    var contentName = document.querySelectorAll(".content-name");
    for (i = 0; i < contentName.length; i++) {
        contentName[i].style.color = "white";
    }

    var download = document.querySelectorAll(".download");
    for (i = 0; i < download.length; i++) {
        download[i].style.backgroundColor = "#8e8e8e";
    }

    var descripton = document.querySelectorAll(".description");
    for (i = 0; i < descripton.length; i++) {
        descripton[i].style.color = "white";
    }

    var readMoreA = document.querySelectorAll(".read-more-a");
    for (i = 0; i < readMoreA.length; i++) {
        readMoreA[i].style.color = "white";
    }

    var inputText = document.querySelectorAll(".inputtext");
    for (i = 0; i < inputText.length; i++) {
        inputText[i].style.color = "#8e8e8e";
    }

    var inputButton = document.querySelectorAll(".inputbutton");
    for (i = 0; i < inputButton.length; i++) {
        inputButton[i].style.backgroundColor = "#8e8e8e";
    }

    var settingContentIndex = document.querySelectorAll(".setting-content-index");
    for (i = 0; i < settingContentIndex.length; i++) {
        settingContentIndex[i].style.color = "white";
    }

    var buttonName = document.querySelectorAll(".button-name");
    for (i = 0; i < buttonName.length; i++) {
        buttonName[i].style.color = "white";
    }

    var buttonBack = document.querySelectorAll(".button-back");
    for (i = 0; i < buttonBack.length; i++) {
        buttonBack[i].style.backgroundColor = "#8e8e8e";
    }

    var bottomright = document.querySelector("#bottom").style.left === "43%";
    var rightright = document.querySelector("#right").style.left === "43%";
    var leftright = document.querySelector("#left").style.left === "43%";
    var topright = document.querySelector("#top").style.left === "43%";

    if (rightright || leftright) {
        document.querySelector(".menu").style.backgroundColor = "#8e8e8e";
        document.querySelector(".social").style.backgroundColor = "black";
    }
    else if (topright || bottomright) {
        document.querySelector(".menu").style.backgroundColor = "black";
        document.querySelector(".social").style.backgroundColor = "rgb(15,15,15)";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function noChangeTheme() {
    document.querySelector("body").style.backgroundColor = "white";

    var header = document.querySelector("header");
    header.style.borderBottom = "6px solid black";
    header.style.backgroundImage = "linear-gradient(to right, black, #c30d0d)";

    document.querySelector("header h1").style.color = "white";
    document.querySelector("header .log a").style.color = "black";

    document.querySelector(".menu").style.borderBottom = "3px solid #560606";

    var category = document.querySelector(".category");
    category.style.backgroundColor = "#560606";
    category.style.color = "white";

    var contentName = document.querySelectorAll(".content-name");
    for (i = 0; i < contentName.length; i++) {
        contentName[i].style.color = "black";
    }

    var download = document.querySelectorAll(".download");
    for (i = 0; i < download.length; i++) {
        download[i].style.backgroundColor = "#560606";
    }

    var descripton = document.querySelectorAll(".description");
    for (i = 0; i < descripton.length; i++) {
        descripton[i].style.color = "black";
    }

    var readMoreA = document.querySelectorAll(".read-more-a");
    for (i = 0; i < readMoreA.length; i++) {
        readMoreA[i].style.color = "black";
    }

    var inputText = document.querySelectorAll(".inputtext");
    for (i = 0; i < inputText.length; i++) {
        inputText[i].style.color = "#560606";
    }

    var inputButton = document.querySelectorAll(".inputbutton");
    for (i = 0; i < inputButton.length; i++) {
        inputButton[i].style.backgroundColor = "#560606";
    }

    var settingContentIndex = document.querySelectorAll(".setting-content-index");
    for (i = 0; i < settingContentIndex.length; i++) {
        settingContentIndex[i].style.color = "#560606";
    }

    var buttonName = document.querySelectorAll(".button-name");
    for (i = 0; i < buttonName.length; i++) {
        buttonName[i].style.color = "#560606";
    }

    var buttonBack = document.querySelectorAll(".button-back");
    for (i = 0; i < buttonBack.length; i++) {
        buttonBack[i].style.backgroundColor = "#560606";
    }

    var bottomright = document.querySelector("#bottom").style.left === "43%";
    var rightright = document.querySelector("#right").style.left === "43%";
    var leftright = document.querySelector("#left").style.left === "43%";
    var topright = document.querySelector("#top").style.left === "43%";

    if (rightright || leftright) {
        document.querySelector(".menu").style.backgroundColor = "#560606";
        document.querySelector(".social").style.backgroundColor = "white";
    }
    else if (topright || bottomright) {
        document.querySelector(".menu").style.backgroundColor = "black";
        document.querySelector(".social").style.backgroundColor = "white";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// This section for change color of header, menu, display and footer.
setColorValue("0%", "0%", "0%", "0%", false, false, false, false);

function setColorValue(header, menu, display, footer, localheader, localmenu, localdisplay, localfooter) {
    document.querySelector("#header").style.left = header;
    document.querySelector("#menu").style.left = menu;
    document.querySelector("#display").style.left = display;
    document.querySelector("#footer").style.left = footer;
    window.localStorage.setItem("Header", localheader);
    window.localStorage.setItem("Menu", localmenu);
    window.localStorage.setItem("Display", localdisplay);
    window.localStorage.setItem("Footer", localfooter);
}

function manualcolor(text) {
    document.querySelector('.msg').style.display = 'none';
    if (text === "header") {
        var left = document.querySelector("#header").style.left === '0%';
        if (left) {
            setColorValue("43%", "0%", "0%", "0%", true, false, false, false);
        }
        else {
            setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
        }
    }

    if (text === "menu") {
        var left = document.querySelector("#menu").style.left === '0%';
        if (left) {
            setColorValue("0%", "43%", "0%", "0%", false, true, false, false);
        }
        else {
            setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
        }
    }

    if (text === "display") {
        var left = document.querySelector("#display").style.left === '0%';
        if (left) {
            setColorValue("0%", "0%", "43%", "0%", false, false, true, false);
        }
        else {
            setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
        }
    }

    if (text === "footer") {
        var left = document.querySelector("#footer").style.left === '0%';
        if (left) {
            setColorValue("0%", "0%", "0%", "43%", false, false, false, true);
        }
        else {
            setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// This section is for manual theme color

function manualtheme(color) {
    var localheader = window.localStorage.getItem("Header");
    var localmenu = window.localStorage.getItem("Menu");
    var localdisplay = window.localStorage.getItem("Display");
    var localfooter = window.localStorage.getItem("Footer");

    window.localStorage.setItem("Color", color);

    if (localheader === 'true' || localmenu === 'true' || localdisplay === 'true' || localfooter === 'true') {
        manualColorChange();
    }
    else {
        noManualColorChange();
        var msg = document.querySelector(".msg");
        msg.style.display = 'block';
        msg.innerHTML = 'Select Manual Theme Option First';
    }
}

function manualColorChange()
{
    var localheader = window.localStorage.getItem("Header");
    var localmenu = window.localStorage.getItem("Menu");
    var localdisplay = window.localStorage.getItem("Display");
    var localfooter = window.localStorage.getItem("Footer");
    var localcolor = window.localStorage.getItem("Color");
}

function noManualColorChange()
{
    var color = window.localStorage.getItem("Color");
    var header = window.localStorage.getItem("Header");
    var menu = window.localStorage.getItem("Menu");
    var display = window.localStorage.getItem("Display");
    var footer = window.localStorage.getItem("Footer");
}

