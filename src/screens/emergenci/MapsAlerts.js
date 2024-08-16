import tw from 'twrnc';
import React, { useEffect, useState } from 'react';
import *as Location from 'expo-location';
import { View, Text, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { emergenciesApi } from '../../api';
import { set } from 'date-fns';

const MapasAlert = () => {
    
    const { params: { item },} = useRoute(); 
    
    const [origin, setOrigin] = useState({
        latitude :  4.103093,   //|| latitudeAlert
        longitude: -73.590991, //longitudeAlert
    });
    const [alerts, setAlerts] = useState([]);
    const ubiAlert = {
        latitude: parseFloat(item.latitude),
        longitude: parseFloat(item.longitude)}
    
    const lat = parseFloat(item.latitude)
    const log = parseFloat(item.longitude)
    const fetchAlerts = async () => {
        try {
          const response = await emergenciesApi.mainEmergenciesEmergencyList();
          // Suponiendo que `setAlerts` es un hook para almacenar las alertas en el estado
          setAlerts(response.data);
          if(response.status==200||201){
            
             console.log("los datos llegaron")
        } else{
            console.log("los datos nunca llegaron")
        }
        } catch (error) {
          console.log("Error al obtener alertas: ", error);
        }
      };

      useEffect(() => {
        const fetchAlertsAndStartInterval = async () => {
            await fetchAlerts(); // Llama a fetchAlerts inmediatamente
            const interval = setInterval(fetchAlerts, 60000); // Luego sigue llamando a fetchAlerts cada 60 segundos
            return () => clearInterval(interval);
        };
    
        fetchAlertsAndStartInterval(); // Ejecuta la función cuando el componente se monta
    }, []);

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
                            let location = await Location.getCurrentPositionAsync({});
                            const current = {
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude
                            } 
                            setOrigin(ubiAlert);
                            }
                    } catch (error) {
                        console.error('Error al solicitar permisos de ubicación:', error);
                         // Aquí podrías manejar cualquier error que ocurra durante la solicitud de permisos.
                        }
            }
    return (
    <View> 
    
        <MapView 
        style={tw`w-full h-2/3`}
        initialRegion={{
            latitude: lat,
            longitude: log,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        >
             {alerts.map((alerta) => (
                <Marker 
                key={alerta.id}
                coordinate={{latitude:parseFloat(alerta.latitude), longitude:parseFloat(alerta.longitude)}}
                title={alerta.emergency_type.toString()}></Marker>
            ))} 
             {/*<Marker 
                key={alerts[0].id}
                coordinate={{latitude:parseFloat(alerts[0].latitude), longitude:parseFloat(alerts[0].longitude)}}
                title={alerts[0].emergency_type.toString()}></Marker>
             <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor='navy'
                strokeWidth={6}
            /> */}
        </MapView>
        <Text>Emergencias activas</Text>
    </View>
    );

}
export default MapasAlert;
