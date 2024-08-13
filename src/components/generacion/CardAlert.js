import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const CardAlert = (props) => {

    const {orden} = props;

    const mostrar =(Value) =>{
        let resul;
        switch(Value){
            case "1":
                resul = {
                    icono: "mask",
                    texto: 'Reporta un robo en progreso '
                }
            break;
            case "2":
                resul = {
                    icono: "fire",
                    texto: 'Reporta incendios en progreso'
                }
                break;
                case "3":
                    resul = {
                        icono: "fist-raised",
                        texto: 'alerta sobre alguna riña en progreso'
                    } 
                    break;
                    case "4":
                        resul = {
                            icono: "cloud-showers-heavy",
                            texto: 'Informa sobre una inundacion cerca tuyo'
                        }
                        break;
                        case "5":
                            resul = {
                                icono: "car-crash",
                                texto: 'Reporta de un accidente de trancito grave'
                            } 
                            break;
                            case "6":
                                resul = {
                                    icono: "ambulance",
                                    texto: 'Reporta sobre un imprevisto medico cerca tuyo'
                                } 
                                break;
                                case "7":
                                    resul = {
                                        icono: "user-secret",
                                        texto: 'Informa sobre una persona sopechosa en el sector designado'
                                    } 
                                    break;
                                        case "9":
                                            resul = {
                                                icono: "fist-raised",
                                                texto: 'Reporta sobre un caso de violencia Intrafamiliar cerca tuyo'
                                            }
                                            break;
                                            case "10":
                                                resul = {
                                                    icono: "house-damage",
                                                    texto: 'Reporta sobre algun daño en la infraestructra de algun servicio publico'
                                                }
                                                break;
                                                case "11":
                                                    resul = {
                                                        icono: "bahai",
                                                        texto: 'Reporta una Explicion cerca tuyo'
                                                    }
                                                    break;
                                                    case "12":
                                                        resul = {
                                                            icono: "skull-crossbones",
                                                            texto: 'Reporta sobre una persona a punto de quitarse la vida '
                                                        }
                                                        break;
                                                        case "13":
                                                        resul = {
                                                            icono: "question-circle",
                                                            texto: 'Reporta sobre otro tipo de emergencia que requiera atencion urgente'
                                                        }
                                                        break;
                                                        case "14":
                                                        resul = {
                                                            icono: "exclamation-triangle",
                                                            texto: 'Selecciona el Tipo de emergencia a reportar'
                                                        }
                                                        break;
            }
        ;
        return(resul);
    }
    const envio = mostrar(orden)
    return(
    <View style={tw`items-center content-center`}>
        <View style={tw`flex-row w-95/100 bg-slate-400 rounded-2xl shadow-xl p-3 `}>
        <Icon name={envio.icono} size={40} color="rgb(23,37,84)" style={tw`p-2`} />
        <View style={tw`justify-center max-w-75`}>
                    <Text style={tw`text-lg font-semibold`}>{envio.texto}</Text>
                    </View>
        </View>
        <Text style={tw`text-lg font-semibold mb-2`}>Selecciona la ubicación:</Text>
        
    </View>
)
}

export default CardAlert;