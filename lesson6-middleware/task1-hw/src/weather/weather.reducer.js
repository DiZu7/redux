import { SET_WEATHER_DATA } from './weather.actions';

const initialState = {
  weatherData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        weatherData: state.weatherData.concat(action.payload.weatherData),
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
