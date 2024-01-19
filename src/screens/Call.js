import tw from 'twrnc';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import Data from '../Util/Datos';  

const ClasesEmergenciaScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

  const dataNumber = Object.values(Data);

  const tiposDeClases = Object.values(Data).reduce((tipos, item) => {
    if (!tipos.includes(item.clase)) {
      tipos.push(item.clase);
    }
    return tipos;
  }, []);

  const toggleSection = (section) => {
    const updatedSections = activeSections.includes(section)
      ? activeSections.filter((item) => item !== section)
      : [...activeSections, section];

    setActiveSections(updatedSections);
  };

  const navigation = useNavigation();

  const renderSection = ({ item }) => {
    const isSectionActive = activeSections.includes(item);
    const numerosDeEmergencia = Object.values(Data)
      .filter((dato) => dato.clase === item)
      .map((dato) => dato.nombre );

      const handleCallPress = (phoneName) => {
        const emergencyMatch = dataNumber.find((emergency) => emergency.nombre === phoneName);

        if (emergencyMatch) {
          console.log(`Llamar a: ${emergencyMatch.nombre}`);
          
        navigation.navigate("Telefono", {item: emergencyMatch});
        } else {
          console.log(`No se encontró la emergencia con el nombre ${phoneName}`);
        }
    };
      
    return (
      <Accordion
        sections={[item]}
        activeSections={isSectionActive ? [0] : []}
        renderHeader={() => (
          <View style={tw`bg-gray-200 p-2`}>
            <Text style={tw`text-lg font-semibold`}>{item}</Text>
          </View>
        )}
        renderContent={() => (
          <FlatList
            data={numerosDeEmergencia}
            keyExtractor={(numero) => numero}
            renderItem={({ item: numero }) => (
              <TouchableWithoutFeedback onPress={() => handleCallPress(numero)}>
              <View style={tw`p-2 border-b border-gray-300`}>
                <Text>{numero}</Text>
              </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
        onChange={() => toggleSection(item)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={tiposDeClases}
        keyExtractor={(item) => item}
        renderItem={renderSection}
      />
    </View>
  );
};

export default ClasesEmergenciaScreen;



