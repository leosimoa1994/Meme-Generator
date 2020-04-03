import React, { useState } from "react";

import MemeImg from "./formImg";

function FromText() {
  const [text, setText] = useState("");
  const [wight, setWight] = useState(0);
  const [heigth, setHeigth] = useState(0);

  const [arrayText, setArrayText] = useState([]);

  const addText = e => {
    e.preventDefault();
    const ketID = arrayText.length + 1;
    const element = (
      <p
        key={ketID}
        style={{
          marginTop: `${wight}px`,
          marginLeft: `${heigth}px`,
          position: "absolute"
        }}
      >
        {text}
      </p>
    );
    setArrayText([...arrayText, element]);
    setText("");
    setWight(0);
    setHeigth(0);
  };

  return (
    <form onSubmit={addText}>
      <div className="fromlayout">
        <input
          type="text"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          className="styleNumber"
          type="number"
          name="wight"
          value={wight}
          onChange={e => setWight(e.target.value)}
        />
        <input
          className="styleNumber"
          type="number"
          name="heigth"
          value={heigth}
          onChange={e => setHeigth(e.target.value)}
        />
        <button>Add</button>
      </div>
      <div className="meme">
        <MemeImg />
        <p
          className="fromText"
          style={{
            marginTop: `${wight}px`,
            marginLeft: `${heigth}px`
          }}
        >
          {text}
        </p>
        <div className="textarray">{arrayText}</div>
      </div>
    </form>
  );
}

export default FromText;
