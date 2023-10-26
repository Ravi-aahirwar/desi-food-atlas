import React from 'react'
import "./App.css"
import { useState } from 'react';

export default function App() {
  const [emoji, setEmoji] = useState('');
  var emojiObject = {
    "😭": "Loudly Crying Face",
    "😂": "Face with Tears of Joy",
    "😄": "Happy",
    "🥰": "Smiling Face with Hearts",
    "😃": "Smileys",
    "😀": " Grinning Face",
    "😡": "Enraged Face",
    "😩": " Weary Face",
    "😱": "Face Screaming in Fear",
    "🤣": "Rolling on the Floor Laughing",
    "😅": "Grinning Face with Sweat",
    "❤️": "Red Heart"
  }
  function changeHandel(event) {
    let meaning = event.target.value;
    let translte = emojiObject[meaning]
    setEmoji(translte);
  }
  let convertArray = Object.keys(emojiObject); // convert Object to Array
  function handleToShowName(emojiList) {
    let translte = emojiObject[emojiList]
    setEmoji(translte);
  }
  return (
    <div>
      <div className='container'>
        <h1>Inside Outttt</h1>
        <center><input className='inputField' placeholder='Search emojiPedia' style={{ padding: '1rem' }} onChange={changeHandel} /></center>
        <h3>translation will appear here..</h3>
        <h2>{emoji} </h2>
        <h4>
          {
            convertArray.map((emojiList) => {
              return <span style={{ padding: '1rem', fontSize: '2rem' }} onClick={() => handleToShowName(emojiList)} > {emojiList}
              </span>
            })
          }
        </h4>
        <div className='footer'>
          <p>A simple emotion intepretor. I am often confused with the meanings and I keep going to <a href='https://emojipedia.org/'>emojipedia.</a> Wanted to make something like for my use with different sets.</p>
          <ul>
          <a href='github.com/Ravi-aahirwar'>Github</a>
          <a href='https://www.linkedin.com/in/ravi-aahirwar/'>Linkedin</a>
          </ul>
        </div>
      </div>
    </div>
  )
}