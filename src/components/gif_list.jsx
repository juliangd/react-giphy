import React, { Component } from 'react';
import Gif from './gif';

// with destructuring
// const GifList = ({ gifs, selectGif }) => {
//   return (
//     <div className="gif-list">
//       {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
//     </div>
//   );
// };

class GifList extends Component {
  renderList = () => {
    const { gifs, selectGif } = this.props;
    return gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
