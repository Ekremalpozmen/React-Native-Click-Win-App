import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CountDown from 'react-native-countdown-component'

export default class App extends Component {
  render() {
    return (
      <View >
      <CountDown
      
        size={40}
        until={5}
        //onFinish={() => alert('Finished')}
        digitStyle={{ }}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        timeToShow={['S']}
        timeLabels={{m: null, s: null}}
      />
      </View>
    )
  }
}
