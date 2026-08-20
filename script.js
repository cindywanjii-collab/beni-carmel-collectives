/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE SCRIPT
   ========================================================= */


/* =========================================================
   PRODUCT PRICES
   These MUST match the prices in shop.html
   ========================================================= */

const PRODUCT_PRICES = {

    "BC Beanie Beige": 500,
    "BC Beanie Black": 500,
    "BC Beanie Brown": 500,
    "BC Beanie Burgundy": 500,
    "BC Beanie Cream": 500,

    "BC Bucket Hat Beige": 700,
    "BC Bucket Hat Black": 700,
    "BC Bucket Hat Burgundy": 700,
    "BC Bucket Hat White": 700,

    "BC Cap White": 400,

    "BC College Jacket": 1500,

    "BC Denim Jacket": 1300,
    "BC Denim Jacket II": 1300,

    "BC Hoodie Black": 1300,
    "BC Hoodie Cream": 1300,

    "BC Jorts Blue": 1000,
    "BC Jorts Dark Blue": 1000,
    "BC Jorts Marble Blue": 1000,
    "BC Jorts Sky Blue": 1000,

    "BC Cross Shoulder Bag": 800,

    "BC Shoulder Bag Black": 650,
    "BC Shoulder Bag Brown": 650,
    "BC Shoulder Bag Orange": 650,
    "BC Shoulder Bag Pink": 650,

    "BC Socks Black": 200,
    "BC Socks White": 200,

    "BC Sweatpants Black": 900,
    "BC Sweatpants Burgundy": 900,
    "BC Sweatpants Cream": 900,
    "BC Sweatpants Grey": 900,

    "BC Graphic Tee": 600,
    "BC Graphic Tee II": 600,
    "BC Graphic Tee III": 600,

    "BC Wide Leg Jeans": 1000,

    "BC Silver Cross Necklace": 500
};


/* =========================================================
   GET CART
   ========================================================= */

function getCart() {

    let cart = JSON.parse(
        localStorage.getItem("beniCarmelCart")
    ) || [];


    /*
       IMPORTANT:

       This updates old cart items so that if you previously
       had the wrong/higher prices saved in your browser,
       they will automatically be corrected.
    */

    cart = cart.map(item => {

        if (PRODUCT_PRICES[item.name] !== undefined) {

            item.price = PRODUCT_PRICES[item.name];

        }

        return item;

    });


    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );


    return cart;
}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart(cart) {

    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productName, productPrice) {

    const cart = getCart();


    /*
       Use the official price from PRODUCT_PRICES.

       This prevents another script or old price from
       changing the amount.
    */

    const price =
        PRODUCT_PRICES[productName] !== undefined
            ? PRODUCT_PRICES[productName]
            : Number(productPrice);


    const existingItem =
        cart.find(
            item => item.name === productName
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            name: productName,

            price: price,

            quantity: 1

        });

    }


    saveCart(cart);


    updateCart();


    /*
       Open the cart after adding the product
    */

    openCart();


    /*
       Small confirmation
    */

    showAddedMessage(productName);

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const cart = getCart();


    const cartItems =
        document.getElementById("cart-items");


    const cartTotal =
        document.getElementById("cart-total");


    const cartCount =
        document.getElementById("cart-count");


    if (!cartItems) {
        return;
    }


    /* EMPTY CART */

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your bag is currently empty.
            </p>
        `;


        if (cartTotal) {
            cartTotal.textContent = "KSh 0";
        }


        if (cartCount) {
            cartCount.textContent = "0";
        }


        return;

    }


    /* CART ITEMS */

    let total = 0;

    let quantityTotal = 0;


    cartItems.innerHTML = cart.map(
        (item, index) => {

            const itemPrice =
                PRODUCT_PRICES[item.name] !== undefined
                    ? PRODUCT_PRICES[item.name]
                    : Number(item.price);


            const itemTotal =
                itemPrice * item.quantity;


            total += itemTotal;

            quantityTotal += item.quantity;


            return `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <strong>
                            ${item.name}
                        </strong>

                        <p>
                            KSh ${itemPrice.toLocaleString()}
                        </p>

                        <div class="cart-quantity">

                            <button
                                onclick="changeQuantity(${index}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${index}, 1)"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <div class="cart-item-right">

                        <strong>
                            KSh ${itemTotal.toLocaleString()}
                        </strong>

                        <button
                            class="remove-item"
                            onclick="removeFromCart(${index})"
                        >
                            REMOVE
                        </button>

                    </div>

                </div>

            `;

        }
    ).join("");


    if (cartTotal) {

        cartTotal.textContent =
            "KSh " +
            total.toLocaleString();

    }


    if (cartCount) {

        cartCount.textContent =
            quantityTotal;

    }

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(index, change) {

    const cart = getCart();


    if (!cart[index]) {
        return;
    }


    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart(cart);


    updateCart();

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(index) {

    const cart = getCart();


    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);


    saveCart(cart);


    updateCart();

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    const cartDrawer =
        document.getElementById("cart-drawer");


    const cartBackground =
        document.getElementById("cart-background");


    if (cartDrawer) {

        cartDrawer.classList.add("active");

    }


    if (cartBackground) {

        cartBackground.classList.add("active");

    }


    updateCart();

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart() {

    const cartDrawer =
        document.getElementById("cart-drawer");


    const cartBackground =
        document.getElementById("cart-background");


    if (cartDrawer) {

        cartDrawer.classList.remove("active");

    }


    if (cartBackground) {

        cartBackground.classList.remove("active");

    }

}


/* =========================================================
   GO TO CHECKOUT
   ========================================================= */

function goToCheckout() {

    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your bag is currently empty."
        );

        return;

    }


    /*
       Make absolutely sure the correct prices
       are saved before going to checkout.
    */

    cart.forEach(item => {

        if (
            PRODUCT_PRICES[item.name] !== undefined
        ) {

            item.price =
                PRODUCT_PRICES[item.name];

        }

    });


    saveCart(cart);


    window.location.href =
        "checkout.html";

}


/* =========================================================
   ADDED TO CART MESSAGE
   ========================================================= */

function showAddedMessage(productName) {

    const oldMessage =
        document.querySelector(
            ".cart-added-message"
        );


    if (oldMessage) {
        oldMessage.remove();
    }


    const message =
        document.createElement("div");


    message.className =
        "cart-added-message";


    message.textContent =
        productName + " added to your bag";


    document.body.appendChild(message);


    setTimeout(() => {

        message.classList.add("show");

    }, 10);


    setTimeout(() => {

        message.classList.remove("show");

    }, 1800);


    setTimeout(() => {

        message.remove();

    }, 2200);

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobile-menu");


    if (!menu) {
        return;
    }


    menu.classList.toggle("active");

}


/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {

    const overlay =
        document.getElementById("search-overlay");


    if (overlay) {

        overlay.classList.add("active");

    }


    const searchInput =
        document.getElementById("site-search");


    if (searchInput) {

        setTimeout(() => {

            searchInput.focus();

        }, 200);

    }

}


function closeSearch() {

    const overlay =
        document.getElementById("search-overlay");


    if (overlay) {

        overlay.classList.remove("active");

    }

}


/* =========================================================
   SEARCH PRODUCTS
   ========================================================= */

function searchProducts() {

    const input =
        document.getElementById("site-search");


    const results =
        document.getElementById("search-results");


    if (!input || !results) {
        return;
    }


    const searchTerm =
        input.value
            .toLowerCase()
            .trim();


    if (searchTerm === "") {

        results.innerHTML = "";

        return;

    }


    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    let found = 0;


    results.innerHTML = "";


    products.forEach(product => {

        const name =
            product.dataset.name ||
            product.querySelector("h3")?.textContent ||
            "";


        if (
            name
                .toLowerCase()
                .includes(searchTerm)
        ) {

            const price =
                PRODUCT_PRICES[name] ||
                Number(product.dataset.price) ||
                0;


            results.innerHTML += `

                <div class="search-result">

                    <strong>
                        ${name}
                    </strong>

                    <span>
                        KSh ${price.toLocaleString()}
                    </span>

                </div>

            `;


            found++;

        }

    });


    if (found === 0) {

        results.innerHTML = `

            <p>
                No products found.
            </p>

        `;

    }

}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(button) {

    button.classList.toggle("active");


    if (
        button.classList.contains("active")
    ) {

        button.textContent = "♥";

    } else {

        button.textContent = "♡";

    }

}


function openWishlist() {

    alert(
        "Your wishlist feature is coming soon."
    );

}


/* =========================================================
   ACCOUNT
   ========================================================= */

function openAccount() {

    alert(
        "Account features are coming soon."
    );

}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function subscribe(event) {

    event.preventDefault();


    const email =
        document.getElementById("email");


    if (!email) {
        return;
    }


    alert(
        "Thank you for joining the Béni Carmel Collective."
    );


    email.value = "";

}


/* =========================================================
   SHOP FILTERING
   ========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    const noProducts =
        document.getElementById(
            "no-products"
        );


    if (
        filterButtons.length === 0 ||
        products.length === 0
    ) {

        return;

    }


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                this.classList.add("active");


                const filter =
                    this.dataset.filter;


                let visibleProducts = 0;


                products.forEach(product => {

                    const category =
                        product.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        product.style.display =
                            "";

                        visibleProducts++;

                    } else {

                        product.style.display =
                            "none";

                    }

                });


                if (noProducts) {

                    noProducts.style.display =
                        visibleProducts === 0
                            ? "block"
                            : "none";

                }

            }
        );

    });

}


/* =========================================================
   SORT PRODUCTS
   ========================================================= */

function setupSorting() {

    const sortSelect =
        document.getElementById(
            "sort-products"
        );


    const grid =
        document.getElementById(
            "shop-product-grid"
        );


    if (!sortSelect || !grid) {
        return;
    }


    sortSelect.addEventListener(
        "change",
        function () {

            const products =
                Array.from(
                    grid.querySelectorAll(
                        ".shop-product"
                    )
                );


            const sort =
                this.value;


            if (sort === "price-low") {

                products.sort(
                    (a, b) =>
                        Number(a.dataset.price) -
                        Number(b.dataset.price)
                );

            }


            if (sort === "price-high") {

                products.sort(
                    (a, b) =>
                        Number(b.dataset.price) -
                        Number(a.dataset.price)
                );

            }


            if (sort === "newest") {

                products.sort(
                    (a, b) => {

                        const aNew =
                            a.querySelector(
                                ".product-label"
                            ) !== null;

                        const bNew =
                            b.querySelector(
                                ".product-label"
                            ) !== null;


                        return (
                            Number(bNew) -
                            Number(aNew)
                        );

                    }
                );

            }


            products.forEach(product => {

                grid.appendChild(product);

            });

        }
    );

}


/* =========================================================
   SEARCH EVENT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

        setupFilters();

        setupSorting();


        const searchInput =
            document.getElementById(
                "site-search"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchProducts
            );

        }

    }
);


/* =========================================================
   CLOSE SEARCH WITH ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSearch();

            closeCart();

        }

    }
);
