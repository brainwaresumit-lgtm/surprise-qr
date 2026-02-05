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
};

document.getElementById("openMemory").onclick = () => {
  document.getElementById("memorySection").classList.toggle("hidden");
};

const images = {
  1: "images/image2.jpeg",
  2: "images/image1.jpeg",
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

