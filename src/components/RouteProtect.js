import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      Alert.alert(
        "Acceso Denegado",
        "Necesitas iniciar sesión para acceder a esta sección.",
        [
          { 
            text: "Iniciar Sesión", 
            onPress: () => navigation.navigate('Login')
          },
          {
            text: "Cancelar",
            onPress: () => navigation.goBack(),
            style: "cancel"
          }
        ]
      );
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;