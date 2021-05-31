import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TextInput, TouchableOpacity } from 'react-native';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

        name:"",
        phone:"",
        email:"",
        address:"",

    }
  }

  
  simpanData(){
    axios.post('http://192.168.1.9:4050/user/register/',this.state)
    .then((response) => {
      alert(response.data)
      this.props.navigation.navigate('Home')
    })
    .catch((error) => {
      console.log("Ada error : " + error)
    })
  }



  render() {
    return (
      <View style={styles.viewStyles} > 
        <Text> Name </Text>
        <TextInput placeholder="Masukan Nama : "  onChangeText={(value)=>{this.setState({name:value})}}/>
        <Text> Phone </Text>
        <TextInput placeholder="Masukan No.HP : " onChangeText={(value)=>{this.setState({phone:value})}}/>
        <Text> Email </Text>
        <TextInput placeholder="Masukan Email : " onChangeText={(value)=>{this.setState({email:value})}}/>
        <Text> Address </Text>
        <TextInput placeholder="Masukan Alamat : " onChangeText={(value)=>{this.setState({address:value})}}/>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.simpanData()}} ><Text style={styles.textStyle}>Submit</Text></TouchableOpacity>
      </View>
    )
  }
}

export default Register

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