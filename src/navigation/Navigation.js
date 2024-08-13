import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
import NavigationDrawer from './NavigationDrawer';
import NavigationLogin from './stacks/NavigationStackLogin'

export default function Navigation() {
<<<<<<< HEAD

    //const state = useSelector(state => state);
    //console.log('Estado completo de Redux:', state)

    const isAuthenticated = useSelector(state =>state.navUsers?.isAuthenticated ?? false);

    return(
        <NavigationContainer>
            { isAuthenticated ? <NavigationDrawer/> : <NavigationLogin/>}
=======
    const user = null;
    return(
        <NavigationContainer>
            { user ? <NavigationDrawer/> : <NavigationLogin/>}
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
        </NavigationContainer>
    )
} 
