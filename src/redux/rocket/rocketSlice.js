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
      const rocketToUpdate = state.rockets.find((rocket) => rocket.id === payload);
      if (rocketToUpdate) {
        rocketToUpdate.reserved = !rocketToUpdate.reserved;
      }
    },
    populateProfile: (state) => ({
      ...state,
      rockets: state.rockets.filter((rocket) => rocket.reserved),
    }),
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
          reserved: false,
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
