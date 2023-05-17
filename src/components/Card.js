import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({  imgUrl, firstName, lastName, email }) => {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={{uri:imgUrl}}
        />
        <View style={styles.textLeft}>
            <Text >{firstName} {lastName}</Text>
            <Text style={styles.title}>{email}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 16,
    elevation: 1.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap:20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:15
  },
  textLeft:{
    flex: 1,
    justifyContent: 'flex-start',
  }
});

export default Card;
