import React, { Component } from 'react'
import ReviewForm from '../components/reviews'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      text: ""
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
      this.setState({
        name: event.target.value,
        rating: event.target.value,
        text: event.target.value
      }
    )
  }

  handleFormSubmission(event) {
    this.state.value
    event.preventDefault();
  }

  render() {
  return (
    <div>
    <form className="form" onSubmit={this.handleFormSubmission}>
      <input
        type='text'
        name={this.state.name}
        rating={this.state.rating}
        text={this.state.text}
        onChange={this.state.handleInputChange}
      />

      ...
    </form>
  </div>
  );}
}



export default ReviewFormContainer
