import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import  Snackbar from '../components/SnackBar';
import { API_URL } from '../prefix/index';

const CreateScreen = () => {
    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [person, setPerson] = useState({
        name: '',
        job: '',
      });
    
    const updateName = (e) => {
        setPerson({ ...person, name: e });
    };

    const updateJob = (e) => {
        setPerson({ ...person, job: e });
    };


    const clearFields = ()=>{
        setPerson({ ...person, job: '', name:'' });
    }

    const handlePostRequest = async () => {
    try {
        if(!person.name || !person.job){
            setSnackbarMessage('All fields required')
            setTimeout(() => {
                setSnackbarMessage(null)
            }, 2000);
            return
        }

        const response = await fetch(API_URL+'users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        });

        if (response.ok) {
            const res = await response.json();
        
            const message = `Created at: ${res.createdAt}\nID: ${res.id}\nJob: ${res.job}\nName: ${res.name}`;
            setSnackbarMessage(message);
        
            setTimeout(() => {
                setSnackbarMessage(null)
            }, 2000);
            console.log('Response:', res);
            clearFields()
        } else {
            console.log('Error:', response.status);
        }
    } catch (error) {
        console.log('Error:', error);
    }
    };

    return (
    <View style={styles.container}>
        <Text style={{fontWeight:'bold', textAlign:'center', fontSize:20, marginVertical:20}} >Create</Text>
        <TextInput
            value={person.name}
            style={styles.input}
            placeholder="Name"
            onChangeText={updateName}
        />
        <TextInput
            value={person.job}
            style={styles.input}
            placeholder="Job"
            onChangeText={updateJob}
        />

        <View style={{
                padding:10,
            }}>
            <Button title="Save" color='blue' onPress={handlePostRequest} />
        </View>
        {snackbarMessage && <Snackbar message={snackbarMessage} />}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:20
    },
    input: {
        borderRadius:5,
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
    },
    errorLabel: {
        color: 'red',
        marginBottom: 10,
        padding:10
    },
    inputError: {
        borderColor: 'red',
    },
})

export default CreateScreen;
