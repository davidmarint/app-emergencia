import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Call from './stacks/NavigationStackClass';
import ListaNum from './stacks/NavigationStackPhone';

const Tap = createBottomTabNavigator();

export default function TapNavigationHome(){

    return (
        <Tap.Navigator initialRouteName='Inicio'
        screenOptions={{
            headerShown: false,
        }}>
            <Tap.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" color={color} size={size} />
                        ),
                }}/>
            <Tap.Screen 
                name="Llamar" 
                component={Call}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="phone" color={color} size={size} />
                        ),
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