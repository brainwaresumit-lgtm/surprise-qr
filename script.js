// ===============================
// GLOBAL VARIABLES
// ===============================
let historyStack = [];
let typingText = "Heyy Pagli… I know it’s you 💙";
let typingIndex = 0;

// ===============================
// SCREEN HANDLER
// ===============================
function show(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  historyStack.push(id);
}

// ===============================
// LOCK SCREEN TIME & DATE
// ===============================
setInterval(() => {
  const now = new Date();
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");

  if (timeEl && dateEl) {
    timeEl.innerText = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    dateEl.innerText = now.toDateString();
  }
}, 1000);

// ===============================
// UNLOCK FUNCTION
// ===============================
function unlock() {
  if (navigator.vibrate) navigator.vibrate(60);
  show("login");
}

// ===============================
// LOGIN
// ===============================
function login() {
  const pass = document.getElementById("password").value;

  if (pass === "love") {   // 🔐 CHANGE PASSWORD HERE
    show("welcome");
    startFlowers();
    startTyping();
    startCountdown();
  } else {
    alert("Wrong password 😜");
  }
}

// ===============================
// TYPING EFFECT
// ===============================
function startTyping() {
  typingIndex = 0;
  const typingEl = document.getElementById("typing");
  typingEl.innerHTML = "";

  function type() {
    if (typingIndex < typingText.length) {
      typingEl.innerHTML += typingText.charAt(typingIndex);
      typingIndex++;
      setTimeout(type, 80);
    }
  }
  type();
}

// ===============================
// NAVIGATION
// ===============================
function goMain() {
  show("main");
  startFireworks();
}

function showMemories() {
  show("memories");
}

function showValentine() {
  show("valentine");
}

function back() {
  historyStack.pop();
  const prev = historyStack[historyStack.length - 1];
  if (prev) show(prev);
}

// ===============================
// MUSIC
// ===============================
function playSong() {
  document.getElementById("song").play();
}

// ===============================
// FLOWER RAIN
// ===============================
function startFlowers() {
  const flowerBox = document.querySelector(".flowers");
  if (!flowerBox) return;

  flowerBox.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("span");
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 4 + Math.random() * 4 + "s";
    flowerBox.appendChild(flower);
  }
}

// ===============================
// COUNTDOWN (VALENTINE)
// ===============================
function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const target = new Date("February 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      countdownEl.innerText = "💖 It's Valentine’s Day 💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText =
      `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds 💗`;
  }, 1000);
}

// ===============================
// FIREWORKS
// ===============================
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2,
      40,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,70%)`;
    ctx.fill();
  }, 800);
}

// ===============================
// SWIPE TO UNLOCK (FINAL FIX)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const swipeArea = document.getElementById("swipeArea");
  if (!swipeArea) return;

  let startX = 0;

  swipeArea.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  swipeArea.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 80) {
      unlock();
    }
  });

  // CLICK fallback
  swipeArea.addEventListener("click", unlock);
});
