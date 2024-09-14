
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Assets/Styles/DisplayAll.css'
const Mylist = () => {
const [product, setProduct] = useState([]);

const getData = () => {
    return fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=11d04016ca44ea31c5164e8ad6bf18e1"
    )
        .then(res => res.json())
        .then(json => setProduct(json.results));
};

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="cards">
            {product.map((movie, index) => (
                <div className='card' key={index}>
                    <div className="image-wrapper">
                        <img
                            className="image"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title || movie.name}
                        />
                    </div>
                    <h3>{movie.title || movie.name}</h3>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        Rating: {movie.vote_average}</p>
                    <Link className="btn" to={`/movie/${movie.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Mylist;