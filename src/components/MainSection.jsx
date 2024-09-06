import React, { useEffect, useState } from 'react';

const albumCard = (singleSong) => (
  <div className="col text-center" key={singleSong.id}>
    <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
    <p>
      Track: "{singleSong.title}"<br />
      Artist: {singleSong.artist.name}
    </p>
  </div>
);

const fetchMusicSection = async (artistName, setData, querySelector) => {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
    if (response.ok) {
      let { data } = await response.json();
      setData(data.slice(0, 4));
    } else {
      throw new Error('Error in fetching songs');
    }
  } catch (err) {
    console.error('error', err);
  }
};

function MainSection() {
  const [rockData, setRockData] = useState([]);
  const [popData, setPopData] = useState([]);
  const [hipHopData, setHipHopData] = useState([]);

  useEffect(() => {
    fetchMusicSection('queen', setRockData, '#rockSection');
    fetchMusicSection('katyperry', setPopData, '#popSection');
    fetchMusicSection('eminem', setHipHopData, '#hipHopSection');
  }, []);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="a">TRENDING</a>
          <a href="a">PODCAST</a>
          <a href="a">MOODS AND GENRES</a>
          <a href="a">NEW RELEASES</a>
          <a href="a">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rockData.map(albumCard)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popData.map(albumCard)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hipHopData.map(albumCard)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;