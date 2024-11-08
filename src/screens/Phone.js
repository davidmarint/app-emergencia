import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Linking, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import TimeArrive from '../components/TimeArrive';
import Direccion from '../components/Direcccion'

const Phone = () => {

const { params: { item },} = useRoute(); 

const llamar  = () =>{
  console.log(`Llamar a: ${item.numero}`) //quitar al final
  if (item.numero) {
    Linking.openURL(`tel:${item.numero}`);
  } else {
    console.error('Número de emergencia no válido');
  }
}
  return (
      <ScrollView style={tw`flex-1`}>
    <View style={tw`items-center`}>
          <View style={tw`h-35/100 w-full items-center justify-center`}>
          <Image 
            source={{uri:item.imagen}}
            style={tw`w-6/12 h-48`}/> 
            <Text style={tw`text-2xl top-4 font-semibold`}>{item.nombre}</Text>
          </View>
          <View style={tw`h-140 p-3 bg-blue-950 opacity-98 w-full border-t-4 border-amber-500`}>
          
            <Text style={tw`text-lg font-semibold p-3 text-white`}>Descripción</Text>
            <Text style={tw`text-justify p-2 text-base text-white`}>{item.descripcion}</Text>
            {item.nombre === "Bomberos" && 
            <Text style={tw`text-justify p-2 text-base text-white`}>Disponibilidad de vehículos de atención rápida: 4 </Text>
            }
            {item.nombre === "Ambulancia" && 
            <Text style={tw`text-justify p-2 text-base text-white`}>Disponibilidad de vehículos de atención : 29 </Text>
            }
             <Direccion/>
          { item.ubicacion !== undefined && <TimeArrive item={item}/> } 
         

          <TouchableWithoutFeedback onPress={llamar}>
            
            <View  style={tw`items-center justify-center top-5`}>
              
              <View  style={tw`rounded-full bg-amber-400 h-15 flex-row items-center p-3`}>

                <Text style={tw`text-lg text-center text-blue-950 font-semibold bottom-0.5 px-5`}>Llamar a: {item.numero}</Text>
                <Icon  
                    style={tw`right-2`} 
                    name="phone" 
                    color={"rgb(23,37,84)"} 
                    size={20} 
                  />   
                  

              </View>
            </View>
        </TouchableWithoutFeedback>
      
        </View>
    </View>
    </ScrollView>
  );
}

export default Phone;
