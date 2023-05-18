import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const AboutScreen = () => {
  const [colors, setColors] = useState(['#FF00FF', '#00FFFF']);
  const positions = useRef([
    new Animated.ValueXY({ x: 0, y: 0 }),
    new Animated.ValueXY({ x: 0, y: 0 }),
  ]).current;
  const duration = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prevColors => {
        const updatedColors = [...prevColors];
        const firstColor = updatedColors.shift();
        updatedColors.push(firstColor);
        return updatedColors;
      });
    }, duration * 4);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const animations = positions.map((position, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(position, {
            toValue: { x: 200, y: 0 },
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(position, {
            toValue: { x: 200, y: 200 },
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(position, {
            toValue: { x: 0, y: 200 },
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 }
      )
    );

    animations.forEach(animation => animation.start());

    return () => {
      animations.forEach(animation => animation.stop());
    };
  }, [positions]);

  return (
    <View style={styles.container}>
      {positions.map((position, index) => (
        <Animated.View
          key={index}
          style={[
            styles.circle,
            { transform: position.getTranslateTransform() },
            { backgroundColor: colors[index] },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default AboutScreen;
