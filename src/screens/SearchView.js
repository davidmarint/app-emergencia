import tw from 'twrnc'
import React from 'react';
import { View, Text} from 'react-native';
import SearchBarList from '../components/SearchBarList';
import SearchCuadrantes from '../components/SearchCuadrantes'
import { useRoute } from '@react-navigation/native';

const SearchView = () => {

    const { params: { num },} = useRoute();
    
    
    if(num === 1){   
    return (
        <View>
            <SearchBarList/>  
        </View>
    );
} else if(num === 2){
    return (
        <View> 
            <SearchCuadrantes/>  
        </View>
    );
} else{
    return (
    <View>
        <Text>No se encontro asignacion</Text>  
    </View>
    );
}
}

export default SearchView;
