//console.log("singleview");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".produkt_grid img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".purchaseBox h1").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .category").textContent = product.subcategory;
  document.querySelector(".purchaseBox .pris").textContent = product.price;
  document.querySelector(".purchaseBox .id").textContent = product.id;
  document.querySelector(".purchaseBox .gender").textContent = product.gender;
  document.querySelector(".purchaseBox .season").textContent = product.season;
  document.querySelector(".purchaseBox .usagetype").textContent = product.usagetype;
}
