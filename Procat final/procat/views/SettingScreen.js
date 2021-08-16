import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, FlatList } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import CheckBox from 'react-native-check-box';
import SwitchSelector from "react-native-switch-selector";
import { colors } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import { TouchableOpacity } from 'react-native';
const GLOBAL = require('../views/Globals');
const getUsersUrl = GLOBAL.BASE_URL + 'ResultScreen.php?action=search&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';
// import * as RNLocalize from "react-native-localize";
// const options = [
//     { label: "01:00", value: "1" },
//     { label: "01:30", value: "1.5" },
//     { label: "02:00", value: "2" }
//   ];
// console.log(RNLocalize.getLocales());
class Settings extends React.Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        StyleText: false,
        nalic: false,
        nachal: false,
        zaversh: false,
        language: ''
    }
    componentDidMount = async () => {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });
        this.Search();
   
    }

    
    Search = () => {
        var json = '{"nalic": "' + this.state.nalic + '", "nachal": "' + this.state.nachal + '", "zaversh": "' + this.state.zaversh + '", "language": "' + this.state.language + '"}';
        const request = new Request(getUsersUrl, { method: 'POST', body: json });
        console.log(json);
    }
    render(){
        const { StyleText } = this.state;
        const options = [
            { label: "Русский", value: "Русский" },
            { label: "Казахский", value: "Казахский" },
            { label: "Английский", value: "Английский" }
          ];
        //   const {t, i18n} = useTranslation();
          
        // const [isSelected, setSelection] = useState(false);
            
        return (
            <View style={styles.container}>
                {/* <View style={styles.head}>
                    <View style={styles.test}>
                        <Image style={styles.strelka} source={require('../images/strelka.png')} />
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text}>Настройки</Text>
                    </View>
                    
                </View> */}
                <View style={styles.body}>
                    <Text style={styles.lang}>Язык</Text>
                    {/* <View style={styles.body_lang}> */}
                    <SwitchSelector
  options={options}
  initial={0}
  onPress={(value) => { this.setState({ language: value})}}
  borderRadius={0}
  buttonColor={'black'}
  fontSize={15}
  height={30}
  style={{width: 265}}
//   onPress={(language) => {
//     i18n.changeLanguage(language);
// V
//   borderWidth={1}
//   buttonMargin={5}
/>
                        {/* <Text style={styles.text_lang_active}>Русский</Text>
                        <Text style={styles.text_lang_noactive}>Казахский</Text>
                        <Text style={styles.text_lang_noactive}>Английский</Text> */}
                    {/* </View> */}
                </View>
                <View style={styles.footer}>
                    <Collapse>
                        <CollapseHeader>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={styles.text_accardion}>Уведомления</Text>
                                <Image style={styles.img_polygon} source={require('../images/polygon.png')} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о наличии машины</Text>
                                {/* <CheckBox
                                    
                                    // value={isSelected}
                                    // onValueChange={setSelection}
                                    // style={styles.checkbox}
                                /> */}
                              <CheckBox
                      disabled={false}
                      isChecked={this.state.nalic}
                      onClick={() =>
                          this.setState({
                            nalic: !this.state.nalic,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
                            </View>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о начале аренды</Text>
                        <CheckBox
                      disabled={false}
                      isChecked={this.state.nachal}
                      onClick={() =>
                          this.setState({
                            nachal: !this.state.nachal,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
                            </View>
                            <View style={styles.text_accardion_row}>
                                <Text style={styles.text_accardion_foot}>Уведомлять о завершении аренды</Text>
                                <CheckBox
                      disabled={false}
                      isChecked={this.state.zaversh}
                      onClick={() =>
                          this.setState({
                            zaversh: !this.state.zaversh,
                          })
                        }
                        // tintColors={{true: '#000000'}}
                      style={styles.checkbox}
                      />
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <View style={styles.loginButtonSection}>
                        
                        <Button
                            onPress={this.Search}
                            title="Сохранить"
                            color="#fff" 
                            />
                       
                    </View>
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
        paddingTop: 20,
        paddingLeft: 21,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    loginButtonSection: {
        width: '50%',
        marginLeft: '14%',
        marginTop: '10%',
        // height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
     },
    img_polygon:{
        marginRight: '8%',
        marginTop: '2%',
        // marginBottom: '3%'
    },
    head: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // justifyContent: 'space-around',
        marginBottom: 20,
    },
    checkbox: {
        // marginTop: '4%',
        marginBottom: '0%',
      },
    text_accardion: {
        fontSize: 18,
        marginBottom: 5,
    },
    text_accardion_foot: {
        fontSize: 12,
        marginLeft: 15,
        marginTop: '1.5%',
        flexDirection: 'row-reverse',
    },
    text_accardion_row: {
        flexDirection: 'row',
        width: 270,
        // marginTop: '10%',
        justifyContent: 'space-between',
        // backgroundColor:'red's
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
        // backgroundColor: 'red'
        marginRight: 100
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
        width: '35%',
    },
});

export default Settings;