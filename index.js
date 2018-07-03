function test(p1, p2) {
    return p1 + p2;
};

document.getElementById("a").innerHTML = test(5, 3);

// Write a JavaScript function that reverse a number

function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
};

console.log(reverse(123));
document.getElementById("b").innerHTML = reverse(456);

/* Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(job, place, name, no) {
    return "You will be a " + job + " in" + place + " , and married to " + name + " with " + no + " kids.";
};

document.getElementById("c").innerHTML = tellFortune("nurse", "Yemen", "Bob", 3);
document.getElementById("d").innerHTML = tellFortune("actress", "USA", "George Clooney", 0);
document.getElementById("e").innerHTML = tellFortune("surgeon", "UK", "Javi", 1);
