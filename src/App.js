import propTypes from "prop-types";
import React from 'react';
import axios from 'axios';
import Movie from './Movie';


// state가 필요한 경우 class component로 생성해야 한다.
class App extends React.Component{ 
    state = {
      isLoading: true,
      movies: []
  }

  getMovies = async () => {  // movies를 받아올 때 까지 기다림
        // movies.data.data.moview 한번에 넣기
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies.data.data.movies)
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    this.getMovies();
  }

  componentDidUpdate(){
    // console.log("I just updated")
  }

  render(){    // React는  Class component의 render 메소드를 자동으로 실행
    // console.log("I'm rendering");
    const { isLoading, movies } = this.state;   // ES6 Magic
    return (
      <section className="container">
        { isLoading
            ? <div className="loader">
              <span className="loader__text">Loading...</span></div>
            : <div className="movies">
              {movies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    rating={movie.rating}
                    genres={movie.genres}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}/>))}
            </div>
        }
      </section>
    )
  }
}


export default App;
