import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { EmergenciesApi } from '../../api-client';
import { emergenciesApi } from '../../api';

const Mapas = () => {
    
    const { params: { item },} = useRoute(); 
    const [origin, setOrigin] = React.useState({
        latitude : 4.103093,   //4.1340
        longitude: -73.590991, //-73.6266
    });
    
    const fetchAlerts = async () => {
        try {
          const response = await emergenciesApi.mainEmergenciesEmergencyList();
          setAlerts(response.data); // Suponiendo que `setAlerts` es un hook para almacenar las alertas en el estado
        } catch (error) {
          console.log("Error al obtener alertas: ", error);
        }
      };

      useEffect(() => {
        const interval = setInterval(fetchAlerts, 60000); // Actualiza las alertas cada 60 segundos
        return () => clearInterval(interval);
      }, []);

    React.useEffect(() =>{
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


    return (
    <View> 
        <MapView 
        style={tw`w-full h-full`}
        initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        >
            {Alerts.map((alerta) => (
                <Marker 
                key={alerta.id}
                coordinate={{latitude:alerta.latitud, longitude:alerta.longitud}}
                title={alerta.tipo}></Marker>
            ))}

            {/* <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor='navy'
                strokeWidth={6}
            /> */}
        </MapView>
    </View>
    );
}

export default Mapas;
