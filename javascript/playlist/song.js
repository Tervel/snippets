function Song(title, artist, duration) {
  // Call media allows us to access functionality from media (think inheritance from java)
  Media.call(this, title, duration); // this keyword represents the fact that the specific song instance is what's inheriting the functionality. Song becomes 'this' in the media function
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype); // Copies references to Media properties over to the Song object

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  
  if (this.isPlaying) {
    htmlString += ' class="current"'
  }
  
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  
  return htmlString;
};
