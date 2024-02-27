import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, styles.lightPinkBackground]}>
      <Text>Eu confio na Gabi, Geovana e Milleny porque nós nos conhecemos há muito tempo e crescemos juntas. Então conheço bem elas.</Text>
      <Button title="Desafios" onPress={() => navigation.navigate('Details')} color="#FFC0CB" />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={[styles.container, styles.lightPinkBackground]}>
      <Text>Desafio a Gabriela a imitar um avião. Desafio a Milleny a imitar a Alice Sambando. Desafio a Geovana a imitar o Lucas Calu.</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} color="#FFC0CB" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightPinkBackground: {
    backgroundColor: '#FFC0CB', // Código de cor para rosa claro
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

