import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

const PlaceholderImage = require('D:/Projects/AD340/PersonalPortfolio/assets/shibainu.png');

export default function ContactPage() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={{fontSize: 50, paddingBottom:20}}>Contact page</Text>
      <Text style={{fontSize:20,paddingBottom:5}}>Name: Xinran Zhang</Text>
      <Text style={{fontSize:20,paddingBottom:5}}>Phone number: (206)000-0000</Text>
      <Text style={{fontSize:20,paddingBottom:5}}>Email: abcd@gmail.com </Text>
      <Link replace href={"/HomePage"} style={{fontSize:20, paddingTop:50}}>Back to Home Page</Link>
      <StatusBar style="auto" />
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
    width: 120,
    height: 120,
    borderRadius: 18,
  },
});
