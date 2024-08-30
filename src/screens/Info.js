import tw from 'twrnc';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'react-native-paper';
import { logout } from '../slices/userSlice'
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { fi } from 'date-fns/locale';
import { navigate } from '../navigation/NavigationService'

const Info = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userData = useSelector((state) => state.navUsers);
  const { data, loading, error } = useCurrentUser()

  console.log(data)

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login2');
  };
  const handleRegister = () => {
    navigation.navigate('RegistroE'); 
  };

  const usuario = () =>{
    if(data !== null && data !== undefined){

   const letra1 = data.first_name.charAt(0); // "R"
   const letra2 = data.last_name.charAt(0); // "N"
   datos={
     primero: data.first_name,
     segundo: data.last_name,
      correo: data.email,
    combinacion: letra1 + letra2,
    rol: data.role.name
   }
  return(datos)
  }else{
    datos={
      primero: "Usuario",
      segundo: "no registrado",
       correo: " ",
     combinacion: "NN",
     rol: "Ninguno"
    }
    return(datos)
  }
  }

  const final = usuario();
 console.log(final)
  
  return (
    <View style={tw` items-center h-full bg-white`}>
    <View style={tw`bg-blue-800 w-full h-1/4  rounded-b-10 shadow-md`}></View>
    <View style={tw`rounded-full border-4 border-white justify-center items-center bg-red-500 bottom-13`}>
      <Avatar.Text size={98} label={final.combinacion}/> 
    </View>
    <View style={tw` items-center  bottom-9`}>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl bottom-3`}>{final.primero} {final.segundo}</Text>
        <Text style={tw`text-base pt-1 bottom-5`}>{final.correo}</Text> 
        <Text style={tw`text-base pt-1 bottom-5`}>{final.rol}</Text> 
        </View>
        <View style={tw`w-80 items-center`}>
          <TouchableOpacity style={tw` bg-red-500 p-2 rounded-lg w-full items-center h-12`} onPress={handleLogout}>
            <Text style={tw`text-lg text-white`}>Cerrar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-blue-800 p-2 rounded-lg items-center h-20 w-full mt-5`} onPress={handleRegister}>
            <Text style={tw`text-lg text-white`}>Registrarse como organismo  </Text>
            <Text style={tw`text-lg text-white`}>de apoyo</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};


export default Info;
