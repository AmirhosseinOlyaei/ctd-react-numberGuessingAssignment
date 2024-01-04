import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  // const [state, setState] = useState({ currentGuess: "" })

  // Create a handleInputChange function within the component that updates the currentGuess state value when the user changes the value in the input. Set the onChange property for the input element to refer to this function.
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // Create a onSubmitGuess function that calls the onGuess prop with the currentGuess value converted to a number and also resets the currentGuess to an empty string when it is called. Set the onClick property on the button to refer to this function.
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
