const fetch = require('node-fetch');

const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
}
fetchAlbums();