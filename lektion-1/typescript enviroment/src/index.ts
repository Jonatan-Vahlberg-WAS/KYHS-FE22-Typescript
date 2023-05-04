type User = {
    name: string;
};

function addNumbers(a: number, b: number): number | undefined {
    return a + b;
  }
  
  const result = addNumbers(1, 2);
  console.log(result?.toExponential());