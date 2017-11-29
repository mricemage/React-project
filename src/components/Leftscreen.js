import React, { Component } from 'react'
import './Leftscreen.css'
import Scrollbar from './Scrollbar'

class Leftscreen extends Component {
    render () {
        return (
            <div className= "content">
                <Scrollbar />
            </div>
        )
    }
}

export default Leftscreen