import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Splash extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Github App</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f0f1f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  }
})
