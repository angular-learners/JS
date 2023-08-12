console.log("For Loops");

/**
 * 
 *      Tradition For
 *      forEach
 *      for of
 *      for in
 * 
 */


let names = ["sai", "raj", "kumar", "Akshay", "Reddy"];


for (let i = 0; i < names.length; i++) {
    // console.log(numbers[i]);
}

names.forEach((element, index) => {
    // console.log(element, index)
})

for (let name of names) {
    // console.log(name);
}

for (let name in names) {
    console.log(names[name])
}