
function setValueColor(header, menu, display, footer, localheader, localmenu, localdisplay, localfooter) {
    document.querySelector("#header").style.left = header;
    document.querySelector("#menu").style.left = menu;
    document.querySelector("#display").style.left = display;
    document.querySelector("#footer").style.left = footer;
    window.localStorage.setItem("Header", localheader);
    window.localStorage.setItem("Menu", localmenu);
    window.localStorage.setItem("Display", localdisplay);
    window.localStorage.setItem("Footer", localfooter);
}

function manualcolor(section) {
    if (section === "header") {
        setValueColor('43%','0%','0%','0%',true,false,false,false);
    }
    else if (section === "menu") {
        setValueColor('0%','43%','0%','0%',false,true,false,false);
    }
    else if (section === "display") {
        setValueColor('0%','0%','43%','0%',false,false,true,false);
    }
    else if (section === "footer") {
        setValueColor('0%','0%','0%','43%',false,false,false,true);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function manualtheme(color) {
    window.localStorage.setItem("Color",color);
    noChangeTheme();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var localStoragedarktrue = window.localStorage.getItem("Dark");

if (localStoragedarktrue === "true") {
    document.querySelector("#dark").style.left = "43%";
    changeTheme();
}
else if (localStoragedarktrue === "false") {
    document.querySelector("#dark").style.left = "0%";
    noChangeTheme();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function changeTheme() {
    document.querySelector("body").style.backgroundColor = "black";

    var header = document.querySelector("header");
    header.style.borderBottom = "6px solid white";
    header.style.backgroundImage = "linear-gradient(to right, white, black)";

    document.querySelector("header h1").style.color = "black";
    document.querySelector("header .log a").style.color = "white";
    document.querySelector(".menu").style.borderBottom = "3px solid rgb(142, 142, 142)";
    document.querySelector(".category").style.backgroundColor = "rgb(142, 142, 142)";
    document.querySelector(".category").style.color = "white";

    var contentName = document.querySelectorAll(".content-name");
    for (i = 0; i < contentName.length; i++) {
        contentName[i].style.color = "white";
    }

    var download = document.querySelectorAll(".download");
    for (i = 0; i < download.length; i++) {
        download[i].style.backgroundColor = "rgb(142, 142, 142)";
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
        inputText[i].style.color = "rgb(142, 142, 142)";
    }

    var inputButton = document.querySelectorAll(".inputbutton");
    for (i = 0; i < inputButton.length; i++) {
        inputButton[i].style.backgroundColor = "rgb(142, 142, 142)";
    }

    var settingContentIndex = document.querySelectorAll(".setting-content-index");
    for (i = 0; i < settingContentIndex.length; i++) {
        settingContentIndex[i].style.color = "rbg(142, 142, 142)";
    }

    var buttonName = document.querySelectorAll(".button-name");
    for (i = 0; i < buttonName.length; i++) {
        buttonName[i].style.color = "rbg(142, 142, 142)";
    }

    var buttonBack = document.querySelectorAll(".button-back");
    for (i = 0; i < buttonBack.length; i++) {
        buttonBack[i].style.backgroundColor = "rbg(142, 142, 142)";
    }

    var bottomright = document.querySelector("#bottom").style.left === "43%";
    var rightright = document.querySelector("#right").style.left === "43%";
    var leftright = document.querySelector("#left").style.left === "43%";
    var topright = document.querySelector("#top").style.left === "43%";

    if (rightright || leftright) {
        document.querySelector(".menu").style.backgroundColor = "rgb(142, 142, 142)";
        document.querySelector(".social").style.backgroundColor = "black";
    }
    else if (topright || bottomright) {
        document.querySelector(".menu").style.backgroundColor = "black";
        document.querySelector(".social").style.backgroundColor = "rgb(15,15,15)";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function noChangeTheme() {
    var localStorageHeader = window.localStorage.getItem("Header");
    var localStorageMenu = window.localStorage.getItem("Menu");
    var localStorageDisplay = window.localStorage.getItem("Display");
    var localStorageFooter = window.localStorage.getItem("Footer");
    var localStorageColor = window.localStorage.getItem("Color");

    document.querySelector("body").style.backgroundColor = "white";

    var header = document.querySelector("header");
    header.style.borderBottom = "6px solid black";
    header.style.backgroundImage = "linear-gradient(to right, black, #c30d0d)";

    document.querySelector("header h1").style.color = "white";
    document.querySelector("header .log a").style.color = "black";
    document.querySelector(".menu").style.borderBottom = "3px solid #560606";
    document.querySelector(".category").style.backgroundColor = "#560606";
    document.querySelector(".category").style.color = "white";

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
