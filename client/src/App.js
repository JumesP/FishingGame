import React, { useState, useEffect } from 'react';
import FishTank from "./components/molecules/fishTank";
import Fish from "./components/atoms/fish";

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api/populate')
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  const content =


  console.log(backendData.fish)

  return (
    <div>
      {(typeof backendData.fish === 'undefined') ?
        <p>Loading...</p> :
        <>
          <h1 className="text-3xl font-bold underline">Fetched Users!</h1>
          <ul>
            {backendData.fish.map((user, number) => (
              <li key={number}>{user}</li>
            ))}
          </ul>

          <FishTank
            children={backendData.fish.map((fish, number) => (
                <Fish fishType={fish} />
            ))}
          />





        </>
      }
    </div>
  );
}

export default App;