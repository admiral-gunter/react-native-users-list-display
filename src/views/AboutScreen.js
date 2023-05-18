import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const AboutPage = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyles = {
    opacity: animation,
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <ImageBackground
        source={{uri:'https://i.pngimg.me/thumb/f/720/03651be75a0f4b308138.jpg'}}
        style={{flex:1, height:'50%'}}
    >
      <ScrollView>
        <View style={styles.container} >
          <Animated.View style={[styles.contentContainer, animatedStyles]}>
            <Image source={{uri:'https://www.its.ac.id/wp-content/uploads/2021/10/logo-kominfo-transparent.png'}} style={styles.profileImage} />
            <Text style={styles.name}>About Us</Text>
            <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur interdum libero, nec fringilla velit feugiat sit amet.
            </Text>

            <View
              style={{
                flex:1,
                justifyContent:'center'
              }}
            >
              <View
                style={styles.contactConatiner}
              >

                <Ionicons  name='location-outline' size={30} color='#FFA500' />
                <Text style={{
                  textAlign:'center',
                }}>
                  Jln. Margaciawi Km.10 Jawa Barat
                </Text>
                <Text style={{
                  textAlign:'center',
                  color:'lightblue'
                }}>
                  Open Map
                </Text>
              </View>

              <View
               style={styles.contactConatiner}
              >

                <Ionicons  name='call-outline' size={30} color='green' />
                <Text style={{
                  textAlign:'center',
                }}>
                  (0123) 456789
                </Text>
              </View>

              <View
               style={styles.contactConatiner}
              >

                <Ionicons  name='time-outline' size={30} color='red' />
                <Text style={{
                  textAlign:'center',
                }}>
                  Monday - Friday
                </Text>
                <Text style={{
                  textAlign:'center',
                }}>
                  09.00 - 17.00
                </Text>
              </View>

            </View>

            <Text style={{
                fontSize:18,
                fontWeight:'bold',
                marginVertical:5
            }}>
                Follow Us
            </Text>

            <View
          style={{justifyContent:'space-evenly',flexDirection:'row', gap:10 }}
            >
                <Ionicons  name='logo-facebook' size={30} color='blue' />
                <Ionicons  name='logo-twitter' size={30} color='#1DA1F2' />
                <Ionicons  name='logo-instagram' size={30} color='#8a3ab9' />
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#777777',
  },
  contactConatiner:{
    flex:1,
    alignItems:'center',
    marginVertical:20
  }
});

export default AboutPage;
