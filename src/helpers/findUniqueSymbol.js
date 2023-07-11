export const findUniqueSymbol = (lettersArray = []) => {
  console.log("lettersArray:", lettersArray);
  let letter = "";
  if (lettersArray.length === 1) {
    return (letter = lettersArray)[lettersArray.length - 1];
  }

  for (let i = 0; i < lettersArray.length; i += 1) {
    let test = lettersArray.filter((item) => item === lettersArray[i]);
    console.log("test:", test.length);
    if (test.length === 1) {
      letter = lettersArray[i];
      return letter;
    }
  }
};
