/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE SCRIPT
   VERSION: UNIFIED CART + SHOP + CHECKOUT
========================================================= */


/* =========================================================
   OFFICIAL PRODUCT PRICES
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
   LEGACY PRODUCT NAMES
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

    if (
        Object.prototype.hasOwnProperty.call(
            PRODUCT_PRICES,
            productName
        )
    ) {
        return PRODUCT_PRICES[productName];
    }

    if (
        Object.prototype.hasOwnProperty.call(
            PRODUCT_ALIASES,
            productName
        )
    ) {
        return PRODUCT_ALIASES[productName];
    }

    const lowerName =
        String(productName)
            .toLowerCase()
            .trim();

    const matchingProduct =
        Object.keys(PRODUCT_PRICES).find(
            name =>
                name.toLowerCase().trim() === lowerName
        );

    if (matchingProduct) {
        return PRODUCT_PRICES[matchingProduct];
    }

    return Number(fallbackPrice) || 0;
}


/* =========================================================
   CART STORAGE
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
            "Could not read cart:",
            error
        );

        cart = [];

    }

    if (!Array.isArray(cart)) {
        cart = [];
    }


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

        existingItem.quantity =
            Number(existingItem.quantity) + 1;

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

    showAddedMessage(productName);

    openCart();

}


/* =========================================================
   CART ELEMENT HELPERS
   Supports BOTH index.html and shop.html
========================================================= */

function getElement(...ids) {

    for (const id of ids) {

        const element =
            document.getElementById(id);

        if (element) {
            return element;
        }

    }

    return null;

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cart = getCart();


    const cartItems =
        getElement(
            "cartItems",
            "cart-items"
        );


    const cartTotal =
        getElement(
            "cartTotal",
            "cart-total"
        );


    const cartCount =
        getElement(
            "cartCount",
            "cart-count"
        );


    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum +
                Number(item.quantity),
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    if (!cartItems) {
        return;
    }


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


    if (cart[index].quantity <= 0) {

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

    const drawer =
        getElement(
            "cartDrawer",
            "cart-drawer"
        );


    const overlay =
        getElement(
            "cartOverlay",
            "cart-background"
        );


    if (drawer) {

        drawer.classList.add(
            "active"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }


    updateCart();

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    const drawer =
        getElement(
            "cartDrawer",
            "cart-drawer"
        );


    const overlay =
        getElement(
            "cartOverlay",
            "cart-background"
        );


    if (drawer) {

        drawer.classList.remove(
            "active"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   GO TO CHECKOUT PAGE
========================================================= */

function goToCheckout() {

    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your bag is currently empty."
        );

        return;

    }


    window.location.href =
        "checkout.html";

}


/* =========================================================
   INDEX PAGE CHECKOUT MODAL
========================================================= */

function openCheckout() {

    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your bag is currently empty."
        );

        return;

    }


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        closeCart();

        modal.classList.add(
            "active"
        );

        updateCheckoutSummary();

    } else {

        goToCheckout();

    }

}


/* =========================================================
   CLOSE CHECKOUT MODAL
========================================================= */

function closeCheckout() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function updateCheckoutSummary() {

    const cart = getCart();


    const items =
        document.getElementById(
            "checkoutItems"
        );


    const subtotalElement =
        document.getElementById(
            "checkoutSubtotal"
        );


    const shippingElement =
        document.getElementById(
            "checkoutShipping"
        );


    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    if (!items) {
        return;
    }


    let subtotal = 0;


    items.innerHTML =

        cart.map(item => {

            const price =
                getOfficialPrice(
                    item.name,
                    item.price
                );


            const quantity =
                Number(item.quantity) || 1;


            const itemTotal =
                price * quantity;


            subtotal += itemTotal;


            return `

                <div class="checkout-item">

                    <span>
                        ${escapeHTML(item.name)}
                        × ${quantity}
                    </span>

                    <strong>
                        KSh ${itemTotal.toLocaleString()}
                    </strong>

                </div>

            `;

        }).join("");


    const shipping =
        subtotal >= 10000
            ? 0
            : 0;


    const total =
        subtotal + shipping;


    if (subtotalElement) {

        subtotalElement.textContent =
            "KSh " +
            subtotal.toLocaleString();

    }


    if (shippingElement) {

        shippingElement.textContent =
            "KSh " +
            shipping.toLocaleString();

    }


    if (totalElement) {

        totalElement.textContent =
            "KSh " +
            total.toLocaleString();

    }

}


/* =========================================================
   PROCESS CHECKOUT
========================================================= */

function processCheckout(event) {

    event.preventDefault();


    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    const name =
        document.getElementById(
            "customerName"
        )?.value.trim();


    const email =
        document.getElementById(
            "customerEmail"
        )?.value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        )?.value.trim();


    const county =
        document.getElementById(
            "customerCounty"
        )?.value.trim();


    const address =
        document.getElementById(
            "customerAddress"
        )?.value.trim();


    if (
        !name ||
        !email ||
        !phone ||
        !county ||
        !address
    ) {

        alert(
            "Please complete all delivery details."
        );

        return;

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    getOfficialPrice(
                        item.name,
                        item.price
                    ) *
                    Number(item.quantity)
                ),
            0
        );


    const order = {

        orderNumber:
            "BC-" +
            Date.now(),

        customer: {

            name: name,

            email: email,

            phone: phone,

            county: county,

            address: address

        },

        paymentMethod:
            "M-PESA",

        products:
            cart,

        total:
            total,

        date:
            new Date().toISOString()

    };


    localStorage.setItem(
        "beniCarmelLastOrder",
        JSON.stringify(order)
    );


    /*
       IMPORTANT:
       This records the order on the browser.
       A real M-PESA STK Push requires
       a secure backend/server.
    */


    const successModal =
        document.getElementById(
            "successModal"
        );


    const successMessage =
        document.getElementById(
            "successMessage"
        );


    if (successMessage) {

        successMessage.textContent =
            `Order ${order.orderNumber} received. ` +
            `Total: KSh ${total.toLocaleString()}. ` +
            `We will contact you to confirm payment.`;

    }


    if (successModal) {

        successModal.classList.add(
            "active"
        );

    }


    localStorage.removeItem(
        "beniCarmelCart"
    );


    updateCart();

    closeCheckout();

}


/* =========================================================
   CHECKOUT PAGE
   Compatible with checkout.html
========================================================= */

function displayCheckout() {

    const cart = getCart();


    const itemsContainer =
        document.getElementById(
            "checkout-items"
        );


    const totalElement =
        document.getElementById(
            "checkout-total"
        );


    if (!itemsContainer) {
        return;
    }


    if (cart.length === 0) {

        itemsContainer.innerHTML = `

            <p>
                Your bag is empty.
            </p>

            <a href="shop.html">
                RETURN TO SHOP
            </a>

        `;


        if (totalElement) {

            totalElement.textContent =
                "KSh 0";

        }

        return;

    }


    let total = 0;


    itemsContainer.innerHTML =

        cart.map(item => {

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

                <div class="checkout-item">

                    <div>

                        <strong>
                            ${escapeHTML(item.name)}
                        </strong>

                        <p>
                            Quantity:
                            ${quantity}
                        </p>

                    </div>

                    <strong>
                        KSh ${itemTotal.toLocaleString()}
                    </strong>

                </div>

            `;

        }).join("");


    if (totalElement) {

        totalElement.textContent =
            "KSh " +
            total.toLocaleString();

    }

}


/* =========================================================
   OLD CHECKOUT PAGE FUNCTION
========================================================= */

function placeOrder(event) {

    event.preventDefault();


    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    const name =
        document.getElementById(
            "customer-name"
        )?.value.trim();


    const email =
        document.getElementById(
            "customer-email"
        )?.value.trim();


    const phone =
        document.getElementById(
            "customer-phone"
        )?.value.trim();


    const location =
        document.getElementById(
            "customer-location"
        )?.value.trim();


    const address =
        document.getElementById(
            "customer-address"
        )?.value.trim();


    const payment =
        document.getElementById(
            "payment-method"
        )?.value;


    if (
        !name ||
        !email ||
        !phone ||
        !location ||
        !address ||
        !payment
    ) {

        alert(
            "Please complete all checkout information."
        );

        return;

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    getOfficialPrice(
                        item.name,
                        item.price
                    ) *
                    Number(item.quantity)
                ),
            0
        );


    const order = {

        orderNumber:
            "BC-" +
            Date.now(),

        customer: {

            name,
            email,
            phone,
            location,
            address,
            payment

        },

        products:
            cart,

        total:
            total,

        date:
            new Date().toISOString()

    };


    localStorage.setItem(
        "beniCarmelLastOrder",
        JSON.stringify(order)
    );


    localStorage.removeItem(
        "beniCarmelCart"
    );


    const success =
        document.getElementById(
            "order-success"
        );


    if (success) {

        success.classList.add(
            "active"
        );

    }


    updateCart();

}


/* =========================================================
   MOBILE MENU
   Supports both versions of your HTML
========================================================= */

function toggleMenu() {

    const menu =
        getElement(
            "mobile-menu",
            "mobileMenu"
        );


    if (menu) {

        menu.classList.toggle(
            "active"
        );

    }

}


function toggleMobileMenu() {

    toggleMenu();

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    const overlay =
        getElement(
            "searchOverlay",
            "search-overlay"
        );


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }


    const input =
        getElement(
            "searchInput",
            "site-search"
        );


    if (input) {

        setTimeout(
            () => input.focus(),
            150
        );

    }

}


function closeSearch() {

    const overlay =
        getElement(
            "searchOverlay",
            "search-overlay"
        );


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   BÉNI CARMEL STORE SEARCH
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


    /* EMPTY SEARCH */

    if (searchTerm === "") {

        results.innerHTML = "";

        return;
    }


    /*
       Use the product database when available.
       Otherwise use the products displayed
       on the shop page.
    */

    let productList = [];


    /* PRODUCT DATABASE FROM product.html */

    if (
        typeof products !== "undefined"
    ) {

        productList =
            Object.entries(products)
                .map(([id, product]) => ({
                    id: id,
                    name: product.name,
                    variant: product.variant,
                    category: product.category,
                    price: product.price,
                    image: product.image
                }));

    }


    /*
       FALLBACK:
       PRODUCTS ON SHOP PAGE
    */

    if (productList.length === 0) {

        const shopProducts =
            document.querySelectorAll(
                ".shop-product"
            );


        shopProducts.forEach(
            product => {

                const name =
                    product.dataset.name ||
                    product.querySelector("h3")?.textContent ||
                    "";


                const price =
                    Number(
                        product.dataset.price || 0
                    );


                const image =
                    product.querySelector("img")?.src ||
                    "";


                productList.push({

                    id: "",

                    name: name,

                    variant:
                        product.querySelector(
                            ".shop-product-info p"
                        )?.textContent || "",

                    category:
                        product.dataset.category || "",

                    price: price,

                    image: image

                });

            }
        );

    }


    /* FILTER PRODUCTS */

    const matches =
        productList.filter(product => {

            const searchableText =
                (
                    product.name +
                    " " +
                    product.variant +
                    " " +
                    product.category
                )
                .toLowerCase();


            return searchableText.includes(
                searchTerm
            );

        });


    /* CLEAR OLD RESULTS */

    results.innerHTML = "";


    /* NO RESULTS */

    if (matches.length === 0) {

        results.innerHTML = `

            <div class="search-empty">

                No products found for
                "<strong>${escapeHTML(searchTerm)}</strong>".

            </div>

        `;

        return;
    }


    /* DISPLAY RESULTS */

    matches.forEach(product => {

        const result =
            document.createElement("div");


        result.className =
            "search-result";


        result.innerHTML = `

            <img
                class="search-result-image"
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                onerror="this.style.display='none'"
            >

            <div class="search-result-info">

                <strong>
                    ${escapeHTML(product.name)}
                    ${product.variant
                        ? " — " +
                          escapeHTML(product.variant)
                        : ""
                    }
                </strong>

                <span>
                    KSh
                    ${Number(product.price).toLocaleString()}
                </span>

            </div>

        `;


        /*
           Clicking a result opens
           the individual product page.
        */

        if (product.id) {

            result.onclick =
                function () {

                    window.location.href =
                        "product.html?product=" +
                        encodeURIComponent(
                            product.id
                        );

                };

        }


        results.appendChild(result);

    });

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


    button.textContent =
        button.classList.contains(
            "active"
        )
            ? "♥"
            : "♡";

}


/* =========================================================
   WISHLIST
========================================================= */

function openWishlist() {

    alert(
        "Wishlist feature coming soon."
    );

}


/* =========================================================
   ACCOUNT
========================================================= */

function openAccount() {

    alert(
        "Account features coming soon."
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
        ) ||
        document.getElementById(
            "newsletterEmail"
        );


    if (!email) {
        return;
    }


    const value =
        email.value.trim();


    if (!value) {
        return;
    }


    localStorage.setItem(
        "beniCarmelNewsletter",
        value
    );


    alert(
        "Thank you for joining the Béni Carmel Collective."
    );


    email.value = "";

}


/* =========================================================
   SHOP FILTERING
========================================================= */

function setupFilters() {

    const buttons =
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


    if (!buttons.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );


                this.classList.add(
                    "active"
                );


                const filter =
                    this.dataset.filter;


                let visible = 0;


                products.forEach(product => {

                    const category =
                        product.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        product.style.display =
                            "";

                        visible++;

                    } else {

                        product.style.display =
                            "none";

                    }

                });


                if (noProducts) {

                    noProducts.style.display =
                        visible === 0
                            ? "block"
                            : "none";

                }

            }
        );

    });

}


/* =========================================================
   APPLY URL CATEGORY FILTER
========================================================= */

function applyURLFilters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get(
            "category"
        );


    if (!category) {
        return;
    }


    const button =
        document.querySelector(
            `.filter-button[data-filter="${category}"]`
        );


    if (button) {

        button.click();

    }

}


/* =========================================================
   SORT PRODUCTS
========================================================= */

function setupSorting() {

    const select =
        document.getElementById(
            "sort-products"
        );


    const grid =
        document.getElementById(
            "shop-product-grid"
        );


    if (!select || !grid) {
        return;
    }


    select.addEventListener(
        "change",
        function () {

            sortProducts(
                this.value
            );

        }
    );


    const params =
        new URLSearchParams(
            window.location.search
        );


    if (
        params.get("sort") ===
        "newest"
    ) {

        select.value =
            "newest";

        sortProducts(
            "newest"
        );

    }

}


function sortProducts(sort) {

    const grid =
        document.getElementById(
            "shop-product-grid"
        );


    if (!grid) {
        return;
    }


    const products =
        Array.from(
            grid.querySelectorAll(
                ".shop-product"
            )
        );


    if (sort === "price-low") {

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


    if (sort === "price-high") {

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

        grid.appendChild(
            product
        );

    });

}


/* =========================================================
   SHOP PRICE SYNC
========================================================= */

function syncShopPrices() {

    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    products.forEach(product => {

        const name =
            product.dataset.name;


        if (!name) {
            return;
        }


        const price =
            getOfficialPrice(
                name,
                product.dataset.price
            );


        product.dataset.price =
            price;


        const priceElement =
            product.querySelector(
                ".shop-product-info strong"
            );


        if (priceElement) {

            priceElement.textContent =
                "KSh " +
                price.toLocaleString();

        }

    });

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function closeProduct() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   SUCCESS MODAL
========================================================= */

function closeSuccess() {

    const modal =
        document.getElementById(
            "successModal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }


    window.location.href =
        "shop.html";

}


/* =========================================================
   ADDED TO CART MESSAGE
========================================================= */

function showAddedMessage(productName) {

    const old =
        document.querySelector(
            ".cart-added-message"
        );


    if (old) {
        old.remove();
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

        getCart();

        syncShopPrices();

        updateCart();

        setupFilters();

        setupSorting();

        applyURLFilters();

        displayCheckout();

        updateCheckoutSummary();

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeSearch();

            closeCart();

            closeCheckout();

            closeProduct();

        }

    }
);
