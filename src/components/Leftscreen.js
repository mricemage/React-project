import React, { Component } from 'react'
import './Leftscreen.css'
import Scrollbar from './Scrollbar'
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'

class Leftscreen extends Component {
    render () {
        const { items } = this.props;
        console.log(items);
        return (
            <div className= "content">
                
                <Scrollbar>
                
                <CheckBoxes />
                </Scrollbar>
            </div>
        )
    }
}

export default Leftscreen