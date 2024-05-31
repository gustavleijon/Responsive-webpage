// The JavaScript code is created with assistance and insp of ChatGpt and w3schools
var isMenuOpen = false; // Flag to track if the menu is open

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function myFunction() {
    var x = document.getElementById("myLinks");
    var nav = document.querySelector(".top-nav");
    var icon = document.getElementById("menuIcon").querySelector("i");

    if (isMenuOpen) {
        x.style.display = "none";
        nav.classList.remove("open"); // Remove the "open" class
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // Change icon to bars
        isMenuOpen = false; // Update the flag
    } else {
        x.style.display = "block";
        nav.classList.add("open"); // Add the "open" class
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times"); // Change icon to times (X)
        isMenuOpen = true; // Update the flag
    }
}

// Function to reset the menu based on screen width
function resetMenu() {
    var screenWidth = window.innerWidth;
    var x = document.getElementById("myLinks");
    var nav = document.querySelector(".top-nav");
    var icon = document.getElementById("menuIcon").querySelector("i");

    if (screenWidth >= 768 && screenWidth <= 991) {
        x.style.display = "flex";
        nav.classList.remove("open"); // Remove the "open" class
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // Reset icon to bars
        isMenuOpen = false; // Reset the flag
    } else {
        x.style.display = "none";
        nav.classList.remove("open"); // Remove the "open" class
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // Reset icon to bars
        isMenuOpen = false; // Reset the flag
    }
}

// Call resetMenu when the window is resized
window.addEventListener("resize", resetMenu);

// Call resetMenu when the page loads
window.addEventListener("load", resetMenu);




// Script for sticky header

// Define a varible to keep track if the user has started to scroll and reach the value
var scrollThreshold = 280; // Value for when the sticky header should appear

window.onscroll = function() {
    // Check if user has scrolled passed the value
    if (window.innerWidth > 767 && window.scrollY >= scrollThreshold) {
        scrollFunction(true); // User hase scrolled passed the value
    } else {
        scrollFunction(false); // User has not scrolled down enought
    }
};

function scrollFunction(hasScrolledDown) {
    var myLinks = document.getElementById("myLinks");
    var sticky = myLinks.offsetTop;

    // Add or remove sticky class based on user scroll
    if (hasScrolledDown && window.scrollY >= sticky) {
        myLinks.classList.add("sticky");
        myLinks.classList.add("hide-on-sticky"); // Add the class that hides the logo
    } else {
        myLinks.classList.remove("sticky");
        myLinks.classList.remove("hide-on-sticky");
    }
}