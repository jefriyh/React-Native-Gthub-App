import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Splash extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Github App</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by Code Indonesia</Text>
        </View>
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
  },
  subtitle: {
    fontWeight: '200',
    color: 'white',
    paddingBottom: 20
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  }
})
