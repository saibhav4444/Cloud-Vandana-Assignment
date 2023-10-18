const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

rl.question("Enter a list of numbers separated by spaces: ", (inputString) => {
    const inputArray = inputString.split(" ").map(Number);

    if (Array.isArray(inputArray) && inputArray.length > 0) {
        const sortedArray = sortDescending(inputArray);
        console.log("Sorted in descending order:", sortedArray);
    } else {
        console.log("Invalid input. Please enter a list of numbers separated by spaces.");
    }

    rl.close();
});
