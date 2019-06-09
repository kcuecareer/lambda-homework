import React from 'react';
// import the state I created in App.js
import avengers from '../data';

function AvengersList() {
  return (
    <div>
      {/* Loop over avengers data using .map() */}
      {avengers.map(avenger => (
        <div className="card text-dark my-5" style={{ width: '18rem' }}>
          <img
            src={avenger.thumbnail}
            className="card-img-top"
            alt={avenger.name}
          />
          <div className="card-body">
            <h5 className="card-title">{avenger.name}</h5>
            <a href="#" className="btn btn-dark">
              {avenger.nickname}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvengersList;
