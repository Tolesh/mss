import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import CheckBox from '@react-native-community/checkbox';


class Settings extends React.Component {
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
        // const [isSelected, setSelection] = useState(false);
            
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text}>Настройки</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.lang}>Язык</Text>
                    <View style={styles.body_lang}>
                        <Text style={styles.text_lang_active}>Русский</Text>
                        <Text style={styles.text_lang_noactive}>Казахский</Text>
                        <Text style={styles.text_lang_noactive}>Английский</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                                <Text style={styles.text_accardion}>Уведомления</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о наличии машины</Text>
                                <CheckBox
                                    // value={isSelected}
                                    // onValueChange={setSelection}
                                    // style={styles.checkbox}
                                />
                            </View>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о начале аренды</Text>
                                <CheckBox
                                    // value={isSelected}
                                    // onValueChange={setSelection}
                                    // style={styles.checkbox}
                                />
                            </View>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о завершении аренды</Text>
                                <CheckBox
                                    // value={isSelected}
                                    // onValueChange={setSelection}
                                    // style={styles.checkbox}
                                />
                            </View>
                        </CollapseBody>
                    </Collapse>
                    
                    <AccordionList
                        list={this.state.list}
                        header={this._head}
                        body={this._body}
                        keyExtractor={item => item.key}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    head: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // justifyContent: 'space-around',
        marginBottom: 20,
    },
    text_accardion: {
        fontSize: 18,
        marginBottom: 5,
    },
    text_accardion_foot: {
        fontSize: 12,
        marginLeft: 15,
        marginTop: 10,
        flexDirection: 'row-reverse',
    },
    text_accardion_row: {
        flexDirection: 'row',
    },
    body: {
        marginLeft: 30,
    },
    footer: {
        marginLeft: 30,
        marginTop: 15,
    },
    lang: {
        fontSize: 18,
        marginBottom: 5,
    },
    body_lang: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text_lang_active: {
        fontSize: 15,
        marginRight: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        padding: 5,
    },
    text_lang_noactive: {
        fontSize: 15,
        marginRight: 10,
        fontWeight: 'bold',
        padding: 5,
    },
    test: {
        justifyContent: 'center',
        width: '35%',
    },
    test2: {
        justifyContent: 'center',
        width: '65%',
    },
});

export default Settings;