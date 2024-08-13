import tw from 'twrnc'
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../../api';

const SingUp = () => {
    
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleRegister = async () => {

        if (!firstName || !lastName || !idNumber || !email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
          }
          const numericIdNumber = parseInt(idNumber, 10);
        setIsLoading(true);
        const data = {
            "first_name":firstName,
            "last_name":lastName,
            "number_id": numericIdNumber,
            email,
            password
          };
          try {
        const response = await authentication.mainUsersRegisterCreate({userCreate:data})
       if(response.status==200){
        Alert.alert('Registro exitoso', `Nombre: ${firstName} ${lastName}\nEmail: ${email}`);
        navigation.navigate('entrar')
       }  else {
        Alert.alert('Registro erroneo vuelva a intentar');}
    } catch (error) {
        console.log({error})
        Alert.alert('Error', 'Ocurrió un error al registrar el usuario');
           } finally {
            setIsLoading(false);
          }

      };
 
    return (
        <View style={tw`flex-1  items-center bg-white`}>
             <View style={tw` h-1/2 w-full bg-blue-800 p-0 rounded-b-30 shadow-md`}></View>
             <Image 
                 source={require('../../assets/icon.png')}
                style={tw`absolute m-10 w-50 h-50`}/> 
            <View style={tw`absolute mt-70 w-8/9 bg-white items-center justify-center rounded-2xl shadow-2xl`}>
                <Text style={tw`text-lg mb-5 text-center p-3`}>REGISTRARSE</Text>
                <View style={tw`flex-row justify-between mb-4`}>
                <TextInput
                style={tw`border-2 border-stone-400 p-2 ml-6 flex-1 h-10 mr-2 rounded-2xl`}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
                />
                 <TextInput
                style={tw`border-2 border-stone-400 p-2 flex-1 h-10 mr-6 rounded-2xl`}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
                />
                </View>
                <TextInput
                    style={tw`border-2 border-stone-400 mb-4 p-2 h-10 rounded-2xl w-8/9`}
                    placeholder="Número de Identificación"
                    value={idNumber}
                    onChangeText={setIdNumber}
                    keyboardType="numeric"
                />
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
                    style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-3 mb-1 shadow-md`} onPress={handleRegister} >
                     <Text style={tw`text-white font-bold`}>Registrarse</Text>
                </TouchableOpacity>
            <TouchableOpacity
                    style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-1 mb-10 shadow-md`}  onPress={() => navigation.navigate('entrar')}>
                     <Text style={tw`text-white font-bold`}>Go To Login</Text>
                </TouchableOpacity>
                <Text style={tw`text-white font-bold`}>{isLoading ? 'Registrando...' : 'Registrarse'}</Text>
            </View>
        </View>
    )}

export default SingUp;