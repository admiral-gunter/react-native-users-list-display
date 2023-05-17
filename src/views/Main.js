import React from 'react';
import BottomNav from '../components/BottomNav';
import {  View , SafeAreaView, StatusBar} from 'react-native';
import ListUsers from '../views/ListUsers'
const Main = () => {
  return (
        <SafeAreaView style={{ flex: 1,  marginTop:StatusBar.currentHeight }}>
            <ListUsers></ListUsers>
            <BottomNav />
        </SafeAreaView>
  );
}

export default Main;
