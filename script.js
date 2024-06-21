console.log("Images Reference", "https://qr.ae/pszMs0");
console.log("Based in", "https://youtu.be/BsZrVmFFYGs?si=k3bJ_Ocp0y1h2Y24");

const d = document,
  $img1 = d.querySelector(".image1"),
  $img2 = d.querySelector(".image2");

const fotos = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

d.addEventListener("click", (e) => {
  if (e.target.matches(".container-links article")) {
    d.querySelectorAll(".activo").forEach((el) =>
      el.classList.remove("activo")
    );
    e.target.classList.add("activo");
    let valor = Number(e.target.getAttribute("data-value"));

    $img1.src = `assets/n${fotos[valor][0]}.avif`;
    $img2.src = `assets/n${fotos[valor][1]}.avif`;
  }
  if (e.target.matches(".container")) {
    e.target.classList.toggle("deslizar");
  }
});
