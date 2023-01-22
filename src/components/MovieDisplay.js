// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({ movie, score, urban, synonym, definition, news, domain }) {
  //The component must return some JSX
  return (
    <>
      {movie && movie.Title ? (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          {/* <img src={news.data[0].photo_url} alt={news.data[0].title} /> */}
          <p>It's a  {movie.Genre.toLowerCase()} starring {movie.Actors}. Released in {score.search[0].year}, they say it made {movie.BoxOffice} </p>
          <p>With an average rating of {score.search[0].score}...{score.search[0].year} </p>
          <p>Some say it means {definition.definitions[0].definition}</p>
          <p>Other words for it...{synonym.synonyms[0]} </p>
         
          <p>Urbanly it means  {urban.list[0].definition.replace(/[\[\]']+/g, '')}</p> 

        </div>
      ) : (
        <h1> No Movie To Display</h1>
      )}


    </>
  );
}