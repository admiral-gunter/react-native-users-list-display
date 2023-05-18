import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import  Snackbar from '../components/SnackBar';

const CreateScreen = () => {
    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [person, setPerson] = useState({
        name: null,
        job: null,
      });
    
      const updateName = (e) => {
        console.log(e)
        setPerson({ ...person, name: e });
      };
    
      const updateJob = (e) => {
        setPerson({ ...person, job: e });
      };
    const handlePostRequest = async () => {
    try {

        console.log(person)
        return
        const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'John Doe',
            job: 'Software Developer',
        }),
        });

        if (response.ok) {
            const res = await response.json();
        
            const message = `Created at: ${res.createdAt}\nID: ${res.id}\nJob: ${res.job}\nName: ${res.name}`;
            setSnackbarMessage(message);
        
            setTimeout(() => {
                setSnackbarMessage(null)
            }, 2000);
            console.log('Response:', data);
        } else {
            console.log('Error:', response.status);
        }
    } catch (error) {
        console.log('Error:', error);
    }
    };

    return (
    <View style={styles.container}>
        <Text style={{fontWeight:'bold', textAlign:'center', fontSize:20}} >Create</Text>
        <TextInput
        style={styles.input}
            placeholder="Name"
            onChangeText={updateName}
        />
        <TextInput
        style={styles.input}
            placeholder="Job"
            onChangeText={updateJob}

        />
        <Button title="Save" style={{width:10}} onPress={handlePostRequest} />
        {snackbarMessage && <Snackbar message={snackbarMessage} />}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:50
    },
    input: {
        borderRadius:5,
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
    },
})

export default CreateScreen;
