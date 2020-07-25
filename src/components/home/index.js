import React, { Component } from 'react';
import appdemo from '../../assets/demoicon.png'
import telefriendlogo from '../../assets/telefriendtransparent.png'
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import ScrollAnimation from 'react-animate-on-scroll'
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

                <div style={{backgroundColor:'#f0f0f0', height:'100%', width:'100%'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{backgroundColor:'#e8e8e8', width:'50%', display:'flex', justifyContent:"center", borderRadius:12, marginTop:'2%'}}>
                            <img src={telefriendlogo} style={{width:'50%', height:'100%'}} />
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <img src={appdemo} style={{width:'60%', height:'100%'}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:150}}>
                        <div style={{height:500, width:500, borderRadius:'50%', backgroundColor:"#e8e8e8", marginRight:200}}>
                            <div style={{height:400, width:400, borderRadius:'50%', backgroundColor:'#202138', marginRight:200, marginTop:50, marginLeft:50}}>
                            </div>
                            <p style={{color:"white", textAlign:'center', marginTop:-230,fontSize:40, fontFamily:'Barlow'}}>Sign up / Register</p>
                        </div>
                        <div style={{height:500, width:500, borderRadius:'50%', backgroundColor:"#e8e8e8",}}>
                            <div style={{height:400, width:400, borderRadius:'50%', backgroundColor:'#202138', marginRight:200, marginTop:50, marginLeft:50}}>
                            </div>
                            <p style={{color:"white", textAlign:'center', marginTop:-260,fontSize:40, fontFamily:'Barlow'}}>Talk with live </p>
                            <p style={{color:"white", textAlign:'center',fontSize:40, fontFamily:'Barlow'}}>Ambassadors</p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', }}>
                        <div style={{height:500, width:500, borderRadius:'50%', backgroundColor:"#e8e8e8", marginRight:200}}>
                            <div style={{height:400, width:400, borderRadius:'50%', backgroundColor:'#202138', marginRight:200, marginTop:50, marginLeft:50}}>
                            </div>
                            <p style={{color:"white", textAlign:'center', marginTop:-230,fontSize:40, fontFamily:'Barlow'}}>Affordable</p>
                        </div>
                        <div style={{height:500, width:500, borderRadius:'50%', backgroundColor:"#e8e8e8",}}>
                            <div style={{height:400, width:400, borderRadius:'50%', backgroundColor:'#202138', marginRight:200, marginTop:50, marginLeft:50}}>
                            </div>
                            <p style={{color:"white", textAlign:'center', marginTop:-230,fontSize:40, fontFamily:'Barlow'}}>Convenient</p>
                        </div>
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
                    <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                        <div style={{ backgroundColor:'#1B1D32', width:'95%', borderRadius:12}}>
                            <p style={{color:'white', marginLeft:10, fontFamily:"Barlow", marginTop:10}}>Create an account</p>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                        <div style={{ backgroundColor:'#1B1D32', width:'95%', borderRadius:12}}>
                            <p style={{color:'white', marginLeft:10, fontFamily:"Barlow", marginTop:10}}>Talk with live Ambassadors</p>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                        <div style={{ backgroundColor:'#1B1D32', width:'95%', borderRadius:12}}>
                            <p style={{color:'white', marginLeft:10, fontFamily:"Barlow", marginTop:10}}>Afforable</p>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                        <div style={{ backgroundColor:'#1B1D32', width:'95%', borderRadius:12}}>
                            <p style={{color:'white', marginLeft:10, fontFamily:"Barlow", marginTop:10}}>Convenient</p>
                        </div>
                    </div>
                </div>
            </Mobile>
            </div>
        )
    }
}
export default HomeScreen