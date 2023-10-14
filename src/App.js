import React, { useState } from "react";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageInDays = (today - birthDateObj) / (1000 * 60 * 60 * 24);
    const ageInYears = Math.floor(ageInDays / 365);

    setAge(ageInYears);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input
        class="in"
        type="date"
        placeholder="Enter your birth date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br />
      <br />
      <button class="but" onClick={calculateAge}>
        Calculate Age
      </button>
      <p>
        <b>You are {age} years old</b>
      </p>
    </div>
  );
}

export default App;
