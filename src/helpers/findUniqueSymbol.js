export const findUniqueSymbol = (lettersArray = []) => {
  let letter = "";
  if (lettersArray.length === 1) {
    return (letter = lettersArray)[lettersArray.length - 1];
  }

  for (let i = 0; i < lettersArray.length; i += 1) {
    let array = lettersArray.filter((item) => item === lettersArray[i]);

    if (array.length === 1) {
      letter = lettersArray[i];
      return letter;
    }
  }
};
