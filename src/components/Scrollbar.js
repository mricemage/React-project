import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

class Scrollbar extends Component {
    
    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels
       /* var height2 = Element.offsetHeight*/
        return (
            <Scrollbars
            autoHeight
            autoHeightMin={50}
            autoHeightMax={800}
            style={{ width: width2 }}
                            >
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            <p>Some great content...</p>
            <br/>
            </Scrollbars>
         
        )
    }
}

export default Scrollbar