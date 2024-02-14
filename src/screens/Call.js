import tw from 'twrnc';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Data from '../../database/ListaDatos';  

const ClasesEmergenciaScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

  const dataNumber = Data();

  const tiposDeClases = Object.values(Data()).reduce((tipos, item) => {
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
    const numerosDeEmergencia = Object.values(dataNumber)
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
        underlayColor= 'white'
        renderHeader={() => (
          <View style={tw `bg-blue-950 p-3 my-1 rounded-2xl h-15 flex-row justify-between`}>
            <Text style={tw`text-lg font-semibold text-white`}>{item}</Text>
            <Icon  name={isSectionActive ? "chevron-circle-up":"chevron-circle-right"} color={"rgb(252,211,77)"} size={30} />
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



