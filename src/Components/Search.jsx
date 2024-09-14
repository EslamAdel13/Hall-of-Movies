import { useState, useEffect } from "react";
import '../Assets/Styles/Search.css'
import { Link } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [debounced, setDebounced] = useState(search); // For debouncing

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounced(search);
        }, 500);

        return () => {
            clearTimeout(timerId); // Cleanup the timeout if search changes
        };
    }, [search]);

    useEffect(() => {
        if (debounced) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=11d04016ca44ea31c5164e8ad6bf18e1&query=${debounced}`
            )
                .then((res) => res.json())
                .then((json) => setResults(json.results));
        } else {
            setResults([]); // Clear results if the search  is empty
        }
    }, [debounced]); // Trigger effect when debounced changes

    return (
        <div className='search-page'>
            <div class="box">
                <form className='search' name="search">
                    <input type="text" name="txt" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </div>
            <div className="results">
                {results.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id} className="item">
                            <img
                                src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
                                alt={result.title || result.name}
                            />
                            <h3>{result.title || result.name}</h3>
                            <p>{result.vote_average}</p>
                            <p>{result.release_date}</p>
                            <Link className="btn" to={`/movie/${result.id}`}>View Details</Link> 
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    )
}


export default Search;
