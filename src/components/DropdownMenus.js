import React, { Component } from 'react'
import { UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DropdownMenus extends Component {
    constructor(props){
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        dropdownOpen: false
        };
}

toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


    render () {
        return (
           <div>
               <label> Regional Level </label>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Region Level
                </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>Region Selection</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <label> Region</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
            Region
            </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> 

        <br/>
      <label> Scenario collection</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
            Scenario collection
            </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> 

        </div>
        )
    }
}

export default DropdownMenus