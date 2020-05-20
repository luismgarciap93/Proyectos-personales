const close = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const contenedor = document.getElementById("contenedor");

showModal();

function showModal() {
  setTimeout(function () {
    contenedor.classList.add("show-modal");
  }, 1000);
}

close.addEventListener("click", () =>
  contenedor.classList.remove("show-modal")
);
