import styles from "./App.module.css";
import { useState } from "react";
const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    document.getElementById("bmi").innerHTML = `BMI is: ${(
      weight /
      (height / 100) ** 2
    ).toFixed(1)}`;
  };
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1>BMI Calculator</h1>
      </header>
      <form className={styles.form} onSubmit={calculate}>
        <div>
          <label>Height in cm:</label>
          <input
            type="number"
            min="1"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            value={height}
            required
          />
        </div>
        <div>
          <label>Weight in kg:</label>
          <input
            type="number"
            min="1"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            value={weight}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Calculate BMI</button>
      </form>
      <p id="bmi"></p>
      <div className={styles.information}>
        <h3>BMI Categories</h3>
        <ul>
          <li>
            <p>Underweight: BMI less than or equal to 18.5</p>
          </li>
          <li>
            <p>Normal weight: BMI between 18.5 and 24.9</p>
          </li>
          <li>
            <p>Overweight: BMI between 25 and 29.9</p>
          </li>
          <li>
            <p>Obesity: BMI of 30 or greater</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
