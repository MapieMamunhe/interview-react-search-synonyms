import React, { useState } from "react";

// import { Container } from './styles';
interface Props {
  setValidSearch: React.SetStateAction<any>;
}
const Form: React.FC<Props> = ({ setValidSearch }: Props) => {
  const styles = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setValidSearch(input);
      }}
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>
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
            setInput(e.currentTarget.value);
          }}
          style={{ textAlign: "center" }}
        />
      </p>
      <p>
        <button type="submit">Fetch Synonym</button>
      </p>
    </form>
  );
};

export default Form;
