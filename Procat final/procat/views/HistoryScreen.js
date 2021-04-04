import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


class History extends React.Component {

    render(){

        return (
            <View style={styles.container}>
                <Image style={styles.image_3} source={require('../images/Group.png')} />
                <View style={styles.header}>
                    <View style={styles.block}>
                    </View>
                </View>
                <Text style={styles.text3}>История заказов</Text>
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
                            <Text style={styles.price_text}>15 000тг/сутки</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.image_4}>
                        <Image source={require('../images/car_2.png')}></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.car_name}>Toyota Camry XV70</Text>
                        <Text style={styles.car_info}>Год выпуска: 2020 г</Text>
                        <Text style={styles.car_info}>Коробка: Автомат</Text>
                        <Text style={styles.car_info}>Цвет: белый</Text>
                        <Text style={styles.car_info}>Кол-во мест: 4</Text>
                    </View>
                    <View style={styles.price2}>
                            <Image style={styles.price_text2} source={require('../images/logo.png')}></Image>
                            <Text style={styles.price_text2}>45 000тг/сутки</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Найти машину"
                        color="#000"
                    /> 
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
    buttons: {
        // flexDirection: 'row', 
        // justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 184,
    },
    header: {
        // borderWidth: 1,
        // paddingBottom: 40,
        marginBottom: 20,
    },
    block: {
        width: '95%',
        height: 150,
        backgroundColor: 'grey',
    },
    content: {
     flexDirection: 'row',
     marginBottom: 25,
    //  backgroundColor: 'red',
     width: 350
    },
    logo: {
        marginTop: 3,
        marginLeft: 14,
    },
    image: {
        width: 100,
        height: 100
    },
    image_2: {
        marginBottom: 5,
    },
    image_3: {
        marginBottom: 15,
    },
    image_4: {
        
    },
    text: {
        // flexDirection: 'row'
        fontSize: 12
    },
    text2: {
        fontSize: 10,
        paddingBottom: 3,
    },
    text3: {
        paddingLeft: 25,
        marginBottom: 20,
        
    },
    text_content: {
        fontSize: 12,
    },
    price: {
        paddingBottom: 28,
    },
    text_price: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    head_content: {
        paddingLeft: 19,
        marginTop: -6,
    },
    head_info: {
        // flexDirection: 'row',
        // marginLeft: 40,
        
    },
    info: {
        marginLeft: 10,
        marginTop: 5,
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
    price2: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // flexDirection: 'column'
        // textAlign: 'right',
        // position: 'absolute',
        // right: 0
        // bottom: 0,
        // marginLeft: 25

    },
    price_text: {
        color: 'black',
        fontSize: 12,
        marginTop: 8,
        fontWeight: 'bold',
        // paddingLeft: 40
    },
    price_text2: {
        color: 'black',
        fontSize: 12,
        marginTop: 8,
        fontWeight: 'bold'
    },
});

export default History;