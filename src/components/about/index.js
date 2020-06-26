import React, { Component } from 'react';
import NavBar from '../../shared/navbar'
import tfsquig from '../../assets/tfabtsquig.svg'
import headshot from '../../assets/wendy.jpg'
import icon from '../../assets/EyeconTrans.png'
class AboutScreen extends Component{
    render(){
        return(
            <div style={{overflowX:'hidden',}}>
                <div style={{width:'100%'}}>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginRight:'auto',}}>
                        <div style={{marginLeft:190, marginTop:120}}>
                            <img src={headshot} style={{height:600}}/>
                            <p style={{marginBottom:-2}}>Founder & CEO of TeleFriend</p>
                            <p>Wendy</p>
                        </div>
                        <div style={{backgroundColor:'#f0f0f0', width:'50%', height:'100vh', marginLeft:'auto'}}>
                            <div style={{width:'80%', marginLeft:150, marginTop:180, lineHeight:1.9}}>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <img src={icon} style={{marginLeft:110, height:80, width:80, marginTop:10}} />
                                    <p style={{fontSize:40, marginLeft:20, marginTop:10}}>Meet the creator</p>
                                </div>
                                <p style={{fontSize:22}}>
                                    "I have worked in various areas of the customer service and medical industries for over twenty years. I find people need someone to have a listening ear, bounce ideas off each other, or just share a laugh.  Telefriend offers someone to talk to and confide in, in a no judgement zone.  Talking with strangers can give you a total freedom to express yourself without holding back.
                                    My inspiration came about with the Telemedicine shift in the medical industry.  Several coworkers and I were having lunch and bouncing ideas off of each other. Why not Telefriend? I received a lot of positive feedback and decided to go for it. With Telefriend, one can log in and easily and conveniently connect with others."
                                </p>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        )
    }
}
export default AboutScreen