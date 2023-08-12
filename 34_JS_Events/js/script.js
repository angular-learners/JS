console.log("events");



/***
 * 
 *  click
 *  change
 *  mouseover
 *  mouseleave
 *  mouseout
 *  select
 *  input
 *  keyup
 *  keydown
 *  dblclick
 *  
 * 
 * 
 * 
 */
let count = 0;
function like() {
    count = count + 1
    document.getElementById('counter').innerHTML = count;
    ///console.log(`${count}`);
}
function disLike() {

    count = count - 1;
    document.getElementById('counter').innerHTML = count;
}


function changeColor() {
    console.log("Hello");
    // let counterText = document.getElementById('counter-text');
    // counterText.classList.add('counter-text');
    document.getElementById('counter-text').style = "color:blue";


}