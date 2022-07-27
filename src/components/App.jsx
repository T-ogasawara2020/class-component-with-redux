import React from "react";
const App = ({ number, title, day, plus, minus, asyncMinus, getJson }) => (
  <div>
    <h1>
      {title} {number} {day}
    </h1>
    <h2
      onClick={() => {
        plus(10);
      }}
    >
      App{number}
    </h2>
    <button
      onClick={() => {
        asyncMinus(100);
      }}
    >
      非同期マイナス
    </button>
    <button onClick={getJson}>非同期get</button>
  </div>
);

export default App;
