console.log("JS CONSOLES");
console.info("INFO STATEMENT");
console.warn("WARNING STATEMENT");
console.error("ERROR STATEMENT");
console.table(123);




/**
 * 
 *      console.log
 *      console.info
 *      console.error
 *      console.warn
 *      console.table
 * 
 * * */


var courseList = [];

function add() {
    var course = document.getElementById('course').value;
    courseList.push(course);

    var courses = document.getElementById('courses');
    courses.innerHTML = '';

    courseList.forEach((element, index) => {
        var li = document.createElement('li');
        var textNode = document.createTextNode(element);
        li.appendChild(textNode);
        courses.appendChild(li);
        this.addCSS();
        li.addEventListener('click', (element) => {
            courseList.splice(index, 1)
            courses.removeChild(li);
        })
    });
}


function addCSS() {
    var myStyles = document.createElement('style');
    var cssRules = `
       li{
        background: linear-gradient(to right, #E100FF, #7F00FF);
        padding:10px;
        margin-top:5px;
        list-style-type:none;
        width:80px;
        color:#fff;
       }
     `;
    myStyles.textContent = cssRules;
    document.head.appendChild(myStyles);

}