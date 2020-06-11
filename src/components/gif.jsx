import React, { Component } from 'react';

class Gif extends Component {
  handleOnClick = () => {

  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" />
      // add onclick function in the tag
      // add a handleOnClick function
      // how to handle the click and change the state of selectedGif
      // add a function in app.jsx that is passed to its children
    );
  }
}

export default Gif;
