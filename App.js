import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.title}>Bem vindo ao meu primeiro App utilizando o React Native. Clique no botão abaixo para continuar.</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text  style={styles.buttontext}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    height: 42,
    borderWidth: 2,
    borderColor: "#DA552F",
    borderRadius: 5,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  buttontext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#DA552F",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    

  }
  }
);
