import { useState } from "react";
import { Form } from "./Form/Form";
import { Text } from "./Text/Text";
import { removeSymbols } from "helpers/removeSymbols";

export const App = () => {
  const [text, setText] = useState("");
  const [modifiedText, setModifiedText] = useState("");

  const findUniqueSymbol = (text) => {
    console.log("text:", text);
    setText(text);

    setModifiedText(removeSymbols(text));
  };

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
      </div>
    </div>
  );
};
