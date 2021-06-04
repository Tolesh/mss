import React, { useContext  } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableOpacity, Button, Keyboard, Image } from 'react-native';
import { CheckBox } from 'react-native';
import CodeInput from 'react-native-code-input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GLOBAL = require('../views/Globals');
const authUrl = GLOBAL.BASE_URL + 'SaveProfile.php?action=Save&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

class VKP extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    values: [],
    name: '',
    surname: '',
    otchestvo: '',
    day: '',
    month: '',
    year: '',
    iin1: '',
    iin2: '',
    iin3: '',
    iin4: '',
    prava1: '',
    prava2: '',
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

  handleName = (text) => {
    this.setState({ name: text })
  }
  
  handleSurname = (text) => {
    this.setState({ surname: text })
  }

  handleOtchestvo = (text) => {
    this.setState({ otchestvo: text })
  }

  handleDay = (text) => {
    this.setState({ day: text })
  }

  handleMonth = (text) => {
    this.setState({ month: text })
  }

  handleYear = (text) => {
    this.setState({ year: text })
  }

  handleIIN1 = (text) => {
    this.setState({ iin1: text })
  }

  handleIIN2 = (text) => {
    this.setState({ iin2: text })
  }

  handleIIN3 = (text) => {
    this.setState({ iin3: text })
  }

  handleIIN4 = (text) => {
    this.setState({ iin4: text })
  }

  handlePrava1 = (text) => {
    this.setState({ prava1: text })
  }

  handlePrava2 = (text) => {
    this.setState({ prava2: text })
  }

  Save = () => {
    AsyncStorage.multiGet(['id']).then(() => {
      // let id = data[0][1];
      var id = 43;
      var json = '{"name": "' + this.state.name + '", "surname": "' + this.state.surname + '", "otchestvo": "' + this.state.otchestvo + '", "day": "' + this.state.day + '", "month": "' + this.state.month + '", "year": "' + this.state.year + '", "IIN": "' + this.state.iin1 + this.state.iin2 + this.state.iin3 + this.state.iin4 + '", "prava": "' + this.state.prava1 + this.state.prava2 +'", "user_id": "' + id +'"}';
      const request = new Request(authUrl, { method: 'POST', body: json });
      console.log(json);
    
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
          if (response == 0 || response == 1 || response == 2 || response == "") {
            if (response == 0) {
              this.setState({ isMessage1Display: true });
              this.setState({ isMessage2Display: false });
              this.setState({ isMessage3Display: false });
            }

            if (response == 1) {
              this.setState({ isMessage1Display: false });
              this.setState({ isMessage2Display: true });
              this.setState({ isMessage3Display: false });
            }

            if (response == 2) {
              this.setState({ isMessage1Display: false });
              this.setState({ isMessage2Display: false });
              this.setState({ isMessage3Display: true });
            }
          } //else {
          //   AsyncStorage.multiSet([
          //       ["id", response.id],
          //       ["phone", response.email],
          //       ["password", response.password],
          //   ])

          //   this.props.navigation.navigate('TovarScreen');
          // }
          }).catch(error => {
            console.error(error);
            });
        });
  }

    render(){

        return (
            <View style={styles.container}>
                  <Text style={isMessage1Display ? styles.notice : styles.hide}>Профиль успешно сохранён</Text>
                  <Text style={isMessage2Display ? styles.notice : styles.hide}>Не все поля заполнены</Text>
                  <Text style={isMessage3Display ? styles.notice : styles.hide}>Профиль успешно обновлён</Text>
                <View style={styles.pred_content}>
                    <View style={styles.content}>
                        <View style={styles.img_car}>
                            <Image source={require('../images/rectangles.png')} />
                        </View>
                        <View style={styles.info}>
                          <TextInput placeholder="Имя" style={styles.textInput} 
                            onChangeText={this.handleName}
                          />
                          <TextInput placeholder="Фамилия" style={styles.textInput} 
                            onChangeText={this.handleSurname}
                          />
                          <TextInput placeholder="Отчество" style={styles.textInput} 
                            onChangeText={this.handleOtchestvo}
                          />
                        </View>
                    </View>
                    <View style={styles.header}>
                      <TextInput placeholder="ДД" style={styles.textInput2} 
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={this.handleDay}
                      />
                      <TextInput placeholder="ММ" style={styles.textInput2} 
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={this.handleMonth}
                      />
                      <TextInput placeholder="ГГГГ" style={styles.textInput3} 
                        maxLength={4}
                        keyboardType="number-pad"
                        onChangeText={this.handleYear}
                      />
                    </View>
                    <View style={styles.header2}>
                      <View style={styles.head_title}>
                        <Text style={styles.text3}>ИИН</Text>
                      </View>
                      <View style={styles.otdo}>
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN1}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN2}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN3}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN4}
                        />
                      </View>
                    </View>
                    <View style={styles.header3}>
                      <View style={styles.head_title}>
                        <Text style={styles.text3}>Номер прав</Text>
                      </View>
                      <View style={styles.otdo2}>
                        <TextInput  style={styles.textInput4} 
                          maxLength={2}
                          autoCapitalize="characters"
                          onChangeText={this.handlePrava1}
                        />
                        <TextInput  style={styles.textInput5} 
                           maxLength={4}
                           keyboardType="number-pad"
                           onChangeText={this.handlePrava2}
                        />
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.button2} onPress={this.Save}>
                        <Text style={{color:'#fff'}}>Сохранить</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.header4}>
                    <View style={styles.loginButtonSection}>
                      <TouchableOpacity style={styles.button} >
                        <Text style={{color:'#fff'}}>Войти как партнер</Text>
                      </TouchableOpacity>
                    </View>
                    </View>
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={() => null} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView> */}
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        // paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    pred_content: {
        paddingLeft: 30,
        paddingRight: 19,
    },
    content: {
        // backgroundColor: 'black',
        marginBottom: 5,
        flexDirection: 'row',
    },
    // loginButtonSection: {
    //     width: 220,
    //     height: 40,
  
    //     width: '100%',
    //     height: '30%',
    //  },
     btnVoiti: {
        fontSize: 16
    //    marginLeft:30,
        // justifyContent: 'center',
        // alignItems: 'center',
     },
    img_car: {
        width: 107,
        height: 106,
    },
    info: {
        marginLeft: 10,
        // marginTop: 5,
        // backgroundColor: 'red',
        width: '65%'

        // marginRight: 60,
    },
    button2: {
      alignItems: "center",
      backgroundColor: "#000000",
      padding: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10
    },
    head_title: {
        marginTop: 12   
    },
    header: {
        // borderWidth: 1,
        flexDirection: 'row',
        // paddingBottom: 15,
        justifyContent: 'space-around',
        //  backgroundColor: 'red',
         width:250,
         marginLeft:40
    },
    header2: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        height: 40,
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    header3: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        height: 40,
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    header4: {
        // borderWidth: 1,
        // flexDirection: 'row',
        // paddingBottom: 10,
        bottom: 0,
        position: 'absolute',
        marginBottom: 80,
        // height: 40,
        width: 220,
        // alignItems: 'center',
        marginLeft: '18%',
        
        
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    otdo: {
        marginLeft: 63,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    otdo2: {
        // marginLeft: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
  
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      },
    //   header: {
    //     fontSize: 36,
    //     marginBottom: 48
    //   },
      textInput: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 6
      },
      textInput2: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 27,
        marginBottom: 6,
       textAlign: 'center'
      },
      textInput3: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 6,
        width: 35,
        textAlign: 'center'
      },
      textInput5: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 35,
        marginLeft: 10,
        textAlign: 'center',
        // backgroundColor: 'red'
      },
      textInput4: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 33,
        marginLeft: 10,
        textAlign: 'center',
        // backgroundColor: 'red'
      },
      text3: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    btnContainer: {
        backgroundColor: "#fff",
        marginTop: 12
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
export default VKP;