import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import TapNavigationHome from './NavigationTapsHome';
import TapNavigationCall from './NavigationTapsCall';
import TapNavigationDirectory from './NavigationTapsDirectory';

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
            <Drawer.Screen name="Clases" component={TapNavigationCall}/>
            <Drawer.Screen name="Directorio" component={TapNavigationDirectory}/>
        </Drawer.Navigator>
    )
} 