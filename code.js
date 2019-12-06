// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};
const sayHello = function (input) {
    if (input === null) {
        return "Hello, World!";
    }
    return (isNaN(input) && typeof input === "string" ? "Hello, " + input + "!" : "That is not a valid name.");
};
const isFive = function (input) {
    return (!isNaN(input) && parseFloat(input) === 5);
};
const isEven = function (input) {
    return (!isNaN(input) && parseInt(input) % 2 === 0);
};
const isVowel = function (input) {
    return (isNaN(input) && typeof input === "string" && (input.match(/^[aeiou]/i) !== null));
};
const add = function (input1, input2) {
    return (!isNaN(input1) && !isNaN(input2) ? parseInt(input1) + parseInt(input2) : NaN);
};
