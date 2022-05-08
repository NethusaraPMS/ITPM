import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class HomeDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }




  retrievePosts() {
    axios.get("/d_detail").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/d_detail/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }


  filterData(posts, searchKey) {

    const result = posts.filter((posts) =>
      posts.companyName.toLowerCase().includes(searchKey) ||
      posts.firstName.toLowerCase().includes(searchKey) ||
      posts.lastName.toLowerCase().includes(searchKey) ||
      posts.email.toLowerCase().includes(searchKey) ||
      posts.address.toLowerCase().includes(searchKey) ||
      posts.city.toLowerCase().includes(searchKey) ||
      posts.country.toLowerCase().includes(searchKey) ||
      posts.zipCode.toLowerCase().includes(searchKey) ||
      posts.phoneNumber.toLowerCase().includes(searchKey)

    )

    this.setState({ posts: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/d_detail").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="Khome">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Checkout Details</span></h1>
        </center>
        <div >
          <br />
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">zipCode</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
              
                  <td class="table-light">
                    <a href={`/DD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      <td>{posts.companyName}</td>
                    </a>
                  </td>
                  <td class="table-light">{posts.firstName}</td>
                  <td class="table-light">{posts.lastName}</td>
                  <td class="table-light">{posts.email}</td>
                  <td class="table-light">{posts.address}</td>
                  <td class="table-light">{posts.city}</td>
                  <td class="table-light">{posts.country}</td>
                  <td class="table-light">{posts.zipCode}</td>
                  <td class="table-light">{posts.phoneNumber}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/ED/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>

          <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3'  style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/CD" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add Checkout
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashdeli" >
                    Dash Board
                  </a>
                </MDBCardBody>
              </MDBCard>
            </center>
           

          </div>
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
      </div>

    )
  }
}

