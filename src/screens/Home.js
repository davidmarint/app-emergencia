import tw from 'twrnc'
import React from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import BotonList from '../components/BotonList';
import BotonDirection from '../components/BotonDirection';


const Home = () => {
    return (
    <SafeAreaView>
        <View>
            <View style={tw`justify-center h-24 `}>
                <SearchBar/>
            </View>
            <View style={tw`h-1/12 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-semibold text-blue-950 `}>LINEAS PRINCIPALES</Text>
            </View>
            <View style={tw`flex-row flex-wrap`}>
            <BotonList title={'Linea de emergencias'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Ambulancia'} imagen={require('../assets/ambulancia.png')}/>
            <BotonList title={'Bomberos'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Policia'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Cruz roja'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Gaula'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Ejercito'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Alcaldia'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Clinicas'} imagen={require('../assets/icono123.png')}/>
            </View>
            {/* <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <BotonList item={item}/>}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            /> */}
            <View style={tw`top-9`}>
            <BotonDirection/>
            </View>
        </View>
    </SafeAreaView>
    );
}

export default Home;
