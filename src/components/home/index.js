import React, { Component } from 'react';
import appdemo from '../../assets/demoicon.png'
import telefriendlogo from '../../assets/telefriendtransparent.png'
import NavBar from '../../shared/navbar'
import IphoneImage from '../../assets/IphoneImage.svg'
import styles from './style'
import { Link, Route } from "react-router-dom" 
import tflogo from '../../assets/tf_logo.svg'
class HomeScreen extends Component{
    render(){
        return(
            <div style={{backgroundColor:'#f0f0f0', height:'100vh', width:'100%'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{backgroundColor:'#e8e8e8', width:'50%', display:'flex', justifyContent:"center", borderRadius:12, marginTop:'2%'}}>
                        <img src={telefriendlogo} style={{width:'50%', marginTop:'2%'}} />
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginTop:-40}}>
                    <img src={appdemo} style={{width:'60%'}}/>
                </div>
            </div>
        )
    }
}
export default HomeScreen