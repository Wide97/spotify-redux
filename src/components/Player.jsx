import React from "react";
import { useSelector } from "react-redux";

function Player() {
  const song = useSelector((state) => state.song);

  return (
    <div className="container-fluid pt-1">
      <div className="col-lg-10 offset-lg-1 w-100">
        <div className=" d-flex justify-content-between px-3 align-items-center col-6 col-md-4 w-100 bg-dark ">
          <div className="ps-5 ms-5 pt-4  d-flex align-items-center">
            <img
              className=" text-white py-4 w-50"
              src={song.albumCover}
              alt="album cover"
            />
            <p className="text-white ps-5">
              {song.title}
              <br />
              {song.artist}
            </p>
          </div>
          <div className="d-flex align-items-center ms-5">
            <a href="a">
              <i className="bi bi-shuffle text-white mx-4"></i>
            </a>
            <a href="a">
              <i className="bi bi-skip-backward-fill text-white mx-4"></i>
            </a>
            <a href="a">
              <i className="bi bi-play-fill text-white fs-3 mx-4"></i>
            </a>
            <a href="a">
              <i className="bi bi-skip-forward-fill text-white mx-4"></i>
            </a>
            <a href="a">
              <i className="bi bi-repeat text-white mx-4"></i>
            </a>
          </div>
          <div className="progress mt-3">
            <div role="progressbar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
