import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


const emailRegex = RegExp(
    /^[a-z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
  );

const phoneRegex = RegExp(
    /^[0-9]{10,15}$/
  );

  const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid
};


export default class EditDelivery extends Component {


    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            country: "",
            zipCode: "",
            phoneNumber: "",

            formErrors: {
                phoneNumber: "",
                email:"",
           
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch(name){
            case "email":
                formErrors.email = emailRegex.test(value) ? ""
                : "invalid email address";
                break;
            case "phoneNumber":
                formErrors.phoneNumber = phoneRegex.test(value) ? ""
                : "invalid contact number";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]:value}, ()=>console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        if (formValid(this.state.formErrors)){
        const id = this.props.match.params.id;    
        const { companyName, firstName, lastName, email, address, city, country, zipCode,phoneNumber } = this.state;

        const data = {
            companyName: companyName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            city: city,
            country: country,
            zipCode:zipCode,
            phoneNumber: phoneNumber
        }

        console.log(data)

{
        axios.put(`/d_detail/update/${id}`, data).then((res) => {
            let path = "/";
            if (res.data.success) {
                alert("Details Updated Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        companyName: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        address: "",
                        city: "",
                        country: "",
                        zipCode: "",
                        phoneNumber: ""

                    }
                )
            }
        })


    }
}
    else{
        console.error("Form Invalid");
    }
    
    }
    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/d_detail/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    companyName: res.data.post.companyName,
                    firstName: res.data.post.firstName,
                    lastName: res.data.post.lastName,
                    email: res.data.post.email,
                    address: res.data.post.address,
                    city: res.data.post.city,
                    country: res.data.post.country,
                    zipCode: res.data.post.zipCode,
                    phoneNumber: res.data.post.phoneNumber,
                });

                console.log(this.state.post);

            }

        });

    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className="Kwarehouse" style={{ zIndex: 98 }} >
                <div style={{ marginBlockStart: '9%', marginLeft: '23%' }}>
                    <MDBCard className="opacity-90" style={{ maxWidth: '50rem' }}>
                        <MDBCardBody>

                            <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Checkout</span></h2></center></MDBCardTitle>
                            <br />
                            <MDBCardText>
                                <div >


                                    <form className="needs-validation" noValidate>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }} >Company Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="companyName"
                                                placeholder="DXXXX"
                                                value={this.state.companyName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>First Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="firstName"
                                                placeholder="Enter Name"
                                                value={this.state.firstName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Last Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="lastName"
                                                placeholder="0XX-XXX XXXX"
                                                value={this.state.lastName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Email</label>
                                            <input type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="0XX-XXX XXXX"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}/>
                                                 {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                        </div>
                                        {/* <div className="row">
                                            <div className="col">
                                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Delivery Status</lable>
                                                    <select name="dStatus" onChange={this.handleInputChange} value={this.state.dStatus} className="form-select">
                                                        <option defaultValue>Select Delivery Status</option>
                                                        <option>On Process</option>
                                                        <option>On Delivery</option>
                                                        <option>Delivered</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="Enter Name"
                                                value={this.state.address}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>City</label>
                                            <input type="text"
                                                className="form-control"
                                                name="city"
                                                placeholder="Enter Name"
                                                value={this.state.city}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Country</label>
                                            <input type="text"
                                                className="form-control"
                                                name="country"
                                                placeholder="Enter Address"
                                                value={this.state.country}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>zipCode</label>
                                            <input type="text"
                                                className="form-control"
                                                name="zipCode"
                                                placeholder="Enter Address"
                                                value={this.state.zipCode}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>phone Number</label>
                                            <input type="text"
                                                className="form-control"
                                                name="phoneNumber"
                                                placeholder="0XX-XXX XXXX"
                                                value={this.state.phoneNumber}
                                                onChange={this.handleInputChange} />
                                                {formErrors.phoneNumber.length >0 && (
                                            <span className="errorMessage">{formErrors.phoneNumber}</span>
                                        )} 
                                        </div>

                                    </form>
                                    <br></br>
                                    <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; update
                                        </a>
                                        &nbsp;
                                        &nbsp;
                                    </center>
                                    <br></br>


                                </div>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>

                </div>
                <br />
                <br />
                <br></br>
                  <br></br>

            </div>
        )
    }
}