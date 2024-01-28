// importing the files I need to build the movie list
import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {

  render() {
    const list = this.props.list || [];
    // using the list built above to iterate on and make each movie card in the list
    let items = list.map((movie, index) => {
      return (
        <Movie key={index} movie={movie} />
      );        
    });

    // returning that list of movies to render on the App.js
    return (
      <div>
        {items}
      </div>
    )
    
  }
}
