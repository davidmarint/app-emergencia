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
            case "2":
                resul = {
                    icono: "mask",
                    texto: 'Reporta un robo en progreso'
                }
            break;
            case "3":
                resul = {
                    icono: "fire",
                    texto: 'Reporta un incendio en progreso'
                }
                break;
                case "4":
                    resul = {
                        icono: "fist-raised",
                        texto: 'Alerta sobre alguna riña en progreso'
                    } 
                    break;
                    case "5":
                        resul = {
                            icono: "cloud-showers-heavy",
                            texto: 'Informa sobre una inundación cerca de ti'
                        }
                        break;
                        case "6":
                            resul = {
                                icono: "car-crash",
                                texto: 'Reporta de un accidente de transito grave'
                            } 
                            break;
                            case "7":
                                resul = {
                                    icono: "ambulance",
                                    texto: 'Reporta sobre un imprevisto medico cerca de ti'
                                } 
                                break;
                                case "8":
                                    resul = {
                                        icono: "user-secret",
                                        texto: 'Informa sobre una persona sospechosa en el sector designado'
                                    } 
                                    break;
                                        case "9":
                                            resul = {
                                                icono: "fist-raised",
                                                texto: 'Reporta sobre un caso de violencia Intrafamiliar cerca de ti'
                                            }
                                            break;
                                            case "10":
                                                resul = {
                                                    icono: "house-damage",
                                                    texto: 'Comunica fallas en la infraestructura de algún servicio público'
                                                }
                                                break;
                                                case "11":
                                                    resul = {
                                                        icono: "bahai",
                                                        texto: 'Reporta una Explosión cerca de ti '
                                                    }
                                                    break;
                                                    case "12":
                                                        resul = {
                                                            icono: "skull-crossbones",
                                                            texto: 'Reporta sobre una persona a punto de quitarse la vida'
                                                        }
                                                        break;
                                                        case "13":
                                                        resul = {
                                                            icono: "question-circle",
                                                            texto: 'Reporta sobre otro tipo de emergencia que requiera atención urgente'
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
        <View style={tw`flex-row w-95/100 bg-blue-950 rounded-2xl shadow-xl p-3 `}>
        <View style={tw` rounded-full bg-amber-400 h-16 w-16 justify-center items-center`}>
        <Icon name={envio.icono} size={38} color="rgb(23,37,84)" style={tw``} />
        </View>
        <View style={tw`justify-center max-w-75 pl-3`}>
                    <Text style={tw`text-lg font-semibold text-white`}>{envio.texto}</Text>
                    </View>
        </View>
        <View style={tw`w-full h-15 border-2 border-amber-400 bg-amber-400 p-3 mt-2`} >
        <Text style={tw`text-lg font-semibold mb-2`}>Selecciona la ubicación:</Text>
        </View>
        
    </View>
)
}

export default CardAlert;