import tw from 'twrnc'
import React, {useState} from 'react';
import { View, Text, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import Data from '../../database/ListaDatos'; 
import ListNumbers from '../components/ListNumbers';
import ListClinic from '../components/ListClinic'

const Clinic = () => {
     const Salud = Data();
    const [selectedValue, setSelectedValue] = useState('12');
   
    // const tiposDeClases = Object.values(Data()).reduce((tipos, item) => {
    //     if (!tipos.includes(item.clase)) {
    //       tipos.push(item.clase);
    //     }                                 esta funcion se encaga de mostrar las clases 
    //     return tipos;
    //   }, []);

      const numerosDeEmergencia = Object.values(Salud)
      .filter((dato) => dato.clase === "salud")
      .map((dato) => dato );
    
    const mostrar =(Value) =>{
        let resul;
        switch(Value){
            case "1":
                resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25")
                .map((dato) => dato);
            break;
            case "2":
                resul = Object.values(numerosDeEmergencia).filter((dato) =>  dato.id === "26" || dato.id === "8")
                .map((dato) => dato );
                break;
                case "3":
                    resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                    .map((dato) => dato );
                    break;
                    case "4":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                        .map((dato) => dato );
                        break;
                        case "5":
                            resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                            .map((dato) => dato );
                            break;
                            case "6":
                                resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                .map((dato) => dato );
                                break;
                                case "7":
                                    resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                    .map((dato) => dato );
                                    break;
                                    case "8":
                                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                        .map((dato) => dato );
                                        break;
                                        case "9":
                                            resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                            .map((dato) => dato );
                                            break;
                                            case "10":
                                                resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                                .map((dato) => dato );
                                                break;
                                                case "11":
                                                    resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8")
                                                    .map((dato) => dato );
                                                    break;
                                                    case "12":
                                                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "23" || dato.id === "25"|| dato.id === "24" || dato.id === "26" || dato.id === "8" || dato.id === "27")
                                                        .map((dato) => dato );
                                                        break;
            }
        ;
        console.log(Value)
        return(resul);
    }
    const otro = mostrar(selectedValue);
     //console.log(otro);
          return (
        <View style={tw`h-full`}>
           <View style={tw`border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-semibold text-blue-950 `}>PRINCIPALES CLINICAS DE LA CIUDAD</Text>
            <Text style={tw`text-lg  text-blue-950 p-2`}>
                Seleccione la su EPS para comocer a cual clinica acudir en caso de emergencia
            </Text>
            </View>
        <View style={tw`border border-gray-400 rounded p-2 m-2 bg-blue-950 h-1/10`}>
            <Picker
            style={tw`h-10  text-white text-xl`}
            dropdownIconColor={"#facc15"}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
         <Picker.Item label="Seleccionar" value="12"/>
        <Picker.Item label="Salud total" value="1"/>
        <Picker.Item label="Sanitas" value="2" />
        <Picker.Item label="Capital Salud" value="3" />
        <Picker.Item label="Nueva Eps" value="4" />
        <Picker.Item label="Servimedicos" value="5" />
        <Picker.Item label="Famisanar" value="6" />
        <Picker.Item label="Compensar" value="7" />
        <Picker.Item label="Medimas" value="8" />
        <Picker.Item label="EPS Indigena Mallamas" value="9" />
        <Picker.Item label="Sisben" value="10" />
        <Picker.Item label="No Tengo" value="11" />
        </Picker>
        </View>
       
        <FlatList
                data={otro}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ListClinic item={item}/>}
                showsVerticalScrollIndicator={false}
                numColumns={1}
            />  
        
        </View>
    );
}
export default Clinic;
