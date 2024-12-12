import axios from 'axios';

const apiKey = '5de71c528d6562b6e29ea80d5a4a8d52'; // Insira sua API Key

const fetchMovieDetails = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/11', {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            params: {
                append_to_response: 'videos,images', // Sub-recursos que você quer incluir
                language: 'en-Uk', // Parâmetro adicional para idioma
            },
        });

        console.log(response.data); // Aqui você terá detalhes, vídeos e imagens juntos
    } catch (error) {
        console.error('Erro ao buscar dados do filme:', error);
    }
};

fetchMovieDetails();
