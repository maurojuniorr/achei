import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from './feed';
import ProcurarScreen from './procurar';
import NewPostScreen from './newpost';
import ConfigScreen from './configs';
import PerfilScreen from './perfil';

const Tab = createBottomTabNavigator();

const FeedTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Procurar" component={ProcurarScreen} />
      <Tab.Screen name="NewPost" component={NewPostScreen} />
      <Tab.Screen name="Configs" component={ConfigScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
};

export default FeedTabNavigator;
