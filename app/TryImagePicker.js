import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


const PlaceholderImage = require('D:/Projects/AD340/PersonalPortfolio/assets/shibainu.png');

export default function TryImagePicker() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage} 
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={{fontSize:30, paddingBottom:20, color: '#fff'}}>Play with Expo Component</Text>
        <Text style={{fontSize:20,paddingBottom:5, color: '#fff'}}> -- Image Picker</Text>
        <Text style={{fontSize:20,paddingBottom:5, color: '#fff'}}>Choose a photo to replace above image</Text>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label={'Choose a photo'} onPress={pickImageAsync} />
        <Button label={'Use this photo'} />
      </View>


      <Link replace href={"/HomePage"} style={{fontSize:20, paddingTop:50, color: '#fff'}}>Back to Home Page</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop:58,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
