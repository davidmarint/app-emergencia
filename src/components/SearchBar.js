import tw from 'twrnc'
import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


const SearchBar = (props) => {
  const {num} = props;
  const navigation = useNavigation();
  const goSearch = () =>{
    navigation.navigate("buscador",{num});
  }
  

    return (
        <View>
          <Searchbar
            placeholder="Buscar..."
            onIconPress={goSearch}
            onPressIn={goSearch}
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
