const numbers = [1, 2, 3, 4, 5];
const operators = ["+", "-", "*", "/"];
const expressions = [];
let solution;
for (let i = 0; i < 5; i++) {
  const num1 = Math.floor(Math.random() * numbers.length);
  const num2 = Math.floor(Math.random() * numbers.length);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  expressions.push(`${numbers[num1]} ${operator} ${numbers[num2]}`);
}
solution = expressions[0].split(" ").reduce((a, b) => parseInt(a) + parseInt(b));
expressions.forEach((expression) => console.log(`${expression} = ${solution}`));
