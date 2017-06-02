/**
 * Created by tonnpa on 5/29/17.
 */
"use strict";

import React from "react";

const SideMenu = ({datasets = []}) => (
    <div className="nav-side-menu">
        <div className="brand">CIVIC DATA</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
                <li data-toggle="collapse" data-target="#datasets" className="collapsed">
                    <a href="#"><i className="fa fa-database fa-lg"></i> Datasets <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="datasets">
                    {datasets.map(dataset =>
                    <li key={dataset.id}><a href={`#${dataset.id}`}>{dataset.title}</a></li>)}
                </ul>
            </ul>
        </div>
    </div>
);

export default SideMenu;