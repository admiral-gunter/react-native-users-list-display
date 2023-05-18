import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, ImageBackground } from 'react-native';

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
    <View style={styles.container} >
      <Animated.View style={[styles.contentContainer, animatedStyles]}>
        <Image source={{uri:'https://www.its.ac.id/wp-content/uploads/2021/10/logo-kominfo-transparent.png'}} style={styles.profileImage} />
        <Text style={styles.name}>About Us</Text>
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur interdum libero, nec fringilla velit feugiat sit amet. Vivamus vitae massa eget urna efficitur gravida. Integer pharetra, libero eu cursus convallis, diam nisl placerat felis, auctor posuere elit ipsum vel risus. Morbi in sapien purus. Sed in nunc risus. Etiam facilisis tincidunt quam, sit amet tempor nibh dapibus ac. Nunc eleifend, sem ut aliquet interdum, mauris neque facilisis dui, ut faucibus justo urna ut purus. Nunc in ligula eu lectus consectetur sagittis. Nullam tristique odio at sem sollicitudin, in elementum ligula luctus. Mauris eu diam pulvinar, consequat enim eget, fermentum metus. Pellentesque finibus dapibus velit sed aliquam. Proin id nunc vel risus scelerisque consectetur.
        </Text>

        <View>

        </View>
      </Animated.View>
    </View>
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
});

export default AboutPage;
