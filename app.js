// const carrito = document.getElementById("carrito");
// const template = document.getElementById("template");
// const fragment = document.createDocumentFragment();
// const btnesBotones = document.querySelectorAll(".card .btn");

// const carritoObjeto = [];

// const agregarAlCarrito = (e) => {
//   console.log(e.target.dataset.fruta);

//   const producto = {
//     titulo: e.target.dataset.fruta,
//     id: e.target.dataset.fruta,
//     cantidad: 1,
//   };

//   const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

//   console.log(indice);

//   if (indice === -1) {
//     carritoObjeto.push(producto);
//   } else {
//     carritoObjeto[indice].cantidad++;
//   }

//   console.log(carritoObjeto);

//   pintarCarrito(carritoObjeto);
// };

// const pintarCarrito = (array) => {
//   carrito.textContent = "";

//   array.forEach((item) => {
//     const clone = template.content.firstElementChild.cloneNode(true);
//     clone.querySelector(".lead").textContent = item.titulo;
//     clone.querySelector(".badge").textContent = item.cantidad;

//     fragment.appendChild(clone);
//   });

//   carrito.appendChild(fragment);
// };

// btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach((caja) => {
//   caja.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("me diste click");
//   });
// });

// const formulario = document.querySelector("form");

// formulario.addEventListener("submit", (e) => {
//   console.log("me diste click");
//   e.preventDefault();
// });

// const container = document.querySelector(".container");

document.addEventListener("click", (e) => {
  // console.log(e.target.id);

  if (e.target.id === "padre") {
    console.log("le diste click al padre");
  }

  // console.log(e.target.matches(".border-secondary"));

  if (e.target.matches(".border-secondary")) {
    console.log("diste click al hijo");
  }

  // console.log(e.target.dataset.div);
  if (e.target.dataset.div === "divNieto") {
    console.log("diste click al nieto");
  }
});
