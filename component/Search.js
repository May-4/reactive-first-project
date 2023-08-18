import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import { Feather } from 'react-native-vector-icons';

const SearchInput = ({placeholder='Search',searchValue})=>{ 
 
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchBarWrapper}>
        <TextInput
          style={styles.search}
          placeholder={placeholder}
          value={search}
          onChangeText={setSearch}
          onKeyPress={searchValue(search)}
        />        
        <Text
          style={ search ? styles.d_block : styles.d_none }
          onPress={() => setSearch("") }> 
          <Feather name="x" size={20} color="#55d6c5" />
        </Text>
    </View>      
  )

}
const styles = StyleSheet.create({
  d_none: {
    width: 0,
    height: 0,
    opacity: 0.
  },
  d_block: {
    flex: 1,
  },

  searchBarWrapper: {
    padding: 10,
    flexDirection: "row",
    width: '90%',
    marginHorizontal: "5%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  search: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
})

export default SearchInput;