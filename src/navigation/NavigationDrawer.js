import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TapNavigationHome from './NavigationTapsHome';
import TapNavigationCall from './NavigationTapsCall';
import TapNavigationDirectory from './NavigationTapsDirectory';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={TapNavigationHome}/>
            <Drawer.Screen name="Clases" component={TapNavigationCall}/>
            <Drawer.Screen name="Directorio" component={TapNavigationDirectory}/>
        </Drawer.Navigator>
    )
} 