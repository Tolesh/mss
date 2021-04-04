import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


class Tovar extends React.Component {

    render(){

        return (
            <View style={styles.container}>
                <Image style={styles.strelka} source={require('../images/strelka.png')} />
                <View style={styles.header}>
                    <Image source={require('../images/image_1.jpg')} />
                    <View style={styles.head_content}>
                        <Text style={styles.text}>Hyundai Accent</Text>
                        <Image style={styles.image_2} source={require('../images/image_2.png')} />
                        <Image source={require('../images/image_3.png')} />
                    </View>
                    <View style={styles.head_info}>
                            <Text style={styles.text2}>Год выпуска: 2018</Text>
                            <Text style={styles.text2}>Коробка: Автомат</Text>
                            <Text style={styles.text2}>Цвет: белый</Text>
                            <Text style={styles.text2}>Кол-во мест: 4</Text>
                            <Text style={styles.text2}>Город: Алматы</Text>
                    </View>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.text_content}>Малолитражный автомобиль (B-класс) южнокорейской компании Hyundai (в некоторых странах — Verna, в России — Solaris), который выпускается с 1994 года по настоящее время. Автомобиль имеет привод на передние колеса с передним поперечным расположением двигателя и кузовом типа «седан» или «хэтчбэк» Пришел на замену устаревшей модели Excel. За все это время автомобиль пережил пять обновлений. Заводы по производству Accent находятся в Индии, Иране, Казахстане, Пакистане, России (Таганрог), Турции, Украине и Южной Корее. В России Solaris производится на заводе в Санкт-Петербурге. Самые ближайшие конкуренты автомобиля это Ford Fiesta, Honda Fit, Kia Rio, LADA Granta, Mitsubishi Colt, Opel Corsa, Renault Logan, Nissan Note, Skoda Fabia, Volkswagen Polo, Toyota Yaris и SEAT Ibiza.</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.text_price}>1-2 суток - 13 500 тг.</Text>
                    <Text style={styles.text_price}>3-6 суток - 12 500 тг.</Text>
                    <Text style={styles.text_price}>7-14 суток - 11 500 тг.</Text>
                    <Text style={styles.text_price}>15-30 суток - 10 500 тг.</Text>
                    <Text style={styles.text_price}>от 31 суток - 9500 тг.</Text>
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="Арендовать машину"
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
    },
    header: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 11,
    },
    strelka: {
        marginLeft: 10,
    },
    content: {
        paddingBottom: 20,
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
    text: {
        // flexDirection: 'row'
        fontSize: 12
    },
    text2: {
        fontSize: 10,
        paddingBottom: 3,
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
        paddingTop: 13,
        marginLeft: -40,
    },
});

export default Tovar;