import React, { useState, useEffect } from "react";

import dice_icon from "../media/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data["slip"]);
    }
  }, []);
  function generateAdvice() {
    window.location.reload();
  }
  return (
    <div className="advice-card">
      <span>advice #{advice.id}</span>
      <p>"{advice.advice}"</p>
      <div className="divider"></div>
      <div className="change-advice" onClick={generateAdvice}>
        <img src={dice_icon} alt="dice" />
      </div>
    </div>
  );
}

export default AdviceCard;
