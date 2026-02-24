const testimonials = [
    {
        text: "Community consulting builds bridges and mutual respect.",
        name: "Anna Keller",
        company: "Unity Works"
    },
    {
        text: "True leadership is listening before leading.",
        name: "Sophia White",
        company: "Global Care"
    },
    {
        text: "For me, community-based consulting means meeting people on equal terms – with trust, understanding and cultural sensitivity.",
        name: "Mireille Belinga",
        company: "InUnity.One"
    },
    {
        text: "Impact happens when voices are heard.",
        name: "David Brown",
        company: "Change Lab"
    },
    {
        text: "Collaboration creates sustainable solutions.",
        name: "Elena Morris",
        company: "People First"
    }
];

const textEl = document.getElementById("testimonial-text");
const nameEl = document.getElementById("testimonial-name");
const companyEl = document.querySelector(".company");
const avatars = document.querySelectorAll(".avatar");

function setActive(index) {
    avatars.forEach(a => a.classList.remove("active"));
    avatars[index].classList.add("active");

    textEl.textContent = testimonials[index].text;
    nameEl.textContent = testimonials[index].name;
    companyEl.textContent = testimonials[index].company;
}

avatars.forEach(avatar => {
    avatar.addEventListener("click", () => {
        const index = avatar.getAttribute("data-index");
        setActive(index);
    });
});

/* Auto slide */
let current = 2;
setInterval(() => {
    current = (current + 1) % testimonials.length;
    setActive(current);
}, 5000);
