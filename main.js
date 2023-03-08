function modify() {
    var NewDiv = document.getElementsByTagName("div");
    for(var i = 0; i < NewDiv.length ; i++) {
        NewDiv[i].innerHTML = "Hello";
    }
}