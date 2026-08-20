/* ==========================================
   BÉNI CARMEL COLLECTIVES
   STORE JAVASCRIPT
========================================== */


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    {
        id: 1,
        name: "BC Classic Tee 01",
        price: 3500,
        category: "tops",
        image: "images/tee-1.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 2,
        name: "BC Graphic Tee 02",
        price: 3500,
        category: "tops",
        image: "images/tee-2.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 3,
        name: "BC Graphic Tee 03",
        price: 3500,
        category: "tops",
        image: "images/tee-3.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 4,
        name: "BC Hoodie 01",
        price: 6500,
        category: "tops",
        image: "images/hoodie-1.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 5,
        name: "BC Hoodie 02",
        price: 6500,
        category: "tops",
        image: "images/hoodie-2.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 6,
        name: "BC Jorts",
        price: 5000,
        category: "bottoms",
        image: "images/jorts-1.jpg",
        sizes: ["28", "30", "32", "34", "36", "38"]
    },

    {
        id: 7,
        name: "Dark Blue Jorts",
        price: 5000,
        category: "bottoms",
        image: "images/jorts-dark-blue.jpg",
        sizes: ["28", "30", "32", "34", "36", "38"]
    },

    {
        id: 8,
        name: "Marble Blue Jorts",
        price: 5000,
        category: "bottoms",
        image: "images/jorts-marble-blue.jpg",
        sizes: ["28", "30", "32", "34", "36", "38"]
    },

    {
        id: 9,
        name: "Sky Blue Jorts",
        price: 5000,
        category: "bottoms",
        image: "images/jorts-sky-blue.jpg",
        sizes: ["28", "30", "32", "34", "36", "38"]
    },

    {
        id: 10,
        name: "Wide Leg Jeans",
        price: 6500,
        category: "bottoms",
        image: "images/wide-leg-jeans-blue.jpg",
        sizes: ["28", "30", "32", "34", "36", "38"]
    },

    {
        id: 11,
        name: "BC Sweatpants Black",
        price: 5500,
        category: "bottoms",
        image: "images/sweatpants-black.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 12,
        name: "BC Sweatpants Burgundy",
        price: 5500,
        category: "bottoms",
        image: "images/sweatpants-burgundy.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 13,
        name: "BC Sweatpants Cream",
        price: 5500,
        category: "bottoms",
        image: "images/sweatpants-cream.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 14,
        name: "BC Sweatpants Grey",
        price: 5500,
        category: "bottoms",
        image: "images/sweatpants-grey.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 15,
        name: "College Jacket",
        price: 8500,
        category: "outerwear",
        image: "images/college-jacket.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 16,
        name: "Denim Jacket 01",
        price: 7500,
        category: "outerwear",
        image: "images/denim-jacket-1.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 17,
        name: "Denim Jacket 02",
        price: 7500,
        category: "outerwear",
        image: "images/denim-jacket-2.jpg",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },

    {
        id: 18,
        name: "Beanie Beige",
        price: 2500,
        category: "headwear",
        image: "images/beanie-beige.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 19,
        name: "Beanie Black",
        price: 2500,
        category: "headwear",
        image: "images/beanie-black.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 20,
        name: "Beanie Brown",
        price: 2500,
        category: "headwear",
        image: "images/beanie-brown.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 21,
        name: "Beanie Burgundy",
        price: 2500,
        category: "headwear",
        image: "images/beanie-burgundy.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 22,
        name: "Beanie Cream",
        price: 2500,
        category: "headwear",
        image: "images/beanie-cream.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 23,
        name: "Bucket Hat Beige",
        price: 2500,
        category: "headwear",
        image: "images/bucket-hat-beige.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 24,
        name: "Bucket Hat Black",
        price: 2500,
        category: "headwear",
        image: "images/bucket-hat-black.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 25,
        name: "Bucket Hat Burgundy",
        price: 2500,
        category: "headwear",
        image: "images/bucket-hat-burgundy.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 26,
        name: "Bucket Hat White",
        price: 2500,
        category: "headwear",
        image: "images/bucket-hat-white.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 27,
        name: "BC Cap White",
        price: 2500,
        category: "headwear",
        image: "images/cap-white.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 28,
        name: "Shoulder Bag Black",
        price: 3500,
        category: "accessories",
        image: "images/shoulder-bag-black.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 29,
        name: "Shoulder Bag Black Cross",
        price: 3500,
        category: "accessories",
        image: "images/shoulder-bag-black-cross.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 30,
        name: "Shoulder Bag Brown",
        price: 3500,
        category: "accessories",
        image: "images/shoulder-bag-brown.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 31,
        name: "Shoulder Bag Orange",
        price: 3500,
        category: "accessories",
        image: "images/shoulder-bag-orange.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 32,
        name: "Shoulder Bag Pink",
        price: 3500,
        category: "accessories",
        image: "images/shoulder-bag-pink.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 33,
        name: "Cross Necklace Silver",
        price: 2500,
        category: "accessories",
        image: "images/cross-necklace-silver.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 34,
        name: "BC Socks Black",
        price: 1500,
        category: "accessories",
        image: "images/socks-black.jpg",
        sizes: ["ONE SIZE"]
    },

    {
        id: 35,
        name: "BC Socks White",
        price: 1500,
        category: "accessories",
        image: "images/socks-white.jpg",
        sizes: ["ONE SIZE"]
    }

];


/* ==========================================
   CART
========================================== */

let cart = JSON.parse(
    localStorage.getItem("bcCart") || "[]"
);

let currentProduct = null;

let selectedSize = null;


/* ==========================================
   FORMAT MONEY
========================================== */

function money(amount) {

    return "KES " + Number(amount).toLocaleString(
        "en-KE"
    );

}


/* ==========================================
   SAVE CART
========================================== */

function saveCart() {

    localStorage.setItem(
        "bcCart",
        JSON.stringify(cart)
    );

}


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list = products) {

    const grid =
        document.getElementById("productGrid");

    grid.innerHTML = "";

    document.getElementById(
        "productNumber"
    ).textContent =
        `${list.length} PRODUCTS`;

    list.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div
                class="product-image"
                onclick="openProduct(${product.id})"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    BC
                </span>

                <button
                    class="quick-add"
                    onclick="event.stopPropagation(); openProduct(${product.id})"
                >
                    QUICK ADD
                </button>

            </div>

            <div class="product-info">

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">
                    ${money(product.price)}
                </div>

            </div>

        `;

        grid.appendChild(card);

    });

}


/* ==========================================
   FILTER
========================================== */

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

    } else {

        displayProducts(
            products.filter(
                product =>
                    product.category === category
            )
        );

    }

    document
        .getElementById("shop")
        .scrollIntoView();

}


/* ==========================================
   PRODUCT MODAL
========================================== */

function openProduct(id) {

    currentProduct =
        products.find(
            product => product.id === id
        );

    selectedSize =
        currentProduct.sizes[0];

    const details =
        document.getElementById(
            "productDetails"
        );

    details.innerHTML = `

        <div class="product-detail">

            <img
                class="product-detail-image"
                src="${currentProduct.image}"
                alt="${currentProduct.name}"
            >

            <div>

                <p class="eyebrow">
                    BÉNI CARMEL
                </p>

                <h2>
                    ${currentProduct.name}
                </h2>

                <p class="detail-price">
                    ${money(currentProduct.price)}
                </p>

                <p>
                    Select your size:
                </p>

                <div class="size-selector">

                    ${currentProduct.sizes
                        .map(
                            (size, index) => `
                            <button
                                class="${index === 0 ? "selected" : ""}"
                                onclick="selectSize(this, '${size}')"
                            >
                                ${size}
                            </button>
                        `
                        )
                        .join("")
                    }

                </div>

                <button
                    class="add-button"
                    onclick="addCurrentProduct()"
                >
                    ADD TO BAG
                </button>

            </div>

        </div>

    `;

    document
        .getElementById("productModal")
        .classList.add("active");

}


function selectSize(button, size) {

    selectedSize = size;

    document
        .querySelectorAll(".size-selector button")
        .forEach(btn =>
            btn.classList.remove("selected")
        );

    button.classList.add("selected");

}


function closeProduct() {

    document
        .getElementById("productModal")
        .classList.remove("active");

}


function addCurrentProduct() {

    if (!currentProduct) return;

    const existing =
        cart.find(
            item =>
                item.id === currentProduct.id &&
                item.size === selectedSize
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: currentProduct.id,

            name: currentProduct.name,

            price: currentProduct.price,

            image: currentProduct.image,

            size: selectedSize,

            quantity: 1

        });

    }

    saveCart();

    updateCart();

    closeProduct();

    openCart();

}


/* ==========================================
   CART
========================================== */

function updateCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    document.getElementById(
        "cartCount"
    ).textContent = count;

    if (!cart.length) {

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:70px 20px;
            ">

                <h3>
                    YOUR BAG IS EMPTY
                </h3>

                <p style="
                    margin-top:10px;
                    color:#777;
                    font-size:12px;
                ">
                    Discover something from
                    the collective.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            cart.map(
                (item, index) => `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div>

                        <div class="cart-item-name">
                            ${item.name}
                        </div>

                        <div class="cart-item-size">
                            Size: ${item.size}
                        </div>

                        <div class="cart-item-price">
                            ${money(item.price)}
                        </div>

                        <div style="
                            margin-top:10px;
                            display:flex;
                            gap:10px;
                            align-items:center;
                        ">

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

                    <button
                        class="cart-remove"
                        onclick="removeCartItem(${index})"
                    >
                        REMOVE
                    </button>

                </div>

            `
            ).join("");

    }

    const subtotal =
        getSubtotal();

    document.getElementById(
        "cartTotal"
    ).textContent =
        money(subtotal);

}


function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

    updateCart();

}


function removeCartItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


function getSubtotal() {

    return cart.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );

}


function openCart() {

    document
        .getElementById("cartDrawer")
        .classList.add("open");

    document
        .getElementById("cartOverlay")
        .classList.add("open");

}


function closeCart() {

    document
        .getElementById("cartDrawer")
        .classList.remove("open");

    document
        .getElementById("cartOverlay")
        .classList.remove("open");

}


/* ==========================================
   CHECKOUT
========================================== */

function openCheckout() {

    if (!cart.length) {

        alert(
            "Your bag is empty."
        );

        return;

    }

    closeCart();

    renderCheckout();

    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


function renderCheckout() {

    const items =
        document.getElementById(
            "checkoutItems"
        );

    const subtotal =
        getSubtotal();

    const shipping =
        subtotal >= 10000 ? 0 : 350;

    const total =
        subtotal + shipping;

    items.innerHTML =
        cart.map(
            item => `

            <div class="checkout-summary-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p style="
                        font-size:10px;
                        margin-top:5px;
                    ">
                        ${item.size} × ${item.quantity}
                    </p>

                    <p style="
                        font-size:11px;
                        margin-top:5px;
                    ">
                        ${money(
                            item.price *
                            item.quantity
                        )}
                    </p>

                </div>

            </div>

        `
        ).join("");

    document.getElementById(
        "checkoutSubtotal"
    ).textContent =
        money(subtotal);

    document.getElementById(
        "checkoutShipping"
    ).textContent =
        shipping === 0
            ? "FREE"
            : money(shipping);

    document.getElementById(
        "checkoutTotal"
    ).textContent =
        money(total);

}


/* ==========================================
   PROCESS CHECKOUT
========================================== */

async function processCheckout(event) {

    event.preventDefault();

    if (!cart.length) {

        alert(
            "Your bag is empty."
        );

        return;

    }

    const button =
        document.getElementById(
            "payButton"
        );

    const name =
        document.getElementById(
            "customerName"
        ).value.trim();

    const email =
        document.getElementById(
            "customerEmail"
        ).value.trim();

    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();

    const county =
        document.getElementById(
            "customerCounty"
        ).value.trim();

    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();

    const subtotal =
        getSubtotal();

    const shipping =
        subtotal >= 10000 ? 0 : 350;

    const total =
        subtotal + shipping;


    button.disabled = true;

    button.textContent =
        "CONNECTING TO M-PESA...";


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

                    body: JSON.stringify({

                        name,

                        email,

                        phone,

                        county,

                        address,

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
                "Payment request failed."
            );

        }


        button.textContent =
            "M-PESA PROMPT SENT";


        alert(
            "Check your phone. An M-PESA payment prompt has been sent."
        );


        localStorage.setItem(
            "lastOrder",
            JSON.stringify({

                ...data,

                name,

                email,

                phone,

                county,

                address,

                items: cart,

                total

            })
        );


        cart = [];

        saveCart();

        updateCart();

        closeCheckout();

        document
            .getElementById(
                "successMessage"
            )
            .textContent =
                "Your M-PESA payment prompt has been sent to your phone. Complete the payment to confirm your order.";

        document
            .getElementById(
                "successModal"
            )
            .classList.add("active");


    } catch (error) {

        console.error(error);

        alert(
            error.message ||
            "Something went wrong."
        );

    }


    button.disabled = false;

    button.textContent =
        "PAY WITH M-PESA";

}


/* ==========================================
   SUCCESS
========================================== */

function closeSuccess() {

    document
        .getElementById(
            "successModal"
        )
        .classList.remove("active");

}


/* ==========================================
   SEARCH
========================================== */

function openSearch() {

    document
        .getElementById(
            "searchOverlay"
        )
        .classList.add("active");

    document
        .getElementById(
            "searchInput"
        )
        .focus();

}


function closeSearch() {

    document
        .getElementById(
            "searchOverlay"
        )
        .classList.remove("active");

}


function searchProducts() {

    const query =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase()
            .trim();

    const results =
        document.getElementById(
            "searchResults"
        );

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

    results.innerHTML =
        matches.map(
            product => `

            <div
                class="search-result"
                onclick="closeSearch(); openProduct(${product.id})"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <p>
                        ${money(product.price)}
                    </p>

                </div>

            </div>

        `
        ).join("");

}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMobileMenu() {

    document
        .getElementById(
            "mobileMenu"
        )
        .classList.toggle("open");

}


/* ==========================================
   NEWSLETTER
========================================== */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById(
            "newsletterEmail"
        ).value;

    alert(
        `Thank you. ${email} has joined the collective.`
    );

    event.target.reset();

}


/* ==========================================
   START
========================================== */

displayProducts();

updateCart();
