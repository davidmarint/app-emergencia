import tw from 'twrnc'
import React from 'react';
import {  FlatList, SafeAreaView, View } from 'react-native';
import ListNumbers from '../components/ListNumbers';
import SearchBar from '../components/SearchBar';
import Datos from '../Util/Datos';

const Directory = () => {

    const dataNumber = Object.values(Datos);

    return (
        <SafeAreaView>
        <View style={tw`justify-center h-24 `}>
                <SearchBar/>
        </View>
    <FlatList
        data={dataNumber}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListNumbers item={item}/>}
        showsVerticalScrollIndicator={false}
    />
    </SafeAreaView>
    );
}

export default Directory;
