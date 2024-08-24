import tw from 'twrnc'
import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import CardAlert from '../../components/generacion/CardAlert';
import MapView, { Marker } from 'react-native-maps';
import *as Location from 'expo-location';
import { emergenciesApi } from '../../api/index';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const CreateAlert = () => {
  //const lista = Datos();
  const [selectedValue, setSelectedValue] = useState('14');
  const [location, setLocation] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [origin, setOrigin] = React.useState({
    latitude : 4.103093,   //4.1340
    longitude: -73.590991, //-73.6266
});
const navigation = useNavigation();
const { data, loading, error } = useCurrentUser()

useEffect(() =>{
  getLoscationPermission();
}, [])
async function getLoscationPermission() {
  try {   
          const { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                  alert('permission denied')
                  console.log('El usuario no otorgó permisos para acceder a la ubicación.');
                  return;
                       // Aquí podrías mostrar un mensaje al usuario informándole que necesita otorgar permisos.
                      } else {
                      //console.log('Se otorgaron los permisos para acceder a la ubicación.');
                      let location = await Location.getCurrentPositionAsync({});
                      const current = {
                          latitude: location.coords.latitude,
                          longitude: location.coords.longitude
                      }
                      setOrigin(current);
            
                  }
      } catch (error) {
      console.error('Error al solicitar permisos de ubicación:', error);
      // Aquí podrías manejar cualquier error que ocurra durante la solicitud de permisos.
  }
} 

  const handleMapPress = (event) => {
    setLocation(event.nativeEvent.coordinate);
  };

  const checkFormValidity = useCallback(() => {
    const isValid = !!(selectedValue && location && selectedValue !== "14");
    setIsButtonEnabled(isValid);
  }, [selectedValue, location]);

  useEffect(() => {
    checkFormValidity();
  }, [selectedValue, location, checkFormValidity]);

  const handleSubmit = async () => {
    const numericIdNumber = parseInt(selectedValue, 10)
    const emergencyObjet={
      "latitude": location.latitude,
      "longitude": location.longitude,
      "status": "active",
      "user": data.id,
      "emergency_type": numericIdNumber
    }
    if (isButtonEnabled) { 
  try {
    
  const response = await emergenciesApi.mainEmergenciesEmergencyCreate({emergency:emergencyObjet})
  if(response.status==200||201){
    console.log('Datos enviados:', {emergencyObjet});
    Alert.alert('La alerta ha sido creada');
    navigation.navigate("Alertas");
    } 

    } catch (error) {
   console.error("Error al enviar la alerta:", error);
 }
  
    }
  };

  return (
    <View style={tw`h-full`}>
      <View style={tw`h-1/12 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-bold text-blue-950 `}>Creacion de Alertas</Text>
            </View>
      <View style={tw`border border-gray-400 rounded p-2 m-2 bg-blue-950 h-1/10`}>
            <Picker
            style={tw`h-10  text-white text-xl`}
            dropdownIconColor={"#facc15"}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Seleccionar" value="14"/>
              <Picker.Item label="Robo" value="2"/>
              <Picker.Item label="Incendio" value="3" />
              <Picker.Item label="Riña" value="4" />
              <Picker.Item label="Inundación" value="5" />
              <Picker.Item label="Accidente de Trancito" value="6" />
              <Picker.Item label="Urgencia Medica" value="7" />
              <Picker.Item label="Persona Sospechosa" value="8" />
              <Picker.Item label="Violencia Intrafamiliar" value="9" />
              <Picker.Item label="Daño en servicio publico" value="10" />
              <Picker.Item label="Exploción" value="11" />
              <Picker.Item label="Intento de Suicidio" value="12" />
              <Picker.Item label="Indefinida" value="13" />
            </Picker>
        </View>
    <CardAlert orden={selectedValue}/>
    <View style={tw`border-t-2 border-b-2 border-blue-950`}>
      <MapView
        style={tw`w-full h-64`}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handleMapPress}
      >
        {location && (
          <Marker
            coordinate={location}
            title="Ubicación seleccionada"
          />
         
        )}
         <Marker 
                coordinate={{latitude:origin.latitude, longitude:origin.longitude}}
                image={require('../../assets/marcadores/my.png')}
               />
      </MapView>
      </View>
      <View  style={tw`items-center justify-center`}>
      <TouchableOpacity
  style={[
    tw`p-4 rounded-2xl items-center justify-center mt-4 w-2/3`,
    { backgroundColor: isButtonEnabled ? '#007AFF' : '#A9A9A9' }
  ]}
  onPress={handleSubmit}
  disabled={!isButtonEnabled}
>
  <Text style={tw`text-sm font-bold text-white`}>Enviar</Text>
</TouchableOpacity>
{isButtonEnabled ? (
  <Text style={tw`mt-2 text-blue-700`}>Recuerda que al enviar la alerta todos pondran verla</Text>
) : (
  <Text style={tw`mt-2 text-gray-500`}></Text>
)}
</View>
    </View>
  );
}

export default CreateAlert;