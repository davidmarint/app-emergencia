import tw from 'twrnc'
import React from 'react';
import {  FlatList,  View, } from 'react-native';
import Datos from '../Util/Datos';
import SearchBarList from '../components/SearchBarList';

const Directory = () => {

const dataNumber = Object.values(Datos);

return (
    <View>
        <SearchBarList/>
    </View>
    );
}

export default Directory;
