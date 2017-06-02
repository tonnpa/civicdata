/**
 * Created by tonnpa on 5/25/17.
 */

"use strict";

import React from "react";

import {Tag, TagStyles} from "./Tag";

const TagList = ({date_from, date_to, format}) => {
    return (
        <ul className="list-inline">
            <li><Tag key={0} tagStyle={TagStyles.DATE} text={parseDate(date_from, date_to)}/></li>
            <li><Tag key={1} tagStyle={TagStyles.FORMAT} text={format}/></li>
        </ul>
    );
};

function parseDate(date_from, date_to) {
    if (date_from === date_to) {
        return date_from;
    }
    console.log(date_from);
    return `${date_from} - ${date_to}`;
}

export default TagList;