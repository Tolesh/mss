import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList } from 'react-native';
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
                <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text_menu}>Профиль</Text>
                    <Text style={styles.text_menu}>Настройки</Text>
                    <Text style={styles.text_menu}>Мои заказы</Text>
                    <Text style={styles.text_menu}>Выход</Text>
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
        paddingTop: 70,
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
    footer: {
        alignItems: 'center',
        marginBottom: 48,
        borderTopWidth: 2,
    },
    body: {
        flex: 1,
    },
    text_footer: {
        fontSize: 12,
        marginTop: 15,
    },
});

export default MenuPart;