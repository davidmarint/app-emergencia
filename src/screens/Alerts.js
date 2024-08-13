import tw from 'twrnc'
import React from 'react';
import { View, Text } from 'react-native';
import FlatListComponent from '../components/generacion/ListAlerts'
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Alerts = () => {
  //const lista = Datos();
  const navigation = useNavigation();
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-1/12 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-bold text-blue-950 `}>ALERTAS ACTIVAS</Text>
            </View>
      <FlatListComponent/>
      <FAB
    icon="plus"
    style={tw`absolute m-4 right-0 bottom-0`}
    onPress={() => navigation.navigate("Creacion")}
  />
    </View>
  );
}

export default Alerts;