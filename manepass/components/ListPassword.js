import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

// Tile is component internal of FlatList.
const Tile = ({item,onDelete}) => {
	const btnDelete = (item) =>{

		return(
			<TouchableOpacity
			 onPress={onDelete} 
			 style={styles.deleteContainer}>
			<Ionicons name="md-trash" size={30} color="red" />
			</TouchableOpacity>
		)
	}

  return (
  	<Swipeable
		renderRightActions={()=>btnDelete(item)}

  	>
    <View style={styles.containerTile}>
      <View style={styles.imageTile}>
        <TouchableOpacity>
          <Ionicons
            name="eye-outline"
            size={30}
            color="#999"
            onPress={() => alert(item.pass)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitleAndSite}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.site} ellipsizeMode="tail" numberOfLines={1}>
          {item.site}
        </Text>
      </View>
      <Ionicons
        name="md-copy-outline"
        size={30}
        color="#999"
        onPress={() => console.log(item.pass)}
      />
    </View>
    </Swipeable>
  )
}
//Component ListPassword is return FlatList.
const ListPassword = ({store}) => {
  const [passwords, setPasswords] = React.useState(store)
  
	
	const deleteItem = (index) =>{
		const arr = [...passwords]
		arr.splice(index,1)
		setPasswords(arr)
	}
  
  return (
    <View style={styles.container}>
      <FlatList
        data={passwords}
        keyExtractor={item => item.id}
        renderItem={({item,index}) => {
        		return <Tile item={item} onDelete={()=>deleteItem(index)}/>;
        	}
        }
      ></FlatList>
    </View>
  )
}
//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10,
    alignSelf: 'stretch',
    backgroundColor: '#111'
  },
  deleteContainer:{
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor: '#111',
  	width: 50,
  	paddingBottom: 10,
  	paddingLeft: 5,
  },
  containerTile: {
    marginBottom: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageTile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 10
  },
  containerTitleAndSite: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  site: {
    color: '#999',
    letterSpacing: -1,
    flexWrap: 'wrap'
  }
})

export default ListPassword
