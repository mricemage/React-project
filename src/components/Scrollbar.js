import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import ForestIndicatorData from './ForestIndicatorData'

class Scrollbar extends Component {



    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels
        const { items } = this.props;
        
                return (
            <Scrollbars
            autoHeight
            autoHeightMin={500}
            autoHeightMax={1200}
            style={{ width: width2  }}
                            >
            <DropdownMenus> </DropdownMenus>
            <CheckBoxes/>
            </Scrollbars>  
            
            

        )
    }
}

export default Scrollbar