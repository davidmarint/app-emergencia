import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import TapNavigationHome from './NavigationTapsHome';
import TapNavigationCall from './NavigationTapsCall';
import TapNavigationDirectory from './NavigationTapsDirectory';
import Info from '../screens/Info';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false, 
            drawerActiveTintColor: '#ffffff',
            drawerActiveBackgroundColor:'rgb(23,37,88)',}} >
            <Drawer.Screen name="Inicio" component={TapNavigationHome} options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size}/>
                ),
            }}/>
<<<<<<< HEAD
            <Drawer.Screen name="Alertas" component={TapNavigationCall} options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="exclamation-triangle" color={color} size={size}/>
=======
            <Drawer.Screen name="Clases" component={TapNavigationCall} options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="layer-group" color={color} size={size}/>
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
                ),
            }}/>
            <Drawer.Screen name="Directorio" component={TapNavigationDirectory} options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="address-book" color={color} size={size}/>
                ),
            }}/>
            <Drawer.Screen name="Info" component={Info} options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="info-circle" color={color} size={size}/>
                ),
            }}/>
        </Drawer.Navigator>
    )
} 