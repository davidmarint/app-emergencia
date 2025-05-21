import tw from 'twrnc';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';

const TuComponente = () => {
  const [direccion, setDireccion] = useState(null);

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
                       
                    } else {
                        let location = await Location.getCurrentPositionAsync({});
                        const { coords } = location;
                        const { latitude, longitude } = coords;

                        const direccion = await Location.reverseGeocodeAsync({ latitude, longitude });
                    if (direccion.length > 0) {
                        const { street, city, } = direccion[0];
                        setDireccion(`${street}, ${city}`);
                    } else {
                            setDireccion('Dirección no encontrada');
                            }

                        }
                    } catch (error) {
                    console.error('Error al obtener la dirección:', error);
                        setDireccion('Error al obtener la dirección');
                    }
    };

    return (
        <Text style={tw`text-justify p-2 text-base text-white`}>{direccion}</Text>
    );
};

export default TuComponente;