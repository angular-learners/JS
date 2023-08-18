const GET_PRODUCTS_URL = "https://fakestoreapi.com/products";

let productsContainer = document.getElementById('products-container');
let cartCount = document.getElementById('cart-count');
let counter = 0;

addToCart = () => {
    console.log("Cart Clicked");
    counter = counter + 1;
    cartCount.textContent = counter;
}

async function getAllProducts() {
    const products = await fetch(GET_PRODUCTS_URL);
    const productList = products.json(); //return promise
    productList.then((data) => {
        let productsData = [...data];
        productsData.forEach((product) => {
            let { image, title, price } = product;
            let card = document.createElement("div");
            let h2 = document.createElement("h3");
            let img = document.createElement("img");
            let h4 = document.createElement("h4");
            let button = document.createElement("button");


            button.addEventListener('click', addToCart)

            card.classList.add("card");

            h2.textContent = title;
            img.src = image;
            h4.textContent = price;
            button.textContent = "Add to Cart";

            card.append(h2);
            card.append(img);
            card.append(h4);
            card.append(button);
            productsContainer.append(card);
        })
    })


}

getAllProducts();