import React, { Component } from 'react'
import './Rightscreen.css'
import Header from './Header'
import Graphs from './Graphs'

class Rightscreen extends Component {
    render () {
        return (
            <div className= 'content'>
                <Header/>
                RightScreenn
                <Graphs/>
            </div>
        )
    }
}

export default Rightscreen