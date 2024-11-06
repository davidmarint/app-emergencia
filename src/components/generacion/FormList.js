import tw from 'twrnc'
import React, { useEffect, useState } from 'react';
import { View, Text,TouchableWithoutFeedback, Image, } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { emergenciesApi } from '../../api';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { useSelector } from 'react-redux';

const FormList = ({item}) => { 

    const navigation = useNavigation();
    const [classAlerts, setClassAlerts] = useState([]);
    const [alertDetails, setAlertDetails] = useState({ image: "https://emergencies.byteobe.com:8000/media/cruz_PtkFEIZ.png", title: "Tipo de alerta desconocido" });
    const [timeAgo, setTimeAgo] = useState('');
    const { selectedAlert, userLocation } = useSelector((state) => state.alert);

    useEffect(() => {
        const ListClass = async () =>{
          try{
            const response = await emergenciesApi.mainEmergenciesEmergenciesTypeList();
            setClassAlerts(response.data);
            if(response.status==200||201){
              } 
          }catch (err) {
          console.log("no se pudo obtener la lista: ", err)
          }
        };
  
        ListClass();
      }, [])

      useEffect(() => {
        if (classAlerts.length > 0 && item.emergency_type) {
            const alertType = classAlerts.find(alert => alert.id === item.emergency_type);
            if (alertType) {
                setAlertDetails({
                    image: alertType.icon,
                    title: alertType.name
                });
            }
        }
    }, [classAlerts, item.emergency_type]);

    useEffect(() => {
        const updateTimeAgo = () => {
            const createdDate = parseISO(item.created_at);
            const distanceString = formatDistanceToNow(createdDate, { addSuffix: true, locale: es });
            setTimeAgo(distanceString);
        };

        updateTimeAgo();
        // Actualizar cada minuto
        const interval = setInterval(updateTimeAgo, 60000);

        return () => clearInterval(interval);
    }, [item.created_at]);

    const handleCallPress = () => {
        // Lógica para realizar la llamada
        navigation.navigate("MapaAlerta", {item})
    
    }; 
    const urlo = "https://emergencies.byteobe.com:8000/media/cruz_PtkFEIZ.png";

    const emergencyImage = {
        2: 'https://emergencies.byteobe.com:8000/media/ladron_1.png',
        3: 'https://emergencies.byteobe.com:8000/media/incendio.png',
        4: 'https://emergencies.byteobe.com:8000/media/ri%C3%B1a.png',
        5: "https://emergencies.byteobe.com:8000/media/inundacion_L2SixtR.png",
        6: 'https://emergencies.byteobe.com:8000/media/accidente_de_transito.png',
        7: 'https://emergencies.byteobe.com:8000/media/cruz.png',
        8: 'https://emergencies.byteobe.com:8000/media/25.png',
        9: 'https://emergencies.byteobe.com:8000/media/familiar.png',
        10: 'https://emergencies.byteobe.com:8000/media/electrico.png',
        11: 'https://emergencies.byteobe.com:8000/media/explocion.png',
        12: 'https://emergencies.byteobe.com:8000/media/suicidio.png',
        13: 'https://emergencies.byteobe.com:8000/media/indefinido.png',
    };

    return (
    <TouchableWithoutFeedback onPress={() => handleCallPress(item)}>
        <View style={tw`p-4 border-b-4 border-blue-950 rounded-2xl`}>
                <View style={tw`flex-row items-center justify-between px-4`}>
                    <Image 
                        source={{uri:emergencyImage[item.emergency_type]}}
                        style={tw`w-15 h-15 mr-3 right-2 `}/> 
                    <View style={tw`flex-col basis-3/4`}>
                    <Text style={tw`text-lg font-semibold`}>{alertDetails.title}</Text>
                    <Text style={{ color: '#888' }}>{timeAgo}</Text> 
                    </View>
                    <View style={tw`items-center justify-center right-7`}>
                    {  selectedAlert !== null && selectedAlert && selectedAlert.id === item.id ?  (
                        <>
                         <Icon name="shipping-fast" size={24} color="rgb(30,64,175)" style={tw``} />
                        <Text style={tw`right-1`}>En respuesta</Text>
                        </>
                            ) : (
                            <>
                        
                        <Icon name="map-marked-alt" size={24} color="rgb(23,37,84)" style={tw``} />
                            <Text>ver lugar</Text>
                            </>
                            )}
                    </View>
                </View>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default FormList;