import tw from 'twrnc'
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Phone = () => {

const { params: { item },} = useRoute();

  return (
    <View>
      <Image 
        source={item.imagen}
        style={tw` bottom-2 right-2 w-25 h-25 right-1 `}/> 
      <Text>se llama aqui</Text>
      <Text>{item.title}</Text>
      <Text>{item.number}</Text>
    </View>
  );
}

export default Phone;
