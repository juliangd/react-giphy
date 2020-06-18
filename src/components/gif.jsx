import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectGif } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

    shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
    }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
