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
        <button type="submit" className={styles.button}>
          Calculate BMI
        </button>
      </form>
      <p className={styles.displayBMI} id="bmi">
        BMI is:
      </p>
    </div>
  );
};

export default App;
