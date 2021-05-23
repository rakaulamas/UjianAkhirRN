import React, { Component } from 'react'
import { SafeAreaView, Text, Button, StyleSheet ,View } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}> Login </Text>
                {/* <View style={{flexDirection:'row'}}>
                    <TextInput placeholder="Name" style={styles.input} onChangeText={(value)=>{this.props.UserAction("name",value)}}></TextInput>
                </View> */}
                <View style={{flexDirection:'row'}}>
                    <TextInput placeholder="Email" style={styles.input}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput placeholder="Phone" style={styles.input} ></TextInput>
                </View>
                {/* <View style={{flexDirection:'row'}}>
                    <TextInput placeholder="Address" style={styles.input} onChangeText={(value)=>{this.props.UserAction("address",value)}}></TextInput>
                </View> */}
                <View style={{flexDirection:'row'}}>
                    <Button title='Cancel' ></Button>
                    <Button title='Submit' ></Button>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:"row",
        // justifyContent: 'center',
        alignItems: 'center',
        // justifyContent:'space-between'
    },
    button: {
        padding: 10,
        // width: 200,
        // flexDirection:"row",
    },
    text: {
        textAlign: 'center',
        // borderWidth: 5,
        fontSize: 40,
        fontWeight: "bold",
        // justifyContent:'space-between'
    },
    image: {
        width: 200,
        height: 200
    },
    input: {
        borderWidth: 2,
        // width: 500,
        flex: 1, 
        marginTop:50
        // flexWrap: 'wrap'
    }
});