/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

export default class MyComponent extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.input}
          placeholder='username or email'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus}
          placeholderTextColor='rgba(255, 255, 255, 0.7)' />
        <TextInput underlineColorAndroid='transparent'
          style={styles.input}
          secureTextEntry
          returnKeyType='go'
          ref={(input) => this.passwordInput = input}
          placeholder='password'
          placeholderTextColor='rgba(255, 255, 255, 0.7)' />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    padding: 10,
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: '#373973',
    paddingVertical: 10,
    marginBottom: 10

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'

  }
})
