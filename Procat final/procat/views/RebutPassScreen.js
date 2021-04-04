import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';

class Rebut extends React.Component {

    render() {
      // const [isSelected, setSelection] = useState(false);
      return (
        <View style={styles.container}>
          <View style={styles._input}>
            <TextInput style={styles.input}
              placeholder="Номер телефона"
              placeholderTextColor="#000000"
              returnKeyType='go'
              keyboardType="number-pad"
              maxLength={11}
              autoCorrect={false} 
              />
          </View>
          <View>
              <Text style={styles.text}>Мы отправим Код подтверждения для восстановления пароля</Text>
          </View>
        <View style={styles.buttons}>
          <View style={styles.btn1}>
            <Button
              title="Далее"
              color="#000"
              /> 
          </View>
        </View>
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
      marginBottom: -8,
    },
    text: {
        marginLeft: 34,
        marginBottom: 111,
    },
    buttons: {
        // flexDirection: 'row', 
        // justifyContent: 'row-reverse', 
        // alignItems: 'center', 
        alignSelf: 'flex-end',
        marginRight: 36,
      },
});

export default Rebut;