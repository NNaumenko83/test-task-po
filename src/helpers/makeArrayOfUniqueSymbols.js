export const makeArrayOfUniqueSymbols = (wordsArray = []) => {
  let array = [];
  wordsArray.forEach((word) => {
    if (word.length === 1) {
      array.push(word);
      return;
    }
    for (let i = 0; i < word.length; i += 1) {
      let test = [...word].filter((item) => item === word[i]);
      console.log("test:", test.length);
      if (test.length === 1) {
        array.push(word[i]);
        return;
      }
    }
  });

  return array;
};
