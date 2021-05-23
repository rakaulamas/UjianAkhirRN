import React, { Component } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image source></Image>
                    <Button title='Login' style={styles.button} >Login</Button>
                    <Button title='Register' style={styles.button}>Register</Button>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        width: 200,
    },
    text: {
        textAlign: 'center',
        borderWidth: 5,
    },
    image: {
        width: 200,
        height: 200
    }
});

