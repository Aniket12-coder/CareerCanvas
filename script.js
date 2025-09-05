

// Fade-in Effect on Scroll
const teamMembers = document.querySelectorAll(".team-member");

function showElementsOnScroll() {
    teamMembers.forEach(member => {
        const position = member.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            member.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showElementsOnScroll);
window.addEventListener("load", showElementsOnScroll);