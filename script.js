/* =========================================================
   BÉNI CARMEL COLLECTIVES
   MAIN WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   CART
========================================================= */

let cart = JSON.parse(localStorage.getItem("beniCarmelCart")) || [];


function saveCart() {
    localStorage.setItem(
        "beniCarmelCart",
        JSON.stringify(cart)
    );
}


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


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


function increaseQuantity(index) {

    cart[index].quantity += 1;

    saveCart();

    updateCart();

}


function decreaseQuantity(index) {

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
            total + (item.price * item.quantity),
        0
    );

}


function calculateCartCount() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");

    const cartCount = document.getElementById("cart-count");


    if (cartCount) {

        cartCount.textContent =
            calculateCartCount();

    }


    if (cartTotal) {

        cartTotal.textContent =
            "KSh " +
            calculateCartTotal().toLocaleString();

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

        return;

    }


    cartItems.innerHTML = cart.map(
        (item, index) => `

        <div class="cart-item">

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    KSh ${item.price.toLocaleString()}
                </p>

            </div>


            <div class="cart-item-controls">

                <button
                    onclick="decreaseQuantity(${index})"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="increaseQuantity(${index})"
                >
                    +
                </button>

            </div>


            <strong class="cart-item-total">
                KSh ${(item.price * item.quantity).toLocaleString()}
            </strong>


            <button
                class="remove-cart-item"
                onclick="removeFromCart(${index})"
                aria-label="Remove item"
            >
                ×
            </button>

        </div>

        `
    ).join("");

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    const drawer =
        document.getElementById("cart-drawer");

    const background =
        document.getElementById("cart-background");


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
        document.getElementById("cart-drawer");

    const background =
        document.getElementById("cart-background");


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

        alert("Your bag is empty.");

        return;

    }


    window.location.href =
        "checkout.html";

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


    if (!overlay) {

        return;

    }


    overlay.classList.add("active");


    const search =
        document.getElementById("site-search");


    if (search) {

        setTimeout(
            () => search.focus(),
            100
        );

    }


    document.body.classList.add("no-scroll");

}


function closeSearch() {

    const overlay =
        document.getElementById("search-overlay");


    if (overlay) {

        overlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


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


            let matches = [];


            products.forEach(
                product => {

                    const name =
                        product.dataset.name
                            ?.toLowerCase() || "";


                    if (name.includes(query)) {

                        matches.push(name);

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
                        <p>
                            ${name}
                        </p>
                    `
                ).join("");

        }
    );

}


/* =========================================================
   WISHLIST
========================================================= */

let wishlist =
    JSON.parse(
        localStorage.getItem("beniCarmelWishlist")
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

    } else {

        wishlist.splice(index, 1);

        button.textContent = "♡";

    }


    saveWishlist();

}


/* =========================================================
   WISHLIST BUTTON
========================================================= */

function openWishlist() {

    alert(
        wishlist.length
            ? "Your wishlist contains " +
              wishlist.length +
              " item(s)."
            : "Your wishlist is currently empty."
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
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    this.classList.add("active");


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


            if (this.value === "price-low") {

                products.sort(
                    (a, b) =>
                        Number(a.dataset.price) -
                        Number(b.dataset.price)
                );

            }


            if (this.value === "price-high") {

                products.sort(
                    (a, b) =>
                        Number(b.dataset.price) -
                        Number(a.dataset.price)
                );

            }


            if (this.value === "newest") {

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
                product =>
                    grid.appendChild(product)
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
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

        setupFilters();

        setupSorting();

        setupSearch();

        applyURLCategory();

    }
);
