import tw from 'twrnc'
import React from 'react';
import { View, Text,TouchableWithoutFeedback, Image, } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FormList = ({item}) => { 

    const navigation = useNavigation();

    const handleCallPress = (phoneNumber) => {
        // Lógica para realizar la llamada
        navigation.navigate("Telefono", {item})
    };
 
    return (
    <TouchableWithoutFeedback onPress={() => handleCallPress(item.numero)}>
        <View style={tw`p-4 border-b-4 border-blue-950 rounded-2xl`}>
                <View style={tw`flex-row items-center justify-between px-4`}>
                    <Image 
                        source={require('../../assets/cruz.png')}
                        //{ uri:item.imagen}
                        style={tw`w-15 h-15 mr-3 right-2 `}/> 
                    <View style={tw`flex-col basis-3/4`}>
                    <Text style={tw`text-lg font-semibold`}>{item.nombre}</Text>
                    <Text style={{ color: '#888' }}>{item.numero}</Text>
                    </View>
                    <View style={tw`items-center justify-center right-7`}>
                    <Icon name="map-marked-alt" size={24} color="rgb(23,37,84)" style={tw``} />
                    <Text>ver lugar</Text>
                    </View>
                </View>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default FormList;