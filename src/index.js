import React , {Component } from 'react';
import {render } from 'react-dom';
import HandlerContainer from './HandleContainer';

class App extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <HandlerContainer ref="child"/>
                <button onClick= {() => this.refs.child.getTopData()}>Fetch Top data</button>
                <button onClick = {() => this.refs.child.getMixData()}> Fetch Mix data</button>
            </div>
        )
    }
}

render(<App/> , document.getElementById('root'))