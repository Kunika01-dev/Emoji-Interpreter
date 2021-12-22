import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😐": "Neutral",
  "😪": "Sleepy",
  "🎅": "Santa Claus",
  "😠": "Angry",
  "😟": "Worried",
  "⛰️": "Mountain",
  "🍨": "Ice-Cream",
  "☀️": "Summer",
  "🪁": "Kite",
  "💗": "Heart",
  "🔔": "Bell",
  "⏸️": "Pause",
  "🚩": "Flag",
  "🦁": "Lion",
  "🐟": "Fish",
  "🌈": "Rainbow",
  "🎈": "Balloon",
  "✏️": "Pencil",
  "🦉": "Owl",
  "👂": "Ear",
  "🕶️": "Sunglasses"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiclickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
    //console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>
      <h2>Check out the meaning of below ⬇️ listed emojis</h2>

      <h2>{meaning}</h2>
      <h3 style={{ padding: "0.5rem" }}>Emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickhandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: " 0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
