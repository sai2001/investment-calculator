import { useState } from "react";
import { Header } from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const isDurationValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInputs((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {isDurationValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Duration must be at least 1 year.</p>
      )}
    </div>
  );
}

export default App;
