console.log("Promises & Async Wait");

const person = {
    emailId: "sai@gmail.com",
    password: "sai123"
}


function validateUser() {
    const promise = new Promise((resolve, reject) => {
        const { emailId, password } = person;
        if (emailId == "sai@gmail.com" && password == "sai23") {
            resolve("Login Success");// return promise
        } else {
            reject("Login Failed"); //return promise
        }
    });
    return promise;
}

const myPromise = validateUser();

myPromise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})



/**
 *  resolve ,reject
 *  200-299    400-500
 * (resolve,reject)=>
 */


const GET_ALL_COUNTRIES = "https://api.sportmonks.com/v3/core/countries";

// let headers = {
//     Authorization: "2sp2ZbCm6SurCs1XccjXTtYhuOGXtcC6DuBuNwCfSLq6qMPrzGGIAptPV2H7",
// };

async function getAllCountries() {
    let countries = await fetch(GET_ALL_COUNTRIES, {
        method: "GET",
        headers: {
            Authorization: "Your API KEY",
        }
    });

    try {
        let countryList = await countries.json();
        console.log(countryList);
    } catch (error) {
        console.log(error);
    }

}


//getAllCountries();



const GET_ALL_USERS = "https://reqres.in/api/users?page=1";

let container = document.getElementById("container");

async function getAllUsers() {
    let users = await fetch(GET_ALL_USERS);
    let userList = users.json();  //return promise
    userList.then((res) => {
        const myUsers = [...res.data];
        createElements(myUsers);
    }).catch((error) => {
        console.log(error);
    })

}


function createElements(myUsers) {
    //Iteration of Array of Objects
    myUsers.forEach((user) => {
        //object destructuring
        const { email, first_name, last_name, avatar } = user;


        let card = document.createElement("div");
        let firstNameAndLastName = document.createElement("h2");
        let emailElement = document.createElement("h5");
        let imgContainer = document.createElement("div");
        let img = document.createElement("img");


        //create text content

        firstNameAndLastName.textContent = `${first_name} ,${last_name}`
        emailElement.textContent = email;
        img.src = avatar;
        img.alt = "profileimg";

        //create dyamic class
        card.classList.add("card");


        //create dynamic style
        emailElement.style.textAlign = "right";


        //append the elements

        card.append(firstNameAndLastName);
        imgContainer.append(img);
        card.append(imgContainer);
        card.append(emailElement);
        container.append(card);
    });



}


getAllUsers();