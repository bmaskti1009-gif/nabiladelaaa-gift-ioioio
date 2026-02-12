// Fungsi Pindah Halaman
function nextPage(pageNum) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // Tampilkan halaman yang dituju
    document.getElementById('page' + pageNum).style.display = 'block';
}

// Logika Tombol No Lari
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Logika Tombol Yes
const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", () => {
    nextPage(4); // Pindah ke halaman konfirmasi
    
    // Mulai Putar Musik YouTube (butuh interaksi klik)
    const iframe = document.getElementById("youtube-audio");
    iframe.src += "&autoplay=1";
    
    // Hujan Hati
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-5vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Tambahkan animasi jatuh di CSS lewat JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);