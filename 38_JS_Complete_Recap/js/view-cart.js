

let productsContainer = document.getElementById('products-container');
let cartCount = document.getElementById('cart-count');
let count = localStorage.getItem('productsCount');
var productsList = JSON.parse(localStorage.getItem('myProducts'));

function removeProduct(index) {
    let totalAmount = document.getElementById("totalPrice");
    let productAmount = 0;
    productsList.splice(index, 1);
    count = count - 1;
    localStorage.setItem('myProducts', JSON.stringify(productsList));
    localStorage.setItem('productsCount', JSON.stringify(count));
    document.getElementById('cart-count').innerHTML = count;
    productsContainer.innerHTML = '';
    if (productsList) {
        createElements(productAmount, totalAmount);
    }
}



myProducts = () => {
    cartCount.textContent = count;
    let productAmount = 0;
    let totalAmount = document.getElementById("totalPrice");
    createElements(productAmount, totalAmount);
}
myProducts();

function createElements(productAmount, totalAmount) {
    productsList.forEach((product, index) => {
        let { image, title, price } = product;
        let card = document.createElement("div");
        let h2 = document.createElement("h3");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let button = document.createElement("button");
        button.addEventListener('click', () => {
            removeProduct(product, index);
        },)
        card.classList.add("card");
        productAmount = `${parseInt(productAmount) + parseInt(price)}`;
        h2.textContent = title;
        img.src = image;
        h4.textContent = price;
        button.textContent = "Remove Product";
        card.append(h2);
        card.append(img);
        card.append(h4);
        card.append(button);
        productsContainer.append(card);
    })
    totalAmount.innerHTML = productAmount;
}