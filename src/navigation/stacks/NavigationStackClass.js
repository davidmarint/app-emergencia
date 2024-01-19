import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Phone from '../../screens/Phone';
import Class from '../../screens/Call';

const Stack = createStackNavigator();

export default function NavigationClass() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Clases" component={Class}/>
            <Stack.Screen name="Telefono" component={Phone}/>
            
        </Stack.Navigator>
    );
}