import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const unsplashClient = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});
