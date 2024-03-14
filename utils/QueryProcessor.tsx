export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "awu"
    );
  }

  const largestNumPattern = /^Which of the following numbers is the largest: (\d+(?:, ?\d+)*)\?$/;
  if (largestNumPattern.test(query)) {
    if (query == null) {
        return "None";
    }
    const nums = query.match(/\d+/g); // Match only if query is not null
    if (nums !== null) { // Check if nums is not null
      const numbers = nums.map(Number);
      return (
        (Math.max(...numbers)).toString()
      );
    } else {
      return "None"; // Return "None" if no numbers were found
    }
  }

  const addPattern = /^What is (\d+) plus (\d+)\?$/;
  if (addPattern.test(query)) {
    if (query == null) {
        return "None";
    }
    const nums = query.match(/\d+/g); // Match only if query is not null
    if (nums !== null) { // Check if nums is not null
      const numbers = nums.map(Number);
      return (
        (numbers[0]+numbers[1]).toString()
      );
    } else {
      return "None"; // Return "None" if no numbers were found
    }
  }

  const multPattern = /^What is (\d+) multiplied by (\d+)\?$/;
  if (multPattern.test(query)) {
    if (query == null) {
        return "None";
    }
    const nums = query.match(/\d+/g); // Match only if query is not null
    if (nums !== null) { // Check if nums is not null
      const numbers = nums.map(Number);
      return (
        (numbers[0]*numbers[1]).toString()
      );
    } else {
      return "None"; // Return "None" if no numbers were found
    }
  }

  const minusPattern = /^What is (\d+) minus (\d+)\?$/;
  if (minusPattern.test(query)) {
    if (query == null) {
        return "None";
    }
    const nums = query.match(/\d+/g); // Match only if query is not null
    if (nums !== null) { // Check if nums is not null
      const numbers = nums.map(Number);
      return (
        (numbers[0]-numbers[1]).toString()
      );
    } else {
      return "None"; // Return "None" if no numbers were found
    }
  }


  return "";
}
