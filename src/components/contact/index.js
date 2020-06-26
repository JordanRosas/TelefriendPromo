import React, { Component } from 'react';
import telefriendLogo from '../../assets/telefriendtransparent.png'
class ContactScreen extends Component{
    render(){
        return(
            <div style={{width:'100%', height:'100vh', backgroundColor:'#f0f0f0'}}>
                <div style={{}}>
                    <div style={{backgroundColor:'#e8e8e8', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                        <img src={telefriendLogo} style={{width:'30%', margin:'auto'}} />
                    </div>
                    <form
                    style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%', margin:'auto', }}
                    action="https://formspree.io/maypdonv"
                    method="POST"
                    >
                    <input style={{marginTop:'10%', height:50}} type="text" name="_replyto" placeholder="Enter your email..." />
                    <textarea style={{height:300, marginTop:'3%'}} name="message"></textarea>

                    <button style={{border:'none', backgroundColor: '#202138', color:'white', marginTop:'2%', height:50, borderRadius:5}} type="submit" placeholder="Message text...">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ContactScreen