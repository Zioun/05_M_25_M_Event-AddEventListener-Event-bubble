// ! option 1 onclick
/* <button onclick="console.log(7)">Click Me</button> */
// ! option 2 onclick
// TODO importent
/* <button onclick="makeUp()">Red</button> */
// ! option 3 onclick
function makeUp(){
    document.body.style.backgroundColor="red";
}
// ! option 4 onclick
let yellowBtn = document.getElementById("yellow");
yellowBtn.onclick = yellowMake;
function yellowMake(){
    document.body.style.backgroundColor="yellow";
}
// ! option 5 onclick
let purpleBtn = document.getElementById("purple");
purpleBtn.onclick = function purpleMake(){
    document.body.style.backgroundColor="purple";
}

// ! option 1 addEventListener
let pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener('click',makePink)
function makePink(){
    document.body.style.backgroundColor="pink";
}
// ! option 2 addEventListener
let green = document.getElementById("green");
green.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor="green";
});
// ! option 3 addEventListener
// TODO importent
document.getElementById("goldenRod").addEventListener('click',function(){
    document.body.style.backgroundColor = "goldenrod";
})


