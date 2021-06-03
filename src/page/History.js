import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

export class History extends Component {
   constructor(props) {
       super(props);
            this.state = {
            dataFlatList:{}
}
   }

componentDidMount(){
    // if(this.props.isLogin){
    //     this.props.navigation.navigate("Home")
    // }else{
         this.getData()
    // }
}

getData(){
    axios.get('http://192.168.1.2:4050/laporan/')
    .then((response)=>{
        let data = response.data
        console.log(data)
        this.setState({dataFlatList:data})
    }) 
    .catch((error)=>{
        console.log(error)
    })

}


    render() {
        return (
            <View >
                <FlatList
                    data={this.state.dataFlatList}
                    keyExtractor={item=>parseInt(item.id)}
                    renderItem={({item})=>(
                        <View style={{borderWidth:5,borderColor:"orange", flexDirection:"row",margin:5}}>
                        <Image style={{width:150,height:150,alignSelf:'center'}} 
                        source={{uri:`http://192.168.1.2:4050/laporan/image/${item.gambar}`}} />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Status : {item.status}</Text>
                                <Text>Jam : {item.jam}</Text>
                                <Text>Alamat : {item.alamat}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            

        )
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.LoginReducer.isLogin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
