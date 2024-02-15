import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
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
        <TouchableWithoutFeedback>
            <View  style={tw`items-center justify-center h-max`}>
              
              <View  style={tw`rounded-full bg-amber-400 w-max h-15 flex-row items-center p-3`}>
               
                <Text style={tw`text-lg text-center text-blue-950 font-semibold bottom-0.5 px-5`}>Tiempo de llegada Aprox: {eta}</Text>
                <Icon  
                    style={tw`right-2`} 
                    name="map-marked-alt" 
                    color={"rgb(23,37,84)"} 
                    size={20} 
                  />   
              </View>
            </View>
        </TouchableWithoutFeedback>
    
    );
}

export default TimeArrive;
