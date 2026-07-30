const checkoutItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];

const summaryItems = document.querySelector(".summary-items");

let grandTotal = 0;

checkoutItems.forEach((item) => {

    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;

    summaryItems.innerHTML += `
        <div class="summary-product">

            <img src="${item.image}" alt="${item.name}">

            <div class="summary-info">
                <h3>${item.name}</h3>
                <p>${item.occasion}</p>
                <p class="price">Price: $${item.price} <span class="Quantity">Quantity: ${item.quantity}</span> </p>
               
               
            </div>

        </div>

        <hr>
    `;
});

document.getElementById("subtotal").textContent = "$" + grandTotal;
document.getElementById("totalPrice").textContent = "$" + (grandTotal + 100);


//place-order button
const placeOrderBtn = document.querySelector(".place-order-btn");

placeOrderBtn.addEventListener("click", () => {

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if(
        !fullname ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !state ||
        !pincode
    ){
        alert("Please fill in all customer details.");
        return;
    }

    
    localStorage.removeItem("cart");
    localStorage.removeItem("checkoutItems");

    window.location.href = "order-success.html";

});