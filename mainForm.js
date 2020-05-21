import React from 'react';

export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    async componentDidMount() {
        const responseData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responseData.json();
        this.setState({ user: data })
    }

    render() {
        return (
            <div>
                {this.state.user.map(value => (
                    <div class="col-md-5 bg-secondary  mx-4 mt-3">
                        <div className="col-sm-8 mt-3 mr-2">
                            <div className="row ">

                                <div className="col-6 col-md-4">
                                    <div className="col-2 col-md-2"></div>
                                    <div className="col py-3 px-lg-4">
                                        <span className="border border-secondary  col-md-2 rounded-circle mb-2 bg-warning text-white px-1 mr-ml-2 pd-5">BP</span>
                                        <span className="mx-1 ml-2 text-center">{value.name}</span>
                                        <span className="mx-1 ml-2 text-center">{value.email}</span>
                                    </div>
                                </div>
                                <span className=" text-center">FirstName:{value.name}</span>
                                <span className=" text-center">Email:{value.email}</span>
                                <span className="text-center">Phone:{value.phone}</span>
                                <span className=" text-center">Company:{value.company.name}</span>
                                <span className=" text-center">Address:{value.address.street}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}





























// import  React from 'react'


// const minOffset = 0;
// const maxOffset = 10; 

// class MainForm extends React.Component {
//   constructor() {
//     super();

//     const thisYear = (new Date()).getFullYear();

//     this.state = {
//       thisYear: thisYear,
//       selectedYear: thisYear
//     }
//   }

//   onHandleChange = (evt) => {
//     this.setState({ selectedYear: evt.target.value });
//   };
//   render() {
//     const { thisYear, selectedYear } = this.state;
//     const options = [];

//     for (let i = minOffset; i <= maxOffset; i++) {
//       const year = thisYear - i;
//       options.push(<option value={year}>{year}</option>);
//     }
//     return (
//       <div>
//         <select value={this.selectedYear} onChange={this.onHandleChange}> 
//           {options}
//         </select>
//       </div>
//     );
//   }


// }
// export default MainForm