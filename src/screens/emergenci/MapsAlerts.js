import tw from 'twrnc';
import React, { useEffect, useState } from 'react';
import *as Location from 'expo-location';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { emergenciesApi } from '../../api';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useSelector } from 'react-redux';
import {GOOGLE_MAPS_KEY} from '@env'

const MapasAlert = () => {
    
    const { params: { item },} = useRoute(); 
    const navigation = useNavigation();
    const [origin, setOrigin] = useState({
        latitude :  4.103093,   //|| latitudeAlert
        longitude: -73.590991, //longitudeAlert
    });
    const [alerts, setAlerts] = useState([]);
    const { data} = useCurrentUser()
    const lat = parseFloat(item.latitude)
    const log = parseFloat(item.longitude)
    const marca ={
        latitude: lat,
        longitude: log
    }
    const [selectedMarker, setSelectedMarker] = useState(null);
    const { selectedAlert, userLocation } = useSelector((state) => state.alert);
    const handleMarkerPress = (marker) => {
        setSelectedMarker(marker);
      };
        
      const handleRespondEmergency = () => {
        // Aquí puedes manejar la lógica para responder a la emergencia
        navigation.navigate("Seguimiento", {selectedMarker})
      };

    const fetchAlerts = async () => {
         try {
       const response = await emergenciesApi.mainEmergenciesEmergencyList();
           // Suponiendo que `setAlerts` es un hook para almacenar las alertas en el estado
           setAlerts(response.data);
           if(response.status==200||201){
            
              //console.log("los datos llegaron")
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
                        return;
                             // Aquí podrías mostrar un mensaje al usuario informándole que necesita otorgar permisos.
                            } else {
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
            const emergencyTypes = {
                2: "Robo",
                3: "Incendio",
                4: "Riña",
                5: "Inundación",
                6: "Accidente de tránsito",
                7: "Urgencia médica",
                8: "Persona sospechosa",
                9: "Violencia intrafamiliar",
                10: "Daño en servicio público",
                11: "Explosión",
                12: "Intento de suicidio",
                13: "Indefinida",
            };
            const emergencyIcons = {
                2: require('../../assets/marcadores/1.png'),
                3: require('../../assets/marcadores/2.png'),
                4: require('../../assets/marcadores/3.png'),
                5: require('../../assets/marcadores/4.png'),
                6: require('../../assets/marcadores/5.png'),
                7: require('../../assets/marcadores/6.png'),
                8: require('../../assets/marcadores/7.png'),
                9: require('../../assets/marcadores/8.png'),
                10: require('../../assets/marcadores/10.png'),
                11: require('../../assets/marcadores/9.png'),
                12: require('../../assets/marcadores/11.png'),
                13: require('../../assets/marcadores/12.png'),
            };
    return (
        <View style={tw`h-full`}> 
        <View style={tw` border-2 border-amber-400 bg-amber-400 p-3`} >
               <Text style={tw`text-xl font-bold text-blue-950 `}>Emergencias Activas</Text>
               </View>
               <View style={tw`border-t-2  border-blue-950`}>
           <MapView 
           style={tw`w-full h-8/9`}
    
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
                title={emergencyTypes[alerta.emergency_type]}//alerta.emergency_type.toString() <AsociacionAlert emergency={alerta.emergency_type}/>
                image={emergencyIcons[alerta.emergency_type]}
                onPress={() => handleMarkerPress(alerta)}/>
            ))}
            <Marker coordinate={origin}
            title='Me'
            image={require('../../assets/marcadores/my.png')}
            />

        
            {userLocation && (
            <>
            <Marker  
                coordinate={userLocation}
                title='Ayuda en camino'
            />
            <MapViewDirections 
            origin={userLocation}
            destination={marca}
            apikey={GOOGLE_MAPS_KEY}
            strokeColor='navy'
            strokeWidth={6}
            />
            </>
        )}
          
        </MapView>
        </View>
        {selectedMarker && data.role.name !== "ciudadano" &&(
        <TouchableOpacity
          style={tw`absolute bottom-10 left-10 right-10 p-4 bg-blue-500 rounded-2xl items-center justify-center`}
          onPress={handleRespondEmergency}
          disabled={userLocation !== null}
        >
          <Text style={tw`text-white font-bold`}>Responder Emergencia</Text>
        </TouchableOpacity>
      )}
    </View>
    );

}
export default MapasAlert;
