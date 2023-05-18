import React, {useEffect, useState} from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation,route}) => {
  console.log(route.params.id)
  const [data, setData] = useState([]);
  const [support, setSupport] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/'+route.params.id);
        const jsonData = await response.json();
        setData(jsonData['data']);
        setSupport(jsonData['support']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image 
              style={styles.image}
              source={{uri:data.avatar}}
          />
        <View>
          <Text style={styles.highTextTitle}>{data.first_name} {data.last_name}</Text>
          <Text>{data.email}</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical:20 }} />

      <Text style={styles.highTextTitle}>Support</Text>
      <Text>{support.text}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{padding:10},
  subContainer:{paddingBottom:10,justifyContent:'space-between', flexDirection:'row'},
  image: {
    width: 200,
    height: 200,
    borderRadius:5
  },
  highTextTitle:{
    fontSize:20,
    fontWeight:'bold'
  }
})

export default DetailsScreen;
