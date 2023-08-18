import { StyleSheet, Text, ScrollView, View, } from 'react-native';

const Category = ()=>{ 

  const categories = ["Health and fitness", "Photography", "Travel", "Food", "Fashion and Beauty", "DIY craft"];
  
  return (
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
  )

}
const styles = StyleSheet.create({
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
})

export default Category;