function pattern() {
    var length = document.getElementById("length").value;
    var show = document.getElementById("show");
    var ch = "";

    for (var i = 1; i <= parseInt(length); i++) {
        for (var j = 1; j <= i; j++) {
            ch = ch + j;

        }
        ch = ch + "<br/>";
    }
    show.innerHTML = ch;
}