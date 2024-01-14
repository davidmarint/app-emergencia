import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, SafeAreaView, FlatList, } from 'react-native';
import SearchBar from '../components/SearchBar';
import BotonList from '../components/BotonList';
import BotonDirection from '../components/BotonDirection';

const Data = [
    { id: '1', title: '123', screen: 'Llamada', imagen: require("../assets/pokeball.png") },
    { id: '2', title: 'ambulancia', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '3', title: 'bomberos', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '4', title: 'policia', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '5', title: 'defensa civil', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '6', title: 'cruz roja', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '7', title: 'Gaula', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '8', title: 'trancito', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    { id: '9', title: 'otras', screen: 'OtraVista', imagen: require('../assets/pokeball.png') },
    ];

    const logo = require("../assets/pokeball.png");

const Home = () => {
    return (
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
    );
}

export default Home;
