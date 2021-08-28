import {data} from './data'
import './App.css';
import { useState } from 'react';

function App() {

  const [selectedGenre,setSelectedGenre]=useState("Hip-hop");

  const handleClick=(genre)=>{
    setSelectedGenre(genre)
    
  }
  return (
    <div className="App">
    <header>
        <div className="heading" >
          <img src="https://img.icons8.com/material/36/000000/portable-speaker2.png"/>
          <h1>goodMusic</h1>
        </div>

        <p>Checkout my favourite music. Select a genre to get started.</p>
        
      </header>
      
      <div className="main">
        {
          Object.keys(data).map(genre=>{
            return <button onClick={(e)=> handleClick(genre)}>{genre}</button>
          })
        }
        <hr />

        {data[selectedGenre].map(song=>{
          return <div className="song">
            <h4>{song.name}</h4>
            <a href={song.spotifyUrl}> 👉 Link</a>
            <p>Rating: {song.rating}</p>
          </div>
        })}
        
        
      </div>
      
    </div>
  );
}

export default App;
