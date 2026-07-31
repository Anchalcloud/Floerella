const navbarSearch = document.getElementById("navbarSearch");

if (navbarSearch) {

    navbarSearch.addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            const keyword = navbarSearch.value.trim();

            if (keyword !== "") {

                window.location.href =
                    `pages/shop.html?search=${encodeURIComponent(keyword)}`;

            }

        }

    });

}



// Flower cards
const flowerCards = document.querySelectorAll(".flower-card");

flowerCards.forEach(card => {

    card.addEventListener("click", () => {

        const flower = card.dataset.search;

        window.location.href =
        `pages/shop.html?search=${encodeURIComponent(flower)}`;

    });

});

// Occasion cards
const occasionCards = document.querySelectorAll(".occasion-card");

occasionCards.forEach(card => {

    card.addEventListener("click", () => {

        const occasion = card.dataset.occasion;

        window.location.href =
        `pages/shop.html?search=${encodeURIComponent(occasion)}`;

    });

});