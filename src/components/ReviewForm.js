import React from 'react'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    name: '',
    rating: '',
    text: ''
  }
}

  render() {
    return (
      <form>
        <input placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value})}/>
        <input placeholder="Rating" value={this.state.rating} onChange={e => this.setState({ rating: e.target.value})}/>
        <input placeholder="Text" value={this.state.text} onChange={e => this.setState({ text: e.target.value})}/>
      </form>

    );
  }

}

export default ReviewForm
