import React from 'react';
export default function Responsive() {
  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div className=" col-sm-4 col-md-6 col-lg-3 bg-muted">.col-1</div>
        <div className=" col-sm-8 col-md-6  col-lg-9 bg-danger">.col-2</div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}
