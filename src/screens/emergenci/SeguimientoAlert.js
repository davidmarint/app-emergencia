import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native';
import {GOOGLE_MAPS_KEY} from '@env'
import { useNavigation } from '@react-navigation/native';

const Mapas = () => {
    
    const { params: { selectedMarker},} = useRoute(); 
    const [origin, setOrigin] = React.useState({
        latitude : 4.103093,   //4.1340
        longitude: -73.590991, //-73.6266
    });
    const [destination, setDestination] = React.useState({
        latitude: 4.148610,
        longitude: -73.615794,
    });
    const navigation = useNavigation();
    React.useEffect(() =>{
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
                            const destiny = {
                                latitude: parseFloat(selectedMarker.latitude),
                                longitude: parseFloat(selectedMarker.longitude),
                            }
                            setOrigin(current);
                            setDestination(destiny);
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
        10: "Explosión",
        11: "Daño en servicio público",
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
        10: require('../../assets/marcadores/9.png'),
        11: require('../../assets/marcadores/10.png'),
        12: require('../../assets/marcadores/11.png'),
        13: require('../../assets/marcadores/12.png'),
    };

    const eliminar = () =>{
        Alert.alert('Has cancelado la ayuda');
        navigation.navigate("Alertas");
    }

    return (
    <View> 
        <MapView 
        style={tw`w-full h-8/9`}
        initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        >
            <Marker 
            coordinate={destination} 
            title={emergencyTypes[selectedMarker.emergency_type]}
            image={emergencyIcons[selectedMarker.emergency_type]}/>

            <Marker coordinate={origin}
            title='Me'
            image={require('../../assets/marcadores/my.png')}
            />

            <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor='navy'
                strokeWidth={6}
            />
        </MapView>
        <View style={tw`items-center mt-2`}>
        <TouchableOpacity
          style={tw` w-8/9 p-4 bg-red-500 rounded-2xl items-center justify-center`}
          onPress={eliminar}
        >
          <Text style={tw`text-white font-bold`}>Cancelar la ayuda</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

export default Mapas;