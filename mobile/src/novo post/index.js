import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NewPostScreen = () => {
  const [itemName, setItemName] = useState('');
  const [itemLocation, setItemLocation] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('A permissão para acessar a galeria é necessária.');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Define a proporção da imagem (1:1 neste caso)
        quality: 1, // Qualidade da imagem (0 a 1)
      });

      if (!pickerResult.cancelled) {
        setSelectedImage(pickerResult);
      }
    } catch (error) {
      console.log('Erro ao selecionar imagem: ', error);
    }
  };

  const handleSubmit = () => {
    // Implemente a lógica para enviar os dados do novo post para a API
    // Utilize os estados itemName, itemLocation, itemCategory e selectedImage
    // para enviar as informações corretas para a API
    // Substitua as partes comentadas com // pelas informações reais

    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('itemLocation', itemLocation);
    formData.append('itemCategory', itemCategory);
    formData.append('itemImage', {
      uri: selectedImage.uri,
      name: 'item.jpg', // Substitua 'item.jpg' pelo nome do arquivo desejado
      type: 'image/jpeg', // Altere para o tipo de arquivo correto (jpeg, png, etc.)
    });

    // Enviar formData para a API usando fetch ou Axios
    // Exemplo usando fetch:
    fetch('URL_DA_SUA_API', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        // Adicione outras headers necessárias para a autenticação na API
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Aqui você pode lidar com a resposta da API
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados para a API: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectImageButton} onPress={handleSelectImage}>
        <Icon name="camera-outline" size={30} color="#22c55e" />
        <Text style={styles.selectImageText}>Selecionar Imagem</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        placeholderTextColor="#8a8a8f"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Local onde foi encontrado"
        placeholderTextColor="#8a8a8f"
        value={itemLocation}
        onChangeText={setItemLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        placeholderTextColor="#8a8a8f"
        value={itemCategory}
        onChangeText={setItemCategory}
      />

      {/* Adicione outros campos de acordo com as informações que você deseja cadastrar */}

      <TouchableOpacity style={styles.createPostButton} onPress={handleSubmit}>
        <MaterialIcons name="post-add" size={25} color="#fff" />
        <Text style={styles.createPostButtonText}>Criar Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    padding: 20,
  },
  selectImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectImageText: {
    fontSize: 18,
    color: '#22c55e',
    marginLeft: 10,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
  createPostButton: {
    backgroundColor: '#22c55e',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  createPostButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default NewPostScreen;
