import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            searchKey: ''
        }
    }
    async componentDidMount() {
        const responseData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responseData.json();
        this.setState({ user: data })
    }
    onChange = () => {
        this.props.history.push('/mainform');
    }
    onChangeText = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }
    render() {
        const { user, searchKey } = this.state;
        const filterUser = user.filter((user => user.name.toLowerCase().includes(searchKey.toLowerCase())));
        return (
            <div>
                <nav className="navbar navbar-light bg-light-gray">
                    <i className="fa fa-search" />
                    <div className="form-line mr-3"></div>
                    <div className="row mt-6 ml-3">
                        <span>
                            <i className="fa fa-plus mx-2" />
                                Add</span>
                        <span>
                            <i className="fa fa-envelope mx-2" />
                        </span>
                        <span>
                            <i className="fa fa-bell mx-3" />
                        </span>
                    </div>
                </nav>
                <hr style={{ color: '#000000', backgroundColor: '#000000', height: .2, borderColor: '#000000', marginTop: -2 }} />
                <div className="contact-view row mr-3">
                    <div>
                        <span className="row mr-3">
                            <i className="fa fa-address-book icon-style ml-2" />
                            <h5>Contacts</h5>
                        </span>
                        <p className="text-data welcome-txt">Welcome to FlatCRM Contactpage</p>
                    </div>
                    <div>
                        <p className="text-data sort-txt"> Sortedby:</p>
                    </div>
                </div>
                <div className="search-data row ml-3" >
                    <input type="search" className="search-bar" placeholder="Search.." onChange={e => this.setState({ searchKey: e.target.value })} />
                    <button type="button" className="search-bar search"><i className="fa fa-search"></i></button>
                    <div>
                        <button type="button " className="button-view">
                            <i className="fa fa-plus" />
                            Add Contact
                        </button>
                    </div>
                </div>
                <div className="col" >
                    <div className="row">
                        <div class="col-6 bg-secondary  mx-4 mt-3">
                            <div className="row">
                                <div class="col-sm-2 mt-3">
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <p>Bacic Info</p>
                                </div>
                                <div className="col-sm-2 mt-3 mx-5">
                                    <p>Company</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                this.state.user && this.state.user.map(value =>
                                    (
                                        <div class="col-md-7 bg-secondary  mx-4 mt-2 mr-5 ml-4" user={filterUser}>
                                            <div className="row">
                                                <div class="col-sm-1 mt-3">
                                                    <input class="form-check-input mx-1" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                                <div className="col-sm-5 mt-3">
                                                    <div className="row name mx-2">
                                                        <span className="border border-secondary  rounded-circle mb-2 bg-warning text-white px-1 ">{
                                                            value.name.charAt(0)}
                                                        </span>
                                                        <span className="mx-1"><button style={{ background: 'gray', border: 'gray' }} className="mx-1" onClick={this.onChange}>{value.name}</button></span>
                                                    </div>
                                                    <span className="font-weight-lighter">{value.email}</span>
                                                </div>
                                                <div className="col-sm-4 mt-3 mx-0">
                                                    <p>{value.company.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
