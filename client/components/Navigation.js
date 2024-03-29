/**
 * Created by tonnpa on 7/5/17.
 */
'use strict'

import React from 'react'
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap'
import {scroller} from 'react-scroll'
import SearchBar from './SearchBar'

const Navigation = ({datasets = [], filterText, onSearchInputChange}) => (
    <header>
        <Navbar fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><h1>CIVIC DATA</h1></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <SearchBar filterText={filterText}
                               onSearchInputChange={onSearchInputChange}/>
                </Navbar.Form>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="Datasets" id="datasets-dropdown">
                        {datasets.map(dataset =>
                            <MenuItem eventKey={dataset.id} key={dataset.id}
                                      onSelect={() => scroller.scrollTo(dataset.id, {smooth: "true"})}>
                                {dataset.title}
                            </MenuItem>
                        )}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)

export default Navigation