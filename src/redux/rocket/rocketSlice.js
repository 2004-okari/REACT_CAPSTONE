import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(rocketsUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Fetch Rocket failed');
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservation: (state, { payload }) => {
      const newState = [...state.rockets];
      newState.map((rocket) => {
        if (rocket.id === payload) {
          rocket.reserved = !rocket.reserved;
        }
        return rocket;
      });
    },
    populateProfile: (state) => {
      const newState = [...state.filter((rocket) => rocket.reserved)];
      return { ...state, rockets: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rocketsData = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
        return {
          ...state,
          rockets: rocketsData,
          status: 'fulfilled',
        };
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
