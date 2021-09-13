// import React, { useContext,} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import PropTypes from 'prop-types';
// import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity } from 'react-native';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import { CheckBox } from 'react-native';
// import SegmentedControlTab from "react-native-segmented-control-tab";

// const GLOBAL = require('../views/Globals');
// const getUsersUrl = GLOBAL.BASE_URL + 'TargetListScreen.php?action=get_users&lang=1';
// const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

//     var radio_props = [
//         {label: 'Автомат', value: 0 },
//         {label: 'Механика', value: 1 }
//     ];
//     var radio_props2 = [
//         {label: '2', value: 0 },
//         {label: '4', value: 1 }
//     ]; 

// class Search extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     toggleCheckBox: false,
//         //     toggleCheckBox2: false,
//         //     selectedIndex: 0
//         // };
//     }

//     state = {
//         data: [],
//         values: [],
//         search: '',
//         region: '',
//         price_min: '',
//         price_max: '',
//         marka: '',
//         god_min: '',
//         god_max: '',
//         kpp: '',
//         mesta: '',
//         s_voditelem: '',
//         vodila_25: '',
//     }

//     handlePrice_min = (text) => {
//         this.setState({ price_min: text })
//     }

//     handlePrice_max = (text) => {
//         this.setState({ price_max: text })
//     }

//     handleMarka = (text) => {
//         this.setState({ marka: text })
//     }

//     handleGod_min = (text) => {
//         this.setState({ god_min: text })
//     }

//     handleGod_max = (text) => {
//         this.setState({ god_max: text })
//     }

//     handleKPP = (text) => {
//         this.setState({ kpp: text })
//     }

//     handleMesta = (text) => {
//         this.setState({ mesta: text })
//     }

//     handleS_voditelem = (text) => {
//         this.setState({ s_voditelem: text })
//     }

//     handleVoditel_25 = (text) => {
//         this.setState({ vodila_25: text })
//     }

//     // handleChange = (index) => {
//     //     let checked = [...this.state.checked];
//     //     checked[index] = !checked[index];
//     //     this.setState({ checked });
//     // }

//     handleIndexChange = index => {
//         this.setState({
//           ...this.state,
//           selectedIndex: index
//         });
//     };

//     render(){
//         // const [toggleCheckBox, setToggleCheckBox] = useState(false)

//         // componentWillMount = () => {
//         //     let { data, checked } = this.state;
//         //     let intialCheck = data.map(x => false);
//         //     this.setState({ checked: intialCheck })
//         // }

//         return (
//             <View style={styles.container}>
//                  <View style={styles.header}>
//                     <View style={styles.head_title}>
//                     <Text style={styles.text}>Регион</Text>
//                    </View>
//                     <View style={styles.otdo}>
//                    <View style={styles.SegmentedControlTab1}>
//                     <SegmentedControlTab
//                             tabTextStyle={styles.tabTextStyle}
//                             // allowFontScaling={false}
//                             values={["Алматы", "Астана"]}
//                             tabStyle={styles.tabStyle}
//                             selectedIndex={this.state.selectedIndex}
//                             onTabPress={this.handleIndexChange}
//                             activeTabStyle={styles.activeTabStyle}
//                             //   selectedIndex={1}
//                             //   onTabPress={index => this.setState({ selected: index })}
//                         />
//                    </View>
//                     </View>
//                 </View>
//                 <View style={styles.header}>
//                     <View style={styles.head_title}>
//                     <Text style={styles.text}>Стоимость</Text>
//                    </View>
//                     <View style={styles.otdo}>
//                         <View style={styles.head_title2}>
//                             <Text style={styles.text1}>от</Text>
//                             <TextInput style={styles.input} 
//                             defaultValue="20 000"
//                             keyboardType="number-pad"
//                             onChangeText={this.handlePrice_min}
//                             />
//                         </View>
//                         <View style={styles.head_title3}>
//                             <Text style={styles.text1}>до</Text>
//                             <TextInput style={styles.input} 
//                             defaultValue="40 000"
//                             keyboardType="number-pad"
//                             onChangeText={this.handlePrice_max}
//                             />
//                             <Text style={styles.text1}>тг</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.header}>
//                     <View style={styles.head_title}>
//                         <Text style={styles.text}>Марка</Text>
//                     </View>
//                     <View style={styles.marka}>
//                         <Text style={styles.text2}>Huyndai</Text>
//                         <Text style={styles.text2}>Nissan</Text>
//                         <Text style={styles.text2}>Toyota</Text>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('FilterScreen')}>
//                             <Image style={styles.image1} source={require('../images/threedot.png')} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={styles.header}>
//                     <View style={styles.head_title}>
//                         <Text style={styles.text}>Год</Text>
//                     </View>
//                     <View style={styles.otdo}>
//                         <View style={styles.head_title2}>
//                             <Text style={styles.text1}>от</Text>
//                             <TextInput style={styles.input} 
//                                 defaultValue="0"
//                                 maxLength={4}
//                                 keyboardType="number-pad"
//                                 onChangeText={this.handleGod_min}
//                             />
//                         </View>
//                         <View style={styles.head_title3}>
//                             <Text style={styles.text1}>до</Text>
//                             <TextInput style={styles.input} 
//                                 defaultValue="2021"
//                                 maxLength={4}
//                                 keyboardType="number-pad"
//                                 onChangeText={this.handleGod_max}
//                             />
//                             {/* <Text style={styles.text1}>тг</Text> */}
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.header}>
//                     <View style={styles.head_title}>
//                         <Text style={styles.text}>КПП</Text>
//                     </View>
//                     <View style={styles.otdo}>
//                         {/* <CheckBox
//                             // title={item.name}
//                             checkedIcon='dot-circle-o'
//                             uncheckedIcon='circle-o'
//                             // checked={this.state.checked[index]}
//                             textStyle={styles.checkboxText}
//                             containerStyle={styles.checkbox}
//                             onPress={() => this.handleChange(index)}
//                             checkedColor="#32B2FF"
//                             uncheckedColor="#32B2FF"
//                         /> */}
//                         <RadioForm style = {styles.radio_props} 
//                             radio_props={radio_props}
//                             initial={2}
//                             //   formHorizontal={true}
//                             onPress={(value) => {this.setState({value:value})}}
//                             // onPress={() => this.handleChange(index)}
//                             buttonColor={'#000'}
//                             selectedButtonColor={'#000'}
//                             labelStyle={{fontSize: 13}}
//                             buttonOuterSize={20}
//                             buttonSize={10}
//                             label
//                         /> 
//                     </View>
//                 </View>
//                 <View style={styles.header2}>
//                     <View style={styles.head_title}>
//                     <   Text style={styles.text3}>Кол-во мест</Text>
//                     </View>
//                     <View style={styles.otdo}>
//                         <RadioForm style = {styles.radio_props2} 
//                             radio_props={radio_props2}
//                             initial={2}
//                             //   formHorizontal={true}
//                             onPress={(value) => {this.setState({value:value})}}
//                             buttonColor={'#000'}
//                             selectedButtonColor={'#000'}
//                             labelStyle={{fontSize: 13}}
//                             buttonOuterSize={20}
//                             buttonSize={10}
//                         /> 
//                     </View>
//                 </View>
//                 <View style={styles.header3}>
//                     <View style={styles.checkboxVod}>
//                     <CheckBox
//                      disabled={false}
//                      value={this.state.toggleCheckBox}
//                      onValueChange={(value) =>
//                         this.setState({
//                         toggleCheckBox: value,
//                         })
//                       }
//                       tintColors={{true: '#000000'}}
//                     style={styles.checkbox}
//                     />
//                     <Text style={styles.text4}>С водителем</Text>
//                     </View>
//                 </View>
//                 <View style={styles.header2}>
//                     <View style={styles.checkboxVod}>
//                     <CheckBox
//                      disabled={false}
//                      value={this.state.toggleCheckBox2}
//                      onValueChange={(value) =>
//                         this.setState({
//                         toggleCheckBox2: value,
//                         })
//                       }
//                       tintColors={{true: '#000000'}}
//                     style={styles.checkbox}
//                     />
//                     <Text style={styles.text4}>Водитель старше 25 лет</Text>
//                     </View>
//                 </View>
//                 <View style={styles.header4}>
//                 <Text style={styles.text4}>Дата</Text>
//                 <Calendar
//   // Initially visible month. Default = Date()
//   current={'2021-01-01'}
//   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   minDate={'2021-01-01'}
//   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   maxDate={'2022-01-01'}
//   // Handler which gets executed on day press. Default = undefined
//   onDayPress={(day) => {console.log('selected day', day)}}
//   // Handler which gets executed on day long press. Default = undefined
//   onDayLongPress={(day) => {console.log('selected day', day)}}
//   // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//   monthFormat={'yyyy MM'}
//   // Handler which gets executed when visible month changes in calendar. Default = undefined
//   onMonthChange={(month) => {console.log('month changed', month)}}
//   // Hide month navigation arrows. Default = false
//   hideArrows={true}
//   // Replace default arrows with custom ones (direction can be 'left' or 'right')
//   renderArrow={(direction) => (<Arrow/>)}
//   // Do not show days of other months in month page. Default = false
//   hideExtraDays={true}
//   // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
//   // day from another month that is visible in calendar page. Default = false
//   disableMonthChange={true}
//   // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
//   firstDay={1}
//   // Hide day names. Default = false
//   hideDayNames={true}
//   // Show week numbers to the left. Default = false
//   showWeekNumbers={false}
//   // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//   onPressArrowLeft={subtractMonth => subtractMonth()}
//   // Handler which gets executed when press arrow icon right. It receive a callback can go next month
//   onPressArrowRight={addMonth => addMonth()}
//   // Disable left arrow. Default = false
//   disableArrowLeft={true}
//   // Disable right arrow. Default = false
//   disableArrowRight={true}
//   // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//   disableAllTouchEventsForDisabledDays={true}
//   // Replace default month and year title with custom one. the function receive a date as parameter.
//   renderHeader={(date) => {/*Return JSX*/}}
//   // Enable the option to swipe between months. Default = false
//   enableSwipeMonths={true}
// />
//             </View>
//                 <View style={styles.header5}>

//                     <View style={styles.loginButtonSection}>
//                         <Button
//                         title="Найти машину"
//                         color="#000" 
//                         /> 

//                         {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('RegScreen')} style={styles.button} >   
//                             <Text style={styles.text_button}>Найти машину</Text>
//                         </TouchableOpacity> */}

//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 70,
//         paddingLeft: 21,
//         backgroundColor: 'white',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     header: {
//         // borderWidth: 1,
//         flexDirection: 'row',
//         paddingBottom: 20,
//         // justifyContent: 'space-between'
//     },
//     header2: {
//         // borderWidth: 1,
//         flexDirection: 'row',
//         paddingBottom: 10,
//         // justifyContent: 'space-between'
//     },
//     header3: {
//         // borderWidth: 1,
//         flexDirection: 'row',
//         paddingBottom: 0,
//         // justifyContent: 'space-between'
//     },
//     header4: {

//     },
//     text_button: {
//         color: '#fff'
//     },
//     button: {
//         alignItems: "center",
//         backgroundColor: "#000000",
//         padding: 10,
//       },
//     header5: {
//         paddingBottom: 30,
//     },
//     tabStyle: {
//         paddingVertical: 5,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderColor: '#000',
//         borderWidth: 1,
//         backgroundColor: 'white',
//       },
//       tabTextStyle: {
//         color: 'black',
//       },
//       activeTabStyle: {
//         backgroundColor: 'black',
//       },
//       loginButtonSection: {
//         width: '100%',
//         height: '30%',
//         justifyContent: 'center',
//         alignItems: 'center'
//      },
//     text: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         width: 82
//     },
//     SegmentedControlTab1:{
//         width:200
//     },
//     text1: {
//         fontSize: 14,
//     },
//     text2: {
//         fontSize: 12,
//     },
//     text3: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         width: 90
//     },
//     text4: {
//         fontSize: 15,
//         width: 180,
//         marginTop: 5,
//         marginLeft: -5
//     },
//     input: {
//         height: 23,
//         width: 80,
//         borderColor: 'gray',
//         borderWidth: 1,
//         textAlign: 'center',
//         marginTop: -5
//     },
//     head_title2: {
//         flexDirection: 'row',
//         // backgroundColor: 'red',
//         justifyContent: 'space-between',
//         width: 100,
//     },
//     checkboxText: {
//         fontSize: 12,
//         fontFamily: 'Nunito-Light',
//         fontWeight: '300',
//         color: '#4F4F4F',
//     },
//     checkboxText2: {
//         fontSize: 14,
//         fontFamily: 'Nunito-Regular',
//         fontWeight: '500',
//         color: '#4F4F4F',
//     },
//     head_title3: {
//         flexDirection: 'row',
//         // backgroundColor: 'red'
//         justifyContent: 'space-between',
//         width: 120,
//         marginLeft: '5%'
//     },
//     otdo: {
//         marginLeft: 20,
//         justifyContent: 'space-between',
//         flexDirection: 'row',

//     },
//     marka: {
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         // backgroundColor: 'red',

//         marginLeft: 20,
//         width: 185,
//         alignItems: 'center'
//     },
//     image1: {
//         // backgroundColor: 'yellow',

//     },
//     radio_props: {
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         width: 210,

//     },
//     checkboxVod: {
//         flexDirection: "row",

//         marginLeft: -8,

//     },
//     radio_props2: {
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         width: 100,
//     },
// });

// export default Search;