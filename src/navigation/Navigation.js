import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NavigationDrawer from './NavigationDrawer';
import NavigationLogin from './stacks/NavigationStackLogin'
import { navigationRef } from './NavigationService';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {

    //const state = useSelector(state => state);
    //console.log('Estado completo de Redux:', state)

    const isAuthenticated = useSelector(state =>state.navUsers?.isAuthenticated ?? false);

    return(
        <NavigationContainer ref={navigationRef}>
            {/* { isAuthenticated ? <NavigationDrawer/> : <NavigationLogin />} */}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="Main" component={NavigationDrawer} />
                ) : (
                    <Stack.Screen name="Secion" component={NavigationLogin} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
} 
