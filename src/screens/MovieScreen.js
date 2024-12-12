// MovieScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getMovieDetails } from '../services/movieService'; // Importando a função

const MovieScreen = ({ route }) => {
    const { movieId } = route.params; // Pegando o ID do filme passado via navegação
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieData = async () => {
            const data = await getMovieDetails(movieId); // Chama a função para pegar os detalhes do filme
            setMovieData(data);
            setLoading(false);
        };

        fetchMovieData();
    }, [movieId]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {movieData ? (
                <>
                    <Text style={styles.title}>{movieData.titulo}</Text>
                    <Text style={styles.text}>Ano de Lançamento: {movieData.anoLancamento}</Text>
                    <Text style={styles.text}>Duração: {movieData.duracao} minutos</Text>
                    <Text style={styles.text}>Gênero: {movieData.genero}</Text>
                </>
            ) : (
                <Text>Erro ao carregar os dados do filme.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default MovieScreen;
