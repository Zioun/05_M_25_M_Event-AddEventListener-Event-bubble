document.getElementById("deletBtn").addEventListener('click',function(){
    document.getElementById("deletText").style.display = "none";

})
document.getElementById("input").addEventListener("keyup",function(event){
    let searchValue = event.target.value;
    let deletBtn = document.getElementById("deletBtn");
    if(searchValue === "delete"){
        deletBtn.removeAttribute('disabled');
    }else{
        deletBtn.setAttribute('disabled',true);
    }
});
