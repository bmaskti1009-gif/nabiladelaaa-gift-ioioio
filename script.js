const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif-display");
const music = document.getElementById("bgMusic");

// Fungsi supaya tombol No lari
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Fungsi saat tombol Yes diklik
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yeay! I Love You! 🌹✨";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpueGZ3eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Ganti dengan GIF senang
    music.play(); // Putar lagu
    
    // Sembunyikan tombol No
    noBtn.style.display = "none";
    
    // Efek Konfeti/Hati Sederhana
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = Math.random();
    heart.classList.add("heart-fall");
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}