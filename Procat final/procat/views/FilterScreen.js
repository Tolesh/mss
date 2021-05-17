import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, Image, Pressable, TextInput,FlatList,Form,TouchableOpacity,Dimensions,SafeAreaView } from 'react-native';

const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'MarksScreen.php?action=get_marks&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;
class Filter extends React.Component {

    
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });

        this.getUsers();
    }
    getUsers = () => {
        var json = '{"targets": "' + GLOBAL.SERVER_RESULT + '"}';
        const request = new Request(getUsersUrl, { method: 'POST', body: json });
        console.log(json);
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
    // constructor(props) {
    //     super(props);
    
    // this.state = {

    //   };
    // }
    state ={
        toggle: true,
        ides: 0
    }
_onPress(id){
    this.state.ides = id

   if(this.state.ides == id){
        const newState = !this.state.toggle;
    this.setState({toggle:newState})
   }
    
}

    render(){
 const {toggle} = this.state;
 const ButtonBG = toggle?"white":"black";
 const textColor = toggle?"black":"white";    
 let { data, search } = this.state;       
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
                <SafeAreaView scrollEnabled={true}>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={(item,index) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.bb}>
                            <TouchableOpacity
                            onPress={()=>this._onPress(item.id)}
                            style={{backgroundColor:ButtonBG}}
                            >
                                <Text style={{color:textColor,fontSize:14,marginLeft:'7%',marginTop: '1%',marginBottom: '1%'}}>{item.value}</Text>
                            </TouchableOpacity>
                            </View>
                            )}
                            />
                </SafeAreaView>
                {/* <View style={styles.bb}>
                <TouchableOpacity
                onPress={()=>this._onPress()}
                style={{backgroundColor:ButtonBG}}
                >
                    <Text style={{color:textColor,fontSize:14,marginLeft:'7%',marginTop: '1%',marginBottom: '1%'}}>Nissan</Text>
                </TouchableOpacity>
                </View> */}
                    {/* <Text style={StyleText ? styles.active : styles.no_active}>Nissan</Text> */}
                    {/* <Text style={styles.car_name}>Lexus</Text>
                    <Text style={styles.car_name}>Toyota</Text>
                    <Text style={styles.car_name}>Honda</Text>
                    <Text style={styles.car_name}>Cadilac</Text>
                    <Text style={styles.car_name}>BMW</Text>
                    <Text style={styles.car_name}>Mersedes</Text>
                    <Text style={styles.car_name}>Hyundai</Text> */}
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
    bb: {
        marginBottom: "3%"
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
        // color: 'white',
        // paddingLeft: 30,
        // fontSize: 14,
        // marginBottom: 15,
    },
    buttonStyle: {
        backgroundColor: "#fff",
    },
    titleStyle: {
        color: "#000",
        paddingRight: "76%",
        fontSize: 14
    },
    no_active: {
        backgroundColor: 'white',
        // color: 'black',
        // paddingLeft: 30,
        // fontSize: 14,
        // marginBottom: 15,
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