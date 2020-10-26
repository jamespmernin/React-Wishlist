import React from 'react';

// This function renders the item information on screen
function Item(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <span className="buttons">
        <h2 className="up">Up</h2>
        <h2> | </h2>
        <h2 className="down">Down</h2>
      </span>
    </div>
  )
}

export default Item; 