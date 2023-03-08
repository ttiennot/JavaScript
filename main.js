function modify() {
    var NewDiv = document.getElementsByClassName("lesdivs");
    for(var i = 0; i < NewDiv.length; i++){
        NewDiv[i].innerHTML = "Hello";
    }    
}