import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';

export class Laporan extends Component {
  
    constructor(props) {
       super(props);
       this.state={
           name:"",
           kejadian:"",
           alamat:"",
           keterangan:"",
           gambar:"",
           status:"",
           jam:"",
           latitude:"",
           longitude:""

       }
   }

    render() {
        return (
            <View style={styles.viewStyles} > 
                <Text> Name </Text>
                <TextInput placeholder="Masukan Nama : "  onChangeText={(value)=>{this.setState({name:value})}}/>
                 <Text> Kejadian </Text>
                <TextInput placeholder="Kejadian : " onChangeText={(value)=>{this.setState({kejadian:value})}}/>
                <Text> Alamat </Text>
                <TextInput placeholder="Alamat : "  onChangeText={(value)=>{this.setState({alamat:value})}}/>
                <Text> Keterangan </Text>
                <TextInput placeholder="Masukan No.HP : " onChangeText={(value)=>{this.setState({keterangan:value})}}/>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Laporan)


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

