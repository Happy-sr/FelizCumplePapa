document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".hearts-container");
  const hearts = ["❤️", "💕", "💖", "💗", "💝"];
  
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = (5 + Math.random() * 3) + "s";
      heart.style.fontSize = (1 + Math.random() * 1.5) + "rem";
      
      container.appendChild(heart);
      
      setTimeout(() => heart.remove(), 8000);
    }, i * 400);
  }
});
