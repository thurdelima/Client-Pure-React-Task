import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import Todo from './todo/todo'
import About from './about/about'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

export default class Routes extends Component {
 
    render() {
        return (
 
            
              <HashRouter>
                <Switch>
                    <Route path="/todo" component={Todo} />
                    <Route path="/about" component={About} />
                    <Redirect from='*' to='/todo' />
                </Switch>
            </HashRouter> 
                    
                    
                
            
 
        )
    }
}