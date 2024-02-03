import tw from 'twrnc';
import React from 'react';
import { View, FlatList, } from 'react-native';
import ListNumbers from './ListNumbers';

const FlatListComponent = (props) => {
    const {searchQuery, filteredNumbers, emergencyNumbers} = props;
    return (
    <View>
      <FlatList
            data={searchQuery.length > 0 ? filteredNumbers : emergencyNumbers}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ListNumbers item={item}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

export default FlatListComponent;
