/* =========================
   SHOPPING CART
========================= */

let cart = [];


function addToCart(name, price) {

    const existingProduct = cart.find(
        item => item.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    openCart();
}


function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const cartTotal = document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your bag is currently empty.
            </p>
        `;

        cartCount.style.display = "none";

        cartTotal.textContent = "KSh 0";

        return;
    }


    let total = 0;

    let quantity = 0;


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        quantity += item.quantity;


        const itemElement = document.createElement("div");

        itemElement.style.marginBottom = "25px";


        itemElement.innerHTML = `

            <div style="
                display:flex;
                justify-content:space-between;
                margin-bottom:8px;
            ">

                <strong>
                    ${item.name}
                </strong>

                <button
                    onclick="removeFromCart(${index})"
                    style="
                        border:none;
                        background:none;
                        font-size:18px;
                    "
                >
                    ×
                </button>

            </div>

            <p style="
                font-size:12px;
                color:#777;
                margin-bottom:10px;
            ">
                KSh ${item.price.toLocaleString()}
            </p>

            <div style="
                display:flex;
                align-items:center;
                gap:15px;
            ">

                <button
                    onclick="decreaseQuantity(${index})"
                    style="
                        border:1px solid #ddd;
                        background:white;
                        width:28px;
                        height:28px;
                    "
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="increaseQuantity(${index})"
                    style="
                        border:1px solid #ddd;
                        background:white;
                        width:28px;
                        height:28px;
                    "
                >
                    +
                </button>

            </div>

        `;


        cartItems.appendChild(itemElement);

    });


    cartCount.textContent = quantity;

    cartCount.style.display = "flex";


    cartTotal.textContent =
        `KSh ${total.toLocaleString()}`;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();
}


/* =========================
   CART DRAWER
========================= */

function openCart() {

    document
        .getElementById("cart-drawer")
        .classList.add("open");

    document
        .getElementById("cart-background")
        .style.display = "block";
}


function closeCart() {

    document
        .getElementById("cart-drawer")
        .classList.remove("open");

    document
        .getElementById("cart-background")
        .style.display = "none";
}


/* =========================
   SEARCH
========================= */

function openSearch() {

    document
        .getElementById("search-overlay")
        .style.display = "flex";

}


function closeSearch() {

    document
        .getElementById("search-overlay")
        .style.display = "none";

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    document
        .getElementById("mobile-menu")
        .classList.toggle("open");

}


function closeMenu() {

    document
        .getElementById("mobile-menu")
        .classList.remove("open");

}


/* =========================
   ACCOUNT
========================= */

function openAccount() {

    alert(
        "Customer accounts will be available soon."
    );

}


/* =========================
   WISHLIST
========================= */

function openWishlist() {

    alert(
        "Your wishlist will appear here."
    );

}


/* =========================
   NEWSLETTER
========================= */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;


    alert(
        "Welcome to the Béni Carmel Collectives. " +
        "You have been added to the list."
    );


    document
        .getElementById("email")
        .value = "";

}
