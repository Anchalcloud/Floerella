// ==========================
// Search from Navbar
// ==========================

const searchBox = document.getElementById("searchBox");
const products = document.querySelectorAll(".Product");

const params = new URLSearchParams(window.location.search);
const searchKeyword = params.get("search");

// ==========================
// Filter Variables
// ==========================

let selectedOccasion = "All";
let selectedColor = "All";
let selectedPrice = 5000;

//from home card 
const occasionFromURL = params.get("occasion");

if (occasionFromURL) {
    selectedOccasion = occasionFromURL;
}

const occasionBtns = document.querySelectorAll(".option-occasion");
const colorBtns = document.querySelectorAll(".option-color");
const priceRange = document.getElementById("priceRange");

// ==========================
// Main Filter Function
// ==========================

function filterProducts() {

    const searchText = searchBox.value.toLowerCase();

    products.forEach((product) => {

        const productName = product.dataset.name.toLowerCase();
        const productOccasion = product.dataset.occasion;
        const productColor = product.dataset.color;
        const productPrice = Number(product.dataset.price);

        const matchesSearch =
            productName.includes(searchText) ||
            productOccasion.toLowerCase().includes(searchText) ||
            productColor.toLowerCase().includes(searchText);

        const matchesOccasion =
            selectedOccasion === "All" ||
            selectedOccasion === productOccasion;

        const matchesColor =
            selectedColor === "All" ||
            selectedColor === productColor;

        const matchesPrice =
            productPrice <= selectedPrice;

        if (
            matchesSearch &&
            matchesOccasion &&
            matchesColor &&
            matchesPrice
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}

// ==========================
// Navbar Redirect Search
// ==========================

if (searchKeyword) {

    searchBox.value = searchKeyword;

}

// ==========================
// Search Box
// ==========================

searchBox.addEventListener("input", filterProducts);

// ==========================
// Occasion Buttons
// ==========================

occasionBtns.forEach((button) => {

    button.addEventListener("click", () => {

        occasionBtns.forEach((btn) =>
            btn.classList.remove("active-filter")
        );

        button.classList.add("active-filter");

        selectedOccasion = button.dataset.filter;

        filterProducts();

    });

});

//from home to shop
occasionBtns.forEach((btn) => {

    if (btn.dataset.filter === selectedOccasion) {
        btn.classList.add("active-filter");
    }

});

// ==========================
// Colour Buttons
// ==========================

colorBtns.forEach((button) => {

    button.addEventListener("click", () => {

        colorBtns.forEach((btn) =>
            btn.classList.remove("active-filter")
        );

        button.classList.add("active-filter");

        selectedColor = button.dataset.filter;

        filterProducts();

    });

});

// ==========================
// Price Range
// ==========================

priceRange.addEventListener("input", () => {

    selectedPrice = Number(priceRange.value);

    filterProducts();

});

// Run Filter on Page Load
filterProducts();


// ==========================
// Wishlist
// ==========================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistBtns = document.querySelectorAll(".wishlist-btn");

wishlistBtns.forEach((button) => {

    const heart = button.querySelector("i");

    const product = button.closest(".Product");

    const exists = wishlist.some(
        (item) => item.id === product.dataset.id
    );

    if (exists) {

        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");

    }

    button.addEventListener("click", () => {

        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");

        const productData = {

            id: product.dataset.id,
            occasion: product.dataset.occasion,
            name: product.dataset.name,
            price: product.dataset.price,
            color: product.dataset.color,
            image: product.querySelector("img").src

        };
        
        const exists = wishlist.some(
            (item) => item.id === productData.id
        );

        if (exists) {

            wishlist = wishlist.filter(
                (item) => item.id !== productData.id
            );

        } else {

            wishlist.push(productData);

        }

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

    });

});


// ==========================
// Add To Cart
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartButtons = document.querySelectorAll(".prod-btn");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const product = button.closest(".Product");

        const id = product.dataset.id;

        const existingItem = cart.find(
            (item) => item.id === id
        );

        const selectedProduct = {

            id: product.dataset.id,
            occasion: product.dataset.occasion,
            name: product.dataset.name,
            price: product.dataset.price,
            color: product.dataset.color,
            image: product.querySelector("img").src

        };

        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                ...selectedProduct,
                quantity: 1
            });

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    });

});