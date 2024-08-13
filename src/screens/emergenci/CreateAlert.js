import tw from 'twrnc'
import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import CardAlert from '../../components/generacion/CardAlert';
import MapView, { Marker } from 'react-native-maps';

const CreateAlert = () => {
  //const lista = Datos();
  const [selectedValue, setSelectedValue] = useState('14');
  const [location, setLocation] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [origin, setOrigin] = React.useState({
    latitude : 4.103093,   //4.1340
    longitude: -73.590991, //-73.6266
});
  
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
                      console.log('Se otorgaron los permisos para acceder a la ubicación.');
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

  const handleSubmit = () => {
    if (isButtonEnabled) {
      // Aquí va tu lógica para enviar los datos
      console.log('Datos enviados:', {selectedValue, location });
    }
  };

  return (
    <View style={tw`h-full`}>
      <View style={tw`border border-gray-400 rounded p-2 m-2 bg-blue-950 h-1/10`}>
            <Picker
            style={tw`h-10  text-white text-xl`}
            dropdownIconColor={"#facc15"}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Seleccionar" value="14"/>
              <Picker.Item label="Robo" value="1"/>
              <Picker.Item label="Incendio" value="2" />
              <Picker.Item label="Riña" value="3" />
              <Picker.Item label="Inundación" value="4" />
              <Picker.Item label="Accidente de Trancito" value="5" />
              <Picker.Item label="Urgencia Medica" value="6" />
              <Picker.Item label="Persona Sospechosa" value="7" />
              <Picker.Item label="Violencia Intrafamiliar" value="9" />
              <Picker.Item label="Daño en servicio publico" value="10" />
              <Picker.Item label="Exploción" value="11" />
              <Picker.Item label="Intento de Suicidio" value="12" />
              <Picker.Item label="Indefinida" value="13" />
            </Picker>
        </View>
    <CardAlert orden={selectedValue}/>
      <MapView
        style={tw`w-full h-64 mb-4`}
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
      </MapView>
      <TouchableOpacity
  style={[
    tw`p-4 rounded-2xl items-center justify-center`,
    { backgroundColor: isButtonEnabled ? '#007AFF' : '#A9A9A9' }
  ]}
  onPress={handleSubmit}
  disabled={!isButtonEnabled}
>
  <Text style={tw`text-sm font-bold text-white`}>Enviar</Text>
</TouchableOpacity>
    </View>
  );
}

export default CreateAlert;