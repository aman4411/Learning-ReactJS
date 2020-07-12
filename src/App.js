import React, {Component} from 'react';
import Header from './header';
import Store from './store';
import Footer from './footer';

class App extends Component{
    render(){
        return(
            <>
            <Header/>
            <Store/>
            <Footer/>
            </>
        );
    }
}

export default App;