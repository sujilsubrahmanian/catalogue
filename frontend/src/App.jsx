import './App.css'
import MovieCard from "./Components/MovieCard"


function App() {
  return (
    <>
      <MovieCard movie={{title:"Intrestellar",release_date:"2014"}}/>
      <MovieCard movie={{title:"Inception",release_date:"2010"}}/>
    </>

   
  );
}

export default App;