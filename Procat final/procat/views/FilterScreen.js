import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList, TouchableHighlight, map } from 'react-native';
import { CheckBox } from 'react-native-elements'

const GLOBAL = require('../views/Globals');
const getListUrl = GLOBAL.BASE_URL + 'HistoryScreen.php?action=get_marks&lang=1';

class Filter extends React.Component {

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //         backgroundColor: '#979797', // default button color goes here, grey is default
    //     };
    //   }

    constructor(props) {
        super(props);
        this.state = {
          pressStatus: false 
        };
    }

    state = {
        values: [],
        marks: [],
        data: [],
        checked: [],
        laps: [],
    }

    // componentWillMount() {
    //     let { data, checked } = this.state;
    //     let intialCheck = data.map(x => false);
    //     this.setState({ checked: intialCheck })
    // }

    componentDidMount = async () => {
        const response = await fetch(getListUrl);
        const marks = await response.json();

        this.setState({ marks });
    }

    // _onHideUnderlay(){
    //     this.setState({ pressStatus: false });
    // }

    // _onShowUnderlay(){
    //     this.setState({ pressStatus: true });
    // }

    // onButtonPress = () => {
    //     if(this.state.buttonColor=='#ff002b')
    //     {
    //       this.setState({ backgroundColor: '#979797' }) // grey
    //     }
    //     else {
    //       this.setState({ backgroundColor: '#ff002b' }) // red
    //     }
    // }

    handleChange = (index) => {
        let checked = [...this.state.checked];
        checked[index] = !checked[index];
        this.setState({ checked });
    }


    // this.setState({ StyleText: true });

    render(){
        // const { StyleText } = this.state;
        // this.state.active == true ? console.log("selected") : console.log("unselected")

        // return this.state.data.map((item) => {
        //     return (
        //       <View><Text>{item.time}</Text></View>
        //     )
        // })
            
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text}>Марка</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={this.state.marks}
                        extraData={this.state}
                        renderItem={({ item, index }) =>
                            <View>
                                {/* <CheckBox
                                    title={item.value}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    // checked={checked[index]}
                                    textStyle={styles.checkboxText}
                                    containerStyle={styles.checkbox}
                                    onPress={() => this.handleChange(index)}
                                    checkedColor="#32B2FF"
                                    uncheckedColor="#32B2FF"
                                /> */}
                                <CheckBox
                                    style={styles.active}
                                    title={item.value}
                                    checked={this.state.checked}
                                    // onPress={() => {
                                    //     console.log('You tapped the Decrypt button!');
                                    //   }}
                                    // onPress={() => this.handleChange(index)}
                                />
                            </View>
                        }
                    />
                    {/* <Button onPress={this.onButtonPress} 
                        title="Nissan"
                    /> */}
                    {/* <TouchableHighlight
                        onPress={()=>{}}
                        activeOpacity={0.5}
                        style={this.state.pressStatus ? styles.active : styles.no_active}
                        onHideUnderlay={this._onHideUnderlay.bind(this)}
                        onShowUnderlay={this._onShowUnderlay.bind(this)}
                        >
                        <Text>Nissan</Text>
                    </TouchableHighlight>
                    <Text style={styles.active}>Nissan</Text>
                    <Text style={styles.car_name}>Lexus</Text>
                    <Text style={styles.car_name}>Toyota</Text>
                    <Text style={styles.car_name}>Honda</Text>
                    <Text style={styles.car_name}>Cadilac</Text>
                    <Text style={styles.car_name}>BMW</Text>
                    <Text style={styles.car_name}>Mersedes</Text>
                    <Text style={styles.car_name}>Hyundai</Text> */}
                </View>
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
    head: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // justifyContent: 'space-around',
        marginBottom: 16,
    },
    body: {

    },
    active: {
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: 30,
        fontSize: 14,
        marginBottom: 15,
    },
    no_active: {
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 30,
        fontSize: 14,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    car_name: {
        fontSize: 14,
        marginBottom: 15,
        paddingLeft: 30,
        // backgroundColor: 'black',
    },
    test: {
        justifyContent: 'center',
        width: '35%',
    },
    test2: {
        justifyContent: 'center',
        width: '50%',
    },
    strelka: {
        
    },
});

export default Filter;