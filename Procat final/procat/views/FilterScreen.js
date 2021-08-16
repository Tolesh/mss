import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, Image, Pressable, TextInput,FlatList,Form,TouchableOpacity,Dimensions,SafeAreaView, ScrollView } from 'react-native';
import { withGlobalContext } from './GlobalContext';

const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'MarksScreen.php?action=get_marks&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

class Filter extends React.Component {
    constructor(props) {
        super(props);
        // this.props.navigation.setOptions({
        //     headerRight: () => (
        //     //     <TouchableOpacity                
        //     //     onPress={() => this.props.navigation.navigate('MenuScreen')}
        //     //     // style={{backgroundColor: 'black'}}
        //     // >
        //     //  <Image style={{marginTop: 5,marginLeft: 15}} source={require('../images/Group.png')} />
        //     // </TouchableOpacity>
        //     <TouchableOpacity onPress={this.toggle}>
        //         <Text style={{fontSize: 14,fontWeight: 'bold',marginRight: 15,marginTop: 5}}>Выбрать</Text>
        //     </TouchableOpacity>
        //     )
        // });
    }
    state ={
        // toggle: true,   
        data: [],
        values: [],
        selected_mark_titles: [],
        selected_mark_ids: [],
    }
   
    componentWillMount() {
        let { data, checked } = this.state;
        let intialCheck = data.map(x => false);
        this.setState({ checked: intialCheck })
    }

    // componentDidMount = async () => {
    //     const response = await fetch(getListUrl);
    //     const values_response = await fetch(valuesJsonUrl);
    //     const data = await response.json();
    //     const values = await values_response.json();

    //     this.setState({ data });
    //     this.setState({ values });

    //     this.getUsers();
    // }
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });

        this.getUsers();
    }
  
    getUsers = () => {
        // '{"targets": "' + GLOBAL.SERVER_RESULT + '"}';
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
                // console.log(response);
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
   
// _onPress(id){
//     this.state.ides = id

//    if(this.state.ides == id){
//         const newState = !this.state.toggle;
//     this.setState({toggle:newState})
//    }
    
// }

handleChange = (value, id, index) => {
    let checked = [...this.state.checked];
    checked[index] = !checked[index];
    this.setState({ checked });
    this.state.selected_mark_titles.push(value);
    this.state.selected_mark_ids.push(id);
}
toggle = () => {
    let newArray = [];
    let newIdsArray = [];

    this.state.selected_mark_titles.forEach(element => {
        if (!newArray.some(o => o[0] === element[0])) {
            newArray.push(element)
        }
    });

    this.state.selected_mark_ids.forEach(element => {
        if (!newIdsArray.some(o => o[0] === element[0])) {
            newIdsArray.push(element)
            // console.log(newIdsArray);
        }
    });
    
    this.props.global.selected = newArray;
    // console.log(this.props.global.selected);
    this.props.global.selected_ids = newIdsArray;
    this.props.navigation.navigate('SearchScreen');
}


    render(){
//  const {toggle} = this.state;
//  const ButtonBG = toggle?"white":"black";
//  const textColor = toggle?"black":"white";    
 let { data, search,checked } = this.state;   
   
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    {/* <View style={styles.test}>
                    <Pressable onPress={() => this.props.navigation.navigate('SearchScreen')}><Image style={styles.strelka} source={require('../images/strelka.png')} /></Pressable>
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text}>Марка</Text>
                    </View> */}
                    <View style={styles.test3}>
                    <TouchableOpacity onPress={this.toggle}>
                        <Text style={styles.text2}>Выбрать</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <SafeAreaView style={styles.SafeAreaView}>
                {/* <ScrollView bounces={true}> */}
                    <FlatList 
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={3}
                        data={this.state.data}
                        extraData={this.state}
                        renderItem={({ item, index }) => (
                            <View style={styles.bb}>
                                 <CheckBox
                                    title={item.value}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={checked[index]}
                                    textStyle={styles.checkboxText}
                                    containerStyle={styles.checkbox}
                                    onPress={() => this.handleChange(item.value, item.id, index)}
                                    checkedColor="#000"
                                    uncheckedColor="#000"
                                />
                            {/* <TouchableOpacity
                            onPress={()=>this._onPress(item.id)}
                            style={{backgroundColor:ButtonBG}}
                            >
                                <Text style={{color:textColor,fontSize:14,marginLeft:'7%',marginTop: '1%',marginBottom: '1%'}}>{item.value}</Text>
                            </TouchableOpacity> */}
                            </View>
                            )}
                            />
                            
                {/* </ScrollView> */}
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
        paddingTop: 20,
        // paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    SafeAreaView : {
        // flex: 1,
        // marginTop: windowHeight + StatusBar.currentHeight
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
    text2: {
        fontSize: 14,
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
        width: '36%',
        // backgroundColor: 'red'
    },
    test2: {
        justifyContent: 'center',
        width: '40%',
        // backgroundColor: 'yellow'
    },
    test3: {
        justifyContent: 'center',
        width: '18%',
        // backgroundColor: 'green'
    },
    strelka: {
        
    },
});

export default withGlobalContext(Filter);