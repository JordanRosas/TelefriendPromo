import React, { Component } from 'react';
import NavBar from '../../shared/navbar'
import tfsquig from '../../assets/tfabtsquig.svg'
import headshot from '../../assets/wendy.jpg'
import icon from '../../assets/EyeconTrans.png'
import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

class AboutScreen extends Component{
    render(){
        return(
            <div style={{overflowX:'hidden',}}>
                <Desktop>
                    <div style={{width:'100%'}}>

                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginRight:'auto',}}>
                            <div style={{marginLeft:190, marginTop:120}}>
                                <img src={headshot} style={{height:600}}/>
                                <p style={{marginBottom:-2, fontFamily:'Barlow'}}>Founder & CEO of TeleFriend</p>
                                <p style={{fontFamily:'Barlow'}}>Wendy M.</p>
                            </div>
                            <div style={{backgroundColor:'#f0f0f0', width:'50%', height:'100vh', marginLeft:'auto'}}>
                                <div style={{width:'75%', marginLeft:150, marginTop:100, lineHeight:1.9,}}>
                                    <div style={{display:'flex', flexDirection:"row", justifyContent:'center', width:'75%'}}>
                                        <img src={icon} style={{marginLeft:110, height:80, width:80, marginTop:10}} />
                                        <p style={{fontSize:35, marginLeft:20, marginTop:10, fontFamily:'Barlow'}}>Meet the creator</p>
                                    </div>
                                    <p style={{fontSize:22, marginRight:25, fontFamily:'Barlow'}}>
                                        "I have worked in various areas of the customer service and medical industries for over twenty years. I find people need someone to have a listening ear, bounce ideas off each other, or just share a laugh.  Telefriend offers someone to talk to and confide in, in a no judgement zone.  Talking with strangers can give you a total freedom to express yourself without holding back.
                                        My inspiration came about with the Telemedicine shift in the medical industry.  Several coworkers and I were having lunch and bouncing ideas off of each other. Why not Telefriend? I received a lot of positive feedback and decided to go for it. With Telefriend, one can log in and easily and conveniently connect with others."
                                    </p>

                                </div>
                            </div>
                        </div>
    
                    </div>
                </Desktop>
                <Mobile>
                <div style={{backgroundColor:'#f0f0f0', height:'100vh', marginLeft:'auto'}}>
                    <div style={{width:'95%',lineHeight:1.9,}}>
                        <div style={{display:'flex', flexDirection:"row", justifyContent:'center',}}>
                            <img src={icon} style={{height:50, width:50, marginTop:10}} />
                            <p style={{fontSize:25, marginLeft:10, marginTop:10}}>Meet the creator</p>
                        </div>
                        <p style={{fontSize:17, marginRight:10, marginLeft:30, textAlign:'Left'}}>
                            "I have worked in various areas of the customer service and medical industries for over twenty years. I find people need someone to have a listening ear, bounce ideas off each other, or just share a laugh.  Telefriend offers someone to talk to and confide in, in a no judgement zone.  Talking with strangers can give you a total freedom to express yourself without holding back.
                            My inspiration came about with the Telemedicine shift in the medical industry.  Several coworkers and I were having lunch and bouncing ideas off of each other. Why not Telefriend? I received a lot of positive feedback and decided to go for it. With Telefriend, one can log in and easily and conveniently connect with others."
                        </p>
                        <p style={{textAlign:'center', marginTop:40}}><i>Wendy M. Founder & CEO of TeleFriend</i></p>
                    </div>
                </div>
                </Mobile>
            </div>
        )
    }
}
export default AboutScreen