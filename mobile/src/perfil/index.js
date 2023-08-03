import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {
  // Adicione aqui os estados para os dados do usuário
  const [userName, setUserName] = useState('michael b jordan');
  const [userPhoto, setUserPhoto] = useState(require('./path/to/licensed-image.jpg')); // Substitua pelo caminho da imagem de perfil do usuário

  // Função para editar os dados do usuário
  const handleEditProfile = () => {
    // Implemente a lógica para editar os dados do usuário, como nome, foto, etc.
    // Você pode usar modais, formulários ou qualquer outro componente para a edição dos dados
  };

  // Função para fazer logout
  const handleLogout = () => {
    // Implemente a lógica para realizar o logout do usuário
    // Por exemplo, você pode limpar o token de autenticação do usuário e redirecioná-lo para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editPhotoButton} onPress={handleEditProfile}>
        <Image source={userPhoto} style={styles.userPhoto} />
        <MaterialIcons name="edit" size={24} color="#fff" style={styles.editIcon} />
      </TouchableOpacity>

      <Text style={styles.userName}>{userName}</Text>

      {/* Outras informações do perfil do usuário, como email, telefone, etc. */}

      <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
        <MaterialIcons name="edit" size={20} color="#22c55e" />
        <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    alignItems: 'center',
    padding: 20,
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editPhotoButton: {
    position: 'relative',
    marginBottom: 20,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#22c55e',
    borderRadius: 12,
    padding: 6,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  editProfileButtonText: {
    marginLeft: 5,
    color: '#22c55e',
    fontSize: 18,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    borderRadius: 5,
    padding: 10,
  },
  logoutButtonText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;

