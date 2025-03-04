  const getMathProblem = () => {
    let problem = "";
  
    // Generate two random numbers between 1 and 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
  
    // Generate a random operation (+, -, x, /)
    const op = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  
    // Set the problem string based on the operation
    if (op === "+") {
      problem = `${num1} + ${num2}`;
    } else if (op === "-") {
      problem = `${num1} - ${num2}`;
    } else if (op === "*") {
      problem = `${num1} x ${num2}`;
    } else {
      problem = `${num1} / ${num2}`;
    }
  
    return problem;
  };
  
  getMathProblem();