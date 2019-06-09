import React from 'react';
import avengers from '../data';

function AvengerPage(props) {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id);
  return (
    <div>
      <div className="card text-dark m-5">
        <img src={avenger.img} className="card-img-top" alt={avenger.name} />
        <div className="card-body">
          <h2 className="card-title">{avenger.name}</h2>
          <h5>({avenger.nickname})</h5>
          <p>{avenger.description}</p>
        </div>
      </div>
    </div>
  );
}
export default AvengerPage;
