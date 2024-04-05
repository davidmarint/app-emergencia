import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Phone from '../../screens/Phone';
import Home from '../../screens/Home';
import Search from '../../screens/SearchView';
import Mapas from '../../screens/Mapas';
import Clinic from '../../screens/Clinic';
import LocalPolice from '../../screens/LocalPolice';

const Stack = createStackNavigator();


const CustomHeaderTitle = () => (
    <Image
        source={require('../../assets/tituloHeader.png')} // Ruta de la imagen
        style={{ width: 275, height: 58, bottom:18  }} 
    />
    );

export default function NavigationClass() {
    const navigation = useNavigation();
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor:'rgb(23,37,88)',
            headerStyle: {
                backgroundColor: 'white',
                height: 80,
            },
            headerTitle: () => <CustomHeaderTitle />,
        }}>
            <Stack.Screen name="Principio" component={Home} options={{
                headerLeft: () => {
                    return(
                        <View style={tw`p-2 left-5 bottom-4`}>
                        <Icon name="bars" 
                        color="#172558" 
                        size={25} 
                        onPress={() =>navigation.dispatch(DrawerActions.openDrawer)}
                        />
                        </View>
                    )
                }
            }}/>
            <Stack.Screen name="Telefono" component={Phone}/>
            <Stack.Screen name="buscador" component={Search}/>
            <Stack.Screen name="Mapa" component={Mapas}/>
            <Stack.Screen name="Clinicas" component={Clinic}/>
            <Stack.Screen name="Cuadrantes" component={LocalPolice}/>
        </Stack.Navigator>
    );
}