import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const screen = Dimensions.get('screen')
const HeaderHome = ({ navigation, store }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="setting"
        size={32}
        color="#999"
        onPress={() => console.log('settings')}
      />
      <Text style={styles.text}> Passwords </Text>
      <Ionicons
        name="md-add-circle-outline"
        size={32}
        color="#999"
        onPress={() => navigation.navigate('AddPassword',{store,})}
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
    fontSize: 24,
    color: '#ccc',
    fontWeight: '600'
  }
})

export default HeaderHome
