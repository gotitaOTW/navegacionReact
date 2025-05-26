import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { use } from 'react';

import { Ionicons } from '@expo/vector-icons';//iconos



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MisTabs />
    </View>
  );
}

const stackHomeScreen = createNativeStackNavigator();
const stackBuscador = createNativeStackNavigator();
const stackTienda=createNativeStackNavigator();
const stackPerfil=createNativeStackNavigator();

const stackHomeScreenNav = () => {
return(<stackHomeScreen.navigator>
    <stackHomeScreen.Screen name="Home1" component={Home1}/>
    <stackHomeScreen.Screen name="Home2" component={Home2}/>
  </stackHomeScreen.navigator>)
}

const stackBuscadorNav=()=>{
  return(
    <stackBuscador.navigator>
      <stackBuscador.Screen name="buscador1" component={buscador1}/>
      <stackBuscador.Screen name="buscador2" component={buscador2}/>
    </stackBuscador.navigator>
  )
}
const stackTiendaNav=()=>{

}

const stackPerfilNav = () =>{

}

const Home1 = () =>{
  const navigation=useNavigation();
  return(
    <View>
        <Text>Home</Text>
        <Button title="Ver mis estadísticas" onPress={()=>navigation.navigate('Home2')}/>
        
    </View>
  )
}

const Home2 = () => {
  return(
    <View>
      <Text>Estadísticas</Text>
      <Image source={require('./assets/stats.jpg')}></Image>
    </View>
  )
}

const buscador1=()=>{
  const nav=useNavigation();
  const [nombreProducto, NameChangeHandler] = React.useState('');
  return(
    <SafeAreaView>
      <Text>Buscador</Text>
      <TextInput
        placeholder='Ingrese el nombre del producto...'
        onChangeText={NameChangeHandler}
        value={nombreProducto}
      />
      <TouchableOpacity onPress{()=>nav.navigate('buscador2',{nombreProducto})}>
      <Ionicons  size={24} color="black" name="search"></Ionicons >
      </TouchableOpacity>
      </SafeAreaView>
  )
}

const buscador2=()=>{
  const {nombreProducto}=routse.params;
}
const MisTabs = () => {
  return(
  <Tab.navigator>
    <Tab.Screen
      name="HomeScreen"
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
      componet={stackPerfilNav}
    />
  </Tab.navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
