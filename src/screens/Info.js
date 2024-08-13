import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice'
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../hooks/useCurrentUser';

const Info = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userData = useSelector((state) => state.navUsers);
  const { data, loading, error } = useCurrentUser()
 
  console.log(data)
  console.log(error)

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login'); // Asegúrate de que 'Login' es el nombre correcto de tu ruta de login
  };
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (!userData) {
    return <Text>No hay usuario logueado</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información</Text>
      <Text>Ususario numero, {data.id}</Text>
      <Text>Bienvenido, {data.first_name} {data.last_name}</Text>
      <Text>Email: {data.email}</Text>  
      {/* Aquí puedes añadir más información del usuario si lo deseas */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Info;
