import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Phone from '../../screens/Phone';
import Class from '../../screens/Call';

const Stack = createStackNavigator();
 
const CustomHeaderTitle = () => (
    <Image
        source={require('../../assets/tituloHeader.png')} // Ruta de la imagen
        style={{ width: 275, height: 58, bottom:18  }} 
    />
    );

export default function NavigationClass() {
    const navigation = useNavigation();
    return(
        <Stack.Navigator  screenOptions={{
            headerShown: false, }}>
            <Stack.Screen name="Clases" component={Class} options={{
                headerLeft: () => {
                    return(
                        <View style={tw`p-2 left-5 bottom-4`}>
                        <Icon name="bars" 
                        color="#172558" 
                        size={25} 
                        onPress={() =>navigation.dispatch(DrawerActions.openDrawer)}
                        />
                        </View>
                    )
                }
            }}/>
            <Stack.Screen name="Telefono" component={Phone}/>
            
        </Stack.Navigator>
    );
}