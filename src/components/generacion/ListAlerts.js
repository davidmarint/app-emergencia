import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import FormList from './FormList';
import { emergenciesApi } from '../../api';

const FlatListComponent = () => {
    //const {searchQuery, filteredNumbers, emergencyNumbers} = props;
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
      const ListDatos = async () =>{
        try{
          const response = await emergenciesApi.mainEmergenciesEmergencyList();
          setAlerts(response.data);
          if(response.status==200||201){
            } 
        }catch (err) {
        setError(err.message);
        console.log("no se pudo obtener la lista: ", err)
        }finally {
        setLoading(false);
        }
      };

      ListDatos();
    }, [])
    
    return (
    <View>
      <FlatList
            data={alerts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <FormList item={item}/>}
            showsVerticalScrollIndicator={false}
            inverted
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No hay ningún reporte que mostrar</Text>}
        />
    </View>
  );
}

export default FlatListComponent;