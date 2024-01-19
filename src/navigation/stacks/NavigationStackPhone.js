import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Phone from '../../screens/Phone';
import Directory from '../../screens/Directory';

const Stack = createStackNavigator();

export default function NavigationPhone() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Directorio" component={Directory} />
            <Stack.Screen name="Telefono" component={Phone}/>
            
        </Stack.Navigator>
    );
}
