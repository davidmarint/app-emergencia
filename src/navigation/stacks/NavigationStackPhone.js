import tw from 'twrnc';
import React from 'react'
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Phone from '../../screens/Phone';
import Directory from '../../screens/Directory';

const Stack = createStackNavigator();

const CustomHeaderTitle = () => (
    <View style={{alignItems: 'center', width: 310,}}>
    <Image
        source={require('../../assets/tituloHeader.png')} // Ruta de la imagen
        style={{ width: 275, height: 58,}} 
    />
    </View>
    );

export default function NavigationPhone() {
    const navigation = useNavigation();
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor:'rgb(23,37,88)',
            headerStyle: {
                backgroundColor: 'white',
                height: 120,
            },
            headerTitle: () => <CustomHeaderTitle />,
        }}>
            <Stack.Screen name="ListadoNum" component={Directory} options={{
                headerLeft: () => {
                    return(
                        <View style={tw`p-3 left-3 top-1`}>
                        <Icon name="bars" 
                        color="#172558" 
                        size={30} 
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
