/**
 * Created by tonnpa on 6/5/17.
 */
"use strict";

import React from "react";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const SearchBar = ({filterText, onSearchInputChange}) => {
    let _value;

    return (
        <FormGroup controlId="dataset-filter">
            <ControlLabel htmlFor="dataset-filter" srOnly>Search</ControlLabel>
            <FormControl type="text"
                         placeholder="Search"
                         value={filterText}
                         ref={input => _value = input}
                         onChange={(event) => onSearchInputChange(event.target.value)}
            />
        </FormGroup>
    );
};

SearchBar.defaultProps = {
    value: "",
};

export default SearchBar;