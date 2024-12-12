// src/components/SuggestionList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente de lista de sugestões
const SuggestionList = ({ suggestions, onSelect }) => {
  return (
    <View style={styles.container}>
      {suggestions.map((movie) => (
        <TouchableOpacity key={movie.id} onPress={() => onSelect(movie)}>
          <Text style={styles.suggestionText}>{movie.title} ({movie.year})</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  suggestionText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SuggestionList;
