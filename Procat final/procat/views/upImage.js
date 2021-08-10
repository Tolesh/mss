import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
// import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';

export default function upImage() {
    const [pickedImagePath, setPickedImagePath] = useState('');

    state = {
      LocalImage:[],
      multipleUrl:[]
      }
      componentDidMount = () => {
         this.getPermissionAsync()
      }
      getPermissionAsync = async () => {
           if (Constants.platform.ios) {const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
               alert('Sorry, we need camera roll permissions to make this work!')
            }
      }
      }
      _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          allowsEditing: true,
          aspect: [4, 3],
        })
      let imageUri = pickerResult ?   `data:image/jpg;base64,${pickerResult.base64}` : null
         imageUri && {uri: imageUri}
         this.state.multipleUrl.push(imageUri)
          this.setState({
      LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
      })
      }
      _takePhoto = async () => {
      const {
      status: cameraPerm
      } = await Permissions.askAsync(Permissions.CAMERA)
      const {
      status: cameraRollPerm
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      // only if user allows permission to camera AND camera roll
      if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
           base64: true,
           allowsEditing: true,
           aspect: [4, 3],
      })
      if (!pickerResult.cancelled) {
         let imageUri = pickerResult ?     `data:image/jpg;base64,${pickerResult.base64}` : null
      this.state.multipleUrl.push(imageUri)
      this.setState({
      LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
          })
      }
       }
      }
      _renderImages = () => {
        let images = []
        this.state.LocalImage.map((item, index) => {
           images.push(
             <Image  key={index} source={{ uri: item }}  style={{ width:   100, height: 100 }} />
             )
           })
        return images
      }
    // const showImagePicker = async () => {
    //   // Ask the user for the permission to access the media library 
    //   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    //   if (permissionResult.granted === false) {
    //     alert("You've refused to allow this appp to access your photos!");
    //     return;
    //   }
  
    //   const result = await ImagePicker.launchImageLibraryAsync();
  
      
    //   console.log(result);
  
    //   if (!result.cancelled) {
    //     setPickedImagePath(result.uri);
    //     console.log(result.uri);
    //   }
    // }
  
    // // This function is triggered when the "Open camera" button pressed
    // const openCamera = async () => {
    //   // Ask the user for the permission to access the camera
    //   const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
    //   if (permissionResult.granted === false) {
    //     alert("You've refused to allow this appp to access your camera!");
    //     return;
    //   }
  
    //   const result = await ImagePicker.launchCameraAsync();
  
    //   // Explore the result
    //   console.log(result);
  
    //   if (!result.cancelled) {
    //     setPickedImagePath(result.uri);
    //     console.log(result.uri);
    //   }
    // }
  
 
    return (
        <View style={styles.screen}>


           <View style={styles.buttons}>
                 <Button title="Pick an image from camera roll"  onPress={this._pickImage}/>
           </View>
           <View style={styles.buttons}>
                 <Button onPress={this._takePhoto} title="Take a photo" />
           </View>
           
            <View style={styles.containers}>
              {this._renderImages()}
             </View>

{/* 
            <View style={styles.imageContainer}>
            {
              pickedImagePath !== '' && <Image
                source={{ uri: pickedImagePath }}
                style={styles.image}
              />
            }
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.price} onPress={showImagePicker}>
          <Text style={styles.price_text}>Добавить фото</Text>
        </TouchableOpacity>
     
          </View> */}
           {/* <Button onPress={showImagePicker} title="Select an image" />
            <Button onPress={openCamera} title="Open camera" /> */}
          
        </View>
      );
    }
    // export default upImage;

const styles=StyleSheet.create({
    screen: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red'
        // justifyContent: 'center',
        // alignItems: 'center',
        
      },
      buttonContainer: {
        width: 270,
        height: 60,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        marginBottom: '10%',
      },
      
      imageContainer: {
        
        // marginLeft: '10%'
      },
      image: {
        width: 100,
        height: 100,
        // marginRight: '100.5%',
        // marginTop: '50%'
        // marginBottom: '50.5%',
        // resizeMode: 'cover'
      },
      price: {
        // position: 'absolute',
        // right: 0,
        // justifyContent: 'space-between',
        // paddingBottom: 5,
        // flexDirection: 'row',
        // alignItems: 'flex-end',
        // backgroundColor: 'red',
        // paddingTop: '25%',
        // flexDirection: 'column'
    },
    price_text: {
        // color: 'white',
        fontSize: 15,
        marginTop: '15%',
        // marginRight: '30%',
        fontWeight: 'bold',
        marginLeft: '45%'
    },
})