import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList,TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native';

class MenuPart extends React.Component {
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
                {/* <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                </View> */}
                <View style={styles.body}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('VhodKakPartner')}>
                    <Text style={styles.text_menu}>Профиль</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingScreen')}>
                    <Text style={styles.text_menu}>Настройки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOb')}>
                    <Text style={styles.text_menu}>Мои объявления</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.text_menu}>Выход</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Пользовательское соглашение</Text>
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
        marginTop: '4%',
        marginLeft: '10%',
        marginBottom: '8%',
    },
    text_menu: {
        fontSize: 24,
        marginLeft: '11%',
        marginBottom: '8%',
    },
    footer: {
        alignItems: 'center',
        marginBottom: '14%',
        borderTopWidth: 2,
    },
    body: {
        flex: 1,
    },
    text_footer: {
        fontSize: 12,
        marginTop: '5%',
    },
});

export default MenuPart;