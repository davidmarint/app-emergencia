import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Data from '../../database/ListaDatos';  
  
const BotonList = (props) => {
    
    const {title, imagen} = props;

    const dataNumber = Object.values(Data());

    const navigation = useNavigation();
    const seleccion = (phoneName) =>{
        const emergencyMatch = dataNumber.find((emergency) => emergency.nombre === phoneName);
        if (emergencyMatch) {
            navigation.navigate("Telefono", {item: emergencyMatch});
        } else if (phoneName === "Clínicas"){
            navigation.navigate("Clinicas", {item: emergencyMatch});
        } else if (phoneName === "Cuadrantes"){
            navigation.navigate("Cuadrantes", {item: emergencyMatch});
        } else {
            console.log(`No se encontró la emergencia con el nombre`);
        }
    }

    return (
    <TouchableWithoutFeedback onPress={() =>seleccion(title)}>
        <View style={tw`mr-2 my-1 p-3 border-l border-gray-300  items-center  w-31/100 `}>
        <Image 
        source={imagen}
        style={tw` bottom-2 left-1 w-20 h-20 `}/> 
            <Text style={tw`text-center text-blue-950 font-semibold bottom-2`}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default BotonList;
