import React from 'react';
import { View, Text } from 'react-native';
import Datos from '../../database/ListaDatos'
import Cuadrantes from '../components/Cuadrantes';

const Info = () => {
  const lista = Datos();
  return (
    <View>
      <Text>informacion</Text>
      <Cuadrantes/>
    </View>
  );
}

export default Info;
