// movieService.js
import axios from 'axios';

const API_KEY = '5de71c528d6562b6e29ea80d5a4a8d52';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}${movieId}?api_key=${API_KEY}`);
        const data = response.data;
        const titulo = data.title;
        const anoLancamento = data.release_date.split('-')[0];
        const duracao = data.runtime;
        const genero = data.genres.map(genre => genre.name).join(', ');

        return { titulo, anoLancamento, duracao, genero };
    } catch (error) {
        console.error('Erro ao buscar os dados do filme:', error);
        return null;
    }
};
