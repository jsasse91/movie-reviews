// this was built in class
import React from "react";
// setting the max rating (5 stars)
const defaultMaxRating = 5;

export default class Stars extends React.Component {

  // click handler for when stars are clicked
  #handleClick = (e) => {
    const rating = e.target.dataset.rating;
    if (this.props.onRatingChange) {
      this.props.onRatingChange(rating, this.props.rating || 0);
    }
  }

  render() {
    let maxRating = this.props.maxRating || defaultMaxRating;
    let rating = this.props.rating || 0;
    let stars = [];
    
    for(let index = 0; index < maxRating; index++) {
      const icon = (index < rating) ? 'bi-star-fill' : 'bi-star';
      stars.push(<i key={ index } onClick={ this.#handleClick } className={ `bi ${ icon }` } 
                    data-rating={ index + 1 }></i>);
    }

    return(
      <>
        { stars }
      </>
    );
  }
}