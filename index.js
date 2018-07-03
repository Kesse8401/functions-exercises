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
    return "You will be a " + job + " in " + place + " , and married to " + name + " with " + no + " kids.";
};

document.getElementById("c").innerHTML = tellFortune("nurse", "Yemen", "Bob", 3);
document.getElementById("d").innerHTML = tellFortune("actress", "USA", "George Clooney", 0);
document.getElementById("e").innerHTML = tellFortune("surgeon", "UK", "Javi", 1);


/* Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(age) {
    return "Your dog age is: " + age * 7;
};

document.getElementById("f").innerHTML = calculateDogAge(3);

/* Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amountPerDay) {
    const maxAge = 80;
    let totalNeed = (maxAge - age) * (amountPerDay * 365);
    return "You will need " + amountPerDay + " to last you until the ripe old age of " + maxAge;
};

document.getElementById("g").innerHTML = calculateSupply(1, 30);
document.getElementById("h").innerHTML = calculateSupply(2, 40);
document.getElementById("i").innerHTML = calculateSupply(3, 50);