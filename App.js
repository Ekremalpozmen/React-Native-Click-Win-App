import React, { useState } from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image,Alert } from "react-native";
import CountDown from 'react-native-countdown-component'
import {
  AdMobBanner,
  AdMobInterstitial,
} from 'react-native-admob'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {

const [count, setCount] = useState(0);
const [ID, setID] = useState('1');
  const onPressPlus = () => setCount(prevCount => prevCount + 1);
  const onPressMinus = () => setCount(prevCount => prevCount - 1);
  const Restart = () => setCount(prevCount => prevCount=0);
 
  if (count == 3) {
    
    Alert.alert(
      "ARTI KAZANDI",
      "PUAN SIFIRLA VE HEMEN YENİDEN BAŞLA",
      [
       
        { text: "YENİ OYUN", onPress: (Restart) }
      ],
      { cancelable: false }
    );
  }

  if (count == -3) {
    Alert.alert(
      "EKSİ KAZANDI",
      "PUAN SIFIRLA VE HEMEN YENİDEN BAŞLA",
      [
       
        { text: "YENİ OYUN", onPress: (Restart) }
      ],
      { cancelable: false }
    );
  }

  const changeID = () => setID(Math.random().toString());

  return (
    <View style={styles.container}>
    
      <View>
      
        <TouchableOpacity
          style={styles.button}
          onPress={onPressMinus}>
          <Image
            style={styles.LogoMinus}
            source={require('./src/images/minus.png')} />
        </TouchableOpacity>
      </View>

      <View>
      
      </View>

      <View style={styles.countContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={changeID } >
            <View>
           
         <Text style={{fontSize:30 ,fontStyle:'italic',fontWeight:'bold'}}>SÜREYİ BAŞLAT</Text>
         </View>
        </TouchableOpacity>
        <CountDown
      	id={ID}
        size={40}
        until={5}
        onPress={() => {
          AdMobInterstitial.setAdUnitID('ca-app-pub-4305666332653746/1440377510');
AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
        }}
        digitStyle={{ }}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        timeToShow={['S']}
        timeLabels={{m: null, s: null}}
        
      />
         <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-4305666332653746/2497474164"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
/>
        <Text style={styles.textstyle}>Puan: {count}</Text>
      </View>

      

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressPlus} >
          <Image
            style={styles.LogoPlus}
            source={require('./src/images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor:'#e9e9e9'

  },
  button: {
    alignItems: "center",
    padding: 6
  },
  countContainer: {
    alignItems: "center",
    padding: 6,
    
  },
  textstyle:{
    fontSize:40,
    fontWeight:'bold',
    color:'#583bb8'
  },
  LogoPlus: {
    width: 200,
    height: 200,
  },
  LogoMinus: {
    width: 200,
    height: 200,
  },
  countdown:{
    justifyContent:'center',
    alignItems:'center'
  },
 
});

export default App;
