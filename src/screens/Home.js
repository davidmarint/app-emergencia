import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, SafeAreaView, FlatList,KeyboardAvoidingView, Platform } from 'react-native';
import SearchBar from '../components/SearchBar';
import BotonList from '../components/BotonList';
import BotonDirection from '../components/BotonDirection';

const Data = [
    { id: '1', title: 'Linea 123', screen: 'Llamada', imagen: require("../assets/pokeball.png") },
    { id: '2', title: 'Ambulancia', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '3', title: 'Bomberos', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '4', title: 'Policía', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '5', title: 'Defensa Civil', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '6', title: 'Cruz Roja', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '7', title: 'Gaula', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '8', title: 'Tránsito', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '9', title: 'Otras', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    ];

    const logo = require("../assets/pokeball.png");

const Home = () => {
    return (
        <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
    >
    <SafeAreaView>
        <View>
            <View style={tw`justify-center h-24 `}>
                <SearchBar/>
            </View>
            <View style={tw`h-15 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-semibold text-blue-950 `}>LINEAS PRINCIPALES</Text>
            </View>
            <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <BotonList item={item}/>}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            />
            <BotonDirection/>
        </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    );
}

export default Home;
