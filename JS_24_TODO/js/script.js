console.log("TODO")



let courses = [];

function addCourse() {
    let courseName = document.getElementById('courseName').value;
    courses.push(courseName);
    let courseList = document.getElementById('courseList');
    //  <div>
    //     <li> value</li>
    //  </div>
    courseList.innerHTML = '';
    courses.forEach(element => {
        let li = document.createElement('li'); //<li> </li>
        // li.style.listStyleType = 'none';
        // li.style.marginTop = '10px';
        // li.style.backgroundColor = '#009FFF';
        // li.style.padding = '10px';
        // li.style.color = "#fff";
        // li.style.borderLeft = "2px solid #fff";
        li.classList.add('li');
        let textNode = document.createTextNode(element); //<li> Java</li>
        li.append(textNode);
        courseList.append(li);

    });

    console.log(courses);
}



/***
 *  let a=[]
 * 
 */    //10     a.push(10);