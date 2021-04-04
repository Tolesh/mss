import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


class Login extends React.Component {

  render() {
    // const [isSelected, setSelection] = useState(false);
    return (
      <View style={styles.container}>
        <View style={styles._input}>
          <TextInput style={styles.input}
            placeholder="+7 (707) 768-54-78"
            placeholderTextColor="#000000"
            returnKeyType='go'
            keyboardType="number-pad"
            maxLength={11}
            autoCorrect={false} 
            />
          <TextInput style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000000"
              returnKeyType='go'
              secureTextEntry
              autoCorrect={false} 
              />
        </View>
      <View style={styles.checkboxContainer}>
          <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={styles.checkbox}
            />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.btn1}>
          <Button
            title="Войти"
            color="#000"
            /> 
        </View>
        <View style={styles.btn2}>
          <Button
            title="Регистрация"
            color="#000"
          /> 
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    height: 52,
    width: 343,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
  },
  _input: {
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: 36, 
    marginRight: 36,
  },
  btn1: {
    
  },
  btn2: {
    
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 23,
  },
  checkbox: {
    marginLeft: 20,
    marginBottom: 15,
  },
  label: {
    marginTop: 5,
  },
});

export default Login;