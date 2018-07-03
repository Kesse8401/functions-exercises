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