let historyStack = [];
let text = "Heyy Pagli… I know it’s you 💙";
let index = 0;

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  historyStack.push(id);
}

// LOCK SCREEN TIME
setInterval(() => {
  let now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("date").innerText = now.toDateString();
}, 1000);

function unlock() {
  show("login");
}

function login() {
  const pass = document.getElementById("password").value;
  if (pass === "love") {
    show("welcome");
    startFlowers();
    typeText();
    startCountdown();
  } else {
    alert("Wrong password 😜");
  }
}

function typeText() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}

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
  show(historyStack[historyStack.length - 1]);
}

function playSong() {
  document.getElementById("song").play();
}

// FLOWERS
function startFlowers() {
  const f = document.querySelector('.flowers');
  f.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    let span = document.createElement("span");
    span.innerHTML = "🌸";
    span.style.left = Math.random() * 100 + "vw";
    span.style.position = "absolute";
    span.style.animation = "fall 6s linear infinite";
    f.appendChild(span);
  }
}

// COUNTDOWN
function startCountdown() {
  const target = new Date("February 14, 2026 00:00:00").getTime();
  setInterval(() => {
    let now = new Date().getTime();
    let d = target - now;
    if (d < 0) return;
    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d / (1000 * 60 * 60)) % 24);
    let mins = Math.floor((d / (1000 * 60)) % 60);
    let secs = Math.floor((d / 1000) % 60);
    document.getElementById("countdown").innerText =
      `${days} Days ${hours} Hours ${mins} Minutes ${secs} Seconds left 💗`;
  }, 1000);
}

// FIREWORKS
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height / 2, 40, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,70%)`;
    ctx.fill();
  }, 800);
}
let startX = 0;
let endX = 0;

const swipeArea = document.getElementById("swipeArea");

swipeArea.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

swipeArea.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Optional: allow tap also
swipeArea.addEventListener("click", unlock);

function handleSwipe() {
  if (endX - startX > 80) { // swipe right
    unlock();
  }
}

