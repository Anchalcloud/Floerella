let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".cart-container");
const summary = document.querySelector(".cart-summary");

function displayCart(){

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

       summary.style.display=  "none";

        cartContainer.innerHTML = `
           <div class="empty-cart">
               <h2>Your Cart is Empty 🛒</h2>
               <p>Looks like you haven't added any flowers yet.</p>
            </div>
        `;

        return;
    }

    summary.style.display = "flex";

        let grandTotal = 0;
    
        cart.forEach((item) =>{

        const subTotal = item.price * item.quantity;
        grandTotal += subTotal;

        cartContainer.innerHTML += `  <article class="Product" data-id="${item.id}">

            <div class="img-container" >
                <img src="${item.image}" alt="${item.name}">

            </div>

            <p class="para">${item.occasion}</p>

            <p class="para2">
                ${item.name}
                <span class="price-flower">₹${item.price}</span>
            </p>

            <div class="quantity-box">
                <button class="minus-btn">-</button>

                <span class="quantity">${item.quantity}</span>

                <button class="plus-btn">+</button>             
            </div>

             <button class="remove-btn">Remove</button>
        </article>`;
    
    });

    //Plus button action

    const plusButtons = document.querySelectorAll(".plus-btn");

    plusButtons.forEach((button) => {

        button.addEventListener("click", () => {
            const product = button.closest(".Product");
            const id = product.dataset.id;

            const cartItem = cart.find((item) => item.id === id);

            if (cartItem) {
                cartItem.quantity++;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();

        });

    });


    //Minus button action
    const minusButtons = document.querySelectorAll(".minus-btn");

    minusButtons.forEach((button) => {

        button.addEventListener("click", () => {
            const product = button.closest(".Product");
            const id = product.dataset.id;

            const cartItem = cart.find((item) => item.id === id);

            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            } else {
                cart = cart.filter((item) => item.id !== id);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();

        });

    });

    //remove button action
    const removebuttons = document.querySelectorAll(".remove-btn")

    removebuttons.forEach((button) =>{

        button.addEventListener("click", () =>{

            const product = button.closest(".Product");
            const id = product.dataset.id;

            cart = cart.filter((item) => item.id !== id);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        });
    });


//Grand total summary
    const total = document.querySelector(".grand-total");

    total.textContent = `Grand Total: ₹${grandTotal}`;


    

};

displayCart();

const checkoutBtn = document.getElementById("checkoutbtn");
console.log(checkoutBtn);

checkoutBtn.addEventListener("click", () => {

    localStorage.setItem("checkoutItems", JSON.stringify(cart));

    window.location.href = "checkout.html";

});

