import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList,TouchableOpacity,BackHandler } from 'react-native';
import { CheckBox } from 'react-native';

class Menu extends React.Component {
    constructor(props) {
        super(props);
      
    }
    state = {
        StyleText: false,
    }

    test = () => {

    }
    
//     useLayoutEffect = (() => {
//         navigation.setOptions({
//     headerRight: () => {<TouchableOpacity onPress={() => goBack(null)}> <Text style={{marginRight: 10,marginTop : 5}}>Back</Text></TouchableOpacity>
//     }
// });
// })
    // this.setState({ StyleText: true });

    render(){
        const { StyleText } = this.state;
            
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.test}>
                        {/* <Image style={styles.strelka} source={require('../images/strelka.png')} /> */}
                    </View>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('VhodKakPartner')}>
                    <Text style={styles.text_menu}>Профиль</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingScreen')}>
                    <Text style={styles.text_menu}>Настройки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyZakaz')}>
                    <Text style={styles.text_menu}>Мои заказы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.text_menu}>Выход</Text>
                    </TouchableOpacity>
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
    strelka: {
        marginTop: 10,
        marginLeft: 36,
        marginBottom: 30,
    },
    text_menu: {
        fontSize: 24,
        marginLeft: 40,
        marginBottom: 30,
    },
});

export default Menu;