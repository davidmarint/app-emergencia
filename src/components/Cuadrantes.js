import tw from 'twrnc';
import *as React from 'react';
import *as Location from 'expo-location';
import { View, Text, FlatList } from 'react-native';
import ListClinic from './ListClinic';
import Datos from '../Util/Datos';
import Lugar from '../../database/ListaLugares'

const Cuadrantes = () => {
    const dataCuadrante = Lugar();
    const [origin, setOrigin] = React.useState({
        latitude:  4.103093,
        longitude: -73.590991,
    });



    React.useEffect(() => {
        getLoscationPermission();
    }, [])
    async function getLoscationPermission() {
        // let { status } = Location.requestForegroundPermissionsAsync();
        //  if(status !== 'granted'){
        //      alert('permission denied');
        //      return;
        //  } 
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        };
        setOrigin(current);
        //console.log(current)
    }
    const usuDentro = (usuLat, usuLog, latMax, latMin, logMin, logMax) => {
        return usuLat >= latMin &&
            usuLat <= latMax &&
            usuLog >= logMin &&
            usuLog <= logMax;
    };

    for (let i = 0; i < Datos.length; i++) {
        const cuadrantes = Datos[i];
        if (usuDentro(origin.latitude, origin.longitude, cuadrantes.limites.latMax, cuadrantes.limites.latMin, cuadrantes.limites.logMin, cuadrantes.limites.logMax)) {
            console.log('El usuario está dentro del cuadrante');

            const mostrar = (Value) => {
                let resul;
                switch (Value) {
                    case "galan":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "1" || dato.id === "2")
                            .map((dato) => dato);
                        break;
                    case "caudal":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "3" || dato.id === "4" || dato.id === "22")
                            .map((dato) => dato);
                        break;
                    case "Via puerto lopez":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "48" || dato.id === "15" || dato.id === "53")
                            .map((dato) => dato);
                        break;
                    case "San Antonio":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "41" || dato.id === "42")
                            .map((dato) => dato);
                        break;
                    case "centro":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "11" || dato.id === "6"|| dato.id === "69" || dato.id === "72")
                        .map((dato) => dato );
                        break;
                    case "centro2":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "12" || dato.id === "10"|| dato.id === "5")
                        .map((dato) => dato );
                        break;
                    case "guatiquia":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "8" || dato.id === "23"|| dato.id === "24")
                        .map((dato) => dato );
                        break;
                    case "manantial":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "28" || dato.id === "24"|| dato.id === "25" || dato.id === "26" || dato.id === "27")
                        .map((dato) => dato );
                        break;
                    case "covisan":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "31" || dato.id === "32"|| dato.id === "34")
                        .map((dato) => dato );
                        break;
                    case "pinilla":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "44" || dato.id === "45")
                        .map((dato) => dato );
                        break;
                    case "reliquia":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "33" || dato.id === "80")
                        .map((dato) => dato );
                        break;
                    case "barzal":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "14" || dato.id === "16"|| dato.id === "36" || dato.id === "13")
                        .map((dato) => dato );
                        break;
                    case "trapiche":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "17")
                        .map((dato) => dato );
                        break;
                    case "san benito":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "20")
                        .map((dato) => dato );
                        break;
                    case "esperanza":
                        resul = Object.values(numerosDeEmergencia).filter((dato) => dato.id === "21" || dato.id === "50"|| dato.id === "51" || dato.id === "52" || dato.id === "56" || dato.id === "57" || dato.id === "71")
                        .map((dato) => dato );
                        break;
                    case "cofrem":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "18" || dato.id === "19" || dato.id === "9")
                        .map((dato) => dato);
                        break;
                    case "ceiba":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "29" || dato.id === "30" || dato.id === "39" || dato.id === "40" || dato.id === "81")
                        .map((dato) => dato);
                        break;
                    case "vizcaya":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "35" || dato.id === "37" || dato.id === "38")
                        .map((dato) => dato);
                        break;
                    case "llanabastos":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "43")
                        .map((dato) => dato);
                        break;
                    case "Camino ganadero":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "46" || dato.id === "47")
                        .map((dato) => dato);
                        break;
                    case "rosita":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "53" || dato.id === "55")
                        .map((dato) => dato);
                        break;
                        case "catumare":
                            resul = Object.values(dataCuadrante).filter((dato) => dato.id === "58" || dato.id === "59" || dato.id === "60" || dato.id === "61" || dato.id === "62")
                            .map((dato) => dato);
                            break;
                            case "porfia":
                        resul = Object.values(dataCuadrante).filter((dato) => dato.id === "63" || dato.id === "64" || dato.id === "65" || dato.id === "66" || dato.id === "67")
                        .map((dato) => dato);
                        break;
                }
                ;
                //console.log(resul)
                return (resul);
            }

            const otro = mostrar(cuadrantes.nombre);
            
            return (
                <View key={cuadrantes.nombre}>
                    <Text>El usuario está dentro de: {cuadrantes.nombre}</Text>
                    <FlatList
                        data={otro}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListClinic item={item} />}
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                    />
                </View>
            );
        }
    }
    console.log('El usuario está fuera de todos los cuadrantes');
    return (
        <View style={tw`justify-center h-1/2`}>
            <Text style={tw`text-lg  text-gray-500 p-2 text-center`}>"El usuario no se encuentra cerca de algún cuadrante"</Text>
        </View>
    );
}

export default Cuadrantes;
