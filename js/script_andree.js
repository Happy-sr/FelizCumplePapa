document.addEventListener("DOMContentLoaded", () => {
  // Crear gotas de 0 y 1 cayendo
  createFallingDigits();
});

function createFallingDigits() {
  const container = document.querySelector(".matrix-bg");
  const digits = ["0", "1"];

  // Crear múltiples gotas al inicio
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const drop = document.createElement("div");
      drop.className = "digital-drop";
      drop.textContent = digits[Math.floor(Math.random() * digits.length)];
      
      // Posición aleatoria horizontal
      drop.style.left = Math.random() * 100 + "%";
      
      // Duración aleatoria de caída
      const duration = 5 + Math.random() * 5;
      drop.style.animationDuration = duration + "s";
      
      // Retraso aleatorio
      drop.style.animationDelay = Math.random() * 2 + "s";
      
      container.appendChild(drop);
      
      // Remover después de caer
      setTimeout(() => drop.remove(), (duration * 1000) + 2000);
    }, i * 150);
  }

  // Crear nuevas gotas cada 1.5 segundos para que siempre haya varias cayendo
  setInterval(() => {
    const drop = document.createElement("div");
    drop.className = "digital-drop";
    drop.textContent = digits[Math.floor(Math.random() * digits.length)];
    drop.style.left = Math.random() * 100 + "%";
    const duration = 5 + Math.random() * 5;
    drop.style.animationDuration = duration + "s";
    
    container.appendChild(drop);
    
    setTimeout(() => drop.remove(), duration * 1000 + 500);
  }, 1500);
}
