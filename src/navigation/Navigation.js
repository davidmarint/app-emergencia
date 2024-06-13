import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './NavigationDrawer';
import NavigationLogin from './stacks/NavigationStackLogin'

export default function Navigation() {
    const user = null;
    return(
        <NavigationContainer>
            { user ? <NavigationDrawer/> : <NavigationLogin/>}
        </NavigationContainer>
    )
} 
