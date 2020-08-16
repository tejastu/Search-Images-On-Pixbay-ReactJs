import React, { Component } from "react";


class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputdata:''
    }
  }

    changeInputData = (e) => {
       // console.log(e.target.value);
        this.setState({inputdata: e.target.value});
    }

    hadleFormData = (e) => {
      e.preventDefault();
      this.props.fetchData(this.state.inputdata);    //passing the intput value to app.js 
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.hadleFormData}>
            <div className="form-group row">
              
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.inputdata}
                  name="inputName"
                  placeholder="Search your Pics"
                  onChange={this.changeInputData}

                />
              </div>
              {this.state.inputdata}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
