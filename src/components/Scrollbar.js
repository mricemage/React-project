import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'


class Scrollbar extends Component {
    
    render () {
        const { itemData } = this.props;
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels
        
        console.log(itemData);
        console.log(typeof(itemData));
        return (
            <Scrollbars
            autoHeight
            autoHeightMin={500}
            autoHeightMax={1200}
            style={{ width: width2  }}
                            >
            <DropdownMenus />
            <CheckBoxes />
            
            </Scrollbars>  
            
            

        )
    }
}

export default Scrollbar