const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
  greeting.textContent = "สวัสดีทุกคน! ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ของฉัน 😊";
  greetButton.textContent = "ทักทายแล้ว!";
});