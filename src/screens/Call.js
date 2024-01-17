// ClasesEmergenciaScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Data from '../Util/Datos';  // Ajusta la ruta según tu estructura de carpetas
import tw from 'twrnc';

const ClasesEmergenciaScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

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

  const renderSection = ({ item }) => {
    const isSectionActive = activeSections.includes(item);
    const numerosDeEmergencia = Object.values(Data)
      .filter((dato) => dato.clase === item)
      .map((dato) => dato.nombre );

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
              <View style={tw`p-2 border-b border-gray-300`}>
                <Text>{numero}</Text>
              </View>
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


// import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
// import React from 'react';
// import Accordion from '../components/Accordion';

// const textoAlternativo = [
//   {
//     question:"este texdo deveria ser el 1",
//     answer: "dodo esto es el relleno ojala salga bien",
//   },
//   {
//     question:"este texdo deveria ser el 2",
//     answer: "dodo esto es el relleno ojala salga bien",
//   },
//   {
//     question:"este texdo deveria ser el 3",
//     answer: "dodo esto es el relleno ojala salga bien",
//   },
// ];

// export default function Clases(){
//   return (
//     <View>
//       {textoAlternativo.map((faq,index) => 
//       <Accordion 
//       key={index.toString()} 
//       title={faq.question} 
//       details={faq.answer}/>)}
//     </View>
//   )

// }

