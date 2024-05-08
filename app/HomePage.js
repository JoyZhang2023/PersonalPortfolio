import { Link, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const PlaceholderImage = require('D:/Projects/AD340/PersonalPortfolio/assets/shibainu.png');

export default function HomePage() {
  return (
    <View style={styles.container}>

      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      
      <Text style={{fontSize: 40, paddingTop:20, paddingBottom:20}}>Home Page</Text>
      <Link href={"/ContactPage"} style={{fontSize:20, paddingBottom:5}}>Contact</Link>
      <Link href={{
          pathname:"/ProjectsPage",
          params: {id: 'Business Card'}
        }} style={{fontSize:20, paddingBottom:5}}>
        Project 1 : Business Card
      </Link>
      <Link href={{
          pathname:"/ProjectsPage",
          params: {id: 'Recipe Gallery'}
        }} style={{fontSize:20, paddingBottom:5}}>
        Project 2 : Recipe Gallery
      </Link>
      <Link href={"/SkillsPage"} style={{fontSize:20, paddingBottom:5}}>Skills</Link>
      <Link href={"/TryImagePicker"} style={{fontSize:20, paddingBottom:5}}>Try Out</Link>

        
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
  image: {
    width: 220,
    height: 240,
    borderRadius: 18,
  },
});
