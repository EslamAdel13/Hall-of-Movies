import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Assets/Styles/Details.css'
const Details = () => {
    let { id } = useParams();
    let [product, setProduct] = useState({});

    const SingleProduct = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11d04016ca44ea31c5164e8ad6bf18e1`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    };

    useEffect(() => {
        SingleProduct();
    }, [id]);

    return (
        <section>
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
            <p>{product.release_date}</p>
            <p>{product.vote_average}</p>
        </div>
        </section>
    );
}

export default Details;
