import React, { Component } from "react";
import Search from "./components/search.jsx";
import axios from "axios";
import Product from "./components/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [] 
    }
  }

  fetchFormData = async (data) => {
    // this.setState({ searchfield: data });
    let url = `https://pixabay.com/api/?key=13877123-199ecacab2603cb7ed9c9c3fc&q=yellow+${data}&image_type=photo&pretty=true`;
    let response = await axios.get(url);
    console.log(response.data.hits);
    this.setState({ products: response.data.hits });
    //getting input data from search.js
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Search fetchData={this.fetchFormData} />
          <br />
          <Product items={this.state.products} />
        </div>
      </React.Fragment>
    )
  }
}
export default App;
