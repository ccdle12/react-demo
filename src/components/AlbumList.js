import React, { Component }from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
  // Class Level Property.
  state = { albums: [] };

  // Life cycle methods.

  // First life cycle hook.
  UNSAFE_componentWillMount() {
    // Adds a debug statement, and can use the developer console to step through
    // each debug statement.
    // debugger;

    // this.setState() is how to mutate the component level state.
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }
  
  // Helper Method to render the retrieved albums.
  renderAlbums() {
      // Maps a new array of album titles.
      // Each child in an array must have a key in order to be rendered.
      return this.state.albums.map(album =>
          <AlbumDetail key={ album.title } album={ album }/>
      );
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;
