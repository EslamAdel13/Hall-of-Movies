import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Assets/Styles/Details.css'
const Details = () => {
    let { id } = useParams();
    let [product, setProduct] = useState({});

    

    useEffect(() => {
        const SingleProduct = () => {
            return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11d04016ca44ea31c5164e8ad6bf18e1`)
                .then((res) => res.json())
                .then((json) => setProduct(json));
        };
        SingleProduct();
    }, [id]);

    return (
        <section style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${product.poster_path})`}}>
        <div className="details">
            <div className="img-wrapper">
            <img
                className="detail-img"
                src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                alt={product.title || product.name}
            />
            </div>
            <h2>{product.title || product.name}</h2>
            <p>{product.overview}</p>
            <p>Released: {product.release_date}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        Rating: {product.vote_average}</p>
        </div>
        </section>
    );
}

export default Details;
