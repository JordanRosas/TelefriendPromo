import { Route } from 'react-router-dom'
import React, { Component } from "react"
import HomeScreen from './home'
import AboutScreen from './about'
import BlogScreen from './blog'
import ContactScreen from './contact'
export default class ApplicationViews extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <HomeScreen />
                }} />
                <Route path="/about" render={(props) => {
                    return <AboutScreen />
                }} />
                <Route path="/blog" render={(props) => {
                    return <BlogScreen />
                }} />
                <Route path="/contact" render={(props) => {
                    return <ContactScreen />
                }} />

            </React.Fragment>
        )
    }
}