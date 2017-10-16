'use strict'

import React from 'react'
import CoverImage from './CoverImage'
import Footer from './Footer'
import Mission from './Mission'
import DatasetList from '../containers/DatasetList'
import Navigation from '../containers/Navigation'

const Home = () => (
    <div>
        <Navigation />
        <CoverImage />
        <Mission />
        <DatasetList />
        <Footer />
    </div>
)

export default Home