const intro = document.getElementById("intro");
const login = document.getElementById("login");
const main = document.getElementById("main");

document.getElementById("unlockBtn").onclick = () => {
  intro.classList.remove("active");
  login.classList.add("active");
};

document.getElementById("loginBtn").onclick = () => {
  login.classList.remove("active");
  main.classList.add("active");
  startFallingAnimation();
};

document.getElementById("openMemory").onclick = () => {
  document.getElementById("memorySection").classList.toggle("hidden");
  document.getElementById("valentineMsg").classList.add("hidden");
};

document.getElementById("myValentine").onclick = () => {
  document.getElementById("valentineMsg").classList.toggle("hidden");
  document.getElementById("memorySection").classList.add("hidden");
};

/* Memory Images */
const images = {
  1: "images/image1.jpeg",
  2: "images/image2.jpeg",
  3: "images/image3.jpeg",
  4: "images/image4.jpeg"
};

function showMemory(id) {
  const box = document.getElementById("memoryImage");
  box.innerHTML = "";
  const img = document.createElement("img");
  img.src = images[id];
  box.appendChild(img);
}

/* Falling Animation */
function startFallingAnimation() {
  const container = document.getElementById("falling-container");
  const symbols = ["❤️", "💗", "🌸", "🌹"];

  setInterval(() => {
    const item = document.createElement("span");
    item.className = "fall-item";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (12 + Math.random() * 10) + "px";
    item.style.animationDuration = (5 + Math.random() * 4) + "s";
    container.appendChild(item);
    setTimeout(() => item.remove(), 9000);
  }, 400);
}
const song = document.getElementById("loveSong");

document.getElementById("songBtn").addEventListener("click", () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});
