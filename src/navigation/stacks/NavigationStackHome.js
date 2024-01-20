import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Phone from '../../screens/Phone';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

export default function NavigationClass() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Principio" component={Home}/>
            <Stack.Screen name="Telefono" component={Phone}/>
            
        </Stack.Navigator>
    );
}