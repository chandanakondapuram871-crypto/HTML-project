let selectedJuice = "";
let selectedPrice = 0;

function orderJuice(name, price) {
    selectedJuice = name;
    selectedPrice = price;

    document.getElementById("orderTitle").innerText = "Order: " + name;
    document.getElementById("orderPrice").innerText = "Price: ₹" + price;

    document.getElementById("orderPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

function showOrder() {
    orderJuice("Any Juice", "—");
}

function placeOrder() {
    const name = document.getElementById("customerName").value;
    const qty = document.getElementById("quantity").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    alert(
        "Thank you " +
        name +
        "! Your order for " +
        qty +
        " " +
        selectedJuice +
        " has been placed."
    );

    closePopup();
}