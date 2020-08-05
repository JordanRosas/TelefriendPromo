import React, { Component } from 'react';
import Eye from '../../assets/EyeconTrans.png'
import { useMediaQuery } from 'react-responsive'
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

class BlogScreen extends Component{
    render(){
        return(
            <div>
                <Desktop>
                    <div style={{width:'100%'}}>
                
                        <div style={{display:'flex', justifyContent:"center", marginTop:40,}}>
                            <div style={{height:450, width:900, backgroundColor:'#f0f0f0', borderRadius:12, paddingLeft:20, paddingRight:20}}>
                                <p style={{fontWeight:'bold', textAlign:'center', fontSize:20}}>Can We Talk?</p>
                                <p style={{marginTop:20}}>Welcome to <i>Can We Talk?</i>, the business blog for Telefriend.</p>
                                <p style={{marginTop:20}}>What is Telefriend?</p>
                                <p style={{fontWeight:'bold', marginTop:20}}>
                                    Telefriend is a website where you can connect to live Ambassadors. Each registrant has access to their own personal dashboard where you can schedule video sessions to talk with us for a nominal fee. We can discuss a wide variety of topics suited to your interests; from current events to hobbies, activities, philosophies, etc. 
                                </p>
                                <p style={{fontWeight:'bold', marginTop:20}}>
                                    Note, this is not therapy. It’s a fun forum to interact with others. 
                                </p>
                                <p style={{marginTop:20}}>
                                    This blog will discuss our website, promotions and how Telefriend works. We’ll feature our Telefriend Ambassadors through Q&A so you can get to know us.
                                </p>
                                <p>Stay tuned.</p>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img src={Eye} style={{height:70, width:70, justifyContent:'center'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div style={{width:'100%'}}>
                    
                        <div style={{display:'flex', justifyContent:"center", marginTop:10,}}>
                            <div style={{height:700, width:350, backgroundColor:'#f0f0f0', borderRadius:12, paddingLeft:10, paddingRight:10}}>
                                <p style={{fontWeight:'bold', textAlign:'center', fontSize:20}}>Can We Talk?</p>
                                <p style={{marginTop:20}}>Welcome to <i>Can We Talk?</i>, the business blog for Telefriend.</p>
                                <p style={{marginTop:20}}>What is Telefriend?</p>
                                <p style={{fontWeight:'bold', marginTop:20}}>
                                    Telefriend is a website where you can connect to live Ambassadors. Each registrant has access to their own personal dashboard where you can schedule video sessions to talk with us for a nominal fee. We can discuss a wide variety of topics suited to your interests; from current events to hobbies, activities, philosophies, etc. 
                                </p>
                                <p style={{fontWeight:'bold', marginTop:20}}>
                                    Note, this is not therapy. It’s a fun forum to interact with others. 
                                </p>
                                <p style={{marginTop:20}}>
                                    This blog will discuss our website, promotions and how Telefriend works. We’ll feature our Telefriend Ambassadors through Q&A so you can get to know us.
                                </p>
                                <p>Stay tuned.</p>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img src={Eye} style={{height:70, width:70, justifyContent:'center'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </div>
        )
    }
}
export default BlogScreen