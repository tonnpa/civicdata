'use strict';

import React from "react";
import DatasetList from "../containers/DatasetList";
import SideMenu from "../containers/SideMenu";

class App extends React.Component {
    render() {
        return (
            <div>
                <SideMenu />
                <DatasetList />
            </div>
        );
    }
}

export default App;