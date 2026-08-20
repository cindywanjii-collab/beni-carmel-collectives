/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE JAVASCRIPT
   Works with index.html + shop.html + checkout.html
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        name: "BC Beanie Beige",
        displayName: "BC Beanie",
        color: "Beige",
        price: 500,
        category: "headwear",
        image: "images/beanie-beige.jpg",
        newest: true
    },

    {
        name: "BC Beanie Black",
        displayName: "BC Beanie",
        color: "Black",
        price: 500,
        category: "headwear",
        image: "images/beanie-black.jpg"
    },

    {
        name: "BC Beanie Brown",
        displayName: "BC Beanie",
        color: "Brown",
        price: 500,
        category: "headwear",
        image: "images/beanie-brown.jpg"
    },

    {
        name: "BC Beanie Burgundy",
        displayName: "BC Beanie",
        color: "Burgundy",
        price: 500,
        category: "headwear",
        image: "images/beanie-burgundy.jpg",
        newest: true
    },

    {
        name: "BC Beanie Cream",
        displayName: "BC Beanie",
        color: "Cream",
        price: 500,
        category: "headwear",
        image: "images/beanie-cream.jpg"
    },

    {
        name: "BC Bucket Hat Beige",
        displayName: "BC Bucket Hat",
        color: "Beige",
        price: 700,
        category: "headwear",
        image: "images/bucket-hat-beige.jpg"
    },

    {
        name: "BC Bucket Hat Black",
        displayName: "BC Bucket Hat",
        color: "Black",
        price: 700,
        category: "headwear",
        image: "images/bucket-hat-black.jpg"
    },

    {
        name: "BC Bucket Hat Burgundy",
        displayName: "BC Bucket Hat",
        color: "Burgundy",
        price: 700,
        category: "headwear",
        image: "images/bucket-hat-burgundy.jpg"
    },

    {
        name: "BC Bucket Hat White",
        displayName: "BC Bucket Hat",
        color: "White",
        price: 700,
        category: "headwear",
        image: "images/bucket-hat-white.jpg"
    },

    {
        name: "BC Cap White",
        displayName: "BC Cap",
        color: "White",
        price: 400,
        category: "headwear",
        image: "images/cap-white.jpg",
        newest: true
    },

    {
        name: "BC College Jacket",
        displayName: "BC College Jacket",
        color: "Signature",
        price: 1500,
        category: "clothing",
        image: "images/college-jacket.jpg",
        newest: true
    },

    {
        name: "BC Denim Jacket",
        displayName: "BC Denim Jacket",
        color: "Blue",
        price: 1300,
        category: "denim",
        image: "images/denim-jacket-1.jpg"
    },

    {
        name: "BC Denim Jacket II",
        displayName: "BC Denim Jacket",
        color: "Washed Blue",
        price: 1300,
        category: "denim",
        image: "images/denim-jacket-2.jpg"
    },

    {
        name: "BC Hoodie Black",
        displayName: "BC Hoodie",
        color: "Black",
        price: 1300,
        category: "clothing",
        image: "images/hoodie-1.jpg",
        newest: true
    },

    {
        name: "BC Hoodie Cream",
        displayName: "BC Hoodie",
        color: "Cream",
        price: 1300,
        category: "clothing",
        image: "images/hoodie-2.jpg"
    },

    {
        name: "BC Jorts",
        displayName: "BC Jorts",
        color: "Blue",
        price: 1000,
        category: "denim",
        image: "images/jorts-1.jpg",
        newest: true
    },

    {
        name: "BC Jorts Dark Blue",
        displayName: "BC Jorts",
        color: "Dark Blue",
        price: 1000,
        category: "denim",
        image: "images/jorts-dark-blue.jpg"
    },

    {
        name: "BC Jorts Marble Blue",
        displayName: "BC Jorts",
        color: "Marble Blue",
        price: 1000,
        category: "denim",
        image: "images/jorts-marble-blue.jpg",
        newest: true
    },

    {
        name: "BC Jorts Sky Blue",
        displayName: "BC Jorts",
        color: "Sky Blue",
        price: 1000,
        category: "denim",
        image: "images/jorts-sky-blue.jpg"
    },

    {
        name: "BC Cross Shoulder Bag",
        displayName: "Cross Shoulder Bag",
        color: "Black",
        price: 800,
        category: "accessories",
        image: "images/shoulder-bag-black-cross.jpg",
        newest: true
    },

    {
        name: "BC Shoulder Bag Black",
        displayName: "Shoulder Bag",
        color: "Black",
        price: 650,
        category: "accessories",
        image: "images/shoulder-bag-black.jpg"
    },

    {
        name: "BC Shoulder Bag Brown",
        displayName: "Shoulder Bag",
        color: "Brown",
        price: 650,
        category: "accessories",
        image: "images/shoulder-bag-brown.jpg"
    },

    {
        name: "BC Shoulder Bag Orange",
        displayName: "Shoulder Bag",
        color: "Orange",
        price: 650,
        category: "accessories",
        image: "images/shoulder-bag-orange.jpg"
    },

    {
        name: "BC Shoulder Bag Pink",
        displayName: "Shoulder Bag",
        color: "Pink",
        price: 650,
        category: "accessories",
        image: "images/shoulder-bag-pink.jpg"
    },

    {
        name: "BC Socks Black",
        displayName: "BC Socks",
        color: "Black",
        price: 200,
        category: "accessories",
        image: "images/socks-black.jpg"
    },

    {
        name: "BC Socks White",
        displayName: "BC Socks",
        color: "White",
        price: 200,
        category: "accessories",
        image: "images/socks-white.jpg"
    },

    {
        name: "BC Sweatpants Black",
        displayName: "BC Sweatpants",
        color: "Black",
        price: 900,
        category: "clothing",
        image: "images/sweatpants-black.jpg"
    },

    {
        name: "BC Sweatpants Burgundy",
        displayName: "BC Sweatpants",
        color: "Burgundy",
        price: 900,
        category: "clothing",
        image: "images/sweatpants-burgundy.jpg"
    },

    {
        name: "BC Sweatpants Cream",
        displayName: "BC Sweatpants",
        color: "Cream",
        price: 900,
        category: "clothing",
        image: "images/sweatpants-cream.jpg"
    },

    {
        name: "BC Sweatpants Grey",
        displayName: "BC Sweatpants",
        color: "Grey",
        price: 900,
        category: "clothing",
        image: "images/sweatpants-grey.jpg"
    },

    {
        name: "BC Graphic Tee",
        displayName: "BC Graphic Tee",
        color: "Black",
        price: 600,
        category: "clothing",
        image: "images/tee-1.jpg",
        newest: true
    },

    {
        name: "BC Graphic Tee II",
        displayName: "BC Graphic Tee",
        color: "Signature",
        price: 600,
        category: "clothing",
        image: "images/tee-2.jpg"
    },

    {
        name: "BC Graphic Tee III",
        displayName: "BC Graphic Tee",
        color: "Collection",
        price: 600,
        category: "clothing",
        image: "images/tee-3.jpg"
    },

    {
        name: "BC Wide Leg Jeans",
        displayName: "Wide-Leg Jeans",
        color: "Blue",
        price: 1000,
        category: "denim",
        image: "images/wide-leg-jeans-blue.jpg",
        newest: true
    },

    {
        name: "BC Silver Cross Necklace",
        displayName: "Cross Necklace",
        color: "Silver",
        price: 500,
        category: "accessories",
        image: "images/cross-necklace-silver.jpg",
        newest: true
    }

];


/* =========================================================
   CART
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("beniCarmelCart")
    ) || [];


function saveCart() {

    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );

}


function addToCart(name, price) {

    const existingProduct =
        cart.find(
            item => item.name === name
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            name: name,

            price: Number(price),

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity += 1;

    saveCart();

    updateCart();

}


function decreaseQuantity(index) {

    if (!cart[index]) return;


    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    updateCart();

}


function calculateCartTotal() {

    return cart.reduce(

        (total, item) =>

            total +
            Number(item.price) *
            Number(item.quantity),

        0

    );

}


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


    const count =
        calculateCartCount();


    const total =
        calculateCartTotal();


    if (cartCount) {

        cartCount.textContent = count;

    }


    if (cartTotal) {

        cartTotal.textContent =
            "KES " +
            total.toLocaleString();

    }


    if (!cartItems) {

        return;

    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <p>
                    Your bag is currently empty.
                </p>

                <button
                    onclick="closeCart()"
                    class="continue-button"
                >
                    CONTINUE SHOPPING
                </button>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = cart.map(

        (item, index) => `

        <div class="cart-item">

            <div class="cart-item-info">

                <h4>
                    ${escapeHTML(item.name)}
                </h4>

                <p>
                    KES ${Number(item.price).toLocaleString()}
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
                    KES ${(
                        Number(item.price) *
                        Number(item.quantity)
                    ).toLocaleString()}
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

}


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

function openCheckout() {

    if (cart.length === 0) {

        alert("Your bag is empty.");

        return;

    }


    const checkoutModal =
        document.getElementById("checkoutModal");


    if (checkoutModal) {

        closeCart();

        checkoutModal.classList.add("active");

        updateCheckoutSummary();

        document.body.classList.add("no-scroll");

        return;

    }


    window.location.href =
        "checkout.html";

}


function closeCheckout() {

    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        modal.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


function goToCheckout() {

    openCheckout();

}


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function updateCheckoutSummary() {

    const itemsContainer =
        document.getElementById("checkoutItems");


    const subtotalElement =
        document.getElementById("checkoutSubtotal");


    const shippingElement =
        document.getElementById("checkoutShipping");


    const totalElement =
        document.getElementById("checkoutTotal");


    const subtotal =
        calculateCartTotal();


    /*
       Free delivery over KES 10,000.
       Otherwise KES 300.
    */

    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 10000
                ? 0
                : 300;


    const total =
        subtotal + shipping;


    if (itemsContainer) {

        if (cart.length === 0) {

            itemsContainer.innerHTML =
                "<p>Your order is empty.</p>";

        } else {

            itemsContainer.innerHTML =
                cart.map(

                    item => `

                    <div class="checkout-item">

                        <div>

                            <strong>
                                ${escapeHTML(item.name)}
                            </strong>

                            <p>
                                Qty: ${item.quantity}
                            </p>

                        </div>

                        <strong>
                            KES ${(
                                Number(item.price) *
                                Number(item.quantity)
                            ).toLocaleString()}
                        </strong>

                    </div>

                    `

                ).join("");

        }

    }


    if (subtotalElement) {

        subtotalElement.textContent =
            "KES " +
            subtotal.toLocaleString();

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : "KES " +
                  shipping.toLocaleString();

    }


    if (totalElement) {

        totalElement.textContent =
            "KES " +
            total.toLocaleString();

    }

}


/* =========================================================
   PROCESS M-PESA CHECKOUT
========================================================= */

async function processCheckout(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert("Your bag is empty.");

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
            "Please complete all delivery information."
        );

        return;

    }


    const subtotal =
        calculateCartTotal();


    const shipping =
        subtotal >= 10000
            ? 0
            : 300;


    const total =
        subtotal + shipping;


    const payButton =
        document.getElementById("payButton");


    if (payButton) {

        payButton.disabled = true;

        payButton.textContent =
            "PROCESSING...";

    }


    try {

        const response =
            await fetch(
                "/api/stkpush",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            name: name,

                            email: email,

                            phone: phone,

                            county: county,

                            address: address,

                            amount: total,

                            items: cart

                        })

                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(

                data.error ||
                "M-PESA payment request failed."

            );

        }


        if (data.success) {

            showSuccess(

                data.message ||
                "An M-PESA payment prompt has been sent to your phone."

            );

        } else {

            throw new Error(
                "Payment request could not be completed."
            );

        }


    } catch (error) {

        console.error(
            "CHECKOUT ERROR:",
            error
        );


        alert(
            error.message ||
            "Something went wrong while processing your payment."
        );


    } finally {

        if (payButton) {

            payButton.disabled = false;

            payButton.textContent =
                "PAY WITH M-PESA";

        }

    }

}


/* =========================================================
   SUCCESS MODAL
========================================================= */

function showSuccess(message) {

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
            message;

    }


    if (successModal) {

        closeCheckout();

        successModal.classList.add("active");

    }


    /*
       We intentionally do NOT immediately
       clear the cart.

       This gives the customer time to
       see the confirmation.

       We clear it after the success modal
       is closed.
    */

}


function closeSuccess() {

    const successModal =
        document.getElementById(
            "successModal"
        );


    if (successModal) {

        successModal.classList.remove(
            "active"
        );

    }


    cart = [];

    saveCart();

    updateCart();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

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


    menu.classList.toggle("active");

}


function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        ) ||
        document.getElementById(
            "mobile-menu"
        );


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
        document.getElementById(
            "search-overlay"
        ) ||
        document.getElementById(
            "searchOverlay"
        );


    if (!overlay) {

        return;

    }


    overlay.classList.add("active");

    document.body.classList.add(
        "no-scroll"
    );


    const input =
        document.getElementById(
            "site-search"
        ) ||
        document.getElementById(
            "searchInput"
        );


    if (input) {

        setTimeout(
            () => input.focus(),
            100
        );

    }

}


function closeSearch() {

    const overlay =
        document.getElementById(
            "search-overlay"
        ) ||
        document.getElementById(
            "searchOverlay"
        );


    if (overlay) {

        overlay.classList.remove("active");

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


function searchProducts() {

    const input =
        document.getElementById(
            "site-search"
        ) ||
        document.getElementById(
            "searchInput"
        );


    const results =
        document.getElementById(
            "search-results"
        ) ||
        document.getElementById(
            "searchResults"
        );


    if (!input || !results) {

        return;

    }


    const query =
        input.value
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
                    .includes(query)

        );


    if (matches.length === 0) {

        results.innerHTML = `

            <p>
                No products found.
            </p>

        `;

        return;

    }


    results.innerHTML =
        matches.map(

            product => `

            <button
                class="search-result"
                onclick="addToCart(
                    '${escapeJS(product.name)}',
                    ${product.price}
                )"
            >

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

                <span>

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <small>
                        KES ${product.price.toLocaleString()}
                    </small>

                </span>

            </button>

            `

        ).join("");

}


function setupSearch() {

    const input =
        document.getElementById(
            "site-search"
        ) ||
        document.getElementById(
            "searchInput"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
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
        button.closest(
            ".shop-product"
        );


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
            "active"
        );

    } else {

        wishlist.splice(index, 1);

        button.textContent = "♡";

        button.classList.remove(
            "active"
        );

    }


    saveWishlist();

}


function openWishlist() {

    if (wishlist.length) {

        alert(

            "Your wishlist contains " +
            wishlist.length +
            " item(s)."

        );

    } else {

        alert(
            "Your wishlist is currently empty."
        );

    }

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


    alert(
        "Thank you for joining the Béni Carmel Collective."
    );


    email.value = "";

}


/* =========================================================
   SHOP FILTERS
========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    const productsOnPage =
        document.querySelectorAll(
            ".shop-product"
        );


    const noProducts =
        document.getElementById(
            "no-products"
        );


    if (!filterButtons.length) {

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


                    let visibleCount = 0;


                    productsOnPage.forEach(

                        product => {

                            const category =
                                product.dataset.category;


                            if (

                                filter === "all" ||
                                category === filter

                            ) {

                                product.style.display =
                                    "";

                                visibleCount++;

                            } else {

                                product.style.display =
                                    "none";

                            }

                        }

                    );


                    if (noProducts) {

                        noProducts.style.display =

                            visibleCount === 0
                                ? "block"
                                : "none";

                    }

                }

            );

        }

    );

}


/* =========================================================
   INDEX PAGE CATEGORY FILTER
========================================================= */

function filterProducts(category) {

    const grid =
        document.getElementById(
            "productGrid"
        );


    if (!grid) {

        /*
           If the user is on the homepage
           but the grid hasn't been generated,
           generate it first.
        */

        renderHomeProducts(category);

        return;

    }


    renderHomeProducts(category);

}


/* =========================================================
   RENDER HOMEPAGE PRODUCTS
========================================================= */

function renderHomeProducts(category = "all") {

    const grid =
        document.getElementById(
            "productGrid"
        );


    if (!grid) {

        return;

    }


    let filteredProducts =
        products;


    if (
        category !== "all" &&
        category !== "tops" &&
        category !== "bottoms" &&
        category !== "outerwear"
    ) {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    /*
       Homepage category mapping.
    */

    if (category === "tops") {

        filteredProducts =
            products.filter(

                product =>

                    product.name
                        .toLowerCase()
                        .includes("tee") ||

                    product.name
                        .toLowerCase()
                        .includes("hoodie")

            );

    }


    if (category === "bottoms") {

        filteredProducts =
            products.filter(

                product =>

                    product.name
                        .toLowerCase()
                        .includes("jorts") ||

                    product.name
                        .toLowerCase()
                        .includes("jeans") ||

                    product.name
                        .toLowerCase()
                        .includes("sweatpants")

            );

    }


    if (category === "outerwear") {

        filteredProducts =
            products.filter(

                product =>

                    product.name
                        .toLowerCase()
                        .includes("jacket")

            );

    }


    grid.innerHTML =
        filteredProducts.map(

            product => `

            <article class="product-card">

                <div class="product-image">

                    ${
                        product.newest
                            ? `
                                <span class="product-label">
                                    NEW
                                </span>
                              `
                            : ""
                    }

                    <button
                        class="product-wishlist"
                        onclick="addWishlistFromHome(
                            '${escapeJS(product.name)}'
                        )"
                        aria-label="Add to wishlist"
                    >
                        ♡
                    </button>

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                    >

                    <button
                        class="quick-add"
                        onclick="addToCart(
                            '${escapeJS(product.name)}',
                            ${product.price}
                        )"
                    >
                        QUICK ADD
                    </button>

                </div>

                <div class="product-info">

                    <h3>
                        ${escapeHTML(product.displayName)}
                    </h3>

                    <p>
                        ${escapeHTML(product.color)}
                    </p>

                    <strong>
                        KES ${product.price.toLocaleString()}
                    </strong>

                </div>

            </article>

            `

        ).join("");


    const productNumber =
        document.getElementById(
            "productNumber"
        );


    if (productNumber) {

        productNumber.textContent =

            filteredProducts.length +
            " PRODUCTS";

    }

}


/* =========================================================
   HOMEPAGE WISHLIST
========================================================= */

function addWishlistFromHome(name) {

    const index =
        wishlist.indexOf(name);


    if (index === -1) {

        wishlist.push(name);

        saveWishlist();

        alert(
            "Added to your wishlist."
        );

    } else {

        wishlist.splice(index, 1);

        saveWishlist();

        alert(
            "Removed from your wishlist."
        );

    }

}


/* =========================================================
   SHOP SORTING
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


            if (
                this.value ===
                "featured"
            ) {

                /*
                   Return to original HTML
                   order by reloading.
                */

                window.location.reload();

                return;

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


    const button =
        document.querySelector(

            `.filter-button[data-filter="${category}"]`

        );


    if (button) {

        button.click();

    }

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
   ESCAPE JAVASCRIPT
========================================================= */

function escapeJS(value) {

    return String(value)

        .replace(
            /\\/g,
            "\\\\"
        )

        .replace(
            /'/g,
            "\\'"
        )

        .replace(
            /"/g,
            '\\"'
        );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(

    "keydown",

    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeCart();

            closeSearch();

            closeCheckout();

        }

    }

);


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        /*
           CART
        */

        updateCart();


        /*
           SHOP PAGE
        */

        setupFilters();

        setupSorting();

        applyURLCategory();


        /*
           SEARCH
        */

        setupSearch();


        /*
           HOMEPAGE
        */

        if (
            document.getElementById(
                "productGrid"
            )
        ) {

            renderHomeProducts("all");

        }


        /*
           CHECKOUT
        */

        updateCheckoutSummary();

    }

);
