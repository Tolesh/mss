import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Switch, TouchableOpacity } from 'react-native';

const GLOBAL = require('../views/Globals');
// const authUrl = GLOBAL.BASE_URL + 'RebutPassword.php?action=recoverpwd&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class Rebut extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    values: [],
    phone: '',
  }

  handlePhone = (text) => {
    this.setState({ phone: text })
  }

  Touch = () => {
      GLOBAL.SERVER_RESULT = this.state.phone;

      this.props.navigation.navigate('RebutPassScreen_2');
  }

  componentDidMount = async () => {
    try {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });
    } catch (e) {
        throw e
    }
  }

    render() {

      return (
        <View style={styles.container}>
          <View style={styles._input}>
            <TextInput style={styles.input}
              placeholder={this.state.values.MSG_REBUT_SCREEN1_NOMER}
              placeholderTextColor="#000000"
              returnKeyType='go'
              keyboardType="number-pad"
              maxLength={11}
              autoCorrect={false} 
              onChangeText={this.handlePhone}
              />
          </View>
          <View>
              <Text style={styles.text}>{this.state.values.MSG_REBUT_SCREEN1_TEXT}</Text>
          </View>
        <View style={styles.buttons}>
          <View style={styles.btn1}>
            <TouchableOpacity onPress={this.Touch} style={styles.button}>
                <Text style={styles.text_button}>{this.state.values.MSG_REBUT_SCREEN1_NEXT_PAGE}</Text>
            </TouchableOpacity>
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
    button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#000000",
      padding: 10,
    },
    text_button: {
      color: "white",
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