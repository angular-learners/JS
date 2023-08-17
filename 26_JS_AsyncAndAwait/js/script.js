//async   &   wait

const GET_USERS_URL = "https://randomuser.me/api/?results=10";

let container = document.getElementById('container-id');
var myUsers = [];

async function getAllUsers() {
    const users = await fetch(GET_USERS_URL);
    let usersList = users.json();
    //usersList = myUsers;
    usersList.then((res) => {
        let results = [...res.results];
        myUsers = results;
        results.forEach((result) => {
            const { name, picture, email } = result;
            let div = document.createElement("div");
            div.classList.add("card");
            let img = document.createElement("img");
            img.src = picture.medium;
            img.alt = "user-img";
            let h1 = document.createElement("h1");
            h1.textContent = `${name.title}. ${name.last} ,${name.first}`
            div.append(img);
            div.append(h1);
            let h4 = document.createElement("h4");
            h4.textContent = email;
            h4.classList.add("cell")
            div.append(h4);
            container.append(div);

        })

    })
}

getAllUsers();


const search = (event) => {
    const searchText = event.target.value.toLowerCase();
    container.innerHTML = '';
    myUsers.forEach((result) => {
        const { name, picture, email } = result;
        if (email.includes(searchText)) {
            let div = document.createElement("div");
            div.classList.add("card");
            let img = document.createElement("img");
            img.src = picture.medium;
            img.alt = "user-img";
            let h1 = document.createElement("h1");
            h1.textContent = `${name.title}. ${name.last} ,${name.first}`
            div.append(img);
            div.append(h1);
            let h4 = document.createElement("h4");
            h4.textContent = email;
            h4.classList.add("cell")
            div.append(h4);
            container.append(div);
        }
    })
}