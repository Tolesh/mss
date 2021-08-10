import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button,Dimensions,SafeAreaView,FlatList } from 'react-native';
import { CheckBox } from 'react-native';


const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=search&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;
class Tovar extends React.Component {
    state = {
        data: [],
        values: [],
        search: '',
    }

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
    render(){
        let { data, search } = this.state;
        return (
            <View style={styles.container}>
                <Pressable onPress={() => this.props.navigation.navigate('ResultScreen')}>
                <Image style={styles.strelka} source={require('../images/strelka.png')} />
                </Pressable>
                <SafeAreaView scrollEnabled={true}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={({ item }) => (
                        <View>
                            <View style={styles.header}>
                                <Image source={require('../images/image_1.jpg')} />
                            <View style={styles.head_content}>
                                <Text style={styles.text}>{item.nameCars}</Text>
                                <Image style={styles.image_2} source={require('../images/image_2.png')} />
                                <Image source={require('../images/image_3.png')} />
                            </View>
                             <View style={styles.head_info}>
                                <Text style={styles.text2}>Год выпуска: {item.years} г</Text>
                                <Text style={styles.text2}>Коробка: {item.kpp}</Text>
                                <Text style={styles.text2}>Цвет: {item.color}</Text>
                                 <Text style={styles.text2}>Кол-во мест: {item.mesta}</Text>
                                <Text style={styles.text2}>Город: {item.region}</Text>
                             </View>
                                 <Image style={styles.logo} source={require('../images/logo.png')} />
                             </View>
                            <View style={styles.content}>
                                <Text style={styles.text_content}>{item.infoCars}</Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.text_price}>1-2 суток - {item.sutki_1_2} тг.</Text>
                                <Text style={styles.text_price}>3-6 суток - {item.sutki_3_6} тг.</Text>
                                <Text style={styles.text_price}>7-14 суток - {item.sutki_7_14} тг.</Text>
                                <Text style={styles.text_price}>15-30 суток - {item.sutki_15_30} тг.</Text>
                                <Text style={styles.text_price}>от 31 суток - {item.ot31sutok} тг.</Text>
                             </View>
                            </View>
                  )}
                  />
                </SafeAreaView>
                <View style={styles.buttons}>
                    <Button
                        title="Арендовать машину"
                        color="#fff"
                    /> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
      },
    buttons: {
        // flexDirection: 'row', 
        // justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'black' ,
        width: 220,
        marginLeft: '28%',
        marginTop: '6%'
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
        marginTop: '0%',
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
        marginTop: '-1%',
    },
    head_info: {
        // flexDirection: 'row',
        paddingTop: 13,
        marginLeft: '-7%',
    },
});

export default Tovar;