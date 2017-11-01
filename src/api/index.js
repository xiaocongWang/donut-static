import axios from 'axios';

const baseUrl = process.env.baseUrl;
axios.defaults.baseURL = baseUrl;

export const getList = () => axios.get('/api/v1/list').then(res => res.data);
