const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuResponsiveIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

const elementos = [desktopMenu, mobileMenu, aside];

navbarEmail.addEventListener("click", () => toggleInactive(desktopMenu));
menuResponsiveIcon.addEventListener("click", () => toggleInactive(mobileMenu));
shoppingCartIcon.addEventListener("click", () => toggleInactive(aside));

function toggleInactive(elemento) {
  elemento.classList.toggle("inactive");
  const otros = elementos.filter((e) => e != elemento);
  otros.forEach((e) => {
    if (!e.classList.contains("inactive")) {
      e.classList.toggle("inactive");
    }
  });
}

const productos = [
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computer",
    price: 400,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Mouse",
    price: 10,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Cellphone",
    price: 60,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Laptop",
    price: 520,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

function renderizarProductos(listaProductos) {
  for (let producto of listaProductos) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.image);
    productCard.append(imagen);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.append(productInfo);

    const detalle = document.createElement("div");
    productInfo.append(detalle);

    const precio = document.createElement("p");
    precio.innerText = "$" + producto.price;
    detalle.append(precio);

    const nombre = document.createElement("p");
    nombre.innerText = producto.name;
    detalle.append(nombre);

    const figura = document.createElement("figure");
    productInfo.append(figura);

    const icono = document.createElement("img");
    icono.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figura.append(icono);

    cardsContainer.append(productCard);
  }
}

renderizarProductos(productos);
