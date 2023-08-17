import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function App() {

  const categories = ["Health and fitness", "Photography", "Travel", "Food", "Fashion and Beauty", "DIY craft"];
  const posts = [
    {
      title: '10 best free photo editing software',
      image: 'photography.png'
    },
    {
      title: 'Fried tofu with mixed grains',
      image: 'food.png'
    },
    {
      title: 'Crochet Basic',
      image: 'diy.png'
    },
    {
      title: 'Upcoming movies and trailers',
      image: 'movie.png'
    }
  ];
  const [search, setSearch] = useState("");

  const postFilters = posts.filter((post) => lowerCase(post.title).includes(lowerCase(search)));
  function lowerCase(item) {
    return item.toLocaleLowerCase().trim();
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchBarWrapper}>
        <TextInput
          style={styles.search}
          placeholder='Search with Post Title'
          value={search}
          onChangeText={setSearch}
        />        
        <Text
          style={ search ? styles.d_block : styles.d_none }
          onPress={ ()=> setSearch("") }> 
          <Feather name="x" size={20} color="#55d6c5" />
        </Text>
      </View>      
      {/*Search Input View End*/}
      
      <View style={ {marginBottom:20} }>  
        <Text style={styles.header}> Categories </Text>
        <ScrollView horizontal={true}> 
          {
            categories.map((category) => {
              return ( <Text style={styles.category}> {category }</Text> )
            })
          }
        </ScrollView>
      </View>
      {/*Category View End*/}

      <View style={ {marginBottom:20} }> 
        <Text style={styles.header}> Posts </Text>
        <ScrollView style={{height:500}} showsVerticalScrollIndicator={false}> 
          {
            postFilters.map((post) => {
              
              const image = "diy.png";
              //const image = post.image;
              return ( 
                <View style={styles.card}>
                  <View style={styles.cardImage}>
                    <Image
                      style={styles.image}
                      source={require(`./assets/image/${image}`)}
                    />
                  </View>
                  <Text style={styles.cardTitle}> {post.title} </Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
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

  d_none: {
    width: 0,
    height: 0,
    opacity:0.
  },
  d_block: {
    flex: 1,
  },

  searchBarWrapper: {
    padding: 10,
    flexDirection: "row",
    width:'90%',
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

  header: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 20,
  },

  category: {
    backgroundColor: "#55d6c5",
    marginBottom: 5,
    borderRadius: 5,
    padding: 10,
    marginLeft: 15,
  },
  card: {
    marginBottom: 34,
    paddingHorizontal: 10,
  },
  cardImage: {
    height: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    color: "#131314",
    marginTop: 3,
  },
  
});
