
function dropdown(x){
    x.classList.toggle("change")
}

function dropdownIcon(){
    var y = document.getElementById("header-right");

    if(y.style.display === "block"){
        y.style.display = "none"
    }
    else{
        y.style.display = "block"

    }
}

