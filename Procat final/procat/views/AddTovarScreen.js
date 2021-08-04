import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button,Dimensions,FlatList,SafeAreaView } from 'react-native';

const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=obv&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;
class AddTovar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        values: [],
        search: '',
    }

    arrayholder = [];

    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });

        this.getUsers();
    }

    getUsers = () => {
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
                this.setState({ data: response });
                this.arrayholder = response;
            }).catch(error => {
                console.error(error);
            });
    }

    searchFilterFunction = (text) => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.lastname.toUpperCase()}`;
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;
        });

        this.setState({ data: newData });
        this.setState({ search: text });
    };
    render(){
        let { data, search } = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.image_3} source={require('../images/Group.png')} />
                <View style={styles.header}>
                    <View style={styles.block}>
                    </View>
                </View>
                <Text style={styles.text3}>Ваши объявления</Text>
                <SafeAreaView scrollEnabled={true}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={({ item }) => (
                             <View style={styles.content}>
                    <View style={styles.image_4}>
                        <Image source={require('../images/image_1.jpg')}></Image>
                    </View>
                    <View style={styles.info}>
                    <Text style={styles.car_name}>{item.nameCars}</Text>
                    <Text style={styles.car_info}>Год выпуска: {item.years} г</Text>
                    <Text style={styles.car_info}>Коробка: {item.kpp}</Text>
                    <Text style={styles.car_info}>Цвет: {item.color}</Text>
                    <Text style={styles.car_info}>Кол-во мест: {item.mesta}</Text>
                    </View>
                    <View style={styles.price}>
                            <Image style={styles.price_text} source={require('../images/logo.png')}></Image>
                            <Text style={styles.price_text}>{item.sutki_1_2}тг/сутки</Text>
                    </View>
                </View>
                    )}
                  />
                </SafeAreaView>
                {/* <View style={styles.content}>
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
                </View> */}
                <View style={styles.buttons}>
                    <Button
                        title="Добавить объявление"
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
        // backgroundColor: 'red'
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

export default AddTovar;