import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Phone from '../../screens/Phone';
import Home from '../../screens/Home';

const Stack = createStackNavigator();
//const navigation = useNavigation();

const CustomHeaderTitle = () => (
    <View style={{alignItems: 'center', width: 310, backgroundColor: 'red',}}>
    <Image
        source={require('../../assets/tituloHeader.png')} // Ruta de la imagen
        style={{ width: 258, height: 55,}} 
    />
    </View>
    );

export default function NavigationClass() {
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor: 'rgb(23,37,88)',
            headerStyle: {
                backgroundColor: 'white',
                height: 120,
            },
            headerTitle: () => <CustomHeaderTitle />,
        }}>
            <Stack.Screen name="Principio" component={Home} options={{
                headerLeft: () => {
                    return(
                        <Icon name="bars" 
                        color="rgb(23,37,88)" 
                        size={30} 
                        //onPress={() =>navigation.dispatch(DrawerActions.openDrawer)}
                        />
                    )
                }
            }}/>
            <Stack.Screen name="Telefono" component={Phone}/>
            
        </Stack.Navigator>
    );
}