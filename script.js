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

    price = Number(price);

    const existingProduct = cart.find(
        item => item.name === name
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
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

    if (!cart[index]) {
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


    /* CART ITEMS */

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

        return;

    }


    /* DISPLAY CART */

    cartItems.innerHTML = cart.map(
        (item, index) => {

            const price =
                Number(item.price);

            const quantity =
                Number(item.quantity);

            const itemTotal =
                price * quantity;


            return `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            KSh ${price.toLocaleString()}
                        </p>

                    </div>


                    <div class="cart-item-controls">

                        <button
                            type="button"
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>


                    <strong class="cart-item-total">

                        KSh ${itemTotal.toLocaleString()}

                    </strong>


                    <button
                        type="button"
                        class="remove-cart-item"
                        onclick="removeFromCart(${index})"
                        aria-label="Remove item"
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


    if (drawer) {

        drawer.classList.add("active");

    }


    if (background) {

        background.classList.add("active");

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   CLOSE CART
========================================================= */

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


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   CHECKOUT
========================================================= */

function goToCheckout() {

    if (!cart.length) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    /*
       IMPORTANT:
       The cart already contains the exact
       prices from shop.html.

       We do NOT create new prices here.
    */

    saveCart();

    window.location.href =
        "checkout.html";

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


    if (!overlay) {

        return;

    }


    overlay.classList.add(
        "active"
    );


    const search =
        document.getElementById(
            "site-search"
        );


    if (search) {

        setTimeout(
            () => search.focus(),
            100
        );

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   CLOSE SEARCH
========================================================= */

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


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   SEARCH SETUP
========================================================= */

function setupSearch() {

    const search =
        document.getElementById(
            "site-search"
        );

    const results =
        document.getElementById(
            "search-results"
        );


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

                results.innerHTML =
                    "";

                return;

            }


            let matches = [];


            products.forEach(
                product => {

                    const name =
                        (
                            product.dataset.name ||
                            ""
                        ).toLowerCase();


                    if (
                        name.includes(query)
                    ) {

                        matches.push(
                            product.dataset.name
                        );

                    }

                }
            );


            if (!matches.length) {

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
        localStorage.getItem(
            "beniCarmelWishlist"
        )
    ) || [];


/* =========================================================
   SAVE WISHLIST
========================================================= */

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

        button.textContent =
            "♥";

        button.classList.add(
            "active"
        );

    } else {

        wishlist.splice(
            index,
            1
        );

        button.textContent =
            "♡";

        button.classList.remove(
            "active"
        );

    }


    saveWishlist();

}


/* =========================================================
   WISHLIST
========================================================= */

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
   SORT PRODUCTS
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
                this.value ===
                "price-low"
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
                this.value ===
                "price-high"
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
                this.value ===
                "newest"
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
   KEEP WISHLIST BUTTONS UPDATED
========================================================= */

function updateWishlistButtons() {

    const buttons =
        document.querySelectorAll(
            ".wishlist-product"
        );


    buttons.forEach(
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

                button.textContent =
                    "♥";

                button.classList.add(
                    "active"
                );

            } else {

                button.textContent =
                    "♡";

                button.classList.remove(
                    "active"
                );

            }

        }
    );

}


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

        applyURLCategory();

        updateWishlistButtons();

    }
);
