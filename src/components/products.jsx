import React from "react";

const Product = (props) => {
  return (
    <div className="row">
      {props.items.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card text-white bg-danger">
            <img className="card-img-top" src={item.largeImageURL} />
            <div className="card-body">
              <h4 className="card-title">{item.tags}</h4>
              <p className="card-text">{item.user}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
