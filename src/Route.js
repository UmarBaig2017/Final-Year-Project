import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/App'
import Contact from './components/contact'

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
            
    
                <Route exact path="/" component={Contact} />
            { /*    <Route  path="/Contact" component={Contact} />*/}
                    
                   
                    
                </div>
            </Router>
        )
    }
}

export default Routers;