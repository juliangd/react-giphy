import React, { Component } from 'react';

import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "h7jp2zWsi0ga4rQqDX"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: "g",
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    // const gifs = [
    //   { id: "m9pQ6KapT7Cq3DQ5DZ" },
    //   { id: "h7jp2zWsi0ga4rQqDX" }
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.state.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
