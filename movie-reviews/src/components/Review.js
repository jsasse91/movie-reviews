// Review: A text review a user can leave on a movie.
import React from "react";

export default class Review extends React.Component {
  state = {
    review: '',
  }

#handleReviewClick = (x) => {
  x.preventDefault();
  let text = this.refs.review;
  text.value = "";
}  

render() {
  return(
    <div className="row card-text text-start">
      <div className="col-12">
        <div className="container border border-solid rounded shadow mt-2 bg-light">
          <form onSubmit={this.#handleReviewClick}>
            <h3 className="text-center">Leave a Review!</h3>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">Review:</label>
              <textarea className="form-control" ref="review" id="review" rows="3" onChange={(event)=>{this.setState({review:event.target.value})}}></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
        <table className="m-3">
          <thead>
            <tr>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.state.review}</th>
            </tr>
          </tbody>
        </table>
    </div>
  );
}
}