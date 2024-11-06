import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import React from 'react';
import { useState } from 'react';
import {AntDesign} from '@expo/vector-icons'

export default function Accordion({title,details}){

    const [opened,setOpened] = useState(false)
    const [animation] = useState(new Animated.Value(0))

    const numberOfWords = details.split(" ").length

    function toggleAccordion (){
        if(!opened){
            Animated.timing(animation,{
                toValue:1,
                duration:100,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(animation,{
                toValue:0,
                duration:100,
                useNativeDriver:false
            }).start()
        }
        setOpened(!opened);
    }

    const heighAnimationInterpolation = animation.interpolate({
        inputRange:[0,1],
        outputRange:[0, (numberOfWords/2.6)*10]
    })

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={toggleAccordion}>
                <View style={styles.header}>
                    <Text>{title}</Text>
                    <AntDesign name= {opened?'caretup' :'caretdown'} size={16}/>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={[styles.content, {height: heighAnimationInterpolation}]}>
                <Text>
                {details}
                </Text>
            </Animated.View>

        </View>
    )

}

const styles = StyleSheet.create({
    content:{
        marginTop: 8,
    },
    container:{
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
    },
    header:{
    flexDirection: 'row',
    justifyContent: 'space-between'
    }
})