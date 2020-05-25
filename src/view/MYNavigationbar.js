import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import Table from './common/Table'
class MYNavigationbar extends React.Component {
    render() {
        return (
           <div>
                 <Navbar className="Navbarstyle" bg="" variant="dark" >
    
    <Nav className="mr-auto">
       
        <NavItem eventKey={1} >
            <NavLink className="link_style" to="/" activeClassName="selected">Songs</NavLink>
        </NavItem>
        <NavItem eventKey={2} >
            <NavLink className="link_style" to="MySongs" activeClassName="selected">MySongs</NavLink>
        </NavItem>
        
    </Nav>
  </Navbar>   
             </div>
        )
    }
}


export default MYNavigationbar;