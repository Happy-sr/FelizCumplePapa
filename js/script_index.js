document.addEventListener("DOMContentLoaded", () => {
  // Crear confeti al cargar
  createConfetti();

  // Crear más confeti cada 5 segundos
  setInterval(createConfetti, 5000);
});

function createConfetti() {
  const confettiContainer = document.querySelector(".confetti");
  const confettiPieces = 30;
  const colors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#ffd93d", "#ff9999",
    "#a8e6cf", "#ffd3b6", "#ffaaa5", "#ff8b94", "#ffc0cb"
  ];

  for (let i = 0; i < confettiPieces; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 2) + "s";
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    
    confettiContainer.appendChild(piece);

    // Remover después de caer
    setTimeout(() => piece.remove(), 5000);
  }
}
