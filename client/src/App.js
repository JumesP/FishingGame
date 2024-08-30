import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Landing from './pages/Landing';
import Main from './pages/Main';
import FishTank from './pages/FishTank';
import Rewards from "./pages/Rewards";
import Catch from "./pages/Catch";


import ArrayOfCards from "./components/molecules/ArrayOfCards";
import Fish from "./components/atoms/fish";
import cod from './images/cod.png';

import './components/styles.scss';


function App() {

  // const [backendData, setBackendData] = useState([{}]);
  //
  // useEffect(() => {
  //   fetch('/api/populate')
  //     .then((res) => res.json())
  //     .then((data) => setBackendData(data));
  // }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/FishTank" element={<FishTank />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/Catch" element={<Catch />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )



  // return (
  //   <div>
  //     {console.log(backendData)}
  //     {/*{(typeof backendData.fish === 'undefined' || typeof backendData.cards === 'undefined') ?*/}
  //     {(typeof backendData.fish === 'undefined') ?
  //       <p>Loading...</p> :
  //       <>
  //
  //         <FishTank
  //             children={backendData.fish.map((fish, number) => (
  //                 <Fish fishType={fish} path={"/images/" + fish + ".png"}/>
  //             ))}
  //         />
  //
  //         <h1 className="text-3xl font-bold underline">Fetched Fishes! All Fishes owned:</h1>
  //         <ul>
  //           {backendData.fish.map((user, number) => (
  //             <li key={number}>{user}</li>
  //           ))}
  //         </ul>
  //         {/*{console.log(backendData.cards)} // undefined???*/}
  //         <ArrayOfCards cards={backendData.reward} />
  //       </>
  //     }
  //   </div>
  // );



}

export default App;