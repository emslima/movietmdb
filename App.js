import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieScreen from './src/screens/MovieScreen'; // Tela de detalhes do filme
import SearchScreen from './src/screens/SearchScreen'; // Tela de busca

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                {/* Tela inicial para buscar filmes */}
                <Stack.Screen name="Search" component={SearchScreen} />
                {/* Tela para exibir os detalhes do filme */}
                <Stack.Screen name="Movie" component={MovieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
