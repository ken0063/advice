import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [data, setData] = useState("Loading");

  const advice = useCallback(async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, [setData]);

  useEffect(() => {
    advice();
  }, [advice]);

  return (
    <div className="app">
      <div className="container">
        <p>{!data?.slip?.id ? "Loading..." : `ADVICE  #${data?.slip?.id}`}</p>
        <span>
          {!data?.slip?.advice ? "Loading..." : `"${data?.slip?.advice}"`}
        </span>
        <img
          src="./images/pattern-divider-mobile.svg"
          alt="pattern-divider-mobile"
        />

        <button type="button" onClick={advice}>
          <img src="./images/icon-dice.svg" alt="icon-dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
