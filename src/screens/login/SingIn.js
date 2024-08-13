import tw from 'twrnc'
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../../slices/userSlice';


const SingIn = () => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const { isLoading, isError, error } = useSelector(state => state.user);

    const onHandlerSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor, ingrese email y contraseña');
            return;
        }

        try {
            const resultAction = await dispatch(signIn({ email, password })).unwrap();
            // Si llegamos aquí, significa que el login fue exitoso
            navigation.navigate("entrada");
        } catch (error) {
            // Si llegamos aquí, significa que hubo un error en el login
            console.log({error})
            Alert.alert('Error de login', error.message || 'Ocurrió un error durante el login');
        }
    }

  

    const onHandlerSigUp = () =>{
        navigation.navigate("registro");
    }
    const onHandlerHome = () =>{
        navigation.navigate("entrada");
    }
    return (
        
        <View style={tw`flex-1  items-center bg-white`}>
            <View style={tw` h-1/2 w-full bg-blue-800 p-0 rounded-b-30 shadow-md`}></View>
            <Image 
                 source={require('../../assets/icon.png')}
                style={tw`absolute m-10 w-50 h-50`}/> 
            <View style={tw`absolute mt-70 w-8/9 bg-white items-center justify-center rounded-2xl shadow-2xl`}>
                <Text style={tw`text-lg mb-5 text-center p-3`}>INICIA SESION</Text>
                <TextInput
                    style={tw`h-10 w-8/9 p-2 border-stone-400 border-2 mb-2 rounded-2xl`}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={tw`h-10 w-8/9 p-2 border-stone-400 border-2 mb-2 rounded-2xl`}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-3 mb-1 shadow-md`}  onPress={onHandlerSignIn}>
                     <Text style={tw`text-white font-bold`}>Ingresar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-1 mb-2 shadow-md`}  onPress={onHandlerSigUp}>
                     <Text style={tw`text-white font-bold`}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-1 mb-10 shadow-md`}  onPress={onHandlerHome}>
                     <Text style={tw`text-white font-bold`}>Entrar Sin Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    )}

export default SingIn;