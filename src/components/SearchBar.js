import tw from 'twrnc'
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper'

const SearchBar = () => {
    
    return (
        <View>
          <Searchbar
            placeholder="Buscar..."
            placeholderTextColor="gray"
            iconColor="rgba(252,211,77,1)"
            elevation={5}
            inputStyle={{ 
              color: "rgba(247,247,247,1)", 
              fontSize: 20, 
          
            }}
            style={tw`h-16 bg-blue-950 placeholder:text-stone-50 shadow-2xl` }
          />
        </View>
      );

    }


export default SearchBar;
