import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import ContentAddPassword from '../components/ContentAddPassword.js'
import HeaderAddPassword from '../components/HeaderAddPassword.js'

const AddPassword = ({ navigation, route }) => {
const [inputTitle, setInputTitle] = React.useState('')
const [inputSite, setInputSite] = React.useState('')
const [inputPass, setInputPass] = React.useState('')

const {store} = route.params;
const state ={
	title: {
		input: inputTitle,
		setInput: setInputTitle,
	},
	site: {
		input: inputSite,
		setInput: setInputSite,
	},
	pass:{
		input: inputPass,
		setInput: setInputPass,
	}
}
  return (
    <View style={styles.container}>
      <HeaderAddPassword navigation={navigation} store={store} state={state} />
      <ContentAddPassword state={state} />
      <StatusBar style="hidden" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 30 : 25,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    color: '#999'
  }
})

export default AddPassword
