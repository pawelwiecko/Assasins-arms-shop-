const dropdownMenuItems = document.querySelectorAll(".dropdown a");

dropdownMenuItems.forEach((dropdownMenuItem) => {
    dropdownMenuItem.addEventListener('mouseenter', () => {
        dropdownMenuItem.style.color = "#C32912";
    });
    dropdownMenuItem.addEventListener("mouseleave", () => {
        dropdownMenuItem.style.color = "rgb(46, 46, 46)";
    });
});

const footerItems = document.querySelectorAll(".itemshover a");

footerItems.forEach((footerItem) => {
    footerItem.addEventListener('mouseenter', () => {
        footerItem.style.color = "#C32912";
    });
    footerItem.addEventListener("mouseleave", () => {
        footerItem.style.color = "rgba(224, 220, 220, 0.62)";
    });
});


const buttonsHover = document.querySelectorAll(".card img, .images img");

buttonsHover.forEach((buttonHover) => {
    buttonHover.addEventListener('mouseenter', () => {
        buttonHover.style.borderBottom = "1px solid #C32912";
    });
    buttonHover.addEventListener("mouseleave", () => {
        buttonHover.style.borderBottom = "1px solid rgb(46, 46, 46, 0.2)";
    });
});

// Accordion
const accordions = document.getElementsByClassName("accordion");

for (i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}