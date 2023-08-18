import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import SearchInput from './component/Search';
import Category from './component/Category';
import Post from './component/Post';

export default function App() {

  const [search, setSearch] = useState("");

  const searchVal = (value) => {
    setSearch(value);
  }

  return (
    <SafeAreaView style={styles.container}>

      <SearchInput placeholder='Search with post title' searchValue={searchVal} />
      {/*//Search Input End*/}

      <Category />
      {/*Category View End*/}
      
      <Post searchValue = {search} />
      {/*Post View End*/}
   
      {/*<StatusBar style="auto" />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingVertical: 40,
    fontFamily: 'serif',
  },
 
});
