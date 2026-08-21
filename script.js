/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE SCRIPT
   VERSION: PRICE-SAFE CART SYSTEM
   ========================================================= */


/* =========================================================
   OFFICIAL PRODUCT PRICES
   THESE ARE THE ONLY PRICES THE WEBSITE SHOULD USE
   ========================================================= */

const PRODUCT_PRICES = {

    /* HEADWEAR */

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


    /* CLOTHING */

    "BC College Jacket": 1500,

    "BC Hoodie Black": 1300,
    "BC Hoodie Cream": 1300,

    "BC Sweatpants Black": 900,
    "BC Sweatpants Burgundy": 900,
    "BC Sweatpants Cream": 900,
    "BC Sweatpants Grey": 900,

    "BC Graphic Tee": 600,
    "BC Graphic Tee II": 600,
    "BC Graphic Tee III": 600,


    /* DENIM */

    "BC Denim Jacket": 1300,
    "BC Denim Jacket II": 1300,

    "BC Jorts Blue": 1000,
    "BC Jorts Dark Blue": 1000,
    "BC Jorts Marble Blue": 1000,
    "BC Jorts Sky Blue": 1000,

    "BC Wide Leg Jeans": 1000,


    /* ACCESSORIES */

    "BC Cross Shoulder Bag": 800,

    "BC Shoulder Bag Black": 650,
    "BC Shoulder Bag Brown": 650,
    "BC Shoulder Bag Orange": 650,
    "BC Shoulder Bag Pink": 650,

    "BC Socks Black": 200,
    "BC Socks White": 200,

    "BC Silver Cross Necklace": 500
};


/* =========================================================
   LEGACY / ALTERNATIVE PRODUCT NAMES
   This prevents old product names from carrying old prices.
   ========================================================= */

const PRODUCT_ALIASES = {

    "BC Jorts": 1000,

    "BC Hoodie": 1300,

    "BC Hoodie 01": 1300,
    "BC Hoodie 02": 1300,

    "BC Denim": 1300,

    "BC Wide-Leg Jeans": 1000,

    "BC Graphic Tee": 600,

    "BC Sweatpants": 900,

    "BC Beanie": 500,

    "BC Bucket Hat": 700,

    "BC Cap": 400,

    "BC Shoulder Bag": 650

};


/* =========================================================
   GET OFFICIAL PRICE
   ========================================================= */

function getOfficialPrice(productName, fallbackPrice = 0) {

    if (!productName) {
        return Number(fallbackPrice) || 0;
    }


    /* Exact product name */

    if (
        Object.prototype.hasOwnProperty.call(
            PRODUCT_PRICES,
            productName
        )
    ) {

        return PRODUCT_PRICES[productName];

    }


    /* Legacy / alternative product name */

    if (
        Object.prototype.hasOwnProperty.call(
            PRODUCT_ALIASES,
            productName
        )
    ) {

        return PRODUCT_ALIASES[productName];

    }


    /* Try matching a product name inside the official list */

    const lowerName =
        productName
            .toLowerCase()
            .trim();


    const matchingProduct =
        Object.keys(PRODUCT_PRICES).find(
            officialName =>
                officialName
                    .toLowerCase()
                    .trim() === lowerName
        );


    if (matchingProduct) {

        return PRODUCT_PRICES[matchingProduct];

    }


    /*
       IMPORTANT:
       Only use fallback when the product genuinely
       does not exist in our official price list.
    */

    return Number(fallbackPrice) || 0;

}


/* =========================================================
   GET CART
   ========================================================= */

function getCart() {

    let cart = [];

    try {

        cart =
            JSON.parse(
                localStorage.getItem(
                    "beniCarmelCart"
                )
            ) || [];

    } catch (error) {

        console.error(
            "Could not read Béni Carmel cart:",
            error
        );

        cart = [];

    }


    if (!Array.isArray(cart)) {

        cart = [];

    }


    /*
       IMPORTANT:

       Every existing cart item is recalculated
       using the official Béni Carmel price.

       This fixes old prices saved in localStorage.
    */

    cart = cart.map(item => {

        const price =
            getOfficialPrice(
                item.name,
                item.price
            );


        return {

            ...item,

            price: price,

            quantity:
                Math.max(
                    1,
                    Number(item.quantity) || 1
                )

        };

    });


    saveCart(cart);


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
       NEVER trust the price coming from an old button,
       old HTML or old JavaScript.

       Always use the official price table.
    */

    const officialPrice =
        getOfficialPrice(
            productName,
            productPrice
        );


    const existingItem =
        cart.find(
            item =>
                item.name === productName
        );


    if (existingItem) {

        existingItem.quantity += 1;

        existingItem.price =
            officialPrice;

    } else {

        cart.push({

            name: productName,

            price: officialPrice,

            quantity: 1

        });

    }


    saveCart(cart);


    updateCart();


    openCart();


    showAddedMessage(
        productName
    );

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const cart = getCart();


    const cartItems =
        document.getElementById(
            "cart-items"
        );


    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    const cartCount =
        document.getElementById(
            "cart-count"
        );


    if (cartCount) {

        const totalQuantity =
            cart.reduce(
                (sum, item) =>
                    sum + Number(item.quantity),
                0
            );


        cartCount.textContent =
            totalQuantity;

    }


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

            cartTotal.textContent =
                "KSh 0";

        }


        return;

    }


    let total = 0;


    cartItems.innerHTML =
        cart.map(
            (item, index) => {

                const price =
                    getOfficialPrice(
                        item.name,
                        item.price
                    );


                const quantity =
                    Number(item.quantity) || 1;


                const itemTotal =
                    price * quantity;


                total += itemTotal;


                return `

                    <div class="cart-item">

                        <div class="cart-item-info">

                            <strong>
                                ${escapeHTML(item.name)}
                            </strong>

                            <p>
                                KSh ${price.toLocaleString()}
                            </p>


                            <div class="cart-quantity">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${index}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${quantity}
                                </span>

                                <button
                                    type="button"
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
                                type="button"
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

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(index, change) {

    const cart = getCart();


    if (!cart[index]) {

        return;

    }


    cart[index].quantity =
        Number(cart[index].quantity) +
        Number(change);


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

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


    cart.splice(
        index,
        1
    );


    saveCart(cart);


    updateCart();

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    const cartDrawer =
        document.getElementById(
            "cart-drawer"
        );


    const cartBackground =
        document.getElementById(
            "cart-background"
        );


    if (cartDrawer) {

        cartDrawer.classList.add(
            "active"
        );

    }


    if (cartBackground) {

        cartBackground.classList.add(
            "active"
        );

    }


    updateCart();

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart() {

    const cartDrawer =
        document.getElementById(
            "cart-drawer"
        );


    const cartBackground =
        document.getElementById(
            "cart-background"
        );


    if (cartDrawer) {

        cartDrawer.classList.remove(
            "active"
        );

    }


    if (cartBackground) {

        cartBackground.classList.remove(
            "active"
        );

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
       Final price security check before checkout.
    */

    cart.forEach(item => {

        item.price =
            getOfficialPrice(
                item.name,
                item.price
            );

    });


    saveCart(cart);


    window.location.href =
        "checkout.html";

}


/* =========================================================
   SHOW ADDED MESSAGE
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
        document.createElement(
            "div"
        );


    message.className =
        "cart-added-message";


    message.textContent =
        productName +
        " added to your bag";


    document.body.appendChild(
        message
    );


    setTimeout(
        () => {

            message.classList.add(
                "show"
            );

        },
        10
    );


    setTimeout(
        () => {

            message.classList.remove(
                "show"
            );

        },
        1800
    );


    setTimeout(
        () => {

            message.remove();

        },
        2200
    );

}


/* =========================================================
   FORCE SHOP PRICES TO OFFICIAL PRICES
   ========================================================= */

function syncShopPrices() {

    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    if (!products.length) {

        return;

    }


    products.forEach(product => {

        const productName =
            product.dataset.name;


        if (!productName) {

            return;

        }


        const officialPrice =
            getOfficialPrice(
                productName,
                product.dataset.price
            );


        /*
           Update data-price.
        */

        product.dataset.price =
            officialPrice;


        /*
           Update visible price.
        */

        const priceElement =
            product.querySelector(
                ".shop-product-info strong"
            );


        if (priceElement) {

            priceElement.textContent =
                "KSh " +
                officialPrice.toLocaleString();

        }

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById(
            "mobile-menu"
        );


    if (!menu) {

        return;

    }


    menu.classList.toggle(
        "active"
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {

    const overlay =
        document.getElementById(
            "search-overlay"
        );


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }


    const searchInput =
        document.getElementById(
            "site-search"
        );


    if (searchInput) {

        setTimeout(
            () => {

                searchInput.focus();

            },
            200
        );

    }

}


function closeSearch() {

    const overlay =
        document.getElementById(
            "search-overlay"
        );


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   SEARCH PRODUCTS
   ========================================================= */

function searchProducts() {

    const input =
        document.getElementById(
            "site-search"
        );


    const results =
        document.getElementById(
            "search-results"
        );


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
            product.querySelector(
                "h3"
            )?.textContent ||
            "";


        if (
            name
                .toLowerCase()
                .includes(searchTerm)
        ) {

            const price =
                getOfficialPrice(
                    name,
                    product.dataset.price
                );


            results.innerHTML += `

                <div class="search-result">

                    <strong>
                        ${escapeHTML(name)}
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

    if (!button) {

        return;

    }


    button.classList.toggle(
        "active"
    );


    if (
        button.classList.contains(
            "active"
        )
    ) {

        button.textContent =
            "♥";

    } else {

        button.textContent =
            "♡";

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
        document.getElementById(
            "email"
        );


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


    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    this.classList.add(
                        "active"
                    );


                    const filter =
                        this.dataset.filter;


                    let visibleProducts =
                        0;


                    products.forEach(
                        product => {

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

                        }
                    );


                    if (noProducts) {

                        noProducts.style.display =
                            visibleProducts === 0
                                ? "block"
                                : "none";

                    }

                }
            );

        }
    );

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


            if (
                sort === "price-low"
            ) {

                products.sort(
                    (a, b) =>
                        Number(
                            a.dataset.price
                        ) -
                        Number(
                            b.dataset.price
                        )
                );

            }


            if (
                sort === "price-high"
            ) {

                products.sort(
                    (a, b) =>
                        Number(
                            b.dataset.price
                        ) -
                        Number(
                            a.dataset.price
                        )
                );

            }


            if (
                sort === "newest"
            ) {

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


            products.forEach(
                product => {

                    grid.appendChild(
                        product
                    );

                }
            );

        }
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           First correct old cart prices.
        */

        getCart();


        /*
           Then correct visible shop prices.
        */

        syncShopPrices();


        /*
           Update cart.
        */

        updateCart();


        /*
           Filters.
        */

        setupFilters();


        /*
           Sorting.
        */

        setupSorting();


        /*
           Search.
        */

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
   CLOSE SEARCH / CART WITH ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeSearch();

            closeCart();

        }

    }
);
