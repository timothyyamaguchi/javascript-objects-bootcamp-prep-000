var playlist = {
  Drake: 'Headlines',
  Drake: 'Passionfruit',
  Wale: 'That Way'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}