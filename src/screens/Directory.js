import tw from 'twrnc'
import React from 'react';
import {  FlatList, SafeAreaView, View } from 'react-native';
import ListNumbers from '../components/ListNumbers';
import SearchBar from '../components/SearchBar';

const Directory = () => {

const Data = [
    { id: '1', title: '123', number: '12333', imagen: require("../assets/pokeball.png")},
    { id: '2', title: 'ambulancia', number: '544', imagen: require('../assets/pokeball.png') },
    { id: '3', title: 'bomberos', number: '665', imagen: require('../assets/pokeball.png') },
    { id: '4', title: 'policia', number: '535', imagen: require('../assets/pokeball.png') },
    { id: '5', title: 'defensa civil', number: '455', imagen: require('../assets/pokeball.png') },
    { id: '6', title: 'cruz roja', number: '867', imagen: require('../assets/pokeball.png') },
    { id: '7', title: 'Gaula', number: '6867', imagen: require('../assets/pokeball.png') },
    { id: '8', title: 'trancito', number: '686', imagen: require('../assets/pokeball.png') },
    { id: '9', title: 'otras', number: '68686', imagen: require('../assets/pokeball.png') },
    ];

    return (
        <SafeAreaView>
        <View style={tw`justify-center h-24 `}>
                <SearchBar/>
            </View>
    <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListNumbers item={item}/>}
        showsVerticalScrollIndicator={false}
    />
    </SafeAreaView>
    );
}

export default Directory;
