import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // USE OUR COMPONENTS IN APPs RETURNED JSX
const apiKey = "7211827f";
  const [movie, setMovie] = useState(null);
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
  };

  /*
  somePromiseFunction().then(() => {}).catch((e)=>{....})
  */
  /*
  Model.find({}, (err, thing) => {
    if(err){

    }else {

    }

  })
 */
  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <MovieDisplay movie={movie} />
    </div>
  );
}
