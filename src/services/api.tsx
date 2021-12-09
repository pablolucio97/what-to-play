import  axios from 'axios';

export const api = axios.create({
    baseURL: 'https://what-to-play.vercel.app/api'
})