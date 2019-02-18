import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
 

  constructor(props){
    super(props);
    this.state= {movie: this.props.movie}
}


  componentDidMount() {
    let Items = [];
    let movieItems = [];
    const url = 'https://www.omdbapi.com/?type=movie&r=json&s=Fast&apikey=73943765';

    const generateMovieId = array => {
      if (array.length >= 1) {
        return (
          Math.max(
            ...array.map(function(o) {
              return o.id;
            })
          ) + 1
        );
      } else {
        return 1;
      }
    };

    axios.get(url).then(response => console.log(response));
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
