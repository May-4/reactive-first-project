import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'; 

const Post = (search="") => {

  const posts = [
    {
      title: '10 best free photo editing software',
      image: require('../assets/image/photography.png'),
    },
    {
      title: 'Fried tofu with mixed grains',
      image: require('../assets/image/food.png'),
    },
    {
      title: 'Crochet Basic',
      image: require('../assets/image/diy.png'),
    },
    {
      title: 'Upcoming movies and trailers',
      image: require('../assets/image/movie.png'),
    }
  ];
  const postFilters = posts.filter((post) => lowerCase(post.title).includes(lowerCase(search.searchValue)));
  function lowerCase(item) {
    return item.toLowerCase().trim();
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}> Posts </Text>
      <ScrollView style={{height:500}} showsVerticalScrollIndicator={false}> 
        {
          postFilters.map((post) => {
            
            const image = post.image;
            return ( 
              <View style={styles.card}>
                <View style={styles.cardImage}>
                  <Image
                    style={styles.image}
                    source={image}
                  />
                </View>
                <Text style={styles.cardTitle}> {post.title} </Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
};
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 20,
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
export default Post;
