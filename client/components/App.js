'use strict'

import React from 'react'
import DatasetList from '../containers/DatasetList'
import Footer from '../components/Footer'
import Navigation from '../containers/Navigation'

const App = () => (
    <div>
        <Navigation />
        <DatasetList />
        <Footer />
    </div>
)

export default App