import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import SignIn from '../../screens/login/SingIn';
import SignUp from '../../screens/login/SingUp';
import NavigationDrawer from '../NavigationDrawer';

const Stack = createStackNavigator();
 

export default function NavigationClass() {
    //const navigation = useNavigation();
    return(
        <Stack.Navigator  initialRouteName='entrar' screenOptions={{
            headerStyle: {
              backgroundColor: '#1e40af', // Color de fondo del header
            },
            headerTintColor: '#fff', // Color del texto y los íconos
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo del título
              fontSize: 22,        // Tamaño de la fuente del título
            },
          }}>
            <Stack.Screen name="entrar" component={SignIn}   options={{
                 headerShown: false, 
            }}/>
            <Stack.Screen name="Registro" component={SignUp}/>
            <Stack.Screen name="entrada" component={NavigationDrawer}/> 
        </Stack.Navigator>
    );
}