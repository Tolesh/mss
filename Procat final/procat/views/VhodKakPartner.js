import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableOpacity, Button, Keyboard,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CodeInput from 'react-native-code-input';


class VKP extends React.Component {
   
    render(){

        return (
            <View style={styles.container}>
                <View style={styles.pred_content}>
                    <View style={styles.content}>
                        <View style={styles.img_car}>
                            <Image source={require('../images/rectangles.png')} />
                        </View>
                        <View style={styles.info}>
                        <TextInput placeholder="Имя" style={styles.textInput} />
                        <TextInput placeholder="Фамилия" style={styles.textInput} />
                        <TextInput placeholder="Отчество" style={styles.textInput} />
                        </View>
                    </View>
                    <View style={styles.header}>
                    <TextInput placeholder="ДД" style={styles.textInput2} />
                    <TextInput placeholder="ММ" style={styles.textInput2} />
                    <TextInput placeholder="ГГГГ" style={styles.textInput3} />
                    </View>
                    <View style={styles.header2}>
                    <View style={styles.head_title}>
                    <Text style={styles.text3}>ИИН</Text>
                    </View>
                    <View style={styles.otdo}>
                    <TextInput  style={styles.textInput4} />
                    <TextInput  style={styles.textInput4} />
                    <TextInput  style={styles.textInput4} />
                    <TextInput  style={styles.textInput4} />
                    </View>
                    </View>
                    <View style={styles.header3}>
                    <View style={styles.head_title}>
                    <Text style={styles.text3}>Номер прав</Text>
                    </View>
                    <View style={styles.otdo2}>
                    <TextInput  style={styles.textInput4} />
                    <TextInput  style={styles.textInput4} />
                    
                    </View>
                    </View>
                    
                </View>
                <View style={styles.header4}>
                    <View style={styles.loginButtonSection}>
                    <TouchableOpacity style={styles.button} >
                        {/* <Button style={styles.btnVoiti}
                        title="Войти как партнер"
                        color="#000"
                        disabled={false}
                        onPress={ () =>this.props.navigation.navigate('')}
                         // onPress={() => this.props.navigation.navigate('RegScreen')}
                        />  */}
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
        marginLeft: 55,
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
      }
});
export default VKP;