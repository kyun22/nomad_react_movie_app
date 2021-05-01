import react from "react";
import propTypes from "prop-types";

// state가 필요하지 않으니까 function 컴포넌트로 생성해도됨.
function Movie(props) {
    return <div className="movie">
        <img src={props.poster} alt={props.title}/>
        <div className="movie__data">
            <h3 className="movie__title">{props.title}</h3>
            <h5 className="movie__year">{props.year}</h5>
            <ul className="genres">
                {props.genres.map(genre =>(
                    <li className={genre.index}>{genre}</li>
                ) )}
            </ul>
            <p className="movie_summary">{props.summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    rating : propTypes.number.isRequired,
    // genre: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie;
