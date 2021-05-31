import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Button, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Location from "expo-location";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

export class Laporan extends Component {
  
    constructor(props) {
       super(props);
       this.state={
           namaPelapor:"",
           kejadian:"",
           alamat:"",
           keterangan:"",
           gambar:"https://img.icons8.com/cotton/2x/image--v2.png",
           latitude:"",
           longitude:""

       }
   }

    componentDidMount() {
        this.getPermission()
        this.getLocatiton()
    }

    async getPermission(){
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
    }

    async pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
          
      
          if (!result.cancelled) {
            this.setState({gambar:result.uri})
          }

    }

    async getLocatiton(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
         // setErrorMsg("Permission denied");
         return;
        }

    let location = await Location.getCurrentPositionAsync({});
    console.log("Lokasinya adalah : " + JSON.stringify(location));
    
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
   
  };
    



    handlerSubmit(){
        
        
        let formData = new FormData();              //formData untuk multipart yang akan dipakai
        let filename = this.state.gambar;
        console.log("nama gambar"+ filename.split('/').pop())
        formData.append('data',JSON.stringify(this.state))
        formData.append('file',{
            uri:this.state.gambar,
            type:'image/jpeg',
            name: filename.split('/').pop(),
        })
        // formData.append('name',this.state.name);
        // formData.append('kejadian',this.state.kejadian);
        // formData.append('keterangan',this.state.keterangan);
        // formData.append('gambar',this.state.gambar);
        // formData.append('status',this.state.status);
        // formData.append('jam',this.state.jam);
        // formData.append('latitude',this.state.latitude);
        // formData.append('longitude',this.state.longitude);
        axios.post('http://192.168.1.9:4050/laporan/add', formData,{
            headers: {
                
                'Content-Type': 'multipart/form-data'
            }
            })
        .then((response) =>{
            alert(response.data)
            this.props.navigation.navigate("MainMenu")
        })
        .catch((error) =>{
            console.log(error)
        })
    }


    render() {
        return (
            <View style={styles.viewStyles} > 
                <Text> Name </Text>
                <TextInput placeholder="Masukan Nama : "  onChangeText={(value)=>{this.setState({namaPelapor:value})}}/>
                 <Text> Kejadian </Text>
                 <Picker
                        selectedValue={this.state.kejadian}
                        style={{ height: 50, width: 300 }} 
                        onValueChange={(itemValue) => this.setState({kejadian:itemValue})}>
                       <Picker.Item label="Masukkan pilihan"  />
                        <Picker.Item label="Perampokan" value="perampokan" />
                        <Picker.Item label="Bencana" value="bencana" />
                        <Picker.Item label="Kecelakaan" value="kecelakaan" />
                        <Picker.Item label="Pembunuhan" value="pembunuhan" />
                        <Picker.Item label="Pelecehan" value="pelecehan" />
                        
                 </Picker>
                <Text> Alamat </Text>
                <TextInput placeholder="Alamat : "  onChangeText={(value)=>{this.setState({alamat:value})}}/>
                <Text> Keterangan </Text>
                <TextInput placeholder="Keterangan : " onChangeText={(value)=>{this.setState({keterangan:value})}}/>
                    <Button title="Pick an image from camera roll" onPress={()=>{this.pickImage()}} />
                    <Image source={{ uri: this.state.gambar }} style={{ width: 200, alignSelf:"center", height: 200 }} />

                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handlerSubmit()}} ><Text style={styles.textStyle}>Submit</Text></TouchableOpacity>
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

