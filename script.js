/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   CART STORAGE
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("beniCarmelCart")
) || [];


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(name, price) {

    const existingProduct = cart.find(
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


/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeFromCart(index) {

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
        (total, item) => {

            return total +
                (Number(item.price) *
                Number(item.quantity));

        },
        0
    );

}


/* =========================================================
   CART COUNT
========================================================= */

function calculateCartCount() {

    return cart.reduce(
        (total, item) => {

            return total +
                Number(item.quantity);

        },
        0
    );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    const cartCount =
        document.getElementById("cart-count");

    const indexCartItems =
        document.getElementById("cartItems");

    const indexCartTotal =
        document.getElementById("cartTotal");

    const indexCartCount =
        document.getElementById("cartCount");


    /* CART COUNT — SHOP.HTML */

    if (cartCount) {

        cartCount.textContent =
            calculateCartCount();

    }


    /* CART COUNT — INDEX.HTML */

    if (indexCartCount) {

        indexCartCount.textContent =
            calculateCartCount();

    }


    /* CART TOTAL — SHOP.HTML */

    if (cartTotal) {

        cartTotal.textContent =
            "KSh " +
            calculateCartTotal()
                .toLocaleString();

    }


    /* CART TOTAL — INDEX.HTML */

    if (indexCartTotal) {

        indexCartTotal.textContent =
            "KES " +
            calculateCartTotal()
                .toLocaleString();

    }


    /* CART ITEMS — SHOP.HTML */

    if (cartItems) {

        renderCartItems(cartItems);

    }


    /* CART ITEMS — INDEX.HTML */

    if (indexCartItems) {

        renderCartItems(indexCartItems);

    }

}


/* =========================================================
   RENDER CART ITEMS
========================================================= */

function renderCartItems(container) {

    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `
            <p class="empty-cart">
                Your bag is currently empty.
            </p>
        `;

        return;

    }


    container.innerHTML = cart.map(
        (item, index) => {

            const itemTotal =
                Number(item.price) *
                Number(item.quantity);


            return `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            KSh ${Number(item.price).toLocaleString()}
                        </p>

                    </div>


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


                    <strong class="cart-item-total">

                        KSh ${itemTotal.toLocaleString()}

                    </strong>


                    <button
                        class="remove-cart-item"
                        onclick="removeFromCart(${index})"
                        aria-label="Remove ${item.name}"
                    >
                        ×
                    </button>

                </div>

            `;

        }
    ).join("");

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    const drawer =
        document.getElementById("cart-drawer");

    const background =
        document.getElementById("cart-background");

    const indexDrawer =
        document.getElementById("cartDrawer");

    const indexOverlay =
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.add("active");

    }


    if (background) {

        background.classList.add("active");

    }


    if (indexDrawer) {

        indexDrawer.classList.add("active");

    }


    if (indexOverlay) {

        indexOverlay.classList.add("active");

    }


    document.body.classList.add("no-scroll");

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    const drawer =
        document.getElementById("cart-drawer");

    const background =
        document.getElementById("cart-background");

    const indexDrawer =
        document.getElementById("cartDrawer");

    const indexOverlay =
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.remove("active");

    }


    if (background) {

        background.classList.remove("active");

    }


    if (indexDrawer) {

        indexDrawer.classList.remove("active");

    }


    if (indexOverlay) {

        indexOverlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   GO TO CHECKOUT
========================================================= */

function goToCheckout() {

    if (cart.length === 0) {

        alert(
            "Your bag is empty. Please add an item before checkout."
        );

        return;

    }


    saveCart();

    window.location.href = "checkout.html";

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
   INDEX MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

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

    const indexOverlay =
        document.getElementById("searchOverlay");


    if (overlay) {

        overlay.classList.add("active");

    }


    if (indexOverlay) {

        indexOverlay.classList.add("active");

    }


    document.body.classList.add("no-scroll");


    const search =
        document.getElementById("site-search");

    const indexSearch =
        document.getElementById("searchInput");


    if (search) {

        setTimeout(
            () => search.focus(),
            100
        );

    }


    if (indexSearch) {

        setTimeout(
            () => indexSearch.focus(),
            100
        );

    }

}


/* =========================================================
   CLOSE SEARCH
========================================================= */

function closeSearch() {

    const overlay =
        document.getElementById("search-overlay");

    const indexOverlay =
        document.getElementById("searchOverlay");


    if (overlay) {

        overlay.classList.remove("active");

    }


    if (indexOverlay) {

        indexOverlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   SEARCH PRODUCTS — SHOP PAGE
========================================================= */

function setupSearch() {

    const search =
        document.getElementById("site-search");

    const results =
        document.getElementById("search-results");


    if (!search || !results) {
        return;
    }


    search.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            const products =
                document.querySelectorAll(
                    ".shop-product"
                );


            if (!query) {

                results.innerHTML = "";

                return;

            }


            const matches = [];


            products.forEach(
                product => {

                    const name =
                        (
                            product.dataset.name ||
                            ""
                        ).toLowerCase();


                    const category =
                        (
                            product.dataset.category ||
                            ""
                        ).toLowerCase();


                    if (
                        name.includes(query) ||
                        category.includes(query)
                    ) {

                        matches.push(
                            product.dataset.name
                        );

                    }

                }
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
                    name => `
                        <p
                            class="search-result-item"
                            onclick="searchResultClick('${name.replace(/'/g, "\\'")}')"
                        >
                            ${name}
                        </p>
                    `
                ).join("");

        }
    );

}


/* =========================================================
   SEARCH RESULT CLICK
========================================================= */

function searchResultClick(name) {

    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    products.forEach(
        product => {

            if (
                product.dataset.name === name
            ) {

                product.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                product.style.outline =
                    "2px solid #111";


                setTimeout(
                    () => {

                        product.style.outline =
                            "";

                    },
                    2000
                );

            }

        }
    );


    closeSearch();

}


/* =========================================================
   INDEX SEARCH
========================================================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


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


    const products = [
        {
            name: "BC Beanie",
            category: "headwear"
        },
        {
            name: "BC Bucket Hat",
            category: "headwear"
        },
        {
            name: "BC Cap",
            category: "headwear"
        },
        {
            name: "BC College Jacket",
            category: "clothing"
        },
        {
            name: "BC Denim Jacket",
            category: "denim"
        },
        {
            name: "BC Hoodie",
            category: "clothing"
        },
        {
            name: "BC Jorts",
            category: "denim"
        },
        {
            name: "BC Shoulder Bag",
            category: "accessories"
        },
        {
            name: "BC Socks",
            category: "accessories"
        },
        {
            name: "BC Sweatpants",
            category: "clothing"
        },
        {
            name: "BC Graphic Tee",
            category: "clothing"
        },
        {
            name: "Wide-Leg Jeans",
            category: "denim"
        },
        {
            name: "Cross Necklace",
            category: "accessories"
        }
    ];


    const matches =
        products.filter(
            product =>
                product.name
                    .toLowerCase()
                    .includes(query) ||
                product.category
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
                <p>
                    ${product.name}
                </p>
            `
        ).join("");

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


/* =========================================================
   TOGGLE WISHLIST
========================================================= */

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
   RESTORE WISHLIST
========================================================= */

function restoreWishlistButtons() {

    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    products.forEach(
        product => {

            const name =
                product.dataset.name;


            const button =
                product.querySelector(
                    ".wishlist-product"
                );


            if (!button) {
                return;
            }


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
   OPEN WISHLIST
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
        document.getElementById("email");

    const newsletterEmail =
        document.getElementById(
            "newsletterEmail"
        );


    const input =
        email || newsletterEmail;


    if (!input) {
        return;
    }


    if (!input.value.trim()) {

        alert(
            "Please enter your email address."
        );

        return;

    }


    alert(
        "Thank you for joining the Béni Carmel Collective."
    );


    input.value = "";

}


/* =========================================================
   SHOP FILTERS
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


    if (!filterButtons.length) {
        return;
    }


    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        btn => {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    const filter =
                        this.dataset.filter;


                    let visibleCount = 0;


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
   FILTER PRODUCTS — INDEX PAGE
========================================================= */

function filterProducts(category) {

    if (
        window.location.pathname
            .toLowerCase()
            .includes("shop.html")
    ) {

        const button =
            document.querySelector(
                `.filter-button[data-filter="${category}"]`
            );


        if (button) {

            button.click();

            document.getElementById(
                "shop-product-grid"
            )?.scrollIntoView({
                behavior: "smooth"
            });

        }

        return;

    }


    window.location.href =
        "shop.html?category=" +
        encodeURIComponent(category);

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

            const products =
                Array.from(
                    grid.querySelectorAll(
                        ".shop-product"
                    )
                );


            if (
                this.value === "price-low"
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
                this.value === "price-high"
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
                this.value === "newest"
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
   CHECKOUT PAGE
========================================================= */

function loadCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkout-items"
        );


    const checkoutSubtotal =
        document.getElementById(
            "checkout-subtotal"
        );


    const checkoutShipping =
        document.getElementById(
            "checkout-shipping"
        );


    const checkoutTotal =
        document.getElementById(
            "checkout-total"
        );


    if (
        !checkoutItems &&
        !checkoutSubtotal &&
        !checkoutTotal
    ) {

        return;

    }


    if (cart.length === 0) {

        if (checkoutItems) {

            checkoutItems.innerHTML = `
                <p>
                    Your bag is empty.
                </p>
            `;

        }

        return;

    }


    if (checkoutItems) {

        checkoutItems.innerHTML =
            cart.map(
                item => `

                    <div class="checkout-item">

                        <div>

                            <strong>
                                ${item.name}
                            </strong>

                            <p>
                                Quantity:
                                ${item.quantity}
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


    const subtotal =
        calculateCartTotal();


    const shipping =
        subtotal >= 10000
            ? 0
            : 300;


    const total =
        subtotal + shipping;


    if (checkoutSubtotal) {

        checkoutSubtotal.textContent =
            "KSh " +
            subtotal.toLocaleString();

    }


    if (checkoutShipping) {

        checkoutShipping.textContent =
            shipping === 0
                ? "FREE"
                : "KSh " +
                  shipping.toLocaleString();

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            "KSh " +
            total.toLocaleString();

    }

}


/* =========================================================
   CHECKOUT FORM
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


    if (
        !name ||
        !email ||
        !phone
    ) {

        alert(
            "Please complete all required information."
        );

        return;

    }


    const payButton =
        document.getElementById(
            "payButton"
        );


    if (payButton) {

        payButton.disabled = true;

        payButton.textContent =
            "PROCESSING...";

    }


    /*
       IMPORTANT:
       This is currently a front-end checkout.
       A real M-PESA STK Push requires a secure
       backend/server and Daraja API integration.
    */


    setTimeout(
        () => {

            cart = [];

            saveCart();

            updateCart();


            if (payButton) {

                payButton.disabled = false;

                payButton.textContent =
                    "PAY WITH M-PESA";

            }


            const checkoutModal =
                document.getElementById(
                    "checkoutModal"
                );


            if (checkoutModal) {

                checkoutModal.classList.remove(
                    "active"
                );

            }


            const successModal =
                document.getElementById(
                    "successModal"
                );


            if (successModal) {

                successModal.classList.add(
                    "active"
                );

            }


            const successMessage =
                document.getElementById(
                    "successMessage"
                );


            if (successMessage) {

                successMessage.textContent =
                    "Thank you, " +
                    name +
                    ". Your order has been received. We will contact you on " +
                    phone +
                    " to complete your M-PESA payment.";

            }

        },
        1000
    );

}


/* =========================================================
   INDEX CHECKOUT MODAL
========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (!modal) {

        goToCheckout();

        return;

    }


    modal.classList.add(
        "active"
    );


    updateCheckoutModal();

}


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


function updateCheckoutModal() {

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


    if (items) {

        items.innerHTML =
            cart.map(
                item => `

                    <div class="checkout-item">

                        <span>
                            ${item.name}
                            × ${item.quantity}
                        </span>

                        <strong>
                            KES ${
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


    const subtotal =
        calculateCartTotal();


    const shipping =
        subtotal >= 10000
            ? 0
            : 300;


    const total =
        subtotal + shipping;


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

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeCart();

        closeSearch();

        closeCheckout();

        closeSuccess();

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

        restoreWishlistButtons();

        applyURLCategory();

        loadCheckout();

    }
);
