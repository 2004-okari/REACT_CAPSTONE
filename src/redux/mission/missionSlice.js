import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('spaceX/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const spaceXSlice = createSlice({
  name: 'spaceX',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleReservation: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);

      if (mission) {
        mission.reserved = !mission.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload.map((mission) => ({
          ...mission,
          reserved: false,
        }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleReservation } = spaceXSlice.actions;
export default spaceXSlice.reducer;
