import MovieCard from "../Components/MovieCard";
import {useState} from "react"
import "../css/Home.css"

function Home(){
    const[searchQuery,setSearchQuery]=useState("");

    
    const movies = [
        {id :1, title: "Intrestellar",release_date: "2014"},
        {id :2, title: "Inception",release_date: "2010"},
        {id :3, title: "Leo",release_date: "2023"},
        {id :4, title: "Avatar",release_date: "2009"},
    ];

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        ///setSearchQuery("Search a profuct..")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movies..." className="search-input"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }

            <div className="favorites-empty">
        <h2>No Favorites Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
            </div>
        </div>
        
    );
}

export default Home;