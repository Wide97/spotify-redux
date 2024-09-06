import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: {
    title: '',
    artist: '',
    albumCover: '',
  },
  reducers: {
    updateSong: (state, action) => {
      state.title = action.payload.title;
      state.artist = action.payload.artist;
      state.albumCover = action.payload.albumCover;
    },
  },
});

export default songSlice.reducer;
export const updateSong = songSlice.actions.updateSong;