import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native';
import {GOOGLE_MAPS_KEY} from '@env'

const Mapas = () => {
    
    const { params: { item },} = useRoute(); 
    const [origin, setOrigin] = React.useState({
        latitude : 4.103093,   //4.1340
        longitude: -73.590991, //-73.6266
    });
    
    const [destination, setDestination] = React.useState({
        latitude: 4.148610,
        longitude: -73.615794,
    });

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
                            } else {
                            console.log('Se otorgaron los permisos para acceder a la ubicación.');
                            let location = await Location.getCurrentPositionAsync({});
                            const current = {
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude
                            }
                            const destiny = {
                                latitude: item.ubicacion.latitude,
                                longitude: item.ubicacion.longitude,
                            }
                            setOrigin(current);
                            setDestination(destiny);
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
            <Marker coordinate={destination}/>
            <Marker coordinate={origin}/>

            <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor='navy'
                strokeWidth={6}
            />
        </MapView>
    </View>
    );
}

export default Mapas;
