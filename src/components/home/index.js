import React, { Component } from 'react';
import appdemo from '../../assets/demoicon.png'
import telefriendlogo from '../../assets/telefriendtransparent.png'
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../../shared/navbar'
import IphoneImage from '../../assets/IphoneImage.svg'
import styles from './style'
import { Link, Route } from "react-router-dom" 
import tflogo from '../../assets/tf_logo.svg'
import { Media } from 'reactstrap';

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
class HomeScreen extends Component{
    render(){
        return(
            <div>
            <Desktop>

                <div style={{backgroundColor:'#f0f0f0', height:'100vh', width:'100%'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{backgroundColor:'#e8e8e8', width:'50%', display:'flex', justifyContent:"center", borderRadius:12, marginTop:'2%'}}>
                            <img src={telefriendlogo} style={{width:'50%', height:'100%'}} />
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <img src={appdemo} style={{width:'60%', height:'100%'}}/>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div style={{backgroundColor:'#202138', height:'100vh', width:'100%'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{backgroundColor:'#1B1D32 ', width:'95%', height:'10%', display:'flex', justifyContent:"center", borderRadius:12, marginTop:'20%'}}>
                            <img src={telefriendlogo} style={{width:'90%', height:120}} />
                        </div>
                    </div> 
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{ backgroundColor:'#1B1D32', width:'95%', marginTop:50, borderRadius:12}}>
                            <img src={appdemo} style={{width:'99%', marginTop:'20%', marginLeft:10, marginTop:-20, padding:20}}/>
                        </div>
                    </div>
                </div>
            </Mobile>
            </div>
        )
    }
}
export default HomeScreen