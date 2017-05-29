'use strict';

import React from "react";
import VisibleDataset from "../containers/VisibleDataset";
import SideMenu from "../components/SideMenu";

class App extends React.Component {
    render() {
        return (
            <div>
                <SideMenu />
                <VisibleDataset />
            </div>
        );
    }
}

export default App;