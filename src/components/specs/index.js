import React, { Component } from 'react';
import telefriendtrans from '../../assets/telefriendtransparent.png'
class SpecsScreen extends Component{
    render(){
        return(
            <div style={{overflowX:'hidden',}}>
            <div style={{width:'100%'}}>
            
                <img src={telefriendtrans} style={{width:'30%', marginBottom:-100, marginLeft:600}} />
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:200}}>
                    <div style={{height:600, width:450, backgroundColor:'#f0f0f0', borderRadius:12}}>
                        <p style={{textAlign:'center', fontSize:30}}>Free $0</p>
                        <ul>
                            <li style={{fontSize:20, marginBottom:10}}>
                                1 hour per day in video chat capability
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Customize your profile
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Connect with other users, start forming friendships!
                            </li>
                        </ul>
                    </div>
                    <div style={{height:600, width:450, backgroundColor:'#f0f0f0', borderRadius:12}}>
                        <p style={{textAlign:'center', fontSize:30}}>Personal $15</p>
                        <ul>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Unlimitied video chat capability
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Customize your profile
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Keep track of conversations on an interactive calendar
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Access to a TeleFriend wallet!
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Ability to upgrade your user status to a TeleFriend Ambassador 
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                See how others rate you as a conversationalist!
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Keep track of how many users you have connected with!
                            </li>
                        </ul>
                    </div>
                    <div style={{height:600, width:450, backgroundColor:'#f0f0f0', borderRadius:12}}>
                        <p style={{textAlign:'center', fontSize:30}}> Business $30</p>
                        <ul>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Unlimitied video chat capability
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Customize your profile
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Keep track of conversations on an interactive calendar
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Access to a TeleFriend wallet!
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Ability to upgrade your user status to a TeleFriend Ambassador 
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Support staff available M-F 
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                See how others rate you as a conversationalist!
                            </li>
                            <li style={{fontSize:20, marginBottom:10}}>
                                Keep track of how many users you have connected with!
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
export default SpecsScreen