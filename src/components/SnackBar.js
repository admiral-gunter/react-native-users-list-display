import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Snackbar = ({ message }) => {
const [visible, setVisible] = useState(true);

const hideSnackbar = () => {
setVisible(false);
};

return visible ? (
<View style={styles.snackbarContainer}>
<View style={styles.snackbar}>
    <Text style={styles.snackbarText}>{message}</Text>
    <Button title="Close" style={styles.buttonStyle} onPress={hideSnackbar} />
</View>
</View>
) : null;
};

const styles = StyleSheet.create({
snackbar: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
},
snackbarText: {
    color: '#fff',
    flex: 1,
    marginRight: 10,
},
buttonStyle:{
    backgroundColor: 'palegreen'
},
snackbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
  },
});

export default Snackbar