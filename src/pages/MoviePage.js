import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // USE OUR COMPONENTS IN APPs RETURNED JSX
const apiKey = "7211827f";
  const [movie, setMovie] = useState(null);
  const [score, setScore] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
      // callback(null,succesfulThings)
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      // callback(err,null)
    }
  }

  const getScore = async () => {
    try {
      const response = await fetch(`https://mdblist.p.rapidapi.com/?s=${searchTerm}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_MDB}`,
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setScore(data)
      


    } catch (error) {
      console.error(error)
      setErrorMessage(error.message);

    }
  }

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <MovieDisplay movie={movie} />
      <div>score={score}</div>
    </div>
  );
}
