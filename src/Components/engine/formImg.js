import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";

function FromImg(props) {
  const meme = 1;
  const [imageMeme, setImageMeme] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemesImgs, setAllMemesImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(resp => {
        const { memes } = resp.data;
        setAllMemesImgs(memes);
      });
  }, [meme]);

  const randomImg = e => {
    e.preventDefault();
    const randomImage = Math.floor(Math.random() * allMemesImgs.length);
    const imgRandom = allMemesImgs[randomImage].url;
    setImageMeme(imgRandom);
  };

  return (
    <div className="memeImgDiv">
      <img className="memeIMG" src={imageMeme} alt="Meme" />

      <div>{props.arrayText}</div>
      <FiRefreshCw
        className="refresh"
        color={"#ffffff"}
        size={50}
        onClick={randomImg}
      />
    </div>
  );
}

export default FromImg;
