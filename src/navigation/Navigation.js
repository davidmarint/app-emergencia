import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NavigationDrawer from './NavigationDrawer';
import NavigationLogin from './stacks/NavigationStackLogin'
import { navigationRef } from './NavigationService';
export default function Navigation() {

    //const state = useSelector(state => state);
    //console.log('Estado completo de Redux:', state)

    const isAuthenticated = useSelector(state =>state.navUsers?.isAuthenticated ?? false);

    return(
        <NavigationContainer ref={navigationRef}>
            { isAuthenticated ? <NavigationDrawer/> : <NavigationLogin/>}
        </NavigationContainer>
    )
} 
