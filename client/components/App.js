'use strict'

import React from 'react'
import CoverImage from '../components/CoverImage'
import Footer from '../components/Footer'
import DatasetList from '../containers/DatasetList'
import Navigation from '../containers/Navigation'

const App = () => (
    <div>
        <Navigation />
        <CoverImage />
        <DatasetList />
        <Footer />
    </div>
)

export default App