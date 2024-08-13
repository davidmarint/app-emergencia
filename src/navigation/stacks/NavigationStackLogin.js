import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import SignIn from '../../screens/login/SingIn';
import SignUp from '../../screens/login/SingUp';
import NavigationDrawer from '../NavigationDrawer';

const Stack = createStackNavigator();
 

export default function NavigationClass() {
    //const navigation = useNavigation();
    return(
<<<<<<< HEAD
        <Stack.Navigator  initialRouteName='entrar' screenOptions={{headerShown: false,}}>
=======
        <Stack.Navigator  initialRouteName='entrar'>
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
            <Stack.Screen name="entrar" component={SignIn} 
            // options={{
            //     headerLeft: () => {
            //         return(
            //             <View style={tw`p-2 left-5 bottom-4`}>
            //             <Icon name="bars" 
            //             color="#172558" 
<<<<<<< HEAD
            //             size={25}  
=======
            //             size={25} 
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
            //             onPress={() =>navigation.dispatch(DrawerActions.openDrawer)}
            //             />
            //             </View>
            //         )
            //     }
            // }}
            />
            <Stack.Screen name="registro" component={SignUp}/>
            <Stack.Screen name="entrada" component={NavigationDrawer}/> 
        </Stack.Navigator>
    );
}