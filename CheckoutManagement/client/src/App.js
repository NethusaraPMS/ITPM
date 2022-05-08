import React, { Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateDelivery from './components/CheckoutManagement/CreateDelivery';
import DeliveryDetails from './components/CheckoutManagement/DeliveryDetails';
import EditDelivery from './components/CheckoutManagement/EditDelivery';
import HomeDelivery from './components/CheckoutManagement/HomeDelivery';



export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
       <div className="container">
       
        <Route path="/" exact component={HomeDelivery}></Route>
        <Route path="/CD" component={CreateDelivery}></Route>
        <Route path="/ED/:id" component={EditDelivery}></Route>
        <Route path="/DD/:id" component={DeliveryDetails}></Route>


</div>
      
      </BrowserRouter>
     
    )
  }

}