import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import HeaderHome from '../components/HeaderHome.js'
import ListPassword from '../components/ListPassword.js'
import listPasswords from '../repository/Store.js'
import { useIsFocused } from '@react-navigation/native';

const storeContext = React.createContext(listPasswords)

const Home = ({ navigation }) => {
	const store = React.useContext(storeContext)
	useIsFocused()
	React.useEffect(()=>{},[store])
  return (
    <View style={styles.container}>
      <HeaderHome navigation={navigation} store={store} />
      <ListPassword store={store} />
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

export default Home
