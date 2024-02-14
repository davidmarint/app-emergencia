import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text } from 'react-native';
import {GOOGLE_MAPS_KEY} from '@env'



const TimeArrive = () => {
    
    const [origin, setOrigin] = React.useState({
        latitude : 4.1340,
        longitude: -73.6266,
    });
    
    const [destination, setDestination] = React.useState({
        latitude: 4.148610,
        longitude: -73.615794,
    });
   
    const [eta, setEta] = React.useState(null);
   
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
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_MAPS_KEY}`
        );
    
        const data = await response.json();
        
        const duration = data.routes[0].legs[0].duration.text;
        setEta(duration);
        setOrigin(current);
        console.log(duration)
    } 

    return (
        <View>
            <Text>{eta}</Text>
        </View>
    );
}

export default TimeArrive;
