import tw from 'twrnc';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Cuenta from '../../screens/Info';
import Formulario from '../../screens/login/FormularioE';
import Login from './NavigationStackLogin'

const Stack = createStackNavigator();
 

export default function NavigationClass() {
    //const navigation = useNavigation();
    return(
        <Stack.Navigator  initialRouteName='Cuenta' screenOptions={{
            headerStyle: {
              backgroundColor: '#1e40af', // Color de fondo del header
            },
            headerTintColor: '#fff', // Color del texto y los íconos
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo del título
              fontSize: 22,        // Tamaño de la fuente del título
            },
          }}>
            <Stack.Screen name="Cuenta" component={Cuenta}   options={{
                 headerShown: false, 
            }}/>
            <Stack.Screen name="RegistroE" component={Formulario} options={{
                 headerShown: false, 
            }}/> 
            <Stack.Screen name="Login2" component={Login} options={{
                 headerShown: false, 
            }}/> 
        </Stack.Navigator>
    );
}