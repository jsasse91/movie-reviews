// importing the files needed to make it work
import React from "react";
import Stars from "./Stars";
import ReviewForm from "./ReviewForm";


export default class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.movie?.rating 
                || this.props.rating
                || 0
    };
  }

  // handler for when a star rating is updated
  #handleRatingChange = (rating, prevRating) => {
    console.log(`Movie: ${this.props.movie?.title} | Rating: ${prevRating} > ${rating}`);
    this.setState({
      rating: rating || prevRating || 0
    });
  }

  render() {
    // building variable to hold the data from the demo service
    const myImgStyle = { width: '250px', height: '250px'};
    const title = this.props.movie
                    ? this.props.movie.title
                    : this.props.title
                    || 'Test Title';
    const year = this.props.movie
                    ? this.props.movie.releaseYear
                    : this.props.releaseYear
                    || '1991';
    const rating = this.state.rating || 0;
    const image = this.props.movie
                    ? this.props.movie.img
                    : this.props.img;
    const about = this.props.movie
                    ? this.props.movie.synopsis
                    : this.props.synopsis
                    || 'Test';

    // building the template for each movie card pulling the applicable data from the Demo Service I built
    return (
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card border">
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  <img
                  src= {image}
                  className="card-img-top m-3"
                  alt="..."
                  style={myImgStyle}
                  />
                  <div className="card-body text-dark">
                    <h5 className="card-title">{title}</h5>
                    <div className="text-dark"><Stars rating = { rating } onRatingChange={ this.#handleRatingChange } /></div>
                    <p className="card-text">Release Year: {year}</p>
                    <p className="card-text text-start"><strong>Film Synopsis: </strong>{ about }</p>
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
