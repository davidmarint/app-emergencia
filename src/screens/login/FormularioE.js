import tw from 'twrnc'
import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';
import { changeRoleApi } from '../../api';

export default function FormularioE() {

    
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('14'); 
    const navigation = useNavigation();
    const handleRegister = async () => {

        if (!idNumber || !email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
          }
          if (selectedValue=="14") {
            Alert.alert('Debe seleccionar el tipo de organización al que pertenece');
            return;
          }
          const data = {
            "role": selectedValue,
            "number_id": idNumber,
            "adress": email,
            "plate_vehicle": password
}
          
          try {
            const response = await changeRoleApi.mainUsersChangeRoleCreate({emergencyRoleSerializerRequest:data})
           if(response.status==200 || 201){
          Alert.alert('Registro Enviado a Revición Espere Respuesta para Aprobación');
          setIdNumber('');
          setEmail('');
          setPassword('');
          navigation.navigate('Cuenta')
        }  else {
          Alert.alert('Registro erroneo vuelva a intentar');}
      } catch (error) {
          console.log({error})
          Alert.alert('Error', 'Ocurrió un error al registrar el usuario');
             } finally {
              setIsLoading(false);
            }
    }

    const volver= ()=>{
      navigation.navigate('Cuenta')
    } 

  return (
    <View style={tw`flex-1 items-center bg-white h-full`}>
         <View style={tw`h-1/12 w-full border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-bold text-blue-950 `}>Solicitud de cambio de rol de cuenta </Text>
            </View>
            <View style={tw`border border-gray-400 rounded p-2 m-2 bg-blue-950 h-1/10 w-full`}>
            <Picker
            style={tw`h-10  text-white text-xl`}
            dropdownIconColor={"#facc15"}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Seleccionar" value="14"/>
              <Picker.Item label="Policía" value="policia"/>
              <Picker.Item label="Bomberos" value="bomberos" />
              <Picker.Item label="Ambulancia" value="ambulancia"/>
            </Picker>
        </View>
   <View style={tw`  w-8/9 bg-white items-center justify-center rounded-2xl shadow-2xl`}>
       <Text style={tw`text-lg mb-5 text-center p-3`}>Registrarse</Text>
       <View style={tw`flex-row justify-between mb-4`}>
      
       </View>
       <TextInput
           style={tw`border-2 border-stone-400 mb-4 p-2 h-10 rounded-2xl w-8/9`}
           placeholder="Número de Identificación oficial"
           value={idNumber}
           onChangeText={setIdNumber}
       />
       <TextInput
           style={tw`h-10 w-8/9 p-2 border-stone-400 border-2 mb-2 rounded-2xl`}
           placeholder="Dirección en el distrito donde opera"
           value={email}
           onChangeText={setEmail}
           autoCapitalize="none"
       />
        <TextInput
           style={tw`h-10 w-8/9 p-2 border-stone-400 border-2 mb-2 rounded-2xl`}
           placeholder="Número de Identificación del Vehículo"
           value={password}
           onChangeText={setPassword}
       />
   <TouchableOpacity
           style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-3 mb-1 shadow-md`} onPress={handleRegister} >
            <Text style={tw`text-white font-bold`}>Registrarse</Text>
       </TouchableOpacity>
       <TouchableOpacity
           style={tw`bg-blue-500 rounded-2xl p-3 items-center mt-3 mb-1 shadow-md mb-20`} onPress={volver} >
            <Text style={tw`text-white font-bold`}>Volver a cuenta</Text>
       </TouchableOpacity>
   </View>
</View>
  )
}