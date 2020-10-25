import React from 'react';

function Item(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <span className="up-down">
        <h2 className="up">Up</h2>
        <h2> | </h2>
        <h2 className="down">Down</h2>
      </span>
    </div>
  )
}

export default Item; 