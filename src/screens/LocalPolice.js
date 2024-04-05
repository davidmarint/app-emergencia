import tw from 'twrnc';
import React from 'react';
import { View, Text } from 'react-native';
import Cuadrantes from '../components/Cuadrantes'
import SearchBar from '../components/SearchBar'

const LocalPolice = () => {
    const num = 2;
    return (
        <View>
            <View style={tw`justify-center h-24 `}>
                <SearchBar num={num}/>
            </View>
            <View style={tw`border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-semibold text-blue-950 `}>CUADRANTES DE POLICIA</Text>
            <Text style={tw`text-lg  text-blue-950 p-2`}>
                Se mostrara los cuadrantes de policias mas cercanos segun su ubicacion 
            </Text>
            </View>
            <Cuadrantes/>
        </View>
    );
}

export default LocalPolice;
