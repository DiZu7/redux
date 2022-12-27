// export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export const setWeatherData = weatherData => {
  return {
    type: SET_WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed request');
        }
        return response.json();
      })
      .then(weatherData => {
        dispatch(setWeatherData(weatherData));
      });
  };
};
