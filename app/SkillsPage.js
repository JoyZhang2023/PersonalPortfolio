import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, paddingBottom:20}}>Skills</Text>
      <View style={{textAlign:'left'}}>
        <Text style={{fontSize:25, fontWeight:'bold', paddingBottom:5}}>Programing Language:</Text>
        <Text style={{fontSize:25, paddingBottom:15}}>Python, Java, JavaScript</Text>
        <Text style={{fontSize:25, fontWeight:'bold', paddingBottom:5}}>Account and Tax Software:</Text>
        <Text style={{fontSize:25, paddingBottom:15}}>Quickbooks, Lacerte, ATX</Text>
      </View>
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
});
