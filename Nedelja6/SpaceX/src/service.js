import axios from 'axios';

export const getPastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past');
};

export const getName = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
};

export const getByYear = (year) => {
    return axios.get(`https://api.spacexdata.com/v3/launches/?launch_year=${year}`)
};