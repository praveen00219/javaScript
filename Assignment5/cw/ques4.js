/*

Q4.) Create an object calculator with three methods:
        read() prompts for two values and saves them as object properties with names a and b respectively.
        sum() returns the sum of saved values.
        mul() multiplies saved values and returns the result.
        let calculator = {
        // ... your code ...
        };

        calculator.read();
        alert( calculator.sum() );
        alert( calculator.mul() );

*/

let calculator = {
  // Properties to store the values
  a: 0,
  b: 0,

  // Method to read values from the user
  read() {
    this.a = parseFloat(prompt("Enter the first number:"));
    this.b = parseFloat(prompt("Enter the second number:"));
  },

  // Method to calculate the sum of the values
  sum() {
    return this.a + this.b;
  },

  // Method to calculate the product of the values
  mul() {
    return this.a * this.b;
  },
};

// Example usage:
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
