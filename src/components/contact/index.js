import React, { Component } from 'react';
import telefriendLogo from '../../assets/telefriendtransparent.png'
import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
class ContactScreen extends Component{
    render(){
        return(
            <div style={{width:'100%', height:'100vh', backgroundColor:'#f0f0f0'}}>
                <Desktop>
                    <div style={{}}>
                        <div style={{backgroundColor:'#e8e8e8', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                            <img src={telefriendLogo} style={{width:'30%', margin:'auto'}} />
                        </div>
                        <form
                        style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%', margin:'auto', }}
                        action="https://formspree.io/xjvaewkp"
                        method="POST"
                        >
                        <input style={{marginTop:'10%', height:50}} type="text" name="_replyto" placeholder="Enter your email..." />
                        <textarea style={{height:300, marginTop:'3%'}} name="message"></textarea>

                        <button style={{border:'none', backgroundColor: '#202138', color:'white', marginTop:'2%', height:50, borderRadius:5}} type="submit" placeholder="Message text...">Send</button>
                        </form>
                    </div>
                </Desktop>
                <Mobile>
                    <div style={{}}>
                        <div style={{backgroundColor:'#e8e8e8', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                            <img src={telefriendLogo} style={{width:'90%', margin:'auto'}} />
                        </div>
                        <form
                        style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'90%', margin:'auto', marginTop:'10%' }}
                        action="https://formspree.io/xjvaewkp"
                        method="POST"
                        >
                        <input style={{marginTop:'10%', height:50, border:'none'}} type="text" name="_replyto" placeholder="Enter your email..." />
                        <textarea style={{height:300, marginTop:'3%', border:'none', fontFamily:'Barlow'}} name="message"></textarea>

                        <button style={{border:'none', backgroundColor: '#202138', color:'white', marginTop:'2%', height:50, borderRadius:5, fontFamily:'Barlow'}} type="submit" placeholder="Message text...">Send</button>
                        </form>
                    </div>
                </Mobile>
            </div>
        )
    }
}
export default ContactScreen