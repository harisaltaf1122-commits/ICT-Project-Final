let cart = [];
let total = 0;
let cartCount = 0;

// Add to Cart
document.querySelectorAll(".product-info button").forEach(btn => {
    btn.onclick = () => {
        const productCard = btn.closest(".product-card");
        const name = productCard.querySelector("h3").innerText;
        const price = parseInt(productCard.querySelector(".price").innerText);

        cart.push({ name, price });
        total += price;

        cartCount++;
        document.getElementById("cartCount").innerText = cartCount;

        alert(name + " added to cart!");
        updateCartBox();
    };
});

// Update Cart Box
function updateCartBox() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - Rs. ${item.price}</p>`;
    });
    document.getElementById("totalPrice").innerText = "Total: Rs. " + total;
}

// Open/Close Cart
document.getElementById("cartIcon").onclick = () => { document.getElementById("cartBox").style.display = "block"; };
document.getElementById("closeCart").onclick = () => { document.getElementById("cartBox").style.display = "none"; };

// Buy Now
document.getElementById("buyNow").onclick = () => {
    alert("Your total bill is Rs. " + total + "\nThank you for shopping!");
};

// Submit Cart Button
document.getElementById("submitCart").onclick = () => {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Your total price is Rs. " + total + "\nOrder Placed Successfully!");
    cart = [];
    total = 0;
    cartCount = 0;
    document.getElementById("cartCount").innerText = cartCount;
    updateCartBox();
};

// Contact Form Submit
document.getElementById("contactForm").onsubmit = (e) => {
    e.preventDefault();
    if(cart.length === 0) {
        alert("Your cart is empty! Add items before submitting.");
        return;
    }
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;

    alert(`Thank you ${name}!\nYour order has been placed.\nTotal Price: Rs. ${total}\nWe will contact you at: ${email}`);

    cart = [];
    total = 0;
    cartCount = 0;
    document.getElementById("cartCount").innerText = cartCount;
    updateCartBox();
    e.target.reset();
};
