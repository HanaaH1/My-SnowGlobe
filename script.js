const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "Avoid doing something for the sake of it 'looking good on paper'. Focus on doing something that you enjoy but still allows you to learn along the way.",
    "Don't be afraid of being the youngest in the room. Having less experience doesn't mean you have nothing to contribute. In fact, this one experience can be the one that opens more doors for you going forward.",
    "Be the older sibling you wish you had.",
    "Start with small steps, and slowly build them up over time. You will begin to see progress before you know it!",
    "If someone or something isn't rewarding you for the effort you put in, then it's time to move on. Don't contribute so much love to something that doesn't do the same for you.",
    "Treat every opportunity and application like its your last one, and give it your all.",
    "The right people won't make you feel small. You will notice whether they are praying for your success or not.",
    "Small Friend Circle 🤝 Diverse Network. Be selective with who you consider your friends, while being open to expanding your network as you put yourself out there.",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});

