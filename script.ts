interface Product{
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price:number;
}

const products: Product[] = [];

function renderProduct(product: Product){
    const productList = document.getElementById("product-list");

    if (productList){
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="$${product.name}">
            <h1>${product.name}</h1>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            `;

            productList.appendChild(productElement);
    }
}

function handleFormSubmit(event: Event){
    event.preventDefault();

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const descriptionInput = document.getElementById("description") as HTMLInputElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const imageUrlInput = document.getElementById("imageUrl") as HTMLInputElement;

    if(nameInput && descriptionInput && priceInput && imageUrlInput){
        const name = nameInput.value;
        const description = descriptionInput.value;
        const price = parseFloat(priceInput.value);
        const imageUrl = imageUrlInput.value;

        if(name.trim() === "" || description.trim() === "" || isNaN(price) || price<=0 || imageUrl.trim() === ""){
            alert("Please enter valid data");
            return;
        }

        const newProduct: Product = {
            id: products.length + 1,
            name,
            description,
            price,
            imageUrl,
        };

        products.push(newProduct);

        nameInput.value="";
        descriptionInput.value="";
        priceInput.value="";
        imageUrlInput.value="";

        renderProduct(newProduct);
    }
}

const productForm = document.getElementById("product-form");
if(productForm) {
    productForm.addEventListener("submit",handleFormSubmit);
}

products.forEach(renderProduct);