// Purpose: To handle the setting page.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleCategory() {
  let category = document.querySelector(".category");
  category.style.display = category.style.display === "flex" ? "none" : "flex";
}

const hideCategory = () =>
  (document.querySelector(".category").style.display = "none");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to set the menu position
function menuUpDown(text) {
  const menu = document.querySelector(".menu");
  const menuGrid = document.querySelector(".menu-grid");
  const category = document.querySelector(".category");
  const social = document.querySelector(".social");
  const socialGrid = document.querySelector(".socialgrid");

  // Reset all classes
  const positions = ["top", "right", "bottom", "left"];
  positions.forEach((pos) => {
    menu.classList.remove(`menu-${pos}`);
    social.classList.remove(`social-${pos}`);
    category.classList.remove(`category-${pos}`);
  });

  // Add necessary classes based on position
  menu.classList.add(`menu-${text}`);
  social.classList.add(`social-${getOppositePosition(text)}`);
  category.classList.add(`category-${getOppositePosition(text)}`);

  // Toggle side-related classes for menu and social grid
  const isSide = text === "left" || text === "right";
  menuGrid.classList.toggle("menu-grid-sides", isSide);
  socialGrid.classList.toggle("socialgrid-sides", isSide);
}

// Helper function to get the opposite position
function getOppositePosition(position) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[
    position
  ];
}

// Function to set menu positions
function setMenuValue(position) {
  const positions = {
    top: {
      top: "43%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      storage: [true, false, false, false],
    },
    right: {
      top: "0%",
      right: "43%",
      bottom: "0%",
      left: "0%",
      storage: [false, true, false, false],
    },
    bottom: {
      top: "0%",
      right: "0%",
      bottom: "43%",
      left: "0%",
      storage: [false, false, true, false],
    },
    left: {
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "43%",
      storage: [false, false, false, true],
    },
  };

  if (positions[position]) {
    const { top, right, bottom, left, storage } = positions[position];

    document.querySelector("#top").style.left = top;
    document.querySelector("#right").style.left = right;
    document.querySelector("#bottom").style.left = bottom;
    document.querySelector("#left").style.left = left;

    window.localStorage.setItem("Top", storage[0]);
    window.localStorage.setItem("Right", storage[1]);
    window.localStorage.setItem("Bottom", storage[2]);
    window.localStorage.setItem("Left", storage[3]);
  }
}

// Main function for menu handling
function menuinner(text) {
  const isActive = document.querySelector(`#${text}`).style.left === "0%";
  setMenuValue(isActive ? text : "top"); // Default to "top" when deactivating
  menuUpDown(isActive ? text : "top");
}

// Wrapper function to save state in localStorage
function menu(text) {
  window.localStorage.setItem("Text", text);
  menuinner(text);
}

// Load menu position from localStorage and set it
menu(window.localStorage.getItem("Text") || "top");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// This section is for changing the theme into dark or light

var localStoragedarktrue = window.localStorage.getItem("Dark");

if (localStoragedarktrue === "true") {
  document.querySelector("#dark").style.left = "43%";
  changeTheme();
} else if (localStoragedarktrue === "false") {
  document.querySelector("#dark").style.left = "0%";
  noChangeTheme();
}

function theme() {
  var right = document.querySelector("#dark").style.left === "43%";

  if (right) {
    document.querySelector("#dark").style.left = "0%";
    window.localStorage.setItem("Dark", false);
    noChangeTheme();
  } else {
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
  } else if (topright || bottomright) {
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
  document.querySelector("header .log a").style.color = "white";

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
  } else if (topright || bottomright) {
    document.querySelector(".menu").style.backgroundColor = "black";
    document.querySelector(".social").style.backgroundColor = "white";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// This section for change color of header, menu, display and footer.
setColorValue("0%", "0%", "0%", "0%", false, false, false, false);

function setColorValue(
  header,
  menu,
  display,
  footer,
  localheader,
  localmenu,
  localdisplay,
  localfooter
) {
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
  document.querySelector(".msg").style.display = "none";
  if (text === "header") {
    var left = document.querySelector("#header").style.left === "0%";
    if (left) {
      setColorValue("43%", "0%", "0%", "0%", true, false, false, false);
    } else {
      setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
    }
  }

  if (text === "menu") {
    var left = document.querySelector("#menu").style.left === "0%";
    if (left) {
      setColorValue("0%", "43%", "0%", "0%", false, true, false, false);
    } else {
      setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
    }
  }

  if (text === "display") {
    var left = document.querySelector("#display").style.left === "0%";
    if (left) {
      setColorValue("0%", "0%", "43%", "0%", false, false, true, false);
    } else {
      setColorValue("0%", "0%", "0%", "0%", false, false, false, false);
    }
  }

  if (text === "footer") {
    var left = document.querySelector("#footer").style.left === "0%";
    if (left) {
      setColorValue("0%", "0%", "0%", "43%", false, false, false, true);
    } else {
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

  if (
    localheader === "true" ||
    localmenu === "true" ||
    localdisplay === "true" ||
    localfooter === "true"
  ) {
    manualColorChange();
  } else {
    noManualColorChange();
    var msg = document.querySelector(".msg");
    msg.style.display = "block";
    msg.innerHTML = "Select Manual Theme Option First";
  }
}

function manualColorChange() {
  var localheader = window.localStorage.getItem("Header");
  var localmenu = window.localStorage.getItem("Menu");
  var localdisplay = window.localStorage.getItem("Display");
  var localfooter = window.localStorage.getItem("Footer");
  var localcolor = window.localStorage.getItem("Color");
}

function noManualColorChange() {
  var color = window.localStorage.getItem("Color");
  var header = window.localStorage.getItem("Header");
  var menu = window.localStorage.getItem("Menu");
  var display = window.localStorage.getItem("Display");
  var footer = window.localStorage.getItem("Footer");
}
