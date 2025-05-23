//seguir chequeando el ejemplo de polsu:
//git clone https://github.com/polshu/DAI-2022.git
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MisTabs />
      <StatusBar style="auto" />
    </View>
  );
}

const stackHomeScreen = () =>{

}

const MisTabs = () => {
  <Tab.navigator>
    <Tab.Screen
      name="HomeScreen"
      component={stackHomeScreen}

    />
  </Tab.navigator>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
