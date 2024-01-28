// Start by importing the files I need for the main App component
import React from "react";
import Nav from "./components/NavBar";
import DemoMovieService from "./service/DemoMovieService";
import MovieList from "./components/MovieList";

// Calling the service I created for a handful of movies
const service = new DemoMovieService();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
    };
  }
  // Calling an all function and using that to build my list of Movies for displaying 
  // built by other components but pulled here to the central point
  componentDidMount() {
    service.all().then((list) => {
      this.setState({
        list: list || [],
      });
    });
  }

  // rendering my navbar and movie list
  render() {
    const list = this.state.list || [];
    return (
      <>
        <Nav />
        
        <div>
           <MovieList list={list} /> 
        </div>
      </>
    );
  }
}
