import tw from 'twrnc';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import ScreenMostrarDatos from '../../database/ListaLugares';
import FlatListComponent from './FlatListComponent';


const SearchBar = () => {

const emergencyNumbers = Object.values(ScreenMostrarDatos())
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNumbers, setFilteredNumbers] = useState([]);

    const handleSearch = (query) => {
    setSearchQuery(query);
    // Filtra los números de emergencia según el nombre
    const filtered = Object.values(emergencyNumbers).filter(
    (emergency) =>
        emergency.nombre?.toLowerCase().includes(query.toLowerCase())
    );
        
    setFilteredNumbers(filtered);
    };

    return (
        <View >
            <Searchbar
            placeholder="Buscar..."
            placeholderTextColor="gray"
            iconColor="rgba(252,211,77,1)"
            elevation={5}
            inputStyle={{
                color: "rgba(247,247,247,1)",
                fontSize: 20,
            }}
            style={tw`h-16 bg-blue-950 placeholder:text-stone-50 shadow-2xl `}
            onChangeText={handleSearch}
            value={searchQuery}
            />
            <FlatListComponent searchQuery={searchQuery} filteredNumbers={filteredNumbers} emergencyNumbers={emergencyNumbers}/>
        </View>
    );
};

export default SearchBar;