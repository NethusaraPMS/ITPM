import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
    /^[a-z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
  );



  const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

export default class CreateDelivery extends Component {

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

    btnDemo = (e) => {
        e.preventDefault();

        const {companyName, firstName, lastName, email, address, city, country, zipCode,phoneNumber } = this.state;

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


        this.setState(
            {
                companyName: "ABC",
                firstName: "Jhon",
                lastName: "Fernando",
                email: "example@gmail.com",
                address: "110, Narangodapaluwa",
                city: "Ragama",
                country: "Sri Lanka",
                zipCode: "5199",
                phoneNumber: "0774947287"

            }
        )

    }

    onSubmit = (e) => {

        e.preventDefault();
        if (formValid(this.state.formErrors)){
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
        axios.post("/d_detail/save", data).then((res) => {
            let path = "/";
            if (res.data.success) {
                alert("Details Saved Successfully")
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
                                                placeholder="ABC Company"
                                                value={this.state.companyName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>First Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="firstName"
                                                placeholder="Jhon"
                                                value={this.state.firstName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Last Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="lastName"
                                                placeholder="Fernando"
                                                value={this.state.lastName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Email</label>
                                            <input type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="example@gmail.com"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
                                                 {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                        </div>
                          
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="732,Narangodapaluwa"
                                                value={this.state.address}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>City</label>
                                            <input type="text"
                                                className="form-control"
                                                name="city"
                                                placeholder="Ragama"
                                                value={this.state.city}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Country</label>
                                            <input type="text"
                                                className="form-control"
                                                name="country"
                                                placeholder="Sri Lanka"
                                                value={this.state.country}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>zipCode</label>
                                            <input type="text"
                                                className="form-control"
                                                name="zipCode"
                                                placeholder="2233"
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
                                            &nbsp; save
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                                            <i class='fas fa-bookmark'></i>
                                            &nbsp; <b>Demo</b>
                                        </button>
                         
                                    </center>
                                    <br></br>

                                </div>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>

                </div>
                <br />
                <br />
                <br />
                <br />

            </div>
        )
    }
}




