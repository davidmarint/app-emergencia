// import React from 'react';
// import { View, Text } from 'react-native';
// import Database from '../Util/Database';
// const Call = () => {
//     return (
//     <View>
//         <Text>Calls Emergency directory</Text>
//     </View>
//     );
// }

// export default Call;

// screens/EmergencyNumbersScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import emergencyNumbers from '../Util/Datos';

const EmergencyNumbersScreen = () => {
  return (
    <View>
      <Text>Lista de Números de Emergencia:</Text>
      {emergencyNumbers.map((emergency) => (
        <Text key={emergency.id}>{`${emergency.name}: ${emergency.number}`}</Text>
      ))}
    </View>
  );
};

export default EmergencyNumbersScreen;
