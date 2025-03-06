  const problem = () => {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  let operation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];

  let answer = '';

  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case 'x':
      answer = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return problem();
      } else {
        answer = num1 / num2;
      }
      break;
  }

  return `${num1} ${operation} ${num2} = ${answer}`;
};