import React, {Component} from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';


export default class DeliveryDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/d_detail/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);

            }
        });
    }

    render(){

        const {companyName, firstName, lastName, email, address, city, country, zipCode,phoneNumber} = this.state.post;
       
        return (


            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <h4>Company Name: {companyName}</h4><br></br>
      
                <form>
                  <h5>Checkout Details</h5>
                  
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder={firstName} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder={lastName} aria-label="Disabled input example" disabled></input>
                  
                    <label>Email</label>
                    <input className="form-control" type="text" placeholder={email} aria-label="Disabled input example" disabled></input>
                  
                    <label>Address</label>
                    <input className="form-control" type="text" placeholder={address} aria-label="Disabled input example" disabled></input>
                 
                    <label>City</label>
                    <input className="form-control" type="text" placeholder={city} aria-label="Disabled input example" disabled></input>

                    <label>Country</label>
                    <input className="form-control" type="text" placeholder={country} aria-label="Disabled input example" disabled></input>

                    <label>Zip Code</label>
                    <input className="form-control" type="text" placeholder={zipCode} aria-label="Disabled input example" disabled></input>

                    <label>Phone Number</label>
                    <input className="form-control" type="text" placeholder={phoneNumber} aria-label="Disabled input example" disabled></input>
                   
                  <br></br>  
                </form>
                
              </div>
      
              </MDBCardText>
                
                </MDBCardBody>
                
              </MDBCard>
              <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
            </div>
      
      
          )
        }
    }





