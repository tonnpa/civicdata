/**
 * Created by tonnpa on 6/5/17.
 */
'use strict'

import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

const SearchBar = ({filterText, onSearchInputChange}) => {
    let _filterText

    return (
        <FormGroup controlId="dataset-filter">
            <ControlLabel htmlFor="dataset-filter" srOnly>Search</ControlLabel>
            <FormControl type="text"
                         placeholder="Find data easily."
                         value={filterText}
                         ref={input => _filterText = input}
                         onChange={(event) => onSearchInputChange(event.target.value)}
            />
        </FormGroup>
    )
}

export default SearchBar