var button = document.getElementsBy("");
button.innerHTML = "Let's Study";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
    alert("Time to hit the books!");
});

