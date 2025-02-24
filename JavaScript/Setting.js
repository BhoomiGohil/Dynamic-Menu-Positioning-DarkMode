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
  category.classList.add(`category-${text}`);

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
window.addEventListener("DOMContentLoaded", () =>
  menu(window.localStorage.getItem("Text") || "top")
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Theme toggle logic with localStorage
const darkToggle = document.querySelector("#dark");

function applyTheme(isDarkMode) {
  darkToggle.style.left = isDarkMode ? "43%" : "0%";
  isDarkMode ? changeTheme() : noChangeTheme();
}

// Function to toggle theme on user interaction
function toggleTheme() {
  const isActive = darkToggle.style.left === "43%";
  const newMode = !isActive;
  window.localStorage.setItem("Dark", newMode);
  applyTheme(newMode);
}

// Retrieve and apply the theme from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = window.localStorage.getItem("Dark") === "true";
  applyTheme(isDarkMode);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to toggle dark mode classes
function toggleDarkMode(enable) {
  document.body.classList.toggle("body-dark", enable);

  const elements = [
    { selector: "header", className: "header-dark" },
    { selector: "header h1", className: "header-h1-dark" },
    { selector: "header .log a", className: "header-log-a-dark" },
    { selector: ".menu", className: "menu-dark" },
    { selector: ".category", className: "category-dark" },
    { selector: ".social", className: "social-dark" },
  ];

  const nodeLists = [
    { selector: ".content-name", className: "content-name-dark" },
    { selector: ".download", className: "download-dark" },
    { selector: ".description", className: "description-dark" },
    { selector: ".read-more-a", className: "read-more-a-dark" },
    { selector: ".inputtext", className: "inputtext-dark" },
    { selector: ".inputbutton", className: "inputbutton-dark" },
    {
      selector: ".setting-content-index",
      className: "setting-content-index-dark",
    },
    { selector: ".button-name", className: "button-name-dark" },
    { selector: ".button-back", className: "button-back-dark" },
  ];

  // Toggle single elements
  elements.forEach(({ selector, className }) => {
    const element = document.querySelector(selector);
    if (element) element.classList.toggle(className, enable);
  });

  // Toggle NodeList elements
  nodeLists.forEach(({ selector, className }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.toggle(className, enable);
    });
  });
}

// Function to enable dark mode
function changeTheme() {
  toggleDarkMode(true);
}

// Function to disable dark mode
function noChangeTheme() {
  toggleDarkMode(false);
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
