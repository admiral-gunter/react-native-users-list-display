import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('List Users');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleTabPress('List Users')} style={styles.tab}>
        <Icon name="bars" size={20} color={activeTab === 'List Users' ? 'blue': 'black'} />
        <Text style={[styles.tabText, activeTab === 'List Users' && styles.activeTabText]}> List Users</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('New')} style={styles.tab}>
        <Icon name="plus" size={20} color={activeTab === 'New' ? 'blue': 'black'} />
        <Text style={[styles.tabText, activeTab === 'New' && styles.activeTabText]}>New</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('About')} style={styles.tab}>
        <Icon name="info" size={20} color={activeTab === 'About' ? 'blue': 'black'} />  
        <Text style={[styles.tabText, activeTab === 'About' && styles.activeTabText]}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    color: 'black',
  },
  activeTabText: {
    color: 'blue',
  },
});

export default BottomNav;
