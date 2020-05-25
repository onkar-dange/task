import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import MySongs from '../view/common/MySongs';

import Table from '../view/common/Table'


export default class Routes extends React.Component{
    render(){
        return(
             <BrowserRouter>
               <div>
               <Route path="/" component={Table} exact={true} />
                <Route path="/Songs" component={Table} exact={true} />
                <Route path="/MySongs" component={MySongs} exact={true} />
                
               </div>
            </BrowserRouter>
        )
    }
}