import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';//iconos
import { SafeAreaView } from 'react-native';



export default function App() {
  return (
    <NavigationContainer>
      <MisTabs />
    </NavigationContainer>
  );
}

const StackHomeScreen = createNativeStackNavigator();
const StackBuscador = createNativeStackNavigator();
const StackTienda=createNativeStackNavigator();
const StackPerfil=createNativeStackNavigator();

const stackHomeScreenNav = () => {
return(
<StackHomeScreen.Navigator>
    <StackHomeScreen.Screen name="Home1" component={Home1}/>
    <StackHomeScreen.Screen name="Estadísticas" component={Home2}/>
  </StackHomeScreen.Navigator>)
} 

const stackBuscadorNav=()=>{
  return(
    <StackBuscador.Navigator>
      <StackBuscador.Screen name="Buscador" component={buscador1}/>
      <StackBuscador.Screen name="Resultados" component={buscador2}/>
    </StackBuscador.Navigator>
  )
}
const stackTiendaNav=()=>{
return(
  <SafeAreaView>
    <Text>Tienda</Text>
  </SafeAreaView>
)
}

const stackPerfilNav = () =>{
  return(
    <SafeAreaView>
      <Text>Perfil</Text>
    </SafeAreaView>
  )
}

const Home1 = () =>{
  const navigation=useNavigation();
  return(
    <View>
        <Text>Holis</Text>
        <Button title="Ver mis estadísticas" onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

const Home2 = () => {
  return(
    <View>
      <Text>Estadísticas</Text>
      <Image source={require('./assets/stats.jpg')}/>
    </View>
  )
}

const buscador1=()=>{
  const nav=useNavigation();
  const [nombreProducto, NameChangeHandler] = React.useState('');
  return(
    <SafeAreaView>
      <Text>Buscador</Text>
      <View style={styles.buscador}>
        <TextInput
        placeholder='Ingrese el nombre del producto...'
        onChangeText={NameChangeHandler}
        value={nombreProducto}
        style={styles.buscadorInput}
      />
      <TouchableOpacity onPress={()=>nav.navigate('Resultados',{nombreProducto})}>
      <Ionicons size={24} color="black" name="search"></Ionicons>
      </TouchableOpacity>
      </View>
      
      </SafeAreaView>
  )
}

const buscador2=({route})=>{
  const {nombreProducto}=route.params;
  const nav=createNativeStackNavigator();
  return(
    <SafeAreaView>
      <Text>No se encontraron resultados para "{nombreProducto}"</Text>
      <Button title="Volver" onPress={()=>{nav.navigate('Buscador')}}/>
    </SafeAreaView>
    )
}

const Tab=createBottomTabNavigator();
const MisTabs = () => {
  return(
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={stackHomeScreenNav}
    />
    <Tab.Screen
      name="buscador"
      component={stackBuscadorNav}
    />
    <Tab.Screen
      name="tienda"
      component={stackTiendaNav}
    />
    <Tab.Screen
      name="perfil"
      component={stackPerfilNav}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buscadorInput:{
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 5,
    margin:5,
    padding:10,
},
buscador:{
  display:'flex',
  justifyContent: 'space-between',
},
});
