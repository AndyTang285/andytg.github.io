
const text = "Hi, I'm Andy!"; 
const speed = 120; 
const type_text = document.querySelector("#type-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function typeNextChar() {
    if (index < text.length) {
        type_text.textContent += text.charAt(index);

        index++;
        setTimeout(typeNextChar, speed);
    }

}

window.addEventListener("load", typeNextChar);

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("visible");
    } else {
        navbar.classList.remove("visible");
    }
});

