var products = [];
function renderProduct(product) {
    var productList = document.getElementById("product-list");
    if (productList) {
        var productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = "\n            <img src=\"".concat(product.imageUrl, "\" alt=\"$").concat(product.name, "\">\n            <h1>").concat(product.name, "</h1>\n            <p class=\"product-description\">").concat(product.description, "</p>\n            <p class=\"product-price\">$").concat(product.price.toFixed(2), "</p>\n            ");
        productList.appendChild(productElement);
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var descriptionInput = document.getElementById("description");
    var priceInput = document.getElementById("price");
    var imageUrlInput = document.getElementById("imageUrl");
    if (nameInput && descriptionInput && priceInput && imageUrlInput) {
        var name_1 = nameInput.value;
        var description = descriptionInput.value;
        var price = parseFloat(priceInput.value);
        var imageUrl = imageUrlInput.value;
        if (name_1.trim() === "" || description.trim() === "" || isNaN(price) || price <= 0 || imageUrl.trim() === "") {
            alert("Please enter valid data");
            return;
        }
        var newProduct = {
            id: products.length + 1,
            name: name_1,
            description: description,
            price: price,
            imageUrl: imageUrl,
        };
        products.push(newProduct);
        nameInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";
        imageUrlInput.value = "";
        renderProduct(newProduct);
    }
}
var productForm = document.getElementById("product-form");
if (productForm) {
    productForm.addEventListener("submit", handleFormSubmit);
}
products.forEach(renderProduct);
