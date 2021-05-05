import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList } from 'react-native';


class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        StyleText: false,
    }

    test = () => {

    }

    // this.setState({ StyleText: true });

    render(){
        const { StyleText } = this.state;
            
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
                    <Text style={StyleText ? styles.active : styles.no_active}>Nissan</Text>
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