import React from "react";

function Player() {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex align-items-center">
                <a href="a">
                  <i class="bi bi-shuffle text-white"></i>
                </a>
                <a href="a">
                  <i class="bi bi-skip-backward-fill text-white"></i>
                </a>
                <a href="a">
                  <i class="bi bi-play-fill text-white fs-3"></i>
                </a>
                <a href="a">
                  <i class="bi bi-skip-forward-fill text-white"></i>
                </a>
                <a href="a">
                  <i class="bi bi-repeat text-white"></i>
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
  );
}

export default Player;
