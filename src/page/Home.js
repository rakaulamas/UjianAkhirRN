import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet,View } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text style={styles.textStyle}> Login</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Register')}}>
                     <Text style={styles.textStyle}> Register </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 10,
        borderColor:"orange",
        padding:15,
        margin: 20
    },
    
    textStyle:{
        textAlign: 'center',
    }
    

})