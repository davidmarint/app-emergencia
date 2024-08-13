import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Home from './stacks/NavigationStackHome';
import Call from './stacks/NavigationStackAlert';
import ListaNum from './stacks/NavigationStackPhone';

const Tap = createBottomTabNavigator();

export default function TapNavigationHome(){

    return (
        <Tap.Navigator initialRouteName='Home'
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor: 'rgb(23,37,88)',
                tabBarActiveTintColor: 'red',
            },
            tabBarActiveTintColor: '#fcd34d',
            tabBarInactiveTintColor: 'white',
        }}
        >
            <Tap.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" color={color} size={size} />
                        ),
                        tabBarLabel: 'Inicio',
                }}/>
            <Tap.Screen 
                name="Llamar" 
                component={Call}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="exclamation-triangle" color={color} size={size} />
                        ),
                        tabBarLabel: 'Alertas',
                }} />
            <Tap.Screen 
                name="Directorio" 
                component={ListaNum}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="address-book" color={color} size={size} />
                        ),
                }} />
        </Tap.Navigator>
    );
}