import { useState } from "react";
import { Form } from "./Form/Form";
import { Text } from "./Text/Text";
import { removeSymbols } from "helpers/removeSymbols";
import { makeArrayFromText } from "helpers/makeArrayFromText";

export const App = () => {
  const [text, setText] = useState("");
  let modifiedText;
  let arrayFromInputText;
  const findUniqueSymbol = (text) => {
    setText(text);
  };

  if (text) {
    modifiedText = removeSymbols(text);
    arrayFromInputText = makeArrayFromText(modifiedText);
  }

  return (
    <div>
      <Form onSubmit={findUniqueSymbol} />
      <div>
        {text && (
          <>
            <h3>Your text</h3>
            <Text text={text} />
          </>
        )}
        {modifiedText && (
          <>
            <h3>1. Modified text. Removed all non alphabetic symbols</h3>
            <Text text={modifiedText} />
          </>
        )}
        {modifiedText && arrayFromInputText.length > 0 && (
          <>
            <h3>2. Array of words from modified text.</h3>
            <Text text={JSON.stringify(arrayFromInputText)} />
          </>
        )}
      </div>
    </div>
  );
};
