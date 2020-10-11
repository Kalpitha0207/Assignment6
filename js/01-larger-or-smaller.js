var num1 = window.prompt("Enter first number");
num1 = parseInt(num1, 10);
var num2 = window.prompt("Enter second number");
num2 = parseInt(num2, 10);

if (num1 > num2) {
    window.document.write("The largest number is " + num1);
} else if (num1 < num2) {
    window.document.write("The largest number is " + num2);
} else {
    window.document.write("The numbers are equal.");
}