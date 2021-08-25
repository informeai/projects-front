import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
const ContentAddPassword = ({state}) => {

  return (
    <View style={styles.container}>
      <Input title="title" keyboard="default" secure={false} value={state.title.input} onChangeText={state.title.setInput} />
      <Input title="website" keyboard="url" secure={false} value={state.site.input} onChangeText={state.site.setInput}/>
      <Input title="password" keyboard="default" secure={true} value={state.pass.input} onChangeText={state.pass.setInput}/>
    </View>
  )
}

const Input = ({ title, keyboard, secure, value,onChangeText }) => {
	
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboard}
        autoCorrect={false}
        secureTextEntry={secure}
        clearButtonMode="while-editing"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#777'
  },
  input: {
    marginTop: 10,
    marginBottom: 25,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#777'
  }
})
export default ContentAddPassword
