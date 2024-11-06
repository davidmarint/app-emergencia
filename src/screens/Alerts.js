import tw from 'twrnc'
import React from 'react';
import { View, Text } from 'react-native';
import FlatListComponent from '../components/generacion/ListAlerts'
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Alerts = () => {
  //const lista = Datos();
  const navigation = useNavigation();
  const { selectedAlert, userLocation } = useSelector((state) => state.alert);
  
  const selectedMarker = selectedAlert;
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-1/12 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-2xl font-bold text-blue-950 `}>Alertas activas</Text>
            </View>
      <FlatListComponent/>
      <FAB
    icon="plus"
    color="#fbbf24"
    style={tw`absolute m-4 right-0 bottom-0 bg-blue-900`}
    onPress={() => navigation.navigate("Creacion")}
  />
{selectedAlert !== null &&(
     <FAB
    icon="map-marker-path"
    color="#fbbf24"
    style={tw`absolute m-4 left-0 bottom-0 bg-blue-900`}
    onPress={() => navigation.navigate("Seguimiento",{selectedMarker})}
  />
)}
    </View>
  );
}

export default Alerts;