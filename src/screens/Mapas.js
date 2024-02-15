import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text } from 'react-native';
import MapView, {Marker, Polyline,} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env'

const Mapas = () => {
    
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
        // let { status } = Location.requestForegroundPermissionsAsync();
        //  if(status !== 'granted'){
        //      alert('permission denied');
        //      return;
        //  } 
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
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
