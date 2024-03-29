/**
 * Created by tonnpa on 5/29/17.
 */
'use strict'

import React from 'react'
import SearchBar from './SearchBar'

const SideMenu = ({datasets = [], filterText, onSearchInputChange}) => (
    <div className="nav-side-menu">
        <div className="brand">CIVIC DATA</div>
        <span className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></span>
        <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
                <li>
                    <SearchBar filterText={filterText}
                               onSearchInputChange={onSearchInputChange}/>
                </li>
                <li data-toggle="collapse" data-target="#datasets" className="collapsed">
                    <a href="#"><span className="fa fa-database fa-lg"></span> Datasets <span className="arrow"></span></a>
                </li>
                    <ul className="sub-menu collapse" id="datasets">
                        {
                            datasets.map(dataset =>
                                <li key={dataset.id}>
                                    <a href={`#${dataset.id}`}>
                                        <span className="fa fa-chevron-right"></span>
                                        {dataset.title}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
            </ul>
        </div>
    </div>
)

export default SideMenu