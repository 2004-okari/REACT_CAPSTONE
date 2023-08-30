import { configureStore } from '@reduxjs/toolkit';
import spaceXReducer from './mission/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    missions: spaceXReducer,
    rockets: rocketReducer,
});

export default store;
