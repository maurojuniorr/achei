import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Importe o hook 'useNavigation' do React Navigation
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  // Obtenha a navegação usando o hook 'useNavigation'
  const navigation = useNavigation();

  const handleSignup = () => {
    // Aqui você pode adicionar a lógica de cadastro do usuário, caso necessário

    // Após o cadastro bem-sucedido, redirecione para a tela de feed
    navigation.navigate('Feed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#8a8a8f"
      />
       <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#8a8a8f"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#8a8a8f"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#8a8a8f"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#8a8a8f"
        secureTextEntry
      />
      {/* Chame a função handleSignup no onPress do botão */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
        <Text style={styles.signUpButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#f4f4f5',
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingHorizontal: 20,
	},
	title: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  color: '#27272a',
	  marginTop: 50,
	  marginBottom: 30,
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
	signUpButton: {
	  backgroundColor: '#22c55e',
	  width: '100%',
	  height: 50,
	  borderRadius: 5,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginTop: 30,
	},
	signUpButtonText: {
	  color: '#fff',
	  fontSize: 18,
	  fontWeight: 'bold',
	},
  });

export default SignupScreen;


