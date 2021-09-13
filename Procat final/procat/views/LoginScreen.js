import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Switch, TouchableOpacity, Pressable,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
// import { CheckBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'react-native-check-box';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

const GLOBAL = require('../views/Globals');
const authUrl = GLOBAL.BASE_URL + 'LoginScreen.php?action=login&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    values: [],
    phone: '',
    password: '',
    isMessage1Display: false,
    isMessage2Display: false,
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

  handlePhone = (text) => {
    this.setState({ phone: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = () => {
    var json = '{"phone": "' + this.state.phone + '", "password": "' + this.state.password + '"}';
    const request = new Request(authUrl, { method: 'POST', body: json });
   
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => { 
            if (response == 1 || response == 2 || response == "") {
                if (response == 1) {
                    this.setState({ isMessage1Display: true });
                    this.setState({ isMessage2Display: false });
                }

                if (response == 2) {
                    this.setState({ isMessage1Display: false });
                    this.setState({ isMessage2Display: true });
                }
            } else {
                AsyncStorage.multiSet([
                    ["id", response.id],
                    ["phone", response.email],
                    ["password", response.password],
                ])

                this.props.navigation.navigate('HistoryScreen');
            }
        }).catch(error => {
            console.error(error);
        }); 
    }

    render() {
      // const [isSelected, setSelection] = useState(false);
      const { isMessage1Display, isMessage2Display } = this.state;

      return (
        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                  <Text style={isMessage1Display ? styles.notice : styles.hide}>{this.state.values.MSG_LOGIN_ERROR_TITLE}</Text>
                  <Text style={isMessage2Display ? styles.notice : styles.hide}>{this.state.values.MSG_LOGIN_NOT_ACTIVE_TITLE}</Text>
            <View style={{    flex: 1,
    justifyContent: "space-around",paddingVertical: '60%'}}>
          <View>
          <View style={styles._input}>
            <TextInput style={styles.input}
              // placeholder="+7 (707) 768-54-78"
              placeholder={this.state.values.STR_PHONE_REG_TITLE}
              placeholderTextColor="#000000"
              returnKeyType='go'
              keyboardType="number-pad"
              maxLength={11}
              onChangeText={this.handlePhone}
              autoCorrect={false} 
              />
            <TextInput style={styles.input}
                // placeholder="Password"
                placeholder={this.state.values.STR_PASSWORD_REG_TITLE}
                placeholderTextColor="#000000"
                onChangeText={this.handlePassword}
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false} 
                />
          </View>
        <View style={styles.checkText}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                      disabled={false}
                      isChecked={this.state.toggleCheckBox}
                      onClick={() =>
                          this.setState({
                          toggleCheckBox: !this.state.toggleCheckBox,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
              <Text style={styles.label}>Запомнить меня</Text>
            </View>
            <View style={styles.textRight}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('RebutPassScreen')}>
                <Text style={styles.label}>Забыли пароль ?</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.btn1}>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.text_button}>Войти</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegScreen')} style={styles.button2} >
                <Text style={styles.text_button}>Регистраиця</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
        </View>
        </View>
        </View>  
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
   
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // position: 'absolute',
    // justifyContent: 'center',
    // paddingTop: 100
    // fontFamily: 'Roboto',
    // alignItems: 'center',
  },
  avtor: {
    alignItems: "center",
    marginBottom: '8%',

  },
  textAvt: {
    fontSize: 24,
    
  },
  input: {
    height: 52,
    width: 343,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: '4%'
  },
  _input: {
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    width: 110
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    width: 150
  },
  text_button: {
    color: "white",
},
  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: '4%', 
    marginRight: '4%',
  },
  btn1: {
    
  },
  btn2: {
    
  },
  checkText: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    marginBottom: '5%',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: '5%',
  },
  textRight: {
    marginRight: '4%'
  },
  checkbox: {
    marginLeft: '0%',
    // marginBottom: '5%',
  },
  label: {
    marginTop: '2%',
    marginLeft: '1%',
    fontSize: 14,
  },
  notice: {
    position: 'absolute',
    top: 50,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Roboto',
    left: '10%',
    color: '#ff0000',
    width: '80%',
},
hide: {
    display: 'none'
},
});

export default Login;