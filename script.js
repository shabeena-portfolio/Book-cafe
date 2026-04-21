let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let totalDisplay = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
  });

  totalDisplay.innerText = "Total: ₹" + total;
}
document.addEventListener("click", function() {
  let text = document.getElementById("hero-text-box");
  text.classList.add("show");
});
window.onload = function() {
  document.getElementById("hero-text-box").classList.add("show");
};