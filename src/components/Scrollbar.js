import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

class Scrollbar extends Component {
    
    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels
        
        return (
            <Scrollbars
            autoHeight
            autoHeightMin={500}
            autoHeightMax={1200}
            style={{ width: width2  }}
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