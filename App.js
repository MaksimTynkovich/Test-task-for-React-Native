import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, TouchableWithoutFeedback, Text, View, Image, Button, TouchableOpacity } from 'react-native';
// import Highlighter from 'react-native-highlight-words';
import {BottomPopup} from './src/BottomPopup.js'

export default function App() {
  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#000"}} >
      <View style={{ flex: 1}} >
      <Image
        style={{marginTop: 50}}
        source={require('./assets/element2.png')}
      />
      </View>
      <View style={{ flex: 1}} >
      <Image
        style={{marginTop: -110, marginStart: -40, width: 180, flex: 1}}
        source={require('./assets/glav.png')}
      />
      </View>
      <View style={{marginTop: 50,}} >
      <Image
        style={{}}
        source={require('./assets/sign.png')}
      />
      </View>
      </View>
      <View style={{ height: 130, backgroundColor: '#000' }} >
        <Text style={styles.suptitle}>Be local everywhere</Text>
        <Text style={styles.title}>This is the best self-guided tour app {"\n"} designed for your trip needs</Text>
        <Text style={styles.subtitle}>Login via</Text>
      </View>
      <View style={{ flex: 3, alignItems: 'center', backgroundColor: '#000' }} >
        <TouchableOpacity style={styles.btn_container}>
          <Text style={styles.btn}>google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_container}>
          <Text style={styles.btn}>apple</Text>
        </TouchableOpacity>
        <StatusBar barStyle="dark-content"/>
   <SafeAreaView>   
     <TouchableOpacity onPress={onShowPopup} style={[styles.btn_container, styles.btn_login_container]}>
     <Text style={[styles.btn, styles.login]}>login/signup</Text>
     </TouchableOpacity>
     <BottomPopup
        ref={(target) => popupRef = target} 
        onTouchOutside={onClosePopup}
     />
      
   </SafeAreaView>
  
        <Text style={styles.skip}>Skip</Text>
        {/* <Text style={styles.policy}>By signing into CityTrails, you are {"\n"} agreeing to our <Highlighter
      highlightStyle={{color: 'red'}}
      searchWords={['Privacy', 'Policy']}
      textToHighlight="Privacy Policy"/></Text> */}

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  suptitle: {
    fontSize: 24,
    marginBottom: 8,
    color: "#fff",
    textAlign: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
    textAlign: "center"
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontWeight: '500',
    fontSize: 18,
  },
  btn_container: { 
    marginTop: 20,
    height: 64,
    width: 335,
    borderRadius: 25,
    backgroundColor: "#fff", 
    alignItems: 'center',
    justifyContent: 'center' 
  },
  btn: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  login: {
    color: "#fff"
  },
  btn_login_container: {
    backgroundColor: "#2AB009"
  },
  skip: {
    marginTop: 26,
    color: '#fff',
    fontWeight: "600"
  },
  policy: {
    marginTop: 30,
    color: "#fff",
    fontSize: 11,
    textTransform: "uppercase",
    lineHeight: 18,
  }
});