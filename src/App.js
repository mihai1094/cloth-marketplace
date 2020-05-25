import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;


// Read this - REACT ROUTER :)
// {/*  if exact is not used, /cats will show Homepage too */}
// {/*  If we have something like this with id, do not use exact path on it */}
// {/*<Route exact={true} path='/topics' component={TopicComponent}*/}
// {/*<Route path='/topics/:topicId' component={TopicComponent}*/}
//
// {/*For links ( navbar etc ) */}
// {/*<Link to="/hats"></Link> */}
