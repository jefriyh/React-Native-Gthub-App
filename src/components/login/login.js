import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import LoginForm from './loginform.js'

export default class Splash extends Component {
  render () {
    return (
      <View style={styles.container} >
        <View style={styles.logoContainer} >
          <Image style={styles.logo} source={require('../../images/droidtocat.png')} />
          <Text style={styles.title}>An App for Github using React Native</Text>

        </View>

        <View style={styles.formContainer} />

        <LoginForm />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3da8ff',
    flex: 1
  },
  logo: {
    width: 150,
    height: 150
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  title: {
    color: 'white',
    fontWeight: '200'
  }

})
