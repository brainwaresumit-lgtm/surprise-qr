
const intro = document.getElementById("intro");
const login = document.getElementById("login");
const main = document.getElementById("main");


document.getElementById("unlockBtn").addEventListener("click", () => {
  intro.classList.remove("active");
  login.classList.add("active");
});


const correctPassword = "bador+petni"; 


document.getElementById("loginBtn").addEventListener("click", () => {
  const input = document.querySelector("#login input");
  const enteredPassword = input.value.trim();

  if (enteredPassword === correctPassword) {
    login.classList.remove("active");
    main.classList.add("active");
    startFallingAnimation();
  } else {
    alert("Wrong password 😜 Try again!");
    input.value = "";
  }
});


document.getElementById("openMemory").addEventListener("click", () => {
  document.getElementById("memorySection").classList.toggle("hidden");
  document.getElementById("valentineMsg").classList.add("hidden");
});

document.getElementById("myValentine").addEventListener("click", () => {
  document.getElementById("valentineMsg").classList.toggle("hidden");
  document.getElementById("memorySection").classList.add("hidden");
});


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
  img.alt = "Our Memory";

  box.appendChild(img);
}


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
const songBtn = document.getElementById("songBtn");
const loveSong = document.getElementById("loveSong");

if (songBtn && loveSong) {
  songBtn.addEventListener("click", () => {
    loveSong.play().catch(err => {
      console.log("Audio play blocked:", err);
    });
  });
}


