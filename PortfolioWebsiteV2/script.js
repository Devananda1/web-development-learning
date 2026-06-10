const texts = [
    "Flutter Developer",
    "Web Developer",
    "CSE Student",
    "UI/UX Enthusiast"
];

let index = 0;

setInterval(() => {

    document.getElementById("typing-text")
    .textContent = texts[index];

    index++;

    if(index >= texts.length){
        index = 0;
    }

}, 2000);
const roles = [
    "Flutter Developer",
    "Web Developer",
    "Computer Science Student",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent =
            currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

