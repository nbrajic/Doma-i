import axios from 'axios';

export const getFirstPage = () => {
    return axios.get('https://reqres.in/api/users?page=1')
};

export const getSecondPage = () => {
    return axios.get('https://reqres.in/api/users?page=2')
};