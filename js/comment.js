document.getElementById("commentBtn").addEventListener('click',function(){
    let input = document.getElementById("input");
    let inputValue = input.value; 
    let p = document.createElement("p");
    p.innerText = inputValue; // ?
    document.getElementById("comment").appendChild(p);
    input.value = " "; // ?
})