

let productsContainer = document.getElementById('products-container');
let cartCount = document.getElementById('cart-count');
myProducts = () => {
    let count = localStorage.getItem('productsCount');
    let myProducts = JSON.parse(localStorage.getItem('myProducts'));
    cartCount.textContent = count;
    let productAmount = 0;
    let totalAmount = document.getElementById("totalPrice");
    let categoryList = [];
    myProducts.forEach((product) => {
        let { image, title, price, category } = product;
        let card = document.createElement("div");
        let h2 = document.createElement("h3");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let button = document.createElement("button");
        categoryList.push(category)
        console.log(categoryList)

        button.addEventListener('click', () => {
            addToCart(product);
        },)

        card.classList.add("card");

        // totalAmount.textContent = `${productAmount + price}`;
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
        // productsContainer.append(totalAmount);
    })
    totalAmount.innerHTML = productAmount;
    console.log(categoryList);
    const myCategory = new Set(categoryList);
    console.log(myCategory);
    myCategory.forEach((category) => {
        console.log(category);
    })
}

myProducts();