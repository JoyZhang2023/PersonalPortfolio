import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from '../../ExpoConfigDemo/components/ImageViewer';
import Button from '../../ExpoConfigDemo/components/Button';

const PlaceholderImage = require('./assets/shibainu.png');

export default function HomePage() {
  return (
    <View style={styles.container}>

      <View>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      
      <Text>Home Page</Text>
      <Link href={"/ContactPage"}>Contact Information</Link>
      <Link href={"/ProjectsPage"}>Projects Page</Link>
      <Link href={"/SkillsPage"}>Skills</Link>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
