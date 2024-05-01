import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button ({ label }) {
    return (
        <View style = {styles.buttoncontainer}>
            <Pressable style={styles.button} onPress={()=> alert('Get up to work!')}>
                <Text style={styles.buttonlabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });