import { configureStore } from '@reduxjs/toolkit';
import spaceXReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    missions: spaceXReducer,
  },
});

export default store;
