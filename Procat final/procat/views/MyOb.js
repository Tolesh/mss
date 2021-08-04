import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList ,SafeAreaView,Dimensions} from 'react-native';
import { CheckBox } from 'react-native';

const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=obv&lang=1';
const getUsersUrl2 = GLOBAL.BASE_URL + 'ResultScreen.php?action=del&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;
class MyOb extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        values: [],
        search: '',
        // carId: '',
    }

    arrayholder = [];

    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });

        this.getUsers();
        
    }
    // handleCarId = (text) => {
    //     this.setState({ carId: text })
    //     this.getDel();
    // }
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
                // this.getDel();
            }).catch(error => {
                console.error(error);
            });
    }
    getDel = (id) => {
        var json = '{"car": "' + id + '"}';
        const request = new Request(getUsersUrl2, { method: 'POST', body: json });
        console.log(id);
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
                <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text}>Мои объявления</Text>
                    </View>
                </View>
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
                            <Pressable onPress={() => this.getDel(item.id)}><Text style={styles.price_text}>Удалить</Text></Pressable>
                    </View>
                </View>
                    )}
                  />
                </SafeAreaView>
            
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