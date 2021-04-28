import propTypes from "prop-types";
import React from 'react';
import axios from 'axios';


class App extends React.Component{ 
    state = {  
    isLoading: true
  }

getMovies = async () => {
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
};

componentDidMount(){
  this.getMovies();
}

componentDidUpdate(){
  console.log("I just updated")
}

  render(){    // React는  Class component의 render 메소드를 자동으로 실행
    console.log("I'm rendering");
    const { isLoading } = this.state;   // ES6 Magic
    return (
      <div>{isLoading ? "Loading..." : "We are Ready"}</div>
    )
  }
}


export default App;
