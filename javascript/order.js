//order ID
const orderId = "BC" + Math.floor(100000 + Math.random() * 900000);

document.getElementById("orderNumber").textContent =
`Order ID : ${orderId}`;


// button to shop again
const continueBtn = document.getElementById("continueShopping");

continueBtn.addEventListener("click", () => {

    window.location.href = "shop.html";

});

//