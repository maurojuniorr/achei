import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ConfigScreen = () => {
  const [modoEscuro, setModoEscuro] = useState(false); // Estado para habilitar/desabilitar o modo escuro

  // Função para habilitar/desabilitar o modo escuro
  const toggleModoEscuro = () => {
    setModoEscuro(!modoEscuro);
    // Implemente a lógica para mudar o tema do aplicativo para modo escuro ou claro
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.themeOption} onPress={toggleModoEscuro}>
        <MaterialIcons name={modoEscuro ? 'brightness-4' : 'brightness-7'} size={24} color="#22c55e" />
        <Text style={styles.themeOptionText}>Modo {modoEscuro ? 'Claro' : 'Escuro'}</Text>
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
  optionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#27272a',
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  themeOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#22c55e',
  },
});

export default ConfigScreen;
