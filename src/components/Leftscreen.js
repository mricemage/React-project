import React, { Component } from 'react'
import './Leftscreen.css'
import Scrollbar from './Scrollbar'

class Leftscreen extends Component {
    render () {
        return (
            <div className= "content">
                LeftScreenn
                how many berries
                are in the basket.
                <Scrollbar />
            </div>
        )
    }
}

export default Leftscreen