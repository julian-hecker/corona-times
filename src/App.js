import React from 'react';
import Navbar from './components/Navbar.js';
import Table from './components/Table.js';
import Map from './components/Map.js';
// https://console.cloud.google.com/apis/credentials?project=cewit-corona

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Map />

                <Table/>
            </div>
        );
    }
}


export default App;
