import React, { useContext,} from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity, ScrollView,TouchableWithoutFeedback } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CheckBox from 'react-native-check-box';
import SegmentedControlTab from "react-native-segmented-control-tab";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withGlobalContext } from './GlobalContext';
const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=search&lang=1';
const getMarksUrl = GLOBAL.BASE_URL + 'MarksScreen.php?action=get_marks&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

var radio_props = [
    {label: 'Автомат', value: 0 },
    {label: 'Механика', value: 1 }
];
var radio_props2 = [
    {label: '2', value: 0 },
    {label: '4', value: 1 }
]; 

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        marksArr: [],
        // marksArr2: [1,2,3],
        values: [],
        search: '',
        region: '',
        price_min: '',
        price_max: '',
        // marka : [],
        god_min: '',
        god_max: '',
        kpp: '',
        mesta: '',
        s_voditelem: false,
        vodila_25: false,
        calendar_date: '',
        checked: false,
        selectedMarks: ''
    }
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });
        // this.state.marksArr = this.state.marksArr.map(Number);
        // console.log(this.state.marksArr);
        // console.log(this.state.marksArr2);
        this.setState({ marksArr: this.props.global.selected_ids });
    }
    // onChangeCheck() {
    //     this.setState({ checked: !this.state.checked})
    // } 
    // getUsers = () => {
    //     var json = '{"targets": "' + GLOBAL.SERVER_RESULT + '"}';
    //     const request = new Request(getMarksUrl, { method: 'POST', body: json });
    //     // console.log(json);
    //     fetch(request)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 return response.json();
    //             } else {
    //                 throw new Error('Something went wrong on api server!');
    //             }
    //         })
    //         .then(response => {
    //             // this.setState({ marksArr: response });
    //             // console.log(response) 
               
    //         }).catch(error => {
    //             console.error(error);
    //         });
    // }
 
    handlePrice_min = (text) => {
        this.setState({ price_min: text })
    }

    handlePrice_max = (text) => {
        this.setState({ price_max: text })
    }

    // handleMarka = (text) => {
    //     this.setState({ marksArr: this.props.global.selected_ids })
    // }

    

    handleGod_min = (text) => {
        this.setState({ god_min: text })
    }

    handleGod_max = (text) => {
        this.setState({ god_max: text })
    }

    handleKPP = (text) => {
        this.setState({ kpp: text })
    }

    handleMesta = (text) => {
        this.setState({ mesta: text })
    }

    handleS_voditelem = (text) => {
        this.setState({ s_voditelem: text })
        // this.setState({ marksArr: this.props.global.selected_ids })
    }

    handleVoditel_25 = (text) => {
        this.setState({ vodila_25: text })
    }

    handleRegion = index => {
        this.setState({region: index });
    };
  
    
    getParsedDate(strDate) {
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);

        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        date = dd + " " + mm + " " + yyyy;
        return date.toString();
    }
    
    Search = () => {
        var json = '{"region": "' + this.state.region + '", "price_min": "' + this.state.price_min + '", "price_max": "' + this.state.price_max + '", "marka": "' + this.state.marksArr + '", "god_min": "' + this.state.god_min + '", "god_max": "' + this.state.god_max + '", "kpp": "' + this.state.kpp + '", "mesta": "' + this.state.mesta + '", "s_vodiloy": "' + this.state.s_voditelem + '", "voditel_25": "' + this.state.vodila_25 + '", "calendar": "' + this.state.calendar_date + '"}';
        // const request = new Request(getUsersUrl, { method: 'POST', body: json });
        console.log(json);
        GLOBAL.SERVER_RESULT=json;
        this.props.navigation.navigate('ResultScreen')
        // const request = new Request(getUsersUrl, { method: 'POST', body: json });
       
        //         console.log(request);

       
        // fetch(request)
        //     .then(response => {
        //         this.setState({ data: response });
        //         this.arrayholder = response;
            //     if (response.status === 200) {
            //         return response.json();
            //     } else {
            //         throw new Error('Something went wrong on api server!');
            //     }
            // })
            // .then(response => { 
            //     if (response == 1 || response == 2 || response == "") {
            //         if (response == 1) {
            //             this.setState({ isMessage1Display: true });
            //             this.setState({ isMessage2Display: false });
            //         }
    
            //         if (response == 2) {
            //             this.setState({ isMessage1Display: false });
            //             this.setState({ isMessage2Display: true });
            //         }
            //     } else {
            //         AsyncStorage.multiSet([
            //             ["id", response.id],
            //             ["phone", response.email],
            //             ["password", response.password],
            //         ])
    
            //     }
        //     }).catch(error => {
        //         console.error(error);
        //     }); 
        // }
    }
    render(){
// console.log({this.props.global.selected})
      

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                    <View style={styles.head_title4}>
                    <Text style={styles.text}>Регион</Text>
                   </View>
                    <View style={styles.otdo}>
                   <View style={styles.SegmentedControlTab1}>
                    <SegmentedControlTab
                        tabTextStyle={styles.tabTextStyle}
                        values={["Алматы", "Астана"]}
                        tabStyle={styles.tabStyle}
                        selectedIndex={this.state.region}
                        onTabPress={this.handleRegion}
                        activeTabStyle={styles.activeTabStyle}
                    />
                   </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={styles.head_title}>
                    <Text style={styles.text}>Стоимость</Text>
                   </View>
                    <View style={styles.otdo}>
                        <View style={styles.head_title2}>
                            <Text style={styles.text1}>от</Text>
                            <TextInput style={styles.input} 
                            defaultValue="20 000"
                            keyboardType="number-pad"
                            onChangeText={this.handlePrice_min}
                            />
                        </View>
                        <View style={styles.head_title3}>
                            <Text style={styles.text1}>до</Text>
                            <TextInput style={styles.input} 
                            defaultValue="40 000"
                            keyboardType="number-pad"
                            onChangeText={this.handlePrice_max}
                            />
                            <Text style={styles.text1}>тг</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={styles.head_title}>
                        <Text style={styles.text}>Марка</Text>
                    </View>
                    <View style={styles.marka}>
                        {
                            this.props.global.selected.map((item,index) => (
                               <Text onChangeText={this.handleMarka} style={styles.text2} key={index}>{item}</Text>
                            ))
                        }
                        {/* {
                           this.props.global.selected_ids.map((item, key) => (
                            <Text onPress={() => this.handleMarka(item)}></Text>
                         )) 
                        } */}
                        <Pressable onPress={() => this.props.navigation.navigate('FilterScreen')}><Image style={styles.image1} source={require('../images/threedot.png')} /></Pressable>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={styles.head_title}>
                        <Text style={styles.text}>Год</Text>
                    </View>
                    <View style={styles.otdo}>
                        <View style={styles.head_title2}>
                            <Text style={styles.text1}>от</Text>
                            <TextInput style={styles.input} 
                                defaultValue="0"
                                maxLength={4}
                                keyboardType="number-pad"
                                onChangeText={this.handleGod_min}
                            />
                        </View>
                        <View style={styles.head_title3}>
                            <Text style={styles.text1}>до</Text>
                            <TextInput style={styles.input} 
                                defaultValue="2021"
                                maxLength={4}
                                keyboardType="number-pad"
                                onChangeText={this.handleGod_max}
                            />
                            <Text style={styles.text5}>г</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header2}>
                    <View style={styles.head_title}>
                        <Text style={styles.text}>КПП</Text>
                    </View>
                    <View style={styles.otdo}>
                        <RadioForm style = {styles.radio_props} 
                            radio_props={radio_props}
                            initial={2}
                            onPress={(value) => { this.setState({ kpp: value})}}
                            buttonColor={'#000'}
                            selectedButtonColor={'#000'}
                            labelStyle={{fontSize: 13}}
                            buttonOuterSize={20}
                            buttonSize={10}
                            label
                        /> 
                    </View>
                </View>
                <View style={styles.header2}>
                    <View style={styles.head_title}>
                    <   Text style={styles.text3}>Кол-во мест</Text>
                    </View>
                    <View style={styles.otdo}>
                        <RadioForm style = {styles.radio_props2} 
                            radio_props={radio_props2}
                            initial={2}
                            onPress={(value) => {this.setState({ mesta: value})}}
                            buttonColor={'#000'}
                            selectedButtonColor={'#000'}
                            labelStyle={{fontSize: 13}}
                            buttonOuterSize={20}
                            buttonSize={10}
                        /> 
                    </View>
                </View>
                <View style={styles.header3}>
                    <View style={styles.checkboxVod}>
                        <CheckBox
                      disabled={false}
                      isChecked={this.state.s_voditelem}
                      onClick={() =>
                          this.setState({
                            s_voditelem: !this.state.s_voditelem,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
                    <Text style={styles.text4}>С водителем</Text>
                    </View>
                </View>
                <View style={styles.header2}>
                    <View style={styles.checkboxVod}>
                         <CheckBox
                      disabled={false}
                      isChecked={this.state.vodila_25}
                      onClick={() =>
                          this.setState({
                            vodila_25: !this.state.vodila_25,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
                    <Text style={styles.text4}>Водитель старше 25 лет</Text>
                    </View>
                </View>
                <View style={styles.header4}>
                <Text style={styles.text6}>Дата</Text>
                    <Calendar
                        onDayPress={(day) => {
                            let date = this.getParsedDate(day['dateString']);                            
                            
                            this.setState({ calendar_date: date });
                        }}
                        monthFormat={'yyyy MM'}
                        firstDay={1}
                        enableSwipeMonths={true}
                    />
            </View>
                <View style={styles.header5}>

                    <View style={styles.loginButtonSection}>
                        <Button
                            onPress={this.Search}
                            title="Найти машину"
                            color="#fff" /> 
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        // backgroundColor: 'red',
        width: 340
        // justifyContent: 'space-between'
    },
    header2: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        // justifyContent: 'space-between'
    },
    header3: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 0,
        // justifyContent: 'space-between'
    },
    header5: {
        flexDirection: 'row',
        paddingBottom: 20,
        width: 340
    },
    text5: {
        marginRight: '4%'
    },
    text_button: {
        color: '#fff'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
      },
    header5: {
        paddingBottom: 30,
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: 'white',
      },
      tabTextStyle: {
        color: 'black',
      },
      activeTabStyle: {
        backgroundColor: 'black',
      },
      loginButtonSection: {
        width: 220,
        // height: '30%',

        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: '16%',
        marginTop: '4%',
        backgroundColor: 'black'
     },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        width: 90
    },
    SegmentedControlTab1:{
        width:200,
        marginLeft: '8%'
    },
    text1: {
        fontSize: 14,
    },
    text2: {
        fontSize: 12,
    },
    text3: {
        fontSize: 14,
        fontWeight: 'bold',
        width: 90
    },
    text6: {
        fontSize: 15,
    },
    text4: {
        fontSize: 15,
        width: 190,
        marginTop: '1%',
        marginLeft: '2%'
    },
    input: {
        height: 23,
        width: 80,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: -5
    },
    head_title2: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        width: 100,
    },
    checkboxText: {
        fontSize: 12,
        fontFamily: 'Nunito-Light',
        fontWeight: '300',
        color: '#4F4F4F',
    },
    checkboxText2: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        fontWeight: '500',
        color: '#4F4F4F',
    },
    head_title3: {
        flexDirection: 'row',
        // backgroundColor: 'red'
        justifyContent: 'space-between',
        width: 120,
        marginLeft: '5%'
    },
    head_title4: {
        marginTop: '3%'
    },
    otdo: {
        marginLeft: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    marka: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        
        marginLeft: 20,
        width: 185,
        alignItems: 'center'
    },
    image1: {
        // backgroundColor: 'yellow',
        
    },
    radio_props: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 210,
        // backgroundColor: 'red'
        
    },
    checkboxVod: {
        flexDirection: "row",
      
        marginLeft: '-1%',
        
    },
    radio_props2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 155,
        // backgroundColor: 'red'
    },
});

export default withGlobalContext(Search);