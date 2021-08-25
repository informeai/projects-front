import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import uuid from 'react-native-uuid'
const screen = Dimensions.get('screen')
const HeaderAddPassword = ({ navigation,store,state }) => {

const savePassword = ()=>{
	let title = state.title.input;
	let site = state.site.input;
	let pass = state.pass.input;

	if (title !== '' && site !== '' && pass !== ''){
		let password = {
			id : uuid.v4(),
			title,
			site,
			pass,
		}
		store.push(password)
		//clear state
		state.title.setInput = ''
		state.site.setInput = ''
		state.pass.setInput = ''
		
		navigation.goBack()
	}else{
		alert('required all input !')
	}
	
	
}
  return (
    <View style={styles.container}>
      <AntDesign
        name="closecircleo"
        size={27}
        color="#999"
        onPress={() => navigation.pop()}
      />
      <Text style={styles.text}> Add a Password </Text>
      <Ionicons
        name="checkmark-circle-outline"
        size={32}
        color="green"
        onPress={() => savePassword()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#111',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: '600'
  }
})

export default HeaderAddPassword
