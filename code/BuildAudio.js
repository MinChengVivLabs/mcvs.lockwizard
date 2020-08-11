var config = require('config');
var secret = require('secret');

module.exports.function = function buildAudio () {
  var audioInfo = {}

  var audioItem = {
  id: 1,
  stream: [
    {
      // url: "https://storage.googleapis.com/bixby-audio-player-example/meows/203121_777645-lq.mp3",
      url: "https://storage.googleapis.com/nishikawa-yui/rain2.mp3",
      // url: config.get('url'),
      format: "mp3"
    }
  ],
  title: "Sweet Dream",
  subtitle: "Sweet Dream",
  artist: "Nishikawa",
  albumName: "Sweet Dream",
  // albumArtUrl: "https://storage.googleapis.com/bixby-audio-player-example/meows/cat-08.jpg"
  albumArtUrl: "https://storage.googleapis.com/nishikawa-yui/bed.png"
  // albumArtUrl: config.get('albumArtUrl')
  }

  audioInfo.category = 'MUSIC';
  audioInfo.displayName = 'Sweet Dream';
  audioInfo.repeatMode = 'ALL';
  audioInfo.doNotWaitForTTS = false;
  audioInfo.audioItem = audioItem;
  
  return audioInfo
}
