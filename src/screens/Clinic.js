import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';

const Clinic = () => {
    const [selectedValue, setSelectedValue] = useState('java');

    return (
        <View>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
        </Picker>

        </View>
    );
}

export default Clinic;
