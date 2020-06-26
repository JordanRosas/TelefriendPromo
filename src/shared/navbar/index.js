import React, { Component } from 'react';
import { Link } from "react-router-dom" 
import styles from './style'
import newIcon from '../../assets/EyeconTrans.png'
class NavigationBar extends Component{
    render(){
        return(
            <>
                <nav style={{backgroundColor:'#4796C1', color:'white',display:'flex',flexDirection:'row', justifyContent:"flex-end",backgroundColor: '#202138', color: 'white'}} className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow ml-auto navbar-rig " >
                    <img src={newIcon} style={{position:'absolute', left:'1%', height:40, width:40}} />
                    <ul className="nav nav-pills" style={{float:'right  '}}>
                        <li className="nav-item" style={{color:'white'}}>
                            <Link className="nav-link" style={styles.anchorStyle} to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={styles.anchorStyle} to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" style={styles.anchorStyle}  to="/specs">Plans</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" style={styles.anchorStyle}  to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavigationBar;