
import React, { useState } from "react";
import './App.css'
let genre = ['Kashmir', 'Ladakh', "Uttrakhand", 'Uttar Pradesh', 'Jharkhand', 'Delhi', 'Gujarat', 'Punjab', 'Haryana', 'Rajasthan']
var jammuFood = {
  "🍲 Gustaba": "Ratings:4.5/5",
  "🍲 Tabak Maz Dum Aloo": "Ratings:4/5",
  "🍲HaakorKaramkaSaag": "Ratings:4/5"
};
var LadakhFood = {
  "🍲 Momos": "Rating:4/5",
  "🍲 Thukpa": "Rating:4/5",
  "🍲 Skew": "Rating:4.5/5",
  "🍲 Tigmo": "Rating:4.5/5",
  "🍲 Khambir": "Rating:4.5/5",
};
var UttrakhandFood = {
  "🍲 Aloo ke Gutke": "Rating:4.5/5",
  "🍲 Kaapa": "Rating:4.5/5",
  "🍲 Jhangora(millets) ki": "Rating:4/5",
  "🍲 Kheer": "Rating:4/5",
  "🍲 Chainsoo": "Rating:4/5"
};
var UttarpradeshFood = {
  "🍲 Kabab": "Rating:4.5/5",
  "🍲 Biryanis": "Rating:4.5/5",
  "🍲 Bedmi": "Rating:4.5/5",
  "🍲 Aloo Kachori": "Rating:4.5/5",
  "🍲  Banarasi Chaat": "Rating:4.5/5"
};
var JharkhandFood = {
  "🍲 Thekua": "Rating:4.5/5",
  "🍲  Pua": "Rating:4/5",
  "🍲 Marua-ka-roti": "Rating:4/5",
}
var delhiFood = {
  "🍲 Chaat": "Rating:4.5/5",
  "🍲  Tandoori Chicken Paranthe": "Rating:4/5",
  "🍲 Chole Bhature": "Rating:4/5",
}
var gujaratFood = {
  "🍲 Thepla": "Rating:4.5/5",
  "🍲 Dhokla Khandvi": "Rating:4/5",
  "🍲 Handvo": "Rating:4/5",
  "🍲 Panki": "Rating:4/5"
}
var punjabFood = {
  "🍲 Dal Makhni": "Rating:4.5/5",
  "🍲 Makke di Roti-": "Rating:4/5",
  "🍲 Sarson da Saag": "Rating:4/5",
  "🍲 Chana Bhature": "Rating:4/5"
}
var haryanaFood = {
  "🍲 Kachri ki Sabzii": "Rating:4.5/5",
  "🍲 Chaach-Lassi-": "Rating:4/5",
  "🍲 Cholia": "Rating:4/5",
  "🍲 Rabadi": "Rating:4/5",
  "🍲  Bajre ki Khichdi": "Rating:4/5"
}
var rajasthanFood = {
  "🍲 Dal-Bati-Churma Ker Sangari": "Rating:4/5",
  "🍲 Lal Maas": "Rating:4/5",
  "🍲 Gatte": "Rating:4/5"
}
let emptyArray = []
let list;
export default function App() {
  var [display, setDisplay] = useState();
  // var [Image, setImage] = useState();
  var [state, setState] = useState();
  function handleToClicked(item) {
    setState(item);
    if (item === 'Kashmir') {
      list = jammuFood;
      emptyArray = Object.keys(list)
      display = list;
      setDisplay(display);
    }
    if (item === 'Ladakh') {
      list = LadakhFood
      emptyArray = Object.keys(list);
      display = list
      setDisplay(display);
    }
    if (item === 'Uttrakhand') {
      list = UttrakhandFood
      emptyArray = Object.keys(list);
      display = list
      setDisplay(display);
    }
    if (item === 'Uttar Pradesh') {
      list = UttarpradeshFood
      emptyArray = Object.keys(list);
      display = list
      setDisplay(display);
    }
    if (item === 'Jharkhand') {
      list = JharkhandFood
      emptyArray = Object.keys(list);
      display = list
      setDisplay(display);
    }
    if (item === 'Delhi') {
      list = delhiFood;
      emptyArray = Object.keys(list);
      display = list;
      setDisplay(display)
    }
    if (item === 'Gujarat') {
      list = gujaratFood;
      emptyArray = Object.keys(list);
      display = list;
      setDisplay(display)
    }
    if (item === 'Punjab') {
      list = punjabFood;
      emptyArray = Object.keys(list);
      display = list;
      setDisplay(display)
    }
    if (item === 'Haryana') {
      list = haryanaFood;
      emptyArray = Object.keys(list);
      display = list;
      setDisplay(display)
    }
    if (item === 'Rajasthan') {
      list = rajasthanFood;
      emptyArray = Object.keys(list);
      display = list;
      setDisplay(display)
    }
  }
  return (
    <div id="main-div">
      <section>
        <center><h1 style={{ margin: '1.2rem', }} >TOP 10 FOODS FROM 10 STATE OF INDIA 😋</h1></center>
        <ul className="flex-title">
          {
            genre.map((item) => {
              return <button key={item} onClick={() => handleToClicked(item)} >{item}</button>
            })
          }
        </ul>
      </section>
      <section>
        <div className="appear" >
          <h2 style={{marginTop:'1rem'}} > Result will appear here👇</h2>
          <center><p style={{ fontWeight: 'bolder', padding: '1rem',color:'whitesmoke' }} >{state}</p></center>
        </div>
      </section>
      <section>
        <div className="result-div">
          <ul>
            {
              emptyArray.map((setItem) => {
                return (<li>
                  {setItem}
                </li>)
              })
            }
          </ul>
        </div>
      </section>
    </div>
  )
}
