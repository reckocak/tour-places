import React from 'react';
import { data } from "../../helper/data";
import './Card.scss';

const Card = () => {
    console.log(data);
  return <div className='container'>{
      data.map((item) => {
          return (
            <div className="card">
              <h2>{item.title}</h2>
              <div className='icerik'>
                <p className="desc">{item.desc}</p>
                <img src={item.image} alt="" />
              </div>
            </div>
          );
      })}</div>;
}

export default Card