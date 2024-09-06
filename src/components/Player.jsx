import React from 'react';
import { useSelector } from 'react-redux';

function Player() {
  const song = useSelector((state) => state.song);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex align-items-center">
                <img className="img-fluid" src={song.albumCover} alt="album cover" />
                <p>
                  {song.title}<br />
                  {song.artist}
                </p>
                <div className="d-flex align-items-center">
                  <a href="a">
                    <i className="bi bi-shuffle text-white"></i>
                  </a>
                  <a href="a">
                    <i className="bi bi-skip-backward-fill text-white"></i>
                  </a>
                  <a href="a">
                    <i className="bi bi-play-fill text-white fs-3"></i>
                  </a>
                  <a href="a">
                    <i className="bi bi-skip-forward-fill text-white"></i>
                  </a>
                  <a href="a">
                    <i className="bi bi-repeat text-white"></i>
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
