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
    return (!isNaN(input) && parseFloat(input) === 5 ? true : false);
}