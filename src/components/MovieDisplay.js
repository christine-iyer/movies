// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({ movie, score, urban }) {
  //The component must return some JSX
  return (
    <>
      {movie && movie.Title ? (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>And they made {movie.BoxOffice}</p>
          <p>Its genre is  {movie.Genre}</p>
          <p>It means  {urban.list[0].definition.replace(/[\[\]']+/g,'')}</p>
          <p>It scored {score.search[0].score}</p>
        </div>
      ) : (
        <h1> No Movie To Display</h1>
      )}


    </>
  );
}