import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


class Accept extends React.Component {

    render(){
        // const [isSelected, setSelection] = useState(false);

        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textUp2}>Пройдите верификацию</Text>
                </View>
                <View style={styles._input}>

                    <Text style={styles.textUp}>Номер договора</Text>

                    <TextInput style={styles.input}
                        placeholderTextColor="#000000"
                        returnKeyType='go'
                        keyboardType="number-pad"
                        maxLength={10}
                        autoCorrect={false} />

                        <Text style={styles.textUp}>Номер ИП</Text>
                    
                    <TextInput style={styles.input}
                        placeholderTextColor="#000000"
                        keyboardType="number-pad"
                        returnKeyType='go'
                        maxLength={10}
                        autoCorrect={false} />
                </View>

                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer2}>
                        <CheckBox
                            // value={isSelected}
                            // onValueChange={setSelection}
                            style={styles.checkbox}/>

                        <Text style={styles.label}>Remember me</Text>
                    </View>
                    
                    <View style={styles.buttons}>
                        <Button
                            title="Войти"
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
    textUp: {
        marginBottom: 10,
        fontSize: 13,
    },
    textUp2: {
        marginBottom: 10,
        fontSize: 16,
    },
    head: {
        alignItems: 'center',
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
        flexDirection: 'row', 
        marginLeft: 10,
    },
    checkboxContainer2: {
        flexDirection: "row",
        marginRight: '36%',
    },
    checkbox: {
        marginLeft: 20,
        flexDirection: "row",
    },
    label: {
        marginTop: 5,
    },
    label2: {
        fontWeight: 'bold',
        marginTop: 5,
    },
      buttons: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'left',
    },
});

export default Accept;