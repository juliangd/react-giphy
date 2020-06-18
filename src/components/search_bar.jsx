import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  shouldComponentUpdate() {
    return false;
  }

    handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.search(event.target.value);
  }


  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
