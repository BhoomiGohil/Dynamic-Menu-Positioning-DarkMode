// Purpose: To handle the setting page.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleCategory() {
  let category = document.querySelector(".category");
  category.style.display = category.style.display === "flex" ? "none" : "flex";
}

const hideCategory = () =>
  (document.querySelector(".category").style.display = "none");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to update menu position based on switch state
function updateMenuPosition(position) {
  const menu = document.querySelector(".menu");
  const menuGrid = document.querySelector(".menu-grid");
  const category = document.querySelector(".category");
  const social = document.querySelector(".social");
  const socialGrid = document.querySelector(".socialgrid");

  // Reset all position classes
  const positions = ["top", "right", "bottom", "left"];
  positions.forEach((pos) => {
    menu.classList.remove(`menu-${pos}`);
    social.classList.remove(`social-${pos}`);
    category.classList.remove(`category-${pos}`);
  });

  // Apply the new position
  menu.classList.add(`menu-${position}`);
  social.classList.add(`social-${getOppositePosition(position)}`);
  category.classList.add(`category-${position}`);

  // Toggle side-related classes for menu and social grid
  const isSide = position === "left" || position === "right";
  menuGrid.classList.toggle("menu-grid-sides", isSide);
  socialGrid.classList.toggle("socialgrid-sides", isSide);

  // Save the selection in localStorage
  localStorage.setItem("MenuPosition", position);
}

// Helper function to get the opposite position
function getOppositePosition(position) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[
    position
  ];
}

// Function to handle switch toggling
function handleSwitchChange(event) {
  const selectedSwitch = event.target;
  const selectedPosition = selectedSwitch.id;

  // If the same switch is clicked again, keep it checked
  if (selectedSwitch.checked) {
    // Uncheck all other switches
    document.querySelectorAll(".menu-switch").forEach((switchEl) => {
      if (switchEl !== selectedSwitch) {
        switchEl.checked = false;
      }
    });

    // Apply the new position
    updateMenuPosition(selectedPosition);
  } else {
    // If user unchecks the last active switch, reset to "top"
    const anyChecked = [...document.querySelectorAll(".menu-switch")].some(
      (switchEl) => switchEl.checked
    );
    if (!anyChecked) {
      document.querySelector("#top").checked = true; // Force "Top" to be checked
      updateMenuPosition("top");
    }
  }
}

// Initialize switch states on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedPosition = localStorage.getItem("MenuPosition") || "top";

  // Apply saved position
  updateMenuPosition(savedPosition);

  var savedPositionSwitch = document.querySelector(`#${savedPosition}`);

  // Set the corresponding switch to checked
  if (savedPositionSwitch) savedPositionSwitch.checked = true;

  // Attach event listeners to menu switches
  document.querySelectorAll(".menu-switch").forEach((switchEl) => {
    switchEl.addEventListener("change", handleSwitchChange);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select the dark mode toggle switch
const darkModeSwitch = document.querySelector("#darkModeSwitch");

// Function to apply theme based on the checkbox state
function applyTheme(isDarkMode) {
  document.body.classList.toggle("body-dark", isDarkMode);

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
    if (element) element.classList.toggle(className, isDarkMode);
  });

  // Toggle NodeList elements
  nodeLists.forEach(({ selector, className }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.toggle(className, isDarkMode);
    });
  });

  // Save the state to localStorage
  localStorage.setItem("Dark", isDarkMode);
}

if (darkModeSwitch) {
  // Event listener for the toggle switch
  darkModeSwitch.addEventListener("change", () => {
    applyTheme(darkModeSwitch.checked);
  });
}

// Load theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("Dark") === "true";
  if (darkModeSwitch) darkModeSwitch.checked = isDarkMode;
  applyTheme(isDarkMode);
});
