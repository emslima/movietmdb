import React from 'react';
import { View, Text, Button } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const handleSelectMovie = (movieId) => {
        navigation.navigate('Movie', { movieId }); // Passa o movieId para o MovieScreen
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Busca de filmes</Text>
            {/* Exemplo de botão para selecionar um filme */}
            <Button title="Ver detalhes do filme 123" onPress={() => handleSelectMovie(123)} />
        </View>
    );
};

export default SearchScreen;
