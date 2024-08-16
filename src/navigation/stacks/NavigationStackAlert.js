import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Class from '../../screens/Alerts';
import Creacion from '../../screens/emergenci/CreateAlert'
import Mapa from '../../screens/emergenci/MapsAlerts'

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
            <Stack.Screen name="Alertas" component={Class} options={{
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
            <Stack.Screen name="Creacion" component={Creacion}/>
            <Stack.Screen name="MapaAlerta" component={Mapa}/>
        </Stack.Navigator>
    );
}