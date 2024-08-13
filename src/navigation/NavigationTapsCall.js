import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Home from './stacks/NavigationStackHome';
<<<<<<< HEAD
import Call from './stacks/NavigationStackAlert';
=======
import Call from './stacks/NavigationStackClass';
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
import ListaNum from './stacks/NavigationStackPhone'

const Tap = createBottomTabNavigator();

export default function TapNavigationCall(){

    return (
        <Tap.Navigator initialRouteName='Llamar'
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor: 'rgb(23,37,88)',
                tabBarActiveTintColor: 'red',
            },
            tabBarActiveTintColor: '#fcd34d',
            tabBarInactiveTintColor: 'white',
        }}>
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
<<<<<<< HEAD
                        <Icon name="exclamation-triangle" color={color} size={size} />
                        ),
                        tabBarLabel: 'Alertas',
=======
                        <Icon name="layer-group" color={color} size={size} />
                        ),
                        tabBarLabel: 'Clases',
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
                }} />
            <Tap.Screen 
                name="Directorio" 
                component={ListaNum}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Icon name="address-book" color={color} size={size} />
                        ),
                        tabBarLabel: 'Directorio',
                }} />
        </Tap.Navigator>
    );
}