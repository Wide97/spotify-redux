
import React from "react";
import { useSelector } from "react-redux";

function Player() {
  const song = useSelector((state) => state.song);

  return (
    <div className="container-fluid pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="d-flex justify-content-between align-items-center bg-dark text-white py-2 px-4">
            {/* Image and Song Info */}
            <div className="d-flex align-items-center">
              <img
                className="me-4"
                src={song.albumCover}
                alt="album cover"
                style={{ width: '60px', height: '60px' }}
              />
              <div>
                <p className="mb-0">{song.title}</p>
                <p className="mb-0">{song.artist}</p>
              </div>
            </div>
            {/* Controls */}
            <div className="d-flex align-items-center">
              <a href="a" className="text-white mx-2">
                <i className="bi bi-shuffle"></i>
              </a>
              <a href="a" className="text-white mx-2">
                <i className="bi bi-skip-backward-fill"></i>
              </a>
              <a href="a" className="text-white mx-2">
                <i className="bi bi-play-fill fs-3"></i>
              </a>
              <a href="a" className="text-white mx-2">
                <i className="bi bi-skip-forward-fill"></i>
              </a>
              <a href="a" className="text-white mx-2">
                <i className="bi bi-repeat"></i>
              </a>
            </div>
          </div>
          <div className="progress mt-2">
            <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
