import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


class Reg extends React.Component {

    render(){
        // const [isSelected, setSelection] = useState(false);

        return (
            <View style={styles.container}>
                <View style={styles._input}>
                    <TextInput style={styles.input}
                        placeholder="+7 (707) 768-54-78"
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        keyboardType="number-pad"
                        maxLength={11}
                        autoCorrect={false} />
                    
                    <TextInput style={styles.input}
                        placeholder="Код подтверждения"
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={4}
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false} />

                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false} />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        // value={isSelected}
                        // onValueChange={setSelection}
                        style={styles.checkbox}/>

                    <Text style={styles.label}>Я принимаю </Text>
                    <Text style={styles.label2}>Пользовательское соглашение</Text>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.btn2}>
                        <Button
                            title="Зарегестрироваться"
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
    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 15,
      },
    checkbox: {
        marginLeft: 20,
        marginBottom: 15,
      },
    label: {
        marginTop: 5,
      },
    label2: {
        fontWeight: 'bold',
        marginTop: 5,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Reg;