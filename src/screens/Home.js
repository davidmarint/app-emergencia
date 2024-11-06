import tw from 'twrnc'
import React from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import BotonList from '../components/BotonList';
import BotonDirection from '../components/BotonDirection';


const Home = () => {
    const num =1;
    return (
        <ScrollView style={tw`flex-1`}>
    <SafeAreaView>
        <View>
            <View style={tw`justify-center h-24 `}>
                <SearchBar num={num}/>
            </View>
            <View style={tw`h-1/12 border-2 border-amber-400 bg-amber-400 p-3`} >
            <Text style={tw`text-xl font-semibold text-blue-950 `}>Líneas principales</Text>
            </View>
            <View style={tw`flex-row flex-wrap`}>
            <BotonList title={'Línea de emergencias'} imagen={require('../assets/icono123.png')}/>
            <BotonList title={'Ambulancia'} imagen={require('../assets/ambulancia.png')}/>
            <BotonList title={'Bomberos'} imagen={require('../assets/bomberos.png')}/>
            <BotonList title={'Policía'} imagen={require('../assets/policia.png')}/>
            <BotonList title={'Cruz roja'} imagen={require('../assets/cruz.png')}/>
            <BotonList title={'Cuadrantes'} imagen={require('../assets/estacion2.png')}/>
            <BotonList title={'Ejército'} imagen={require('../assets/ejercito.png')}/>
            <BotonList title={'Alcaldía'} imagen={require('../assets/alcaldia.png')}/>
            <BotonList title={'Clínicas'} imagen={require('../assets/hospital.png')}/>
            </View>
            <View style={tw`top-9 h-35`}>
            <BotonDirection/>
            </View>
        </View>
    </SafeAreaView>
    </ScrollView>
    );
}

export default Home;
