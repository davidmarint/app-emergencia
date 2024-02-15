import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Datos from '../Util/Datos';

const Cuadrantes = () => {

    const [origin, setOrigin] = React.useState({
        latitude : 4.103093,
        longitude: -73.590991,
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
        };
        setOrigin(current);
        //console.log(current)
    } 

    const usuDentro = (usuLat, usuLog, latMax, latMin, logMin, logMax) =>{
        return usuLat >= latMin &&
                usuLat <= latMax &&
                usuLog >= logMin &&
                usuLog <= logMax;
    };

    for(let i = 0; i < Datos.length; i++){
        const cuadrantes = Datos[i];
    if (usuDentro(origin.latitude, origin.longitude, cuadrantes.limites.latMax, cuadrantes.limites.latMin, cuadrantes.limites.logMin, cuadrantes.limites.logMax)){
        console.log('El usuario está dentro del cuadrante');
        return (
            <View key={cuadrantes.nombre}>
                <Text>El usuario está dentro de: {cuadrantes.nombre}</Text>
            </View>
            );
        }
    }
        console.log('El usuario está fuera de todos los cuadrantes');
        return (
            <View>
                <Text>El usuario está fuera de todos los cuadrantes</Text>
            </View>
            );
}

export default Cuadrantes;
