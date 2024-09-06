import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../redux/songSlice';

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateSong({
      title: song.title,
      artist: song.artist.name,
      albumCover: song.album.cover_medium,
    }));
  };

  return (
    <div className="col text-center" key={song.id} onClick={handleClick}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;