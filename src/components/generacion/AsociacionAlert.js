import { View, Text } from 'react-native'
import React from 'react'

export default function AsociacionAlert(props) {

    const {emergency} = props;
    console.log(emergency)
    let resul;
    switch(emergency){
        case 2:
            resul= "Robo" 
            break;
            case 3:
                resul= "Incendio" 
                break;
                case 4:
                    resul= "Riña" 
                    break;
                    case 5:
                    resul= "Inundacion" 
                    break;
                    case 6:
                    resul= "Accidente de transito" 
                    break;
                    case 7:
                    resul= "Urgencia medica" 
                    break;
                    case 8:
                    resul= "Persona sospechosa" 
                    break;
                    case 9:
                    resul= "Violencia intrafamiliar" 
                    break;
                    case 10:
                    resul= "Explocion" 
                    break;
                    case 11:
                    resul= "Daño en Servicio publico" 
                    break;
                    case 12:
                    resul= "Intento de suicidio" 
                    break;
                    case 13:
                    resul= "Indefinida" 
                    break;
    }     
    return <Text>{resul}</Text>;
}