function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
      const customDelimiter = numbers.match(/\/\/(.+)\n/)[1];
      delimiter = new RegExp(customDelimiter);
      numbers = numbers.split("\n")[1];
  }

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
