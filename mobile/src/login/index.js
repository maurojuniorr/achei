import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação
    // Por exemplo, verificar se o e-mail e a senha correspondem a um usuário válido
    // Simulei uma autenticação básica apenas para fins de exemplo
    if (email === 'usuario@example.com' && password === 'senha123') {
      // Redireciona para a tela de feed após a autenticação bem-sucedida
      navigation.navigate('Feed');
    } else {
      alert('E-mail ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#8a8a8f"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#8a8a8f"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupButtonText}>Criar uma conta</Text>
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
	loginButton: {
	  backgroundColor: '#22c55e',
	  width: '100%',
	  height: 50,
	  borderRadius: 5,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginTop: 30,
	},
	loginButtonText: {
	  color: '#fff',
	  fontSize: 18,
	  fontWeight: 'bold',
	},
	signupButton: {
	  marginTop: 15,
	},
	signupButtonText: {
	  color: '#8a8a8f',
	  fontSize: 16,
	},
  });

export default LoginScreen;

