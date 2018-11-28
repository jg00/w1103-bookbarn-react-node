import React, { Component } from "react";
import "./AddBook.css";

class AddBook extends Component {
  constructor(props) {
    super(props);

    console.log("addbook", this.props);

    this.state = {
      book: {}
    };
  }

  handleTextBoxOnChange = e => {
    this.setState({
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAddMovieButtonClick = () => {
    console.log("button", this);
    console.log(this.state.book);
  };

  render() {
    return (
      <div>
        <div className="div-addbooks div-container-all">
          <h5>Add Book</h5>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.handleTextBoxOnChange}
          />
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={this.handleTextBoxOnChange}
          />
          <button onClick={this.handleAddMovieButtonClick}>Add Movie</button>
        </div>
      </div>
    );
  }
}

export default AddBook;
