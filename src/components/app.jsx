import React, { Component } from 'react';

import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: ""
      // while none is selected, returns the first in the list
      // when one is clicked returns that one
    };
  }

  // create a selectedGif function
  // selectedGif = (id) => {
  //   this.setState({
  //     selectedGif: id
  //   });
  // }

  search = (query) => {
    giphy('eTjUGLIdOYW9i30EBA36l7Wnb8JT2OXJ').search({
      q: query,
      rating: "g",
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
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
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
