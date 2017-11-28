import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
/*var ScrollArea = require('react-scrollbar')*/

class Scrollbar extends Component {
    render () {
        return (
            <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={true}
            >

            <div>
                Some long content. <br/>
                Some long content. <br/>
                Some long content. <br/>
                Some long content. <br/>
                Some long content. <br/>
                Some long content. <br/>

            </div>
            
          </ScrollArea>
        )
    }
}

export default Scrollbar