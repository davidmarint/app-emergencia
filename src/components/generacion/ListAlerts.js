import React, { useEffect, useState } from 'react';
import { View, FlatList, Text,ScrollView, RefreshControl } from 'react-native';
import { isAfter, subMinutes, parseISO } from 'date-fns';
import FormList from './FormList';
import { emergenciesApi } from '../../api';

const FlatListComponent = () => {
    //const {searchQuery, filteredNumbers, emergencyNumbers} = props;
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    
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

       const onRefresh = async () => {
        setRefreshing(true);
        try {
          await ListDatos();
        } catch (err) {
          setError(err.message);
          console.log('Error refreshing the list: ', err);
        } finally {
          setRefreshing(false);
        }
      };

       useEffect(() => {
        const fetchAlertsAndStartInterval = async () => {
          await ListDatos();
          const interval = setInterval(ListDatos, 60000);
          return () => clearInterval(interval);
        };
    
        fetchAlertsAndStartInterval();
     }, [])


    // useEffect(() => {
    //   const ListDatos = async () => {
    //     try {
    //       const response = await emergenciesApi.mainEmergenciesEmergencyList();
    //       const now = new Date();
    //       const filteredAlerts = response.data.filter((alert) => 
    //         isAfter(parseISO(alert.created_at), subMinutes(now, 30))
    //       );
    //       setAlerts(filteredAlerts);
    //       if (response.status === 200 || 201) {
    //         // Success handling (if needed)
    //       }
    //     } catch (err) {
    //       setError(err.message);
    //       console.log("No se pudo obtener la lista: ", err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   ListDatos();
    // }, []);
    
    return (
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
            data={alerts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <FormList item={item}/>}
            showsVerticalScrollIndicator={false}
            inverted
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No hay ningún reporte que mostrar</Text>}
        />
    </ScrollView>
  );
}

export default FlatListComponent;