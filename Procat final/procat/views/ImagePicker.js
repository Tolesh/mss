import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,StyleSheet,Text ,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { TouchableOpacity } from 'react-native';

const GLOBAL = require('../views/Globals');

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 95, marginBottom : '4%' }} />}
      {/* <Button title="Добавить аватарку" onPress={pickImage} color="black" fontSize = {10} /> */}
      <TouchableOpacity onPress={pickImage}>
            <Text style={styles.textAva}>Добавить аватар</Text>
      </TouchableOpacity>

      
    </View>
  );
}
const styles = StyleSheet.create({
    textAva: {
     color : 'black',
     fontSize : 12
    },
})
