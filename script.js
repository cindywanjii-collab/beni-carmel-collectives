/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE JAVASCRIPT
   VERSION 2.0
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        name: "BC Beanie Beige",
        displayName: "BC Beanie",
        colour: "Beige",
        category: "headwear",
        price: 500,
        image: "images/beanie-beige.jpg",
        new: true
    },

    {
        name: "BC Beanie Black",
        displayName: "BC Beanie",
        colour: "Black",
        category: "headwear",
        price: 500,
        image: "images/beanie-black.jpg"
    },

    {
        name: "BC Beanie Brown",
        displayName: "BC Beanie",
        colour: "Brown",
        category: "headwear",
        price: 500,
        image: "images/beanie-brown.jpg"
    },

    {
        name: "BC Beanie Burgundy",
        displayName: "BC Beanie",
        colour: "Burgundy",
        category: "headwear",
        price: 500,
        image: "images/beanie-burgundy.jpg",
        new: true
    },

    {
        name: "BC Beanie Cream",
        displayName: "BC Beanie",
        colour: "Cream",
        category: "headwear",
        price: 500,
        image: "images/beanie-cream.jpg"
    },

    {
        name: "BC Bucket Hat Beige",
        displayName: "BC Bucket Hat",
        colour: "Beige",
        category: "headwear",
        price: 700,
        image: "images/bucket-hat-beige.jpg"
    },

    {
        name: "BC Bucket Hat Black",
        displayName: "BC Bucket Hat",
        colour: "Black",
        category: "headwear",
        price: 700,
        image: "images/bucket-hat-black.jpg"
    },

    {
        name: "BC Bucket Hat Burgundy",
        displayName: "BC Bucket Hat",
        colour: "Burgundy",
        category: "headwear",
        price: 700,
        image: "images/bucket-hat-burgundy.jpg"
    },

    {
        name: "BC Bucket Hat White",
        displayName: "BC Bucket Hat",
        colour: "White",
        category: "headwear",
        price: 700,
        image: "images/bucket-hat-white.jpg"
    },

    {
        name: "BC Cap White",
        displayName: "BC Cap",
        colour: "White",
        category: "headwear",
        price: 400,
        image: "images/cap-white.jpg",
        new: true
    },

    {
        name: "BC College Jacket",
        displayName: "BC College Jacket",
        colour: "Signature",
        category: "clothing",
        price: 1500,
        image: "images/college-jacket.jpg",
        new: true
    },

    {
        name: "BC Denim Jacket",
        displayName: "BC Denim Jacket",
        colour: "Blue",
        category: "denim",
        price: 1300,
        image: "images/denim-jacket-1.jpg"
    },

    {
        name: "BC Denim Jacket II",
        displayName: "BC Denim Jacket",
        colour: "Washed Blue",
        category: "denim",
        price: 1300,
        image: "images/denim-jacket-2.jpg"
    },

    {
        name: "BC Hoodie Black",
        displayName: "BC Hoodie",
        colour: "Black",
        category: "clothing",
        price: 1300,
        image: "images/hoodie-1.jpg",
        new: true
    },

    {
        name: "BC Hoodie Cream",
        displayName: "BC Hoodie",
        colour: "Cream",
        category: "clothing",
        price: 1300,
        image: "images/hoodie-2.jpg"
    },

    {
        name: "BC Jorts Blue",
        displayName: "BC Jorts",
        colour: "Blue",
        category: "denim",
        price: 1000,
        image: "images/jorts-1.jpg",
        new: true
    },

    {
        name: "BC Jorts Dark Blue",
        displayName: "BC Jorts",
        colour: "Dark Blue",
        category: "denim",
        price: 1000,
        image: "images/jorts-dark-blue.jpg"
    },

    {
        name: "BC Jorts Marble Blue",
        displayName: "BC Jorts",
        colour: "Marble Blue",
        category: "denim",
        price: 1000,
        image: "images/jorts-marble-blue.jpg",
        new: true
    },

    {
        name: "BC Jorts Sky Blue",
        displayName: "BC Jorts",
        colour: "Sky Blue",
        category: "denim",
        price: 1000,
        image: "images/jorts-sky-blue.jpg"
    },

    {
        name: "BC Cross Shoulder Bag",
        displayName: "Cross Shoulder Bag",
        colour: "Black",
        category: "accessories",
        price: 800,
        image: "images/shoulder-bag-black-cross.jpg",
        new: true
    },

    {
        name: "BC Shoulder Bag Black",
        displayName: "Shoulder Bag",
        colour: "Black",
        category: "accessories",
        price: 650,
        image: "images/shoulder-bag-black.jpg"
    },

    {
        name: "BC Shoulder Bag Brown",
        displayName: "Shoulder Bag",
        colour: "Brown",
        category: "accessories",
        price: 650,
        image: "images/shoulder-bag-brown.jpg"
    },

    {
        name: "BC Shoulder Bag Orange",
        displayName: "Shoulder Bag",
        colour: "Orange",
        category: "accessories",
        price: 650,
        image: "images/shoulder-bag-orange.jpg"
    },

    {
        name: "BC Shoulder Bag Pink",
        displayName: "Shoulder Bag",
        colour: "Pink",
        category: "accessories",
        price: 650,
        image: "images/shoulder-bag-pink.jpg"
    },

    {
        name: "BC Socks Black",
        displayName: "BC Socks",
        colour: "Black",
        category: "accessories",
        price: 200,
        image: "images/socks-black.jpg"
    },

    {
        name: "BC Socks White",
        displayName: "BC Socks",
        colour: "White",
        category: "accessories",
        price: 200,
        image: "images/socks-white.jpg"
    },

    {
        name: "BC Sweatpants Black",
        displayName: "BC Sweatpants",
        colour: "Black",
        category: "clothing",
        price: 900,
        image: "images/sweatpants-black.jpg"
    },

    {
        name: "BC Sweatpants Burgundy",
        displayName: "BC Sweatpants",
        colour: "Burgundy",
        category: "clothing",
        price: 900,
        image: "images/sweatpants-burgundy.jpg"
    },

    {
        name: "BC Sweatpants Cream",
        displayName: "BC Sweatpants",
        colour: "Cream",
        category: "clothing",
        price: 900,
        image: "images/sweatpants-cream.jpg"
    },

    {
        name: "BC Sweatpants Grey",
        displayName: "BC Sweatpants",
        colour: "Grey",
        category: "clothing",
        price: 900,
        image: "images/sweatpants-grey.jpg"
    },

    {
        name: "BC Graphic Tee",
        displayName: "BC Graphic Tee",
        colour: "Black",
        category: "clothing",
        price: 600,
        image: "images/tee-1.jpg",
        new: true
    },

    {
        name: "BC Graphic Tee II",
        displayName: "BC Graphic Tee",
        colour: "Signature",
        category: "clothing",
        price: 600,
        image: "images/tee-2.jpg"
    },

    {
        name: "BC Graphic Tee III",
        displayName: "BC Graphic Tee",
        colour: "Collection",
        category: "clothing",
        price: 600,
        image: "images/tee-3.jpg"
    },

    {
        name: "BC Wide Leg Jeans",
        displayName: "Wide-Leg Jeans",
        colour: "Blue",
        category: "denim",
        price: 1000,
        image: "images/wide-leg-jeans-blue.jpg",
        new: true
    },

    {
        name: "BC Silver Cross Necklace",
        displayName: "Cross Necklace",
        colour: "Silver",
        category: "accessories",
        price: 500,
        image: "images/cross-necklace-silver.jpg",
        new: true
    }

];


/* =========================================================
   CART STORAGE
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("beniCarmelCart")
) || [];


function saveCart() {

    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(name, price, image = "") {

    const existingProduct = cart.find(
        item => item.name === name
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    cart.splice(index, 1);

    saveCart();

    updateCart();

}


/* =========================================================
   INCREASE QUANTITY
========================================================= */

function increaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity += 1;

    saveCart();

    updateCart();

}


/* =========================================================
   DECREASE QUANTITY
========================================================= */

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    updateCart();

}


/* =========================================================
   CART TOTAL
========================================================= */

function calculateCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.price) *
            Number(item.quantity),
        0
    );

}


/* =========================================================
   CART COUNT
========================================================= */

function calculateCartCount() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.quantity),
        0
    );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items") ||
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cart-total") ||
        document.getElementById("cartTotal");


    const cartCount =
        document.getElementById("cart-count") ||
        document.getElementById("cartCount");


    /* CART COUNT */

    if (cartCount) {

        cartCount.textContent =
            calculateCartCount();

    }


    /* CART TOTAL */

    if (cartTotal) {

        cartTotal.textContent =
            "KSh " +
            calculateCartTotal().toLocaleString();

    }


    if (!cartItems) {

        updateCheckoutSummary();

        return;

    }


    /* EMPTY CART */

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your bag is currently empty.</p>
                <button
                    onclick="closeCart()"
                    class="continue-shopping-button"
                >
                    CONTINUE SHOPPING
                </button>
            </div>
        `;

        updateCheckoutSummary();

        return;

    }


    /* CART ITEMS */

    cartItems.innerHTML = cart.map(
        (item, index) => `

        <div class="cart-item">

            ${
                item.image
                    ? `
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="cart-item-image"
                    >
                    `
                    : ""
            }

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    KSh ${Number(item.price).toLocaleString()}
                </p>

                <div class="cart-item-controls">

                    <button
                        onclick="decreaseQuantity(${index})"
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})"
                        aria-label="Increase quantity"
                    >
                        +
                    </button>

                </div>

            </div>

            <div class="cart-item-right">

                <strong>
                    KSh ${
                        (
                            item.price *
                            item.quantity
                        ).toLocaleString()
                    }
                </strong>

                <button
                    class="remove-cart-item"
                    onclick="removeFromCart(${index})"
                    aria-label="Remove item"
                >
                    ×
                </button>

            </div>

        </div>

        `
    ).join("");


    updateCheckoutSummary();

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    const drawer =
        document.getElementById("cart-drawer") ||
        document.getElementById("cartDrawer");


    const background =
        document.getElementById("cart-background") ||
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.add("active");

    }


    if (background) {

        background.classList.add("active");

    }


    document.body.classList.add("no-scroll");

    updateCart();

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    const drawer =
        document.getElementById("cart-drawer") ||
        document.getElementById("cartDrawer");


    const background =
        document.getElementById("cart-background") ||
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.remove("active");

    }


    if (background) {

        background.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   CHECKOUT
========================================================= */

function goToCheckout() {

    if (cart.length === 0) {

        alert(
            "Your bag is empty. Add something before checking out."
        );

        return;

    }


    window.location.href =
        "checkout.html";

}


function openCheckout() {

    if (cart.length === 0) {

        alert("Your bag is empty.");

        return;

    }


    /* If there is a checkout modal on index.html */

    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        updateCheckoutSummary();

        closeCart();

        modal.classList.add("active");

        document.body.classList.add("no-scroll");

        return;

    }


    /* Otherwise use checkout.html */

    goToCheckout();

}


function closeCheckout() {

    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        modal.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function calculateShipping() {

    const subtotal =
        calculateCartTotal();


    /*
       FREE DELIVERY ABOVE KES 10,000
    */

    if (subtotal === 0) {

        return 0;

    }


    if (subtotal >= 10000) {

        return 0;

    }


    /*
       Standard Kenya delivery
    */

    return 300;

}


function updateCheckoutSummary() {

    const checkoutItems =
        document.getElementById("checkoutItems");


    const checkoutSubtotal =
        document.getElementById("checkoutSubtotal");


    const checkoutShipping =
        document.getElementById("checkoutShipping");


    const checkoutTotal =
        document.getElementById("checkoutTotal");


    if (checkoutSubtotal) {

        checkoutSubtotal.textContent =
            "KSh " +
            calculateCartTotal().toLocaleString();

    }


    if (checkoutShipping) {

        checkoutShipping.textContent =
            calculateShipping() === 0
                ? "FREE"
                : "KSh " +
                  calculateShipping().toLocaleString();

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            "KSh " +
            (
                calculateCartTotal() +
                calculateShipping()
            ).toLocaleString();

    }


    if (!checkoutItems) {

        return;

    }


    if (cart.length === 0) {

        checkoutItems.innerHTML =
            "<p>Your order is empty.</p>";

        return;

    }


    checkoutItems.innerHTML =
        cart.map(
            item => `

            <div class="checkout-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        Quantity: ${item.quantity}
                    </p>

                </div>

                <strong>
                    KSh ${
                        (
                            item.price *
                            item.quantity
                        ).toLocaleString()
                    }
                </strong>

            </div>

            `
        ).join("");

}


/* =========================================================
   PROCESS CHECKOUT
========================================================= */

function processCheckout(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    const name =
        document.getElementById("customerName")?.value.trim();


    const email =
        document.getElementById("customerEmail")?.value.trim();


    const phone =
        document.getElementById("customerPhone")?.value.trim();


    const county =
        document.getElementById("customerCounty")?.value.trim();


    const address =
        document.getElementById("customerAddress")?.value.trim();


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


    const payButton =
        document.getElementById("payButton");


    if (payButton) {

        payButton.disabled = true;

        payButton.textContent =
            "PROCESSING...";

    }


    /*
       IMPORTANT:
       This is the FRONT-END checkout flow.
       Real M-PESA STK Push requires a secure backend
       connected to Safaricom Daraja API.
    */

    setTimeout(
        () => {

            showOrderSuccess(
                name,
                phone
            );

        },
        1200
    );

}


/* =========================================================
   ORDER SUCCESS
========================================================= */

function showOrderSuccess(
    customerName,
    customerPhone
) {

    const successModal =
        document.getElementById("successModal");


    const successMessage =
        document.getElementById("successMessage");


    const orderNumber =
        "BC-" +
        Date.now()
            .toString()
            .slice(-6);


    if (successMessage) {

        successMessage.innerHTML = `
            Thank you, <strong>${customerName}</strong>.
            <br><br>
            Your order
            <strong>${orderNumber}</strong>
            has been received.
            <br><br>
            We will contact you on
            <strong>${customerPhone}</strong>
            regarding payment and delivery.
        `;

    }


    if (successModal) {

        successModal.classList.add("active");

    }


    /*
       Clear cart after order submission.
    */

    cart = [];

    saveCart();

    updateCart();

    closeCheckout();

}


function closeSuccess() {

    const modal =
        document.getElementById("successModal");


    if (modal) {

        modal.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");


    window.location.href =
        "shop.html";

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobile-menu") ||
        document.getElementById("mobileMenu");


    if (!menu) {

        return;

    }


    menu.classList.toggle("active");

}


function toggleMobileMenu() {

    toggleMenu();

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    const overlay =
        document.getElementById("search-overlay") ||
        document.getElementById("searchOverlay");


    if (!overlay) {

        return;

    }


    overlay.classList.add("active");

    document.body.classList.add("no-scroll");


    const search =
        document.getElementById("site-search") ||
        document.getElementById("searchInput");


    if (search) {

        setTimeout(
            () => search.focus(),
            100
        );

    }

}


function closeSearch() {

    const overlay =
        document.getElementById("search-overlay") ||
        document.getElementById("searchOverlay");


    if (overlay) {

        overlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   SEARCH PRODUCTS
========================================================= */

function searchProducts() {

    const search =
        document.getElementById("site-search") ||
        document.getElementById("searchInput");


    const results =
        document.getElementById("search-results") ||
        document.getElementById("searchResults");


    if (!search || !results) {

        return;

    }


    const query =
        search.value
            .toLowerCase()
            .trim();


    if (!query) {

        results.innerHTML = "";

        return;

    }


    const matches =
        products.filter(
            product =>
                product.name
                    .toLowerCase()
                    .includes(query) ||
                product.displayName
                    .toLowerCase()
                    .includes(query) ||
                product.colour
                    .toLowerCase()
                    .includes(query) ||
                product.category
                    .toLowerCase()
                    .includes(query)
        );


    if (matches.length === 0) {

        results.innerHTML = `
            <p class="search-empty">
                No products found.
            </p>
        `;

        return;

    }


    results.innerHTML =
        matches
            .slice(0, 8)
            .map(
                product => `

                <button
                    class="search-result"
                    onclick="openProductByName('${product.name.replace(/'/g, "\\'")}')"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <span>

                        <strong>
                            ${product.displayName}
                        </strong>

                        <small>
                            ${product.colour}
                        </small>

                        <b>
                            KSh ${product.price.toLocaleString()}
                        </b>

                    </span>

                </button>

                `
            )
            .join("");

}


/* =========================================================
   SETUP SEARCH
========================================================= */

function setupSearch() {

    const search =
        document.getElementById("site-search") ||
        document.getElementById("searchInput");


    if (!search) {

        return;

    }


    search.addEventListener(
        "input",
        searchProducts
    );

}


/* =========================================================
   WISHLIST
========================================================= */

let wishlist =
    JSON.parse(
        localStorage.getItem(
            "beniCarmelWishlist"
        )
    ) || [];


function saveWishlist() {

    localStorage.setItem(
        "beniCarmelWishlist",
        JSON.stringify(wishlist)
    );

}


function toggleWishlist(button) {

    const product =
        button.closest(".shop-product");


    if (!product) {

        return;

    }


    const name =
        product.dataset.name;


    const index =
        wishlist.indexOf(name);


    if (index === -1) {

        wishlist.push(name);

        button.textContent = "♥";

        button.classList.add(
            "wishlist-active"
        );

    } else {

        wishlist.splice(index, 1);

        button.textContent = "♡";

        button.classList.remove(
            "wishlist-active"
        );

    }


    saveWishlist();

}


/* =========================================================
   LOAD WISHLIST STATE
========================================================= */

function setupWishlistButtons() {

    document
        .querySelectorAll(
            ".wishlist-product"
        )
        .forEach(
            button => {

                const product =
                    button.closest(
                        ".shop-product"
                    );


                if (!product) {

                    return;

                }


                const name =
                    product.dataset.name;


                if (
                    wishlist.includes(name)
                ) {

                    button.textContent = "♥";

                    button.classList.add(
                        "wishlist-active"
                    );

                }

            }
        );

}


/* =========================================================
   WISHLIST
========================================================= */

function openWishlist() {

    if (wishlist.length === 0) {

        alert(
            "Your wishlist is currently empty."
        );

        return;

    }


    alert(
        "Your wishlist contains " +
        wishlist.length +
        " item(s)."
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
        document.getElementById("email") ||
        document.getElementById("newsletterEmail");


    if (!email) {

        return;

    }


    if (!email.value.trim()) {

        alert(
            "Please enter your email address."
        );

        return;

    }


    alert(
        "Thank you for joining the Béni Carmel Collective."
    );


    email.value = "";

}


/* =========================================================
   SHOP FILTERS
========================================================= */

function filterProducts(category) {

    const productsOnPage =
        document.querySelectorAll(
            ".shop-product"
        );


    const productGrid =
        document.getElementById(
            "shop-product-grid"
        );


    const homepageGrid =
        document.getElementById(
            "productGrid"
        );


    let visibleCount = 0;


    productsOnPage.forEach(
        product => {

            const productCategory =
                product.dataset.category;


            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display = "";

                visibleCount++;

            } else {

                product.style.display = "none";

            }

        }
    );


    /*
       Homepage generated products
    */

    if (homepageGrid) {

        renderHomepageProducts(
            category
        );

    }


    /*
       Update product counter
    */

    const productNumber =
        document.getElementById(
            "productNumber"
        );


    if (productNumber) {

        productNumber.textContent =
            visibleCount +
            " PRODUCTS";

    }


    /*
       Update active filter buttons
    */

    document
        .querySelectorAll(
            ".filter-button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter ===
                    category
                );

            }
        );


    /*
       Homepage category buttons
    */

    document
        .querySelectorAll(
            ".categories button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                    category
                );

            }
        );


    const noProducts =
        document.getElementById(
            "no-products"
        );


    if (noProducts) {

        noProducts.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }

}


/* =========================================================
   SHOP FILTER SETUP
========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    filterProducts(
                        this.dataset.filter
                    );

                }
            );

        }
    );


    /*
       Homepage category buttons
    */

    document
        .querySelectorAll(
            ".categories button"
        )
        .forEach(
            button => {

                const text =
                    button.textContent
                        .trim()
                        .toLowerCase();


                let category =
                    button.dataset.category;


                if (!category) {

                    if (text === "all") {

                        category = "all";

                    } else {

                        category = text;

                    }

                }


                button.dataset.category =
                    category;


                button.addEventListener(
                    "click",
                    function () {

                        filterProducts(
                            category
                        );

                    }
                );

            }
        );

}


/* =========================================================
   SORTING
========================================================= */

function setupSorting() {

    const sort =
        document.getElementById(
            "sort-products"
        );


    const grid =
        document.getElementById(
            "shop-product-grid"
        );


    if (!sort || !grid) {

        return;

    }


    sort.addEventListener(
        "change",
        function () {

            const productElements =
                Array.from(
                    grid.querySelectorAll(
                        ".shop-product"
                    )
                );


            if (
                this.value ===
                "price-low"
            ) {

                productElements.sort(
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
                this.value ===
                "price-high"
            ) {

                productElements.sort(
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
                this.value ===
                "newest"
            ) {

                productElements.sort(
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


            productElements.forEach(
                product =>
                    grid.appendChild(
                        product
                    )
            );

        }
    );

}


/* =========================================================
   URL CATEGORY FILTER
========================================================= */

function applyURLCategory() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get("category");


    if (!category) {

        return;

    }


    const validCategories = [
        "clothing",
        "denim",
        "headwear",
        "accessories"
    ];


    if (
        !validCategories.includes(
            category
        )
    ) {

        return;

    }


    filterProducts(category);

}


/* =========================================================
   HOMEPAGE PRODUCTS
========================================================= */

function renderHomepageProducts(
    category = "all"
) {

    const grid =
        document.getElementById(
            "productGrid"
        );


    if (!grid) {

        return;

    }


    let filteredProducts =
        products;


    if (category !== "all") {

        filteredProducts =
            products.filter(
                product =>
                    product.category ===
                    category
            );

    }


    /*
       Show first 12 products on homepage
    */

    filteredProducts =
        filteredProducts.slice(
            0,
            12
        );


    if (
        filteredProducts.length === 0
    ) {

        grid.innerHTML = `
            <div class="no-products">
                <h3>NOTHING HERE YET.</h3>
                <p>Try another category.</p>
            </div>
        `;

        return;

    }


    grid.innerHTML =
        filteredProducts
            .map(
                product => `

                <article
                    class="homepage-product"
                    data-category="${product.category}"
                    data-name="${product.name}"
                >

                    <div class="homepage-product-image">

                        ${
                            product.new
                                ? `
                                <span class="product-label">
                                    NEW
                                </span>
                                `
                                : ""
                        }

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                        <button
                            class="shop-quick-add"
                            onclick="addToCart(
                                '${product.name.replace(/'/g, "\\'")}',
                                ${product.price},
                                '${product.image}'
                            )"
                        >
                            QUICK ADD
                        </button>

                    </div>

                    <div class="homepage-product-info">

                        <h3>
                            ${product.displayName}
                        </h3>

                        <p>
                            ${product.colour}
                        </p>

                        <strong>
                            KSh ${product.price.toLocaleString()}
                        </strong>

                    </div>

                </article>

                `
            )
            .join("");

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductByName(name) {

    const product =
        products.find(
            item => item.name === name
        );


    if (!product) {

        return;

    }


    const modal =
        document.getElementById(
            "productModal"
        );


    const details =
        document.getElementById(
            "productDetails"
        );


    if (!modal || !details) {

        /*
           If no product modal exists,
           simply add to cart.
        */

        addToCart(
            product.name,
            product.price,
            product.image
        );

        return;

    }


    details.innerHTML = `

        <div class="product-detail-layout">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-detail-info">

                ${
                    product.new
                        ? `
                        <span class="product-label">
                            NEW
                        </span>
                        `
                        : ""
                }

                <p class="eyebrow">
                    BÉNI CARMEL COLLECTIVES
                </p>

                <h2>
                    ${product.displayName}
                </h2>

                <p>
                    ${product.colour}
                </p>

                <h3>
                    KSh ${product.price.toLocaleString()}
                </h3>

                <p>
                    A contemporary piece created
                    around faith, identity, culture
                    and expression.
                </p>

                <button
                    class="checkout-button"
                    onclick="addToCart(
                        '${product.name.replace(/'/g, "\\'")}',
                        ${product.price},
                        '${product.image}'
                    ); closeProduct();"
                >
                    ADD TO BAG
                </button>

            </div>

        </div>

    `;


    modal.classList.add("active");

    document.body.classList.add(
        "no-scroll"
    );

}


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


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           ESC closes overlays
        */

        if (
            event.key === "Escape"
        ) {

            closeCart();

            closeSearch();

            closeCheckout();

            closeProduct();

        }

    }
);


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

        setupFilters();

        setupSorting();

        setupSearch();

        setupWishlistButtons();

        applyURLCategory();


        /*
           Render homepage products
           only when productGrid exists.
        */

        if (
            document.getElementById(
                "productGrid"
            )
        ) {

            renderHomepageProducts(
                "all"
            );

        }


        /*
           Update checkout summary
        */

        updateCheckoutSummary();

    }
);
