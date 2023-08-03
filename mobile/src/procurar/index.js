import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Função para realizar a busca por itens na API
  const handleSearch = async () => {
    try {
      // Adicione aqui a lógica para fazer a busca na API com base na searchQuery
      // Você pode usar a biblioteca 'axios' para fazer as requisições HTTP
      // e obter os resultados da busca da API
      // Exemplo:
      // const response = await axios.get(`sua-url-da-api/aqui`, { params: { query: searchQuery } });
      // setSearchResults(response.data);
      // Lembre-se de tratar os erros caso a busca não retorne resultados ou haja algum problema com a API
    } catch (error) {
      console.error('Erro na busca: ', error);
    }
  };

  const renderItem = ({ item }) => (
    // Componente que exibe cada item da lista de resultados da busca
    // Aqui você pode personalizar a aparência dos itens conforme sua necessidade
    // Por exemplo, pode exibir a imagem do item, o nome, a categoria, etc.
    // Essas informações devem ser obtidas do objeto 'item' que é passado para essa função
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      {/* Outras informações do item */}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por itens perdidos..."
        placeholderTextColor="#8a8a8f"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>

      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#27272a',
    marginBottom: 15,
  },
  searchButton: {
    backgroundColor: '#22c55e',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsList: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemCategory: {
    fontSize: 16,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  // Estilos adicionais para outras informações do item, se necessário
});

export default SearchScreen;


