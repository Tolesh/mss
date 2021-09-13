import React, { useContext  } from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, Text, Platform, TouchableOpacity, Button, Image,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback ,Dimensions } from 'react-native';
import { PixelRatio, Alert } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import { CheckBox } from 'react-native';
import CodeInput from 'react-native-code-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImagePickerExample from './ImagePicker';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { or } from 'react-native-reanimated';

const GLOBAL = require('../views/Globals');
const authUrl = GLOBAL.BASE_URL + 'SaveProfile.php?action=Save&lang=1';
const valuesJsonUrl = GLOBAL.BASE_URL + 'values.php?action=get_values&lang=1';
const getInfoUrl = GLOBAL.BASE_URL + 'SaveProfile.php?action=get_info&lang=1';
// const getInfoUrl2 = GLOBAL.BASE_URL + 'SaveProfile.php?action=upload_avatar&lang=1';


const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height; 

class VKP extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    values: [],
    name: '',
    surname: '',
    otchestvo: '',
    day: '',
    month: '',
    // avatar: '',
    avatar: null,
    year: '',
    iin1: '',
    iin2: '',
    iin3: '',
    iin4: '',
    prava1: '',
    prava2: '',
    isMessage1Display: false,
    isMessage2Display: false,
    isMessage3Display: false,

    ImageSource: null,
    data_image: null,
    Image_TAG: '',

    // id: 0
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'android') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA,Permissions.AUDIO_RECORDING
  );
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  pickImage = async () => {
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,allowsEditing: true,
      aspect: [1,1],
      quality: 1,


    });
    if (!response.cancelled) {
       console.log(response.uri);
        this.setState({

          ImageSource: response.uri,
          data_image: response.data_image

        });
      }
  }
  
  uploadImageToServer = async () => {
    const response = await fetch(this.state.ImageSource);
     const blob = await response.blob();
     var reader = new FileReader();
     reader.onload = () => {
 
       var InsertAPI = 'http://11993fb0a6aa.ngrok.io/Server/upload.php';
       console.log(reader.result);
             var Data={img:reader.result};
             var headers={
             'Accept':'application/json',
             'Content-Type':'application.json'
             }
             fetch(InsertAPI,{
                 method:'POST',
                 headers:headers,
                 body:JSON.stringify(Data),
             }).then((response)=>response.json()).then((response)=>{
                 console.log(response)
             })
             .catch(err=>{
                 console.log(err);
                 
             })  
 }
 reader.readAsDataURL(blob);
             }

  componentDidMount = async () => {
    try {
        const values_response = await fetch(valuesJsonUrl);
        const values = await values_response.json();

        this.setState({ values });

        AsyncStorage.multiGet(['id', 'phone', 'password', 'type']).then((data) => {
          // let id = data[0][1];
          let id = 53;

          this.setState({ id: id });

          if (id > 0) {
            // this.getTargetList(id);
              var json = '{"id": "' + this.state.id + '"}';
              const request = new Request(getInfoUrl, { method: 'POST', body: json });
              fetch(request)
                    .then(response => {
                  
                        if (response.status === 200) {
                         
                            return response.json();
                        } else {
                            throw new Error('Something went wrong on api server!');
                        }
                    })
                    .then(response => {
                      console.log(response);
                        this.setState({ name: response.name });
                        this.setState({ surname: response.surname });
                        this.setState({ otchestvo: response.patronymic });
                        this.setState({ day: response.day });
                        this.setState({ month: response.month });
                        this.setState({ year: response.year });
                        this.setState({ iin1: response.IIN_1 });
                        this.setState({ iin2: response.IIN_2 });
                        this.setState({ iin3: response.IIN_3 });
                        this.setState({ iin4: response.IIN_4 });
                        this.setState({ prava1: response.prava_1 });
                        this.setState({ prava2: response.prava_2 });
                        this.setState({ avatar: response.avatar });

                        if (response.avatar != "") {
                            // let avatar_url = GLOBAL.SITE_URL + 'avatars/' + response.avatar;
                            let avatar_url = GLOBAL.SITE_URL + 'admin/upload/images/1.png';
                            this.setState({ avatar: avatar_url });
                        } else {
                            let avatar_url = GLOBAL.SITE_URL + 'images/avatar.png';

                            this.setState({ avatar: avatar_url });
                        }
                    }).catch(error => {
                        console.error(error);
                    });
          }
        });
    } catch (e) {
        throw e
    }
  }
  // handleAvatar = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //       base64: true,
  //       exif: true,
  //   }).then(image => {
  //     const formData = new FormData();
  //     const base64 = blobToBase64(blob);
  //     formData.append('file', base64);
  //     formData.append('data', JSON.stringify(payload)); 
  
  //       // var json = '{"id": "' + this.state.id + '", "image": "' + image_base64 + '"}';
  //       const request = new Request(getInfoUrl2, { method: 'POST', body: formData });
  
  //       fetch(request)
  //           .then(response => {
  //               if (response.status === 200) {
  //                   return response.json();
  //               } else {
  //                   throw new Error('Something went wrong on api server!');
  //               }
  //           })
  //           .then(response => {
  //               let avatar_url = GLOBAL.SITE_URL + 'avatars/'+ response;
  
  //               this.setState({ avatar: avatar_url });
  //           }).catch(error => {
  //               console.error(error);
  //           });
  //   }).catch(e => console.log(e));
  // }

  // selectPhotoTapped() {
  //   const options = {
  //     quality: 1.0,
  //     maxWidth: 500,
  //     maxHeight: 500,
  //     storageOptions: {
  //       skipBackup: true
  //     }
  //   };

  //   ImagePicker.launchImageLibraryAsync(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled photo picker');
  //     }
  //     else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     }
  //     else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     }
  //     else {
  //       let source = { uri: response.uri };

  //       this.setState({

  //         ImageSource: source,
  //         data: response.data

  //       });
  //     }
  //   });
  // }

  
  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //     // base64: true,
  //     exif: true
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setState({

  //       avatar: result.uri,
  //       ImageSource: source,
  //       data_image: result.data_image

  //     });
  //   }
  // };
  
  handleName = (text) => {
    this.setState({ name: text })
  }
  
  handleSurname = (text) => {
    this.setState({ surname: text })
  }

  handleOtchestvo = (text) => {
    this.setState({ otchestvo: text })
  }

  handleDay = (text) => {
    this.setState({ day: text })
  }

  handleMonth = (text) => {
    this.setState({ month: text })
  }

  handleYear = (text) => {
    this.setState({ year: text })
  }

  handleIIN1 = (text) => {
    this.setState({ iin1: text })
  }

  handleIIN2 = (text) => {
    this.setState({ iin2: text })
  }

  handleIIN3 = (text) => {
    this.setState({ iin3: text })
  }

  handleIIN4 = (text) => {
    this.setState({ iin4: text })
  }

  handlePrava1 = (text) => {
    this.setState({ prava1: text })
  }

  handlePrava2 = (text) => {
    this.setState({ prava2: text })
  }

  Save = () => {
    AsyncStorage.multiGet(['id']).then(() => {
      // let id = data[0][1];
      var id = 53;
      var json = '{"name": "' + this.state.name + '", "surname": "' + this.state.surname + '", "otchestvo": "' + this.state.otchestvo + '", "day": "' + this.state.day + '", "month": "' + this.state.month + '", "year": "' + this.state.year + '", "IIN": "' + this.state.iin1 + this.state.iin2 + this.state.iin3 + this.state.iin4 + '", "prava": "' + this.state.prava1 + this.state.prava2 +'","avatar": "'+this.state.avatar +'","id": "' + id +'"}';
      const request = new Request(authUrl, { method: 'POST', body: json });
      console.log(json);

      // uploadImageToServer = () => {

      //   RNFetchBlob.fetch('POST', 'http://192.168.2.102/Project/upload_image.php', {
      //     Authorization: "Bearer access-token",
      //     otherHeader: "foo",
      //     'Content-Type': 'multipart/form-data',
      //   }, [
      //       { name: 'image', filename: 'image.png', type: 'image/png', data_image: this.state.data_image },
      //       { name: 'image_tag', data_image: this.state.Image_TAG }
      //     ]).then((resp) => {
    
      //       var tempMSG = resp.data_image;
    
      //       tempMSG = tempMSG.replace(/^"|"$/g, '');
    
      //       Alert.alert(tempMSG);
    
      //     }).catch((err) => {
      //       // ...
      //     })
    
      // }
    
      fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => { 
          console.log(response);
          if (response == 0 || response == 1 || response == 2 || response == "") {
            if (response == 0) {
              this.setState({ isMessage1Display: true });
              this.setState({ isMessage2Display: false });
              this.setState({ isMessage3Display: false });
            }

            if (response == 1) {
              this.setState({ isMessage1Display: false });
              this.setState({ isMessage2Display: true });
              this.setState({ isMessage3Display: false });
            }

            if (response == 2) {
              this.setState({ isMessage1Display: false });
              this.setState({ isMessage2Display: false });
              this.setState({ isMessage3Display: true });
            }
          } //else {
          //   AsyncStorage.multiSet([
          //       ["id", response.id],
          //       ["phone", response.email],
          //       ["password", response.password],
          //   ])
          // }
          }).catch(error => {
            console.error(error);
            });
        });
  }

    render(){
      let { avatar } = this.state;
        return (
      //     <KeyboardAvoidingView
      //   behavior={Platform.OS === "ios" ? "padding" : "height"}
      //   style={styles.container}
      // >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                  {/* <Text style={isMessage1Display ? styles.notice : styles.hide}>Профиль успешно сохранён</Text>
                  <Text style={isMessage2Display ? styles.notice : styles.hide}>Не все поля заполнены</Text>
                  <Text style={isMessage3Display ? styles.notice : styles.hide}>Профиль успешно обновлён</Text> */}
                <View style={styles.pred_content}>
                    <View style={styles.content}>
                        {/* <View style={styles.img_car}> */}
                            {/* <Image source={require('../images/rectangles.png')} /> */}
                            {/* <ImagePickerExample></ImagePickerExample> */}
{/*                             
                            <Avatar 
                                rounded 
                                size="xlarge"
                                source={{
                                    uri: image,
                                }}
                                containerStyle={styles.avatar}
                                onPress={this._pickImage}
                            /> */}
                            {/* <Button
          title="Pick in"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />} */}
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginRight: '2%' }}>
        {/* {image && <Image source={{ uri: image }} style={{ width: 100, height: 95, marginBottom : '4%',borderRadius: '50%' }} />} */}
      {/* <Button title="Добавить аватарку" onPress={pickImage} color="black" fontSize = {10} /> */}
      {/* <TouchableOpacity onPress={this._pickImage}>
      {avatar && <Image source={{ uri: avatar}} style={{ width: 100, height: 95, marginBottom: '3%' }} value={this.state.avatar} />}
            <Text style={{ color : 'black',fontSize : 12}}>Добавить аватар</Text>
      </TouchableOpacity> */}

<TouchableOpacity onPress={this.pickImage.bind(this)}>

<View style={styles.ImageContainer}>

  {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
    <Image style={styles.ImageContainer} source={{uri:this.state.ImageSource}} />
  }

</View>

</TouchableOpacity>


<TextInput

placeholder="Enter Image Name "

onChangeText={data_image => this.setState({ Image_TAG: data_image })}

underlineColorAndroid='transparent'

style={styles.TextInputStyle}
/>


<TouchableOpacity onPress={this.uploadImageToServer} activeOpacity={0.6} style={styles.button} >

<Text style={styles.TextStyle}> UPLOAD IMAGE TO SERVER </Text>

</TouchableOpacity>

      </View>
                        {/* </View> */}
                        <View style={styles.info}>
                          <TextInput placeholder="Имя" style={styles.textInput} 
                            onChangeText={this.handleName}
                            value = {this.state.name}
                          />
                          <TextInput placeholder="Фамилия" style={styles.textInput} 
                            onChangeText={this.handleSurname}
                            value = {this.state.surname}
                          />
                          <TextInput placeholder="Отчество" style={styles.textInput} 
                            onChangeText={this.handleOtchestvo}
                            value = {this.state.otchestvo}
                          />
                        </View>
                    </View>
                    <View style={styles.header}>
                    <View style={styles.head_title}>
                        <Text style={styles.text3}>ДР</Text>
                      </View>
                      <View style={styles.otdo}>
                      <TextInput placeholder="ДД" style={styles.textInput2} 
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={this.handleDay}
                        value = {this.state.day}
                      />
                      <TextInput placeholder="ММ" style={styles.textInput2} 
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={this.handleMonth}
                        value = {this.state.month}
                      />
                      <TextInput placeholder="ГГГГ" style={styles.textInput3} 
                        maxLength={4}
                        keyboardType="number-pad"
                        onChangeText={this.handleYear}
                        value = {this.state.year}
                      />
                      </View>
                    </View>
                    <View style={styles.header2}>
                      <View style={styles.head_title}>
                        <Text style={styles.text3}>ИИН</Text>
                      </View>
                      <View style={styles.otdo}>
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN1}
                          value = {this.state.iin1}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN2}
                          value = {this.state.iin2}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN3}
                          value = {this.state.iin3}
                        />
                        <TextInput  style={styles.textInput4} 
                          maxLength={3}
                          keyboardType="number-pad"
                          onChangeText={this.handleIIN4}
                          value = {this.state.iin4}
                        />
                      </View>
                    </View>
                    <View style={styles.header3}>
                      <View style={styles.head_title}>
                        <Text style={styles.text3}>Номер прав</Text>
                      </View>
                      <View style={styles.otdo2}>
                        <TextInput  style={styles.textInput4} 
                          maxLength={2}
                          autoCapitalize="characters"
                          onChangeText={this.handlePrava1}
                          value = {this.state.prava1}
                        />
                        <TextInput  style={styles.textInput5} 
                           maxLength={4}
                           keyboardType="number-pad"
                           onChangeText={this.handlePrava2}
                           value = {this.state.prava2}
                        />
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.button2} onPress={this.Save}>
                        <Text style={{color:'#fff'}}>Сохранить</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.header4}>
                    <View style={styles.loginButtonSection}>
                      <TouchableOpacity style={styles.button} >
                        <Text style={{color:'#fff'}}>Войти как партнер</Text>
                      </TouchableOpacity>
                    </View>
                    </View>
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={() => null} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView> */}
          </View>
</TouchableWithoutFeedback>
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
    pred_content: {
        paddingLeft: 30,
        paddingRight: 19,
    },
    content: {
        // backgroundColor: 'black',
        marginBottom: '3%',
        flexDirection: 'row',
        width: 280,

    },
    avatar: {
      width: 120,
      height: 120,
  },
    // loginButtonSection: {
    //     width: 220,
    //     height: 40,
  
    //     width: '100%',
    //     height: '30%',
    //  },
     btnVoiti: {
        fontSize: 16
    //    marginLeft:30,
        // justifyContent: 'center',
        // alignItems: 'center',
     },
    img_car: {
        width: 107,
        height: 106,
    },
    info: {
      marginTop: '2%',
        marginLeft: '4%',
        // marginTop: 5,
        // backgroundColor: 'red',
        width: '65%'

        // marginRight: 60,
    },
    button2: {
      alignItems: "center",
      backgroundColor: "#000000",
      marginTop: '4%',
      padding: '3.5%'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10
    },
    head_title: {
      // backgroundColor: 'red',
      width: 100
        // marginTop: 12  
        // marginRight: '10%'
      
    },
  //   head_title2: {
  //     // marginTop: 12  
  //     marginRight: '10%'

  // },
    header: {
        // borderWidth: 1,
        flexDirection: 'row',
        // paddingBottom: 15,
        // justifyContent: 'space-around',
        marginBottom: '4%',
        //  backgroundColor: 'red',
        //  width:250,
        //  marginLeft:40
    },
    header2: {
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: '4%',
        // height: 30,
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    header3: {
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: '4%',
        // height: 40,
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    header4: {
        // borderWidth: 1,
        // flexDirection: 'row',
        // paddingBottom: 10,
        bottom: 0,
        position: 'absolute',
        marginBottom: '15%',
        // height: 40,
        width: 220,
        // alignItems: 'center',
        marginLeft: '18%',
        
        
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    otdo: {
        // marginLeft: 63,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: 170
    },
    otdo2: {
        // marginLeft: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: 80,
        marginLeft: '0.7%'


        
    },
  
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      },
    //   header: {
    //     fontSize: 36,
    //     marginBottom: 48
    //   },
      textInput: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 6
      },
      textInput2: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 27,
        marginBottom: 6,
        textAlign: 'center',
        marginLeft: '4%'
      },
      textInput3: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 6,
        width: 35,
        textAlign: 'center',
        marginLeft: '4%'

      },
      textInput5: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 35,
        marginBottom: 6,
        marginLeft: '4%',
        textAlign: 'center',
        // backgroundColor: 'red'
      },
      textInput4: {
        // height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        width: 33,
        marginBottom: 6,
        marginLeft: '4%',
        textAlign: 'center',
        // backgroundColor: 'red'
      },
      text3: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    btnContainer: {
        backgroundColor: "#fff",
        marginTop: 12
    },
    notice: {
      position: 'absolute',
      top: 50,
      textAlign: 'center',
      fontSize: 14,
      fontFamily: 'Roboto',
      left: '10%',
      color: '#ff0000',
      width: '80%',
    },
    hide: {
      display: 'none'
    },
});
export default VKP;