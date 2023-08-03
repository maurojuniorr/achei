import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone padrão da biblioteca

import LoginScreen from './login/index.js';
import SignupScreen from './signup/index.js';
import FeedScreen from './feed/index.js';
import PerfilScreen from './perfil/index.js';
import NewPostScreen from './novo post/index.js';
import SearchScreen from './procurar/index.js';
import ConfigScreen from './configurações/index.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline'; // Ícone de casa com preenchimento quando selecionado
          } else if (route.name === 'Procurar') {
            iconName = focused ? 'search' : 'search-outline'; // Ícone de lupa com preenchimento quando selecionado
          } else if (route.name === 'New post') {
            iconName = 'add-circle'; // Ícone de mais (+) para criar um novo post
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline'; // Ícone de perfil com preenchimento quando selecionado
          } else if (route.name === 'Configurações') {
            iconName = focused ? 'settings' : 'settings-outline'; // Ícone de engrenagem com preenchimento quando selecionado
          }

          // Retorna o ícone personalizado
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#22c55e', // Cor do ícone quando selecionado (verde)
        tabBarInactiveTintColor: '#8a8a8f', // Cor do ícone quando não selecionado (cinza)
        tabBarStyle: {
          backgroundColor: '#27272a', // Cor de fundo da barra de tabnavigator (cinza escuro)
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Procurar" component={SearchScreen} />
      <Tab.Screen name="New post" component={NewPostScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configurações" component={ConfigScreen} />
    </Tab.Navigator>
  );
}

export default function MeuApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Procurar" component={SearchScreen} />
        <Stack.Screen name="New post" component={NewPostScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Configurações" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
