// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay(props) {
     //The component must return some JSX
     return (
       <>
         {props.movie && props.movie.Title ? (
           <div>
             <h2>{props.movie.Title}</h2>
             <img src={props.movie.Poster} alt={props.movie.Title} />
             <p>And they made {props.movie.BoxOffice}</p>
           </div>
         ) : (
           <h1> No Movie To Display</h1>
         )}
       </>
     );
   }