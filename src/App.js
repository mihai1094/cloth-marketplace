import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <Route exact={true} path='/' component={HomePage}/>
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
