import { createSlice } from '@reduxjs/toolkit';
import { Region } from 'types';

interface controlsInitialState {
  search: string;
  region: Region | '';
}

const initialState: controlsInitialState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  }
});

export const {setRegion, setSearch, clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
