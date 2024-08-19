import React, { useState, useEffect } from 'react';
import FishTank from "./components/molecules/fishTank";
import ArrayOfCards from "./components/molecules/ArrayOfCards";
import Fish from "./components/atoms/fish";

// import cod from '../public/images/cod.png';
import cod from './images/cod.png';
import './components/styles.scss';


function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api/populate')
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  // const content =

  // const cards = [
  //   {
  //     title: "Card 1",
  //     description: "This is a card",
  //     // url: "/images/salmon.png",
  //     rarity: "mystical",
  //   },
  //   {
  //     title: "Shark 2",
  //     description: "This is a card",
  //     // url: "/images/salmon.png",
  //     rarity: "rare",
  //   },
  //   {
  //     title: "Card 3",
  //     description: "This is a card",
  //     url: "/images/salmon.png",
  //     rarity: "legendary",
  //   },
  // ]

  // console.log(backendData.fish)

  return (
    <div>
      {console.log(backendData)}
      {/*{(typeof backendData.fish === 'undefined' || typeof backendData.cards === 'undefined') ?*/}
      {(typeof backendData.fish === 'undefined') ?
        <p>Loading...</p> :
        <>

          <FishTank
              children={backendData.fish.map((fish, number) => (
                  <Fish fishType={fish} path={"/images/" + fish + ".png"}/>
              ))}
          />

          <h1 className="text-3xl font-bold underline">Fetched Fishes! All Fishes owned:</h1>
          <ul>
            {backendData.fish.map((user, number) => (
              <li key={number}>{user}</li>
            ))}
          </ul>
          {/*{console.log(backendData.cards)} // undefined???*/}
          <ArrayOfCards cards={backendData.reward} />
        </>
      }
    </div>
  );
}

export default App;