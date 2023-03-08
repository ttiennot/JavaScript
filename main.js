function modify() {
    var NewDiv = document.getElementsByName("lesdivs");
    NewDiv.forEach(function (div) {
        div.innerHTML = "Hello";
    });
}