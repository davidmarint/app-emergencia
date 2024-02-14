import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Data from '../../database/ListaDatos';  


const BotonList = ({item}) => {

    const dataNumber = Object.values(Data());
    const navigation = useNavigation();
    const seleccion = (phoneName) =>{
        const emergencyMatch = dataNumber.find((emergency) => emergency.nombre === phoneName);
        if (emergencyMatch) {
            console.log(`Llamar a: ${emergencyMatch.nombre}`); //quitar al final 
            navigation.navigate("Telefono", {item: emergencyMatch});
        } else {
            console.log(`No se encontró la emergencia con el nombre ${phoneName}`);
        }
    }

    return (
    <TouchableWithoutFeedback onPress={() =>seleccion(item.title)}>
        <View style={tw`mr-1 my-1 p-3 border-l border-gray-300 flex items-center justify-between w-1/3 `}>
        <Image 
        source={item.imagen}
        style={tw` bottom-2 right-2 w-20 h-20 right-1 `}/> 
            <Text style={tw`text-lg text-center text-blue-950 font-semibold`}>{item.title}</Text>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default BotonList;
