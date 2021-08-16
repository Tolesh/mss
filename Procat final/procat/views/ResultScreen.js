import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button ,Dimensions,SafeAreaView,FlatList, Alert} from 'react-native';
import { CheckBox } from 'react-native';
// var ASCIImage = require('react-native-asciimage');

const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=search&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

class Result extends React.Component {
    state = {
        data: [],
        values: [],
        search: '',
    }
    // arrayholder = [];
    // componentWillMount() {
    //     let { data, checked } = this.state;
    //     let intialCheck = data.map(x => false);
    //     this.setState({ checked: intialCheck })
    // }
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });
        // console.log(this.state.values)
        this.Search();
    }
    Search = () => {
        var json = GLOBAL.SERVER_RESULT;
        const request = new Request(getUsersUrl, { method: 'POST', body: json});
        // console.log(json);
        // console.log(GLOBAL.SERVER_RESULT);   
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
                
            })
            .then(response => {
                console.log(response);
                this.setState({ data: response });
                this.arrayholder = response;
                
                // console.log(this.state.data)
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
    handleChange = (index) => {
        let checked = [...this.state.checked];
        checked[index] = !checked[index];
        this.setState({ checked });
    }
    render() {
        let { data, search } = this.state;
        return(
            <View style={styles.container}>
                {/* <Pressable onPress={() => this.props.navigation.navigate('SearchScreen')}>
                <Image style={styles.strelka} source={require('../images/strelka.png')} />
                </Pressable> */}
                <View style={styles.head}>
                    <Image style={styles.logo} source={require('../images/logo_2.png')} />
                    <Text style={styles.text}>Kesler Rent Car</Text>
                </View>
                <View style={styles.pred_content}>
                <SafeAreaView scrollEnabled={true}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View style={styles.content}>
                                 <View style={styles.img_car}>
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
                                    {/* <Image style={styles.price_text} source={require('../images/logo.png')}></Image> */}
                                    <Text style={styles.price_text}>{item.price} тг</Text>
                                    <Pressable onPress={() => this.props.navigation.navigate('TovarScreen')}>
                                    <Text style={styles.price_text}>Подробнее →</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    />
                </SafeAreaView>
                    {/* <View style={styles.content}>
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
                            <Text style={styles.price_text}>Подробнее →</Text>
                        </View>
                    </View> */}
                </View>
                {/* <View style={styles.pred_content}>
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
                            <Text style={styles.price_text}>Подробнее →</Text>
                        </View>
                    </View>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        // paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    pred_content: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    content: {
        backgroundColor: 'black',
        marginBottom: 20,
        flexDirection: 'row',
    },
    info: {
        marginLeft: '3%',
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
        width: 145
    },
    car_info: {
        color: 'white',
        fontSize: 10,
        marginBottom: 3,
    },
});

export default Result;