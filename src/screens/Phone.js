import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const Phone = () => {

const { params: { item },} = useRoute();

const llamar  = () =>{
  console.log(`Llamar a: ${item}`)
}

  return (
    <View style={tw`items-center`}>
          <View style={tw`h-4/7 items-center justify-center`}>
          <Image 
            source={item.imagen}
            style={tw`w-45 h-45 `}/> 
            <Text style={tw`text-2xl top-4 font-semibold`}>{item.nombre}</Text>
          </View>
          <View style={tw`border-4 border-blue-950 h-1/5 rounded-2xl p-3
          bg-amber-500 w-8/9`}>
            <Text style={tw`text-lg font-semibold `}>DESCRIPCIÓN</Text>
            <Text>{item.descripcion}</Text>
          </View>
          <TouchableWithoutFeedback onPress={llamar}>
        <View  style={tw`items-center justify-center h-25 top-8`}>
            <View  style={tw`rounded-full bg-amber-400 w-55 h-15 flex-row items-center p-4`}>
                <Text style={tw`text-lg text-center text-blue-950 font-semibold bottom-0.5`}>Llamar a: {item.number}</Text>
                <Icon  
                    style={tw`left-3`} 
                    name="phone" 
                    color={"rgb(23,37,84)"} 
                    size={20} 
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
      
    </View>
  );
}

export default Phone;
