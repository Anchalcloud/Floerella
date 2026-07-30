let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistContainer = document.querySelector(".wishlist-container");

function displayWishlist(){

    wishlistContainer.innerHTML = "";
    
    wishlist.forEach((item) =>{
        wishlistContainer.innerHTML += `  <article class="Product" data-id="${item.id}">

            <div class="img-container" >
                <img src="${item.image}" alt="${item.name}">

                <button class="wishlist-btn">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>

            

            <p class="para">${item.occasion}</p>

            <p class="para2">
                ${item.name}
                <span class="price-flower">₹${item.price}</span>
            </p>
            
            <button class="prod-btn">Add To Cart</button>
           

        </article>`;
    
    });

    const buttons = document.querySelectorAll(".wishlist-btn"); 

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            const product = button.closest(".Product");
            const id = product.dataset.id;

            wishlist = wishlist.filter((item) => {
               return item.id !== id;
            });

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            displayWishlist();

        });
    });
 
}

displayWishlist();



 