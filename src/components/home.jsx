import React, { Component } from 'react';
import PageHeader from "./common/page-header"
class Home extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <PageHeader>Real App Home Page</PageHeader>
                <div className="row">
                    <div className="col-12">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam.</p>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

export default Home;
