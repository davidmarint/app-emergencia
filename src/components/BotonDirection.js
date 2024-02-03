import tw from 'twrnc'
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const BotonDirection = () => {

    const navigation = useNavigation();
    const seleccion = () =>{
    navigation.navigate("Llamar");
    }

    return (
        <TouchableWithoutFeedback onPress={() =>seleccion()}>
        <View  style={tw`items-center justify-center h-20 `}>
            <View  style={tw`rounded-full bg-amber-400 w-2/6 h-15 flex-row items-center p-4 shadow-lg`}>
                <Text style={tw`text-lg text-center text-blue-950 font-semibold bottom-0.5`}>Ir a Clases</Text>
                <Icon  
                    style={tw`left-3`} 
                    name="chevron-right" 
                    color={"rgb(23,37,84)"} 
                    size={20} 
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default BotonDirection;
