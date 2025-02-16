let overlay = document.querySelector(".overlay");

let popups = {
    performance: document.querySelector(".performance-popup"),
    Experience: document.querySelector(".Experience-popup"),
    Expositions: document.querySelector(".Expositions-popup"),
    Parties: document.querySelector(".Parties-popup"),
    Sports: document.querySelector(".Sports-popup"),
    Conferences: document.querySelector(".Conferences-popup")
};

let categories = {
    performance: document.querySelector(".performance"),
    Experience: document.querySelector(".Experience"),
    Expositions: document.querySelector(".Expositions"),
    Parties: document.querySelector(".Parties"),
    Sports: document.querySelector(".Sports"),
    Conferences: document.querySelector(".Conferences")
};

let closingButtons = document.getElementsByClassName("close");

// Open the relevant popup
for (let category in categories) {
    categories[category].addEventListener("click", function() {
        overlay.style.display = "block";
        popups[category].style.display = "flex";
    });
}

// Close the popups
for (let i = 0; i < closingButtons.length; i++) {
    closingButtons[i].addEventListener("click", function() {
        overlay.style.display = "none";
        popups[Object.keys(popups)[i]].style.display = "none";
    });
}
