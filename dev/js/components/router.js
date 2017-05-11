import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, IndexRedirect, useRouterHistory, browserHistory} from 'react-router';
import App from '../containers/App';
import Name from '../containers/Name';
import Adress from '../containers/Adress';
import CreditCard from '../containers/CreditCard';

const router = (params) => (

    <Router history={browserHistory}>
        <Route name="Home" path="/" component={App}>
            <IndexRedirect to="/user_data" />
            <Route name="Route1" path="/user_data" component={Name}/>
            <Route name="Route2" path="/adress" component={Adress}/>
            <Route name="Route3" path="/credit_card_details" component={CreditCard}/>
        </Route>
    </Router>
);

export default router;