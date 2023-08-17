console.log("Promises");


/***
 *
 *  HTTP Methods
 *
 *   Request
 *   Response
 *   RequestBody
 *   Path Param
 *   Query Param
 *
 *
 *
 */

/**
 *      http      https
 *      Hyper text transfer protocol           Hyper text transfer protocol  security
 *
 *
 *        https://www.youtube.com/search?searchText="rrr videos";
 *        https://www.youtube.com/search/string or number
 *
 *
 *
 */



//Promise is asyncronus programming

/**
 *          asyncronus     /  syncronus programming
 * 
 * 
 */
let isExecuted = true;
let loadingText = "";

let promise = new Promise((resolve, reject) => {
    if (isExecuted == true) {
        loadingText = "Loading";
        console.log(loadingText);
        resolve("Resolve sucessfully")

        setTimeout(() => {
            // printNumbers();
            loadingText = "";
        }, 10000)

    } else {
        reject("Rejected Successfully");
    }
}).then((success) => {
    console.log(success)
}).catch((error) => {
    console.log(error)
})



function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}



let GET_ALL_USERS = "https://jsonplaceholder.typicode.com/users";
/* <tr>
    <td>1</td>
</tr> */
//  <tr>
//     <td>sai</td>
//  </tr>

//}
let tbody = document.getElementById('tbody');


function getAllUsers() {
    new Promise(() => {
        fetch(GET_ALL_USERS).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            let users = [...data];
            users.sort((a, b) => a.username.localeCompare(b.username));

            users.sort((a, b) => a.name.localeCompare(b.name));
            users.forEach((user) => {
                let { id, name, username, email } = user;
                let tr = document.createElement("tr");


                let idData = document.createElement("td");
                idData.textContent = id;
                tr.append(idData);


                let nameData = document.createElement("td");
                nameData.textContent = name;
                tr.append(nameData);


                let usernameData = document.createElement("td");
                usernameData.textContent = username;
                tr.append(usernameData);

                let emailData = document.createElement("td");
                emailData.textContent = email;
                tr.append(emailData);

                tbody.append(tr);
            })

            console.log(users);


        }).catch((error) => {
            console.log(error);
        })
    })
}

function sortByEmail(sortValue) {
    if (sortValue == "ASCE") {
        let rows = [...tbody.getElementsByTagName('tr')];
        rows.sort((rowA, rowB) => {
            let emailA = rowA.querySelector('td:nth-child(4)').textContent;
            let emailB = rowB.querySelector('td:nth-child(4)').textContent;
            return emailA.localeCompare(emailB);
        });
        tbody.innerHTML = "";
        rows.forEach(row => {
            tbody.appendChild(row);
        });
    } else if (sortValue == "DESC") {
        console.log(sortValue)
        let rows = [...tbody.getElementsByTagName('tr')];
        rows.sort((rowA, rowB) => {
            let emailA = rowA.querySelector('td:nth-child(4)').textContent;
            let emailB = rowB.querySelector('td:nth-child(4)').textContent;
            return emailB.localeCompare(emailA);
        });
        tbody.innerHTML = "";
        rows.forEach(row => {
            tbody.appendChild(row);
        });
    }
}
getAllUsers();


//()=>{}