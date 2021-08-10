import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback } from 'react-native';

const GLOBAL = require('../views/Globals');
const authUrl = GLOBAL.BASE_URL + 'RebutPassword.php?action=recoverpwd&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class Rebut_2 extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        data: [],
        values: [],
        code: "",
        password: '',
        confirm_password: '',
        isMessage1Display : false,
        isMessage2Display : false,
        isMessage3Display : false,
    }

    handleCode = (text) => {
        this.setState({ code: text })
    }

    handlePass = (text) => {
        this.setState({ password: text })
    }

    handlePass_con = (text) => {
        this.setState({ confirm_password: text })
    }

    RebutPass = () => {
        var json = '{"code": "' + this.state.code + '", "password": "' + this.state.password + '", "confirm_password": "' + this.state.confirm_password + '",  "phone": "' + GLOBAL.SERVER_RESULT + '"}';

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
                console.log(response);
                if (response == 1 || response == 2 || response == 3 ||response == "") {
                    if (response == 1) {
                        this.setState({ isMessage1Display: true });
                        this.setState({ isMessage2Display: false });
                        this.setState({ isMessage3Display: false });
                    }

                    if (response == 2) {
                        this.setState({ isMessage1Display: false });
                        this.setState({ isMessage2Display: true });
                        this.setState({ isMessage3Display: false });
                    }

                    if (response == 3) {
                        this.setState({ isMessage1Display: false });
                        this.setState({ isMessage2Display: false });
                        this.setState({ isMessage3Display: true });
                    }
                } else {

                }
            }).catch(error => {
                console.error(error);
        }); 

        console.log(json);
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

    render(){

        const { isMessage1Display, isMessage2Display, isMessage3Display } = this.state;

        return (
            <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={isMessage1Display ? styles.notice : styles.hide}>Вы успешно изменили пароль</Text>
                <Text style={isMessage2Display ? styles.notice : styles.hide}>Такой пользователь не найден</Text>
                <Text style={isMessage3Display ? styles.notice : styles.hide}>Пароли не совподают</Text>
                <View style={styles._input}>
                    <TextInput style={styles.input}
                        placeholder={this.state.values.MSG_REBUT_SCREEN2_CODE}
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={4}
                        onChangeText={this.handleCode}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder={this.state.values.MSG_REBUT_SCREEN2_NEW_PASS}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        onChangeText={this.handlePass}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder={this.state.values.MSG_REBUT_SCREEN2_NEW_PASS_CONFIRM}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        onChangeText={this.handlePass_con}
                        autoCorrect={false} />
                </View>
                <View style={styles.buttons}>
                    <View style={styles.btn1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} style={styles.button}>
                            <Text style={styles.text_button}>{this.state.values.MSG_REBUT_SCREEN2_GO_MAIN}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn2}>
                        <TouchableOpacity onPress={this.RebutPass} style={styles.button2}>
                            <Text style={styles.text_button}>{this.state.values.MSG_REBUT_SCREEN2_READY}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.btn1}>
                        <TouchableOpacity onPress={this.RebutPass} style={styles.button}>
                                <Text style={styles.text_button}>Готово</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} style={styles.button}>
                                <Text style={styles.text_button}>Войти</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                {/* <StatusBar style="auto" /> */}
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
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        marginBottom: 5,
        width: 120,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        marginBottom: 5,
        width: 82,
    },
    text_button: {
        color: "white",
        fontSize: 13
    },
    _input: {
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginLeft: '4%', 
        marginRight: '4%',
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

export default Rebut_2;