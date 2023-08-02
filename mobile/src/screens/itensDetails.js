import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <Text style={styles.serialNumber}>Serial Number: {item.serialNumber}</Text>
      <Text style={styles.brand}>Brand: {item.brand}</Text>
      <Text style={styles.foundAt}>Found at: {item.foundAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
  },
  serialNumber: {
    fontSize: 16,
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    marginBottom: 8,
  },
  foundAt: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ItemDetailsScreen;
