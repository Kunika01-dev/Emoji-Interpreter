import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "Smiling",
  "π": "Neutral",
  "πͺ": "Sleepy",
  "π": "Santa Claus",
  "π ": "Angry",
  "π": "Worried",
  "β°οΈ": "Mountain",
  "π¨": "Ice-Cream",
  "βοΈ": "Summer",
  "πͺ": "Kite",
  "π": "Heart",
  "π": "Bell",
  "βΈοΈ": "Pause",
  "π©": "Flag",
  "π¦": "Lion",
  "π": "Fish",
  "π": "Rainbow",
  "π": "Balloon",
  "βοΈ": "Pencil",
  "π¦": "Owl",
  "π": "Ear",
  "πΆοΈ": "Sunglasses"
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
      <h2>Check out the meaning of below β¬οΈ listed emojis</h2>

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
