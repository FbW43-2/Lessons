function sayHello(event) {
    var date = new Date();
    console.log(`Hello there, now is ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`);
    // console.log(event);
}

var button = document.getElementById("click-me");

button.addEventListener("click", sayHello);

var buttons = document.getElementsByClassName("button");

for (var bt of buttons) {
    bt.addEventListener("click", (ev) => {
        console.log(`You clicked on button: ${ev.target.innerText}`);
    });
}


