import tw from 'twrnc'
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const seleccion = () =>{

    console.log(`vamos a:`)
}

const BotonDirection = () => {
    return (
        <TouchableWithoutFeedback onPress={seleccion}>
        <View  style={tw`items-center justify-center h-20`}>
            <View  style={tw`rounded-full bg-amber-400 w-55 h-15 flex-row items-center p-4`}>
                <Text style={tw`text-lg text-center text-blue-950 font-semibold bottom-0.5`}>ver todos los tipos</Text>
                <Icon  
                    style={tw`left-3`} 
                    name="arrow-right" 
                    color={"rgb(23,37,84)"} 
                    size={20} 
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default BotonDirection;