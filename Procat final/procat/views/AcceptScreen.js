import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard  } from 'react-native';
import CheckBox from 'react-native-check-box';

const GLOBAL = require('../views/Globals');
const authUrl = GLOBAL.BASE_URL + 'verifications.php?action=login&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class Accept extends React.Component {

    state = {
        data: [],
        values: [],
        dogovor: '',
        ip: '',
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

    handleDogovor = (text) => {
        this.setState({ dogovor: text })
    }
    
    handlePIp = (text) => {
        this.setState({ ip: text })
    }

    login = () => {
        var json = '{"dogovor": "' + this.state.dogovor + '", "ip": "' + this.state.ip + '"}';
        const request = new Request(authUrl, { method: 'POST', body: json });
        console.log(json);
       
        fetch(request)
            .then(response => {
                console.log(response);
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
                        ["dogovor", response.dogovor],
                        ["ip", response.ip],
                    ])
    
                    this.props.navigation.navigate('TovarScreen');
                }
            }).catch(error => {
                console.error(error);
            }); 
    }

    render(){
        // const [isSelected, setSelection] = useState(false);
        const { isMessage1Display, isMessage2Display } = this.state;

        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                    <Text style={isMessage1Display ? styles.notice : styles.hide}>1</Text>
                    <Text style={isMessage2Display ? styles.notice : styles.hide}>2</Text>
                <View style={styles.head}>
                    <Text style={styles.textUp2}>Пройдите верификацию</Text>
                </View>
                <View style={styles._input}>

                    <Text style={styles.textUp}>Номер договора</Text>

                    <TextInput style={styles.input}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={this.handleDogovor}
                        autoCorrect={false} />

                        <Text style={styles.textUp}>Номер ИП</Text>
                    
                    <TextInput style={styles.input}
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={10}
                        onChangeText={this.handlePIp}
                        autoCorrect={false} />
                </View>

                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer2}>
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
                    
                    {/* <View style={styles.buttons}>
                        <Button
                            title="Войти"
                            color="#000"
                        /> 
                    </View> */}

                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.text_button}>Войти</Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        // alignItems: 'center',
        
    },
    textUp: {
        marginBottom: 10,
        fontSize: 13,
    },
    textUp2: {
        marginBottom: 10,
        fontSize: 16,
    },
    head: {
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
    width: 67
      },
    text_button: {
        color: 'white',
        fontSize: 13
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
        flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: '4%', 
    marginRight: '4%', 
        // marginLeft: 10,
    },
    checkboxContainer2: {
        flexDirection: "row",
        // marginRight: '36%',
    },
    checkbox: {
        // marginLeft: 20,
        flexDirection: "row",
    },
    label: {
        marginTop: '2%',
        marginLeft: '2%',
        fontSize: 14
    },
    // label2: {
    //     fontWeight: 'bold',
    //     marginTop: 5,
    // },
      buttons: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'left',
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

export default Accept;