'use strict'

import React from 'react'
import CoverImage from '../components/CoverImage'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import DatasetList from '../containers/DatasetList'
import Navigation from '../containers/Navigation'

const App = () => (
    <div>
        <Navigation />
        <CoverImage />
        <Mission />
        <DatasetList />
        <Footer />
    </div>
)

export default App