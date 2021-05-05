import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GLOBAL = require('../views/Globals');
const regUrl = GLOBAL.BASE_URL + 'KeslerReg.php?action=reg&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class Reg extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        values: [],
        agree: true,
        // user1: true,
        // user2: false,
        phone: '',
        password: '',
        code: '',
        confirm_password: '',
        isMessage1Display: false,
        isMessage2Display: false,
        isMessage3Display: false,
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

    setAgree = () => {
        if (this.state.agree == false) {
            this.setState({ agree: true });
        } else {
            this.setState({ agree: false });
        }
    }

    handlePhone = (text) => {
        this.setState({ phone: text })
    }

    handleCode = (text) => {
        this.setState({ code: text })
    }
    
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleConfirmPassword = (text) => {
        this.setState({ confirm_password: text })
    }

    reg = () => {
        // if (this.state.user1 == true) {
        //     var user_type = 0
        // } else {
        //     var user_type = 1;
        // }

        var json = '{"phone": "' + this.state.phone + '", "password": "' + this.state.password + '", "confirm_password": "' + this.state.confirm_password + '"}';
        const request = new Request(regUrl, { method: 'POST', body: json });
        // console.log(valuesJsonUrl);
        
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
                if (response == 1 || response == 2 || response == 3 || response == "") {
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
                    AsyncStorage.multiSet([
                        ["id", response.id],
                        ["phone", response.phone],
                        ["password", response.password],
                    ])

                    this.props.navigation.navigate('LoginScreen');
                }
            }).catch(error => {
                console.error(error);
            });
    }

    render(){
        // const [toggleCheckBox, setToggleCheckBox] = useState(false)
        const { isMessage1Display, isMessage2Display, isMessage3Display } = this.state;
        
        return (
            <View style={styles.container}>
                <Text style={isMessage1Display ? styles.notice : styles.hide}>{this.state.values.MSG_REQUIRED_FIELDS_TITLE}</Text>
                <Text style={isMessage2Display ? styles.notice : styles.hide}>{this.state.values.MSG_USERS_EXIST_TITLE}</Text>
                <Text style={isMessage3Display ? styles.notice : styles.hide}>{this.state.values.MSG_PASSWORD_ERROR_TITLE}</Text>
                
                <View style={styles._input}>
                    <TextInput style={styles.input}
                        placeholder={this.state.values.STR_PHONE_REG_TITLE}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        keyboardType="number-pad"
                        maxLength={11}
                        onChangeText={this.handlePhone}
                        autoCorrect={false} />
                    
                    <TextInput style={styles.input}
                        placeholder={this.state.values.STR_CODE_REG_TITLE}
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={4}
                        onChangeText={this.handleCode}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder={this.state.values.STR_PASSWORD_REG_TITLE}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        onChangeText={this.handlePassword}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder={this.state.values.STR_CONFIRM_PASSWORD_REG_TITLE}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        onChangeText={this.handleConfirmPassword}
                        autoCorrect={false} />
                </View>

                <View style={styles.checkboxContainer}>
                    {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        onPress={() => this.setAgree()}
                    /> */}
                        <CheckBox
                            disabled={false}
                            value={this.state.toggleCheckBox}
                            onValueChange={(value) =>
                                this.setState({
                                    toggleCheckBox: value,
                                })
                            }
                            tintColors={{true: '#000000'}}
                            style={styles.checkbox}
                            onPress={() => this.setAgree()}
                        />
                    <Text style={styles.label}>{this.state.values.STR_AGREE} </Text>
                    <Text style={styles.label2}>{this.state.values.STR_AGREE_POL}</Text>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.btn2}>
                        <TouchableOpacity style={styles.button} onPress={this.reg}>
                            <Text style={styles.text_button}>{this.state.values.STR_BUTTON_REG_TITLE}</Text>
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
        padding: 10
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
      },
    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 15,
      },
    checkbox: {
        marginLeft: 20,
        marginBottom: 15,
      },
    label: {
        marginTop: 5,
      },
    label2: {
        fontWeight: 'bold',
        marginTop: 5,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      notice: {
        position: 'absolute',
        top: 25,
        textAlign: 'center',
        left: '10%',
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#ff0000',
        width: '80%',
    },
    hide: {
        display: 'none'
    },
});

export default Reg;