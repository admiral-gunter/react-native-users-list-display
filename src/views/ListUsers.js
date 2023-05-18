import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import { API_URL } from '../prefix/index';

const ListUsers = ({navigation}) => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL+'users');
        const jsonData = await response.json();
        setData(jsonData['data']);
        setLoading(false);
      } catch (error) {
        setLoading(false)
        console.error('Error fetching data:', error);
      }
  };

  if(loading){
    return(
    <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text>Loading...</Text>
  </View>)
  }
  return (
    <View style={{backgroundColor:'white'}}>
      <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>List Users</Text>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.listContainer}>
        {
          data.map((item, index)=> {
            return(
              <Card
              navigation={navigation}
                key={index}
                id={item.id}
                email={item.email}
                imgUrl={item.avatar}
                firstName={item.first_name}
                lastName={item.last_name}
                />
            )
          } )
        }
      </View>
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  listContainer: {
    padding: 5,
  },
  item: {

    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListUsers;
