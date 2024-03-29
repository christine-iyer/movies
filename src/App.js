import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import Logo from './components/Logo/Logo';
export default function App() {
  // USE OUR COMPONENTS IN APPs RETURNED JSX
const apiKey = "7211827f";
  const [movie, setMovie] = useState(null);
  const [score, setScore] = useState(null);
  const [urban, setUrban] = useState(null);
  const [synonym, setSynonym] = useState(null);
  const [definition, setDefinition] = useState(null);

  const [domain, setDomain]= useState(null)

 
 
  const [errorMessage, setErrorMessage] = useState("");

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
    }
  }
  const getScore = async (searchTerm) => {
    try {
      const response = await fetch(`https://mdblist.p.rapidapi.com/?s=${searchTerm}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setScore(data)
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
    }
  }
  const getUrban = async (searchTerm) => {
    try {
      const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
          'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setUrban(data)
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
      
    }
  }


  const getSynonym = async (searchTerm) => {
    try {
      const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/synonyms`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setSynonym(data)
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
    }
  }
 
  const getDefinition = async (searchTerm) => {
    try {
      const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/definitions`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setDefinition(data)
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
    }
  }

  // const getNews = async (searchTerm) => {
  //   try {
  //     const response = await fetch(`https://real-time-news-data.p.rapidapi.com/search?query=${searchTerm}&country=US&lang=en`, {
  //       method: "GET",
  //       headers: {
  //         'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
  //         'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
  //       }
  //     })
  //     const data = await response.json()
  //     setNews(data)
  //     console.log(data)
  //    } catch (error) {
  //     console.error(error)
  //     setErrorMessage(error.message);
  //   }
  // }

  const getDomain = async (searchTerm) => {
    try {
      const response = await fetch(`https://domainr.p.rapidapi.com/v2/search?mashape-key=witness&query=${searchTerm}&location=de&registrar=dnsimple.com&defaults=club%2Ccoffee`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
          'X-RapidAPI-Host': 'domainr.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setDomain(data)
      return data
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
      return e.message
    }
  }


  useEffect(() => {
    
    Promise.all([
    getMovie(),
    getScore(),
    getUrban(),
    getSynonym(),
    getDefinition(),
    getDomain()
  ]).then((values)=>{
    console.log(values)

  })

  
  }, []);

 
return (
    <div className="App">
        <aside><Logo /></aside>
      <Form movieSearch={getMovie} scoreSearch={getScore} urbanSearch={getUrban} synonymSearch={getSynonym} definitionSearch={getDefinition} domainSearch={getDomain} />
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <MovieDisplay movie={movie} score={score} urban={urban} synonym={synonym} definition={definition}  domain={domain}  />
    </div>
  );
}
