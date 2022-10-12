import React, { useState } from "react";

export default function Room() {
  const [isLightOn, setLight] = useState(true);

  const lightedness = isLightOn ? "lit" : "dark";

  const flipLight = () => {
    setLight(!isLightOn);
  };

  return (
    <div className={`room ${lightedness}`}>
      The room is {lightedness}
      <br />
      <button onClick={flipLight}>Flip</button>
    </div>
  );
}
