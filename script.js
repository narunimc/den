
const lantern = document.getElementById("lantern");
const statusText = document.getElementById("status");

const faces = document.querySelectorAll(".face");

function stopLantern() {
    lantern.classList.add("paused");
    statusText.textContent = "Đèn đã dừng";
    statusText.classList.add("stopped");
}

function startLantern() {
    lantern.classList.remove("paused");
    statusText.textContent = "Đèn đang quay";
    statusText.classList.remove("stopped");
}

faces.forEach(function(face) {
    face.addEventListener("mouseenter", stopLantern);
    face.addEventListener("mouseleave", startLantern);
});
