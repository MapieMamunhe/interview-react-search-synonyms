import React, { useState } from "react";

// import { Container } from './styles';
const styles = {
  center: {
    textAlign: "center",
  },
};
interface Props {
  textToSearch: string;
  setTextToSearch: React.SetStateAction<any>;
}
const Form: React.FC<Props> = ({
  textToSearch: input,
  setTextToSearch: setInput,
}: Props) => {
  return (
    <form>
      <p
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label
          htmlFor="word"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Insert your word down bellow
        </label>
        <input
          type="text"
          id="word"
          value={input}
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setInput(e.currentTarget.value);
          }}
          style={{ textAlign: "center" }}
        />
      </p>
    </form>
  );
};

export default Form;
