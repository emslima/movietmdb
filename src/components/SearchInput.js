// Importa as bibliotecas necessárias
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// Define o componente
const SearchInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

// Exporta o componente para ser usado em outros lugares
export default SearchInput;
