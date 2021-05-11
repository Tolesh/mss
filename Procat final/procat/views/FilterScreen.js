import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList, TouchableHighlight } from 'react-native';


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

    _onHideUnderlay(){
        this.setState({ pressStatus: false });
    }

    _onShowUnderlay(){
        this.setState({ pressStatus: true });
    }

    // onButtonPress = () => {
    //     if(this.state.buttonColor=='#ff002b')
    //     {
    //       this.setState({ backgroundColor: '#979797' }) // grey
    //     }
    //     else {
    //       this.setState({ backgroundColor: '#ff002b' }) // red
    //     }
    // }

    // this.setState({ StyleText: true });

    render(){
        // const { StyleText } = this.state;
        // this.state.active == true ? console.log("selected") : console.log("unselected")
            
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
                    {/* <Button onPress={this.onButtonPress} 
                        title="Nissan"
                    /> */}
                    <TouchableHighlight
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
                    <Text style={styles.car_name}>Hyundai</Text>
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