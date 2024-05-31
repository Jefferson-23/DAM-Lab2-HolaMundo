import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
//import image from './assets/urahara.png';

const App = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hola mundo!</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.Image}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Holaaa!')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Presionar Aqui!</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
        placeholder="Escribe algo..."
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#292929"
  },
  title: { fontSize: 30, color: '#fff' },
  Image: { height: 200, width: 200, borderRadius: 90 },
  button: {
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    color: '#ff0000',
    backgroundColor: '#fff',
  }
});
export default App;