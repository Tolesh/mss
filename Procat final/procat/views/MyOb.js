import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList } from 'react-native';
import { CheckBox } from 'react-native';


class MyOb extends React.Component {
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
                        <Text style={styles.text}>Мои объявления</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.image_4}>
                        <Image source={require('../images/image_1.jpg')}></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.car_name}>Hyundai Accent</Text>
                        <Text style={styles.car_info}>Год выпуска: 2018 г</Text>
                        <Text style={styles.car_info}>Коробка: Автомат</Text>
                        <Text style={styles.car_info}>Цвет: белый</Text>
                        <Text style={styles.car_info}>Кол-во мест: 4</Text>
                    </View>
                    <View style={styles.price}>
                            <Image style={styles.price_text} source={require('../images/logo.png')}></Image>
                            <Text style={styles.price_text}>Удалить</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.image_4}>
                        <Image source={require('../images/image_1.jpg')}></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.car_name}>Hyundai Accent</Text>
                        <Text style={styles.car_info}>Год выпуска: 2018 г</Text>
                        <Text style={styles.car_info}>Коробка: Автомат</Text>
                        <Text style={styles.car_info}>Цвет: белый</Text>
                        <Text style={styles.car_info}>Кол-во мест: 4</Text>
                    </View>
                    <View style={styles.price}>
                            <Image style={styles.price_text} source={require('../images/logo.png')}></Image>
                            <Text style={styles.price_text}>Удалить</Text>
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
        paddingLeft: 21,
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
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    test: {
        justifyContent: 'center',
        width: '30%',
    },
    test2: {
        justifyContent: 'center',
        width: '70%',
    },
    content: {
        flexDirection: 'row',
        marginBottom: 25,
       //  backgroundColor: 'red',
        width: 350
    },
    info: {
        marginLeft: 10,
        // marginTop: 5,
        // backgroundColor: 'blue',
        width: 155
    },
    car_name: {
        color: 'black',
        fontSize: 13,
        marginBottom: 5,
    },
    car_info: {
        color: 'black',
        fontSize: 10,
        marginBottom: 3,
    },
    price: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // flexDirection: 'column'
        
        // bottom: 0,
        // marginLeft: 50

    },
    price_text2: {
        color: 'black',
        fontSize: 12,
        marginTop: 8,
        fontWeight: 'bold'
    },
});

export default MyOb;