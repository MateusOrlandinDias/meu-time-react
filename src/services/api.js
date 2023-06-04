import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-football-v1.p.rapidapi.com/v3",
    headers: {
        'X-RapidAPI-Key': 'dc4e64af3amsh202547aba551593p1007bdjsn8b17b8a84c67',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    },
});

export default api;