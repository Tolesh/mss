import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableOpacity, Button, Keyboard,Image,Pressable}  from 'react-native';
import { CheckBox } from 'react-native';
import CodeInput from 'react-native-code-input';
import ModalDropdown from 'react-native-modal-dropdown';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'AddObyavlenie.php?action=get_colors&lang=1';
const getUsersUrl2 = GLOBAL.BASE_URL + 'AddObyavlenie.php?action=get_years&lang=1';
const getUsersUrl3 = GLOBAL.BASE_URL + 'AddObyavlenie.php?action=get_privods&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';
const DEMO_OPTIONS_1 = ['2011','2012','2013','2014','2015', '2016', '2017','2018' , '2019', '2020','2021'];
const DEMO_OPTIONS_2 = ['белый','черный','розовый','красный','синий', 'голубой', 'серый'];
const DEMO_OPTIONS_3 = ['Полный','Задний','Передний','Гибридный синергетический'];


const DEMO_OPTIONS_4 = ['4','2'];
var radio_props = [
    {label: 'Автомат', value: 0 },
    {label: 'Механика', value: 1 }
  ];
// var radio_props2 = [
//     {label: 'Сутки', value: 0 },
//     {label: 'Неделя', value: 1 },
//     {label: 'Месяц', value: 2 }
// ];
class AddOb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCheckBox3: false,
            toggleCheckBox4: false,
            toggleCheckBox5: false,
            toggleCheckBox6: false,
            toggleCheckBox7: false,
            colors: []
            // selectedIndex: 0
        };
    }
    // componentWillMount() {
    //     let { data, checked } = this.state;
    //     let intialCheck = data.map(x => false);
    //     this.setState({ checked: intialCheck })
    // }
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });


        this.getColors();
    }
    getColors = () => {
        var json = '{"targets": "' + GLOBAL.SERVER_RESULT + '"}';
        const request = new Request(getUsersUrl, { method: 'POST', body: json });
        // console.log(json);
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                this.setState({ colors: response });
                console.log(response)
                // this.arrayholder = response;
                // this.state.colors = response;
            }).catch(error => {
                console.error(error);
            });
    }

    renderElement () {
   
        if(this.state.toggleCheckBox3 == true){
           return <TextInput style={styles.input} defaultValue="13 500"/>;
        }
        return null
     } 
     renderElement2 () {
        if (this.state.toggleCheckBox4 == true){
            return <TextInput style={styles.input2} defaultValue="12 000"/>;
        }
        return null
     }
     renderElement3 () {
        if (this.state.toggleCheckBox5 == true){
            return <TextInput style={styles.input3} defaultValue="12 500"/>;
        }
        return null
    }
    
    
   
    render(){
    
        let { data, search,checked} = this.state; 
        return (
            <View style={styles.container}>
               <View style={styles.pred_content}>
                    <View style={styles.content}>
                        <View>
                            <Image  style={styles.img_car} source={require('../images/porsche.png')} />
                        </View>
                        <View style={styles.info}>
                        <Image  style={styles.img_car} source={require('../images/mustang.png')} />
                        <Image  style={styles.img_car} source={require('../images/grew.png')} />
                        </View>
                        <View >
                        <TouchableOpacity style={styles.price}>
                            <Image  style={styles.img_car} source={require('../images/plus.png')} />
                            <Text style={styles.price_text}>Добавить фото</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.pred_content}>
                    <View style={styles.content2}>
                        <Text style={styles.price_text2}>Марка</Text>
                        <Text style={styles.price_text2}>Модель</Text>
                    </View>
                    <View style={styles.content3}>
                        <Text style={styles.price_text6}>Huyndai</Text>
                        <Text style={styles.price_text6}>Accent</Text>
                    </View>
                </View>
                <View style={styles.pred_content2}>
                    <View style={styles.content4}>
                        <Text style={styles.price_text3}>Год выпуска</Text>
                        <Pressable style={styles.price_text4}>
                      
                    <ModalDropdown defaultValue={'2015'}  options={this.state.colors} textStyle={styles.price_textText} dropdownStyle={styles.dropdownStyle4}/>
                            <Image  style={styles.img_polygon} source={require('../images/polygon.png')} />
                        </Pressable>
                    </View>
                    <View style={styles.content5}>
                    <Text style={styles.price_text3}>Цвет</Text>
                        <View style={styles.price_text4}>
                            <ModalDropdown defaultValue={'Белый'}  options={DEMO_OPTIONS_2} textStyle={styles.price_textText} dropdownStyle={styles.dropdownStyle3}/>
                            <Image style={styles.img_polygon} source={require('../images/polygon.png')} />
                        </View>
                    </View>
                    <View style={styles.content4}>
                    <Text style={styles.price_text5}>КПП</Text>
                        <View style={styles.price_text4}>
                        <RadioForm style = {styles.radio_props} 
          radio_props={radio_props}
          initial={2}
        //   formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
          labelStyle={{fontSize: 15,marginLeft: -7}}
          buttonOuterSize={20}
          buttonSize={10}
          label
          
        /> 
                        </View>
                    </View>
                    <View style={styles.content4}>
                        <Text style={styles.price_text3}>Привод</Text>
                        <View style={styles.price_text4}>
                            <ModalDropdown defaultValue={'Полный'}  options={DEMO_OPTIONS_3} textStyle={styles.price_textText} dropdownStyle={styles.dropdownStyle2}/>
                            <Image  style={styles.img_polygon} source={require('../images/polygon.png')} />
                        </View>
                    </View>
                    <View style={styles.content4}>
                        <Text style={styles.price_text3}>Кол-во мест</Text>
                        <View style={styles.price_text4}>
                            <ModalDropdown defaultValue={'4'}  options={DEMO_OPTIONS_4} textStyle={styles.price_textText} dropdownStyle={styles.dropdownStyle}/>
                            <Image  style={styles.img_polygon} source={require('../images/polygon.png')} />
                        </View>
                    </View>
                    <View style={styles.content7}>
                        <Text style={styles.price_text3}>Срок аренды</Text>
                        <Text style={styles.price_text3}>Цена за сутки</Text>
                    </View>
                    {/* <View style={styles.vyvod}> */}
                    <View style={styles.content6}>  
                    <View style={styles.ros}>
                      <CheckBox
                   disabled={false}
                   value={this.state.toggleCheckBox3}
                   onValueChange={(value) =>
                      this.setState({
                      toggleCheckBox3: value,
                      })
                    }
                    tintColors={{true: '#000000'}}
                  style={styles.checkbox}
                  /><Text style={styles.text4}>Сутки</Text>
                   { this.renderElement() }
                      </View>
                     
                      <View style={styles.ros}>
                  <CheckBox
                   disabled={false}
                   value={this.state.toggleCheckBox4}
                   onValueChange={(value) =>
                      this.setState({
                      toggleCheckBox4: value,
                      })
                    }
                    tintColors={{true: '#000000'}}
                  style={styles.checkbox}
                  /><Text style={styles.text4}>Неделя</Text>
                  { this.renderElement2() }
                  </View>
                  <View style={styles.ros}>
                   <CheckBox
                   disabled={false}
                   value={this.state.toggleCheckBox5}
                   onValueChange={(value) =>
                      this.setState({
                      toggleCheckBox5: value,
                      })
                    }
                    tintColors={{true: '#000000'}}
                  style={styles.checkbox}
                  /><Text style={styles.text4}>Месяц</Text>
                  { this.renderElement3() }
                  </View>
                   </View>
                    {/* </View> */}
                    <View style={styles.content8}>
                        <Text style={styles.price_text2}>Описание</Text>
                        <TextInput style={styles.input4}/>
                    </View>
                    <TouchableOpacity style={styles.button} >
                        <Text style={{color:'#fff'}}>Добавить объявление</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 30,
        // paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        width: 220,
        height: 40,
        marginTop: 20,
        marginLeft: '16%'
      },
    ros:{
        flexDirection: 'row',
    
    },
    text4: {
        fontSize: 15,
         width: '80%',
        marginTop: 5,
        marginLeft: 0,
        fontWeight: 'bold',
      
    },
    input: {
        height: 28,
        width: 67,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: '1.5%',
      
    },
    input2: {
        height: 28,
        width: 67,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: '2.5%',
        
    },
    input3: {
        height: 28,
        width: 67,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: '2.5%',
        
    },
    input4: {
        height: 151,
        width: 335,
        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'top',
        fontSize: 15,
        
    },
    vyvod: {
        // justifyContent: 'space-between',
        flexDirection: 'row',
    },
    pred_content: {
        
        paddingRight: 19,
        paddingBottom: 10,
    },
    dropdownStyle: {
        height: 75
    },
    dropdownStyle2: {
        height: 145
    },
    dropdownStyle3: {
        height: 250
    },
    dropdownStyle4: {
        height: 393
    },
    radio_props: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 200,
        
    },
    radio_props2: {
        justifyContent: 'space-between',
        // flexDirection: 'row',
        width: 200,
        
    },
    pred_content2: {
   
        paddingRight: 19,
        paddingBottom: 20,
    },
    content: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        
        
    },
    price_textText:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    content2: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: '0%'
        // backgroundColor: 'red',
        
    },
    content3: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '58%',
        // marginBottom: '2%'
        // backgroundColor: 'red',
        
    },
    content4: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '42%',
        marginBottom: '3%',
        // backgroundColor: 'red',
        
    },
    content5: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '42%',
        marginBottom: '4%',
        // backgroundColor: 'red',
        
    },
    content6: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '51%',
        marginBottom: '3%',
        marginLeft: '-2%'
        // backgroundColor: 'red',
        
    },
    rigthBlock: {
        
    },
    content7: {
        // backgroundColor: 'black',
        // marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        marginBottom: '2%',
        // backgroundColor: 'red',
        
    },
    // content5: {
    //     // backgroundColor: 'black',
    //     // marginBottom: 5,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '45%',
    //     marginBottom: '2%',
    //     // backgroundColor: 'red',
        
    // },
    info: {
        marginLeft: '3%',
        // marginTop: 5,
        // backgroundColor: 'black',
        width: '20%',
        justifyContent: 'space-between',
        // marginRight: 60,
    },
    price: {
        // position: 'absolute',
        // right: 0,
        // justifyContent: 'space-between',
        // paddingBottom: 5,
        flexDirection: 'row',
        // alignItems: 'flex-end',
        // backgroundColor: 'red',
        paddingTop: '25%',
        // flexDirection: 'column'
    },
    price_text: {
        // color: 'white',
        fontSize: 15,
        marginBottom: '3%',
        marginLeft: '4%',
        fontWeight: 'bold',
        // marginLeft: 40
    },
    price_text2: {
        // color: 'white',
        fontSize: 15,
        marginBottom: '3%',
        // marginLeft: '4%'
        // marginLeft: 40
    },
    price_text3: {
        // color: 'white',
        fontSize: 15,
        marginBottom: '3%',
        // backgroundColor: 'red',
        width: '75%'
        // marginLeft: '4%'
        // marginLeft: 40
    },
    price_text4: {
        // color: 'white',
        // fontSize: 15,
        marginBottom: '3%',
        // backgroundColor: 'red',
        width: '70%',
        flexDirection: 'row',
        
        // marginLeft: '4%'
        // marginLeft: 40
    },
    price_text5: {
        // color: 'white',
        // fontSize: 15,
        marginBottom: '3%',
        // backgroundColor: 'red',
        width: '58%',
        flexDirection: 'row',
        
        // marginLeft: '4%'
        // marginLeft: 40
    },
    price_text6: {
        // color: 'white',
        fontSize: 15,
        marginBottom: '3%',
        fontWeight: 'bold'
        // marginLeft: '4%'
        // marginLeft: 40
    },
    img_polygon:{
        marginLeft: '7%',
        marginTop: '5%' 
    },
    // // loginButtonSection: {
    // //     width: 220,
    // //     height: 40,
  
    // //     width: '100%',
    // //     height: '30%',
    // //  },
    //  btnVoiti: {
    //     fontSize: 16
    // //    marginLeft:30,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //  },
    // img_car: {
    //     width: 107,
    //     height: 106,
    // },
    // info: {
    //     marginLeft: 10,
    //     // marginTop: 5,
    //     // backgroundColor: 'red',
    //     width: '65%'

    //     // marginRight: 60,
    // },
    // button: {
    //     alignItems: "center",
    //     backgroundColor: "#000000",
    //     padding: 10
    //   },
    // head_title: {
    //     marginTop: 12   
    // },
    // header: {
    //     // borderWidth: 1,
    //     flexDirection: 'row',
    //     // paddingBottom: 15,
    //     justifyContent: 'space-around',
    //     //  backgroundColor: 'red',
    //      width:250,
    //      marginLeft:40
    // },
    // header2: {
    //     // borderWidth: 1,
    //     flexDirection: 'row',
    //     paddingBottom: 10,
    //     height: 40,
    //     // backgroundColor: 'red'
    //     // justifyContent: 'space-between'
    // },
    // header3: {
    //     // borderWidth: 1,
    //     flexDirection: 'row',
    //     paddingBottom: 10,
    //     height: 40,
    //     // backgroundColor: 'red'
    //     // justifyContent: 'space-between'
    // },
    // header4: {
    //     // borderWidth: 1,
    //     // flexDirection: 'row',
    //     // paddingBottom: 10,
    //     bottom: 0,
    //     position: 'absolute',
    //     marginBottom: 80,
    //     // height: 40,
    //     width: 220,
    //     // alignItems: 'center',
    //     marginLeft: '18%',
        
        
    //     // backgroundColor: 'red'
    //     // justifyContent: 'space-between'
    // },
    // otdo: {
    //     marginLeft: 55,
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
        
    // },
    // otdo2: {
    //     // marginLeft: 45,
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
        
    // },
  
    //   inner: {
    //     padding: 24,
    //     flex: 1,
    //     justifyContent: "space-around"
    //   },
    // //   header: {
    // //     fontSize: 36,
    // //     marginBottom: 48
    // //   },
    //   textInput: {
    //     // height: 40,
    //     borderColor: "#000000",
    //     borderBottomWidth: 1,
    //     marginBottom: 6
    //   },
    //   textInput2: {
    //     // height: 40,
    //     borderColor: "#000000",
    //     borderBottomWidth: 1,
    //     width: 27,
    //     marginBottom: 6,
    //    textAlign: 'center'
    //   },
    //   textInput3: {
    //     // height: 40,
    //     borderColor: "#000000",
    //     borderBottomWidth: 1,
    //     marginBottom: 6,
    //     width: 35,
    //     textAlign: 'center'
    //   },
    //   textInput4: {
    //     // height: 40,
    //     borderColor: "#000000",
    //     borderBottomWidth: 1,
    //     width: 33,
    //     marginLeft: 10,
    //     textAlign: 'center',
    //     // backgroundColor: 'red'
    //   },
    //   text3: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
        
    // },
    //   btnContainer: {
    //     backgroundColor: "#fff",
    //     marginTop: 12
    //   }
});
export default AddOb;