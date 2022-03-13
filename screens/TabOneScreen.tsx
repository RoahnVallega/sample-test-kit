import React from "react";
import {StyleSheet,View,Text, TextInput,TouchableOpacity, Image} from  "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source = {{uri:'https://i1.sndcdn.com/artworks-000505868481-hdd64e-t500x500.jpg'}}
      style={styles.imageIcon}/>
      <Text style={styles.Login}>Welcome! Stand-User</Text>
      <TextInput style={styles.inputText}
        placeholder= "Enter Username"
      />
      <TextInput style={styles.inputText}
        placeholder= "Enter Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.basictext}>No Account yet?</Text>
      <TouchableOpacity style={styles.btnSignUp}>
        <Text style={styles.btnText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000000',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'poppins-regular'
},
Login: {
 fontSize: 30,
  textAlign: 'center',
  margin: 18,
  fontFamily: 'poppins-bold',
  color: 'white'
},
inputText:{
  width: "90%",
  backgroundColor:'#FFFFFF',
  padding: 15,
  marginBottom: 10,
  color: '#333D29'
},
btnLogin: {
  backgroundColor: '#FFFF00',
  padding: 15,
  width: '45%',
  justifyContent: 'center',
  marginBottom: 30
},
btnSignUp: {
  backgroundColor: '#808000',
  padding: 15,
  width: '30%',
  justifyContent: 'center'
},
btnText: {
  fontSize: 16,
  textAlign: 'center',
  color: '#0f0f0f',
  fontFamily: 'poppins-bold'
},
imageIcon: {     
  width: 100, 
  height: 100 
},
basictext: {
  fontFamily: 'poppins-semi-bold'
}
});