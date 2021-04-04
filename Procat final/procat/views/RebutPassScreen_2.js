import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';

class Rebut_2 extends React.Component {

    render(){
        // const [isSelected, setSelection] = useState(false);

        return (
            <View style={styles.container}>
                <View style={styles._input}>
                    <TextInput style={styles.input}
                        placeholder="Код подтверждения"
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={4}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder="Новый пароль"
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder="Повторите пароль"
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false} />
                </View>
                <View style={styles.buttons}>
                    <View style={styles.btn1}>
                        <Button
                        title="Готово"
                        color="#000"
                        /> 
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'center',
      },
    input: {
        height: 52,
        width: 343,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20,
        paddingLeft: 10,
      },
    _input: {
        alignItems: 'center',
      },
    buttons: {
       // flexDirection: 'row', 
       // justifyContent: 'row-reverse', 
       // alignItems: 'center', 
       alignSelf: 'flex-end',
       marginRight: 36,
       marginTop: 77,
    },
});

export default Rebut_2;