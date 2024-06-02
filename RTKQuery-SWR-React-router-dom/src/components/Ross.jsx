import React from 'react';
import ross1 from "../assets/ross1.JPG";
import ross2 from "../assets/ross2.JPG";
import ross3 from "../assets/ross3.JPG";
import ross4 from "../assets/ross4.PNG";

export default function Ross() {
  return (
    <>
      <h1>Türünün tek örneği Ross...</h1>
      <div className="card" style={{ width: '300px', height: 'auto' }}>
      <img src={ross1} className="card-img-top" alt="..." />
      <div className="card-body">
      <p className="card-text"> 
      Ross kuşum ya da Rosstoss da denir
      Çok kibardır kimseye zarar vermez. </p>
      </div>
    </div>
    <div className="card" style={{ width: '300px', height: 'auto' }}>
      <img src={ross2} className="card-img-top" alt="..." />
      <div className="card-body">
      </div>
    </div>
    <div className="card" style={{ width: '300px', height: 'auto' }}>
      <img src={ross3} className="card-img-top" alt="..." />
      <div className="card-body">
      </div>
    </div>
    <div className="card" style={{ width: '300px', height: 'auto' }}>
      <img src={ross4} className="card-img-top" alt="..." />
      <div className="card-body">
      </div>
    </div>
    </>
  );
}
