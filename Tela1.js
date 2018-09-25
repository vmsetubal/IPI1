import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Nome: Victor Medeiros Setúbal</Text>
        <Text style={styles.title}>Matrícula: 0050005569</Text>
		<Text style={styles.title}>GitHub: https://github.com/vmsetubal/IPI1</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text  style={styles.buttontext}>VOLTAR</Text>
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
