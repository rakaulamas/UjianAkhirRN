import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableHighlightBase } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  { LoginAction }  from '../Redux/Action'

export class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
        }
    }

    componentDidMount(){
        if(!this.props.dataRedux.isLogin){
            this.props.navigation.navigate('Home')
        }
    }


    handleSignOut(){
        alert("Berhasil SignOut!")
        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate('Home')
    }


    render() {
        return (
            <View style={styles.viewStyles}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Laporan')}}>
                    <Text style={styles.textStyle} > Laporan </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('History')}}>
                    <Text style={styles.textStyle}> History </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('MapPage')}}>
                    <Text style={styles.textStyle}> Map Kejadian </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleSignOut()}} >
                    <Text style={styles.textStyle}> Sign Out </Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>{
                    if(this.state.counter === 2) {
                        this.setState({counter:0})
                        this.props.navigation.navigate('Laporan')
                    }else{
                        let counter = this.state.counter
                        this.setState({counter:counter+1})
                    }
                }}>
                    <Image style={{width:150,height:150,alignSelf:'center'}} source={{uri:'https://img.icons8.com/emoji/452/sos-button-emoji.png'}} />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRedux:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu) 


const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 10,
        borderColor:"orange",
        padding:10,
        margin: 20
    },
    
    textStyle:{
        textAlign: 'center',
    }
    
  
  })
