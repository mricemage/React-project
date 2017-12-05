import React, { Component } from 'react'
import './Leftscreen.css'
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import { Scrollbars } from 'react-custom-scrollbars';

class Leftscreen extends Component {
    constructor(props){
        super(props);

    }


    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels

        const regionalLevels = this.props.regionalLevels;
        const a = 1;
        console.log(regionalLevels);
        
        return (
            <div className= "content">
                <Scrollbars
                autoHeight
                autoHeightMin={500}
                autoHeightMax={1200}
                style={{ width: width2  }}
                >   
            <DropdownMenus regionalLevels ={regionalLevels} />
            <CheckBoxes />
            </Scrollbars>  
            </div>
        )
    }
}

export default Leftscreen