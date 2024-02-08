//console.log("Test");

//fetch

fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loope
  products.forEach(showProduct);
}

function showProduct(product) {
  //clone, ændre, appende

  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("h5").textContent = product.brandname;
  copy.querySelector("h6").textContent = product.price + " DKK";

  //udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
    copy.querySelector("article").classList.add("fade");
    copy.querySelector("div.soldout").textContent = "Sold Out";
  }

  //udsalg
  if (product.discount) {
    copy.querySelector("article").classList.add("disCount");
    copy.querySelector("div.discount").textContent = "-" + product.discount + "%";
  }

  copy.querySelector(".link_produkt").setAttribute("href", `produkt.html?id=${product.id}`);

  //append
  document.querySelector("main").appendChild(copy);

  const parent = document.querySelector(".produktliste_grid");
  parent.appendChild(copy);
}
