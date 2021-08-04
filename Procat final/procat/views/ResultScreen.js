import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native';
// var ASCIImage = require('react-native-asciimage');

class Result extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen')}>
                    <Image style={styles.strelka} source={require('../images/strelka.png')} />
                </TouchableOpacity>
                
                <View style={styles.head}>
                    <Image style={styles.logo} source={require('../images/logo_2.png')} />
                    <Text style={styles.text}>Kesler Rent Car</Text>
                </View>
                <View style={styles.pred_content}>
                    <View style={styles.content}>
                        <View style={styles.img_car}>
                            <Image source={require('../images/image_1.jpg')} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.car_name}>Hyundai Accent</Text>
                            <Text style={styles.car_info}>Год выпуска: 2018 г</Text>
                            <Text style={styles.car_info}>Коробка: Автомат</Text>
                            <Text style={styles.car_info}>Цвет: белый</Text>
                            <Text style={styles.car_info}>Кол-во мест: 4</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.price_text}>13 500тг</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TovarScreen')}>
                                <Text style={styles.price_text}>Подробнее →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.pred_content}>
                    <View style={styles.content}>
                        <View>
                            <Image  style={styles.img_car} source={require('../images/car_2.png')} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.car_name}>Toyota Camry XV70</Text>
                            <Text style={styles.car_info}>Год выпуска: 2018 г</Text>
                            <Text style={styles.car_info}>Коробка: Автомат</Text>
                            <Text style={styles.car_info}>Цвет: белый</Text>
                            <Text style={styles.car_info}>Кол-во мест: 4</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.price_text}>45 000тг</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TovarScreen')}>
                                <Text style={styles.price_text}>Подробнее →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    pred_content: {
        paddingLeft: 30,
        paddingRight: 19,
    },
    content: {
        backgroundColor: 'black',
        marginBottom: 20,
        flexDirection: 'row',
    },
    info: {
        marginLeft: 10,
        marginTop: 5,
        // marginRight: 60,
    },
    price: {
        justifyContent: 'space-between',
        marginBottom: 3,
        alignItems: 'flex-end'
    },
    img_car: {
        width: 100,
        height: 100,
    },
    strelka: {
        marginLeft: 37,
        marginBottom: 12,
    },
    head: {
        backgroundColor: 'black',
        flexDirection: 'row', 
        marginBottom: 15,
    },
    logo: {
        marginLeft: 28,
        marginRight: 15,
    },
    text: {
        color: 'white',
        marginTop: 7,
        fontSize: 12,
    },
    price_text: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
    car_name: {
        color: 'white',
        fontSize: 12,
        marginBottom: 5,
    },
    car_info: {
        color: 'white',
        fontSize: 10,
        marginBottom: 3,
    },
});

export default Result;