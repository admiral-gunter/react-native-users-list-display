import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const Card = ({  navigation,id,imgUrl, firstName, lastName, email }) => {

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
  <TouchableHighlight
    onPress={() => navigation.navigate('Details', { id })}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    underlayColor="transparent" // No underlay color
    style={styles.buttonContainer}
  >
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
    </TouchableHighlight>
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
