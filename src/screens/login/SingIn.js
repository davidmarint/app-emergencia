
import tw from 'twrnc'
import React from 'react';
import { View, Text, Button} from 'react-native';

const SingIn = () => {
    
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text>Sing In</Text>
            <Button title='Login' color="EC5B70"/>
        </View>
    )}

export default SingIn;