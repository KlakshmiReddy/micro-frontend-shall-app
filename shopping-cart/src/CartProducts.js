import React from "react";

const CartProducts = ({ cart, onDeleteCartProduct }) => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      {cart?.length === 0 && <h1 className="my-1">No Cart Products</h1>}
      <div>
        {cart.length > 0 &&
          cart.map((product, index) => {
            return (
              <div
                key={index}
                className="card mb-4"
                style={{ maxWidth: "700px" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      className="card-img"
                      alt={product.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Category: {product.category}
                        </small>
                      </p>
                      <div className="d-flex align-items-center">
                        <span>{product.rating.rate} ★</span>
                      </div>
                      <button
                        type="button"
                        className="mt-3 btn btn-danger"
                        onClick={() => onDeleteCartProduct(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CartProducts;
