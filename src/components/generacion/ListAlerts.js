import React from 'react';
import { View, FlatList, Text } from 'react-native';
import FormList from './FormList';

const FlatListComponent = () => {
    //const {searchQuery, filteredNumbers, emergencyNumbers} = props;
    const gatos = [
        {
          nombre: 'Incendio',
          numero: 'hace 3 dias',
            imagen: '', 
        },
        {
          nombre: 'Robo',
          numero: 'hace 20 minutos',
            imagen: '',
        },]

    return (
    <View>
      <FlatList
            data={gatos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <FormList item={item}/>}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No hay ningún reporte que mostrar</Text>}
        />
    </View>
  );
}

export default FlatListComponent;