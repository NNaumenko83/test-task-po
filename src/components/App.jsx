import { useState } from "react";
import { Form } from "./Form/Form";
import { Text } from "./Text/Text";
import { removeSymbols } from "helpers/removeSymbols";
import { makeArrayFromText } from "helpers/makeArrayFromText";
import { makeArrayOfUniqueSymbols } from "helpers/makeArrayOfUniqueSymbols";
import { findUniqueSymbol } from "helpers/findUniqueSymbol";
import { Container } from "./App.styled";

export const App = () => {
  const [text, setText] = useState("");

  let modifiedText = "";
  let arrayFromInputText = [];
  let arrayOfUniqueSymbols = [];
  let uniqueSymbol = "";

  const formSubmit = (text) => {
    setText(text);
  };

  if (text) {
    modifiedText = removeSymbols(text);
    arrayFromInputText = makeArrayFromText(modifiedText);
    arrayOfUniqueSymbols = makeArrayOfUniqueSymbols(arrayFromInputText);
    uniqueSymbol = findUniqueSymbol(arrayOfUniqueSymbols);
  }

  return (
    <Container>
      <Form onSubmit={formSubmit} />
      <div>
        {text && (
          <>
            <h3>Your entered text</h3>
            <Text text={text} />
          </>
        )}
        {modifiedText && (
          <>
            <h3>1. Modified text. Removed all non alphabetic symbols</h3>
            <Text text={modifiedText} />
          </>
        )}
        {arrayFromInputText.length > 0 && (
          <>
            <h3>2. Array of words from modified text.</h3>
            <Text text={JSON.stringify(arrayFromInputText)} />
          </>
        )}
        {arrayOfUniqueSymbols.length > 0 && (
          <>
            <h3>3. Array of unique symbols.</h3>
            <Text text={JSON.stringify(arrayOfUniqueSymbols)} />
          </>
        )}
        {uniqueSymbol && (
          <>
            <h3>4. Unique symbol.</h3>
            <p>{uniqueSymbol}</p>
          </>
        )}
      </div>
    </Container>
  );
};
