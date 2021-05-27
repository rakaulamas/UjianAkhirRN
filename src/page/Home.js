import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet,View, Image } from 'react-native'
import { connect } from 'react-redux'

export class Home extends Component {

    handlerLogin(){
        if(this.props.isLogin){
            this.props.navigation.navigate('MainMenu')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    

    render() {
        return (
            <View>
                
                <Image style={{width:250,height:250,alignSelf:'center'}} source={{uri:'https://www.pngkit.com/png/detail/77-778678_detective-logos.png'}} />

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handlerLogin()}}>
                    <Text style={styles.textStyle}> Login</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Register')}}>
                     <Text style={styles.textStyle}> Register </Text>
                </TouchableOpacity>

    
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.LoginReducer.isLogin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 5,
        borderColor:"orange",
        padding:10,
        margin: 10
    },
    
    textStyle:{
        textAlign: 'center',
    }
    

})








