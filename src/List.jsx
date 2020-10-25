import React, { useState } from 'react';

function List(props) {
  const [listItems, setListItems] = useState([
    "Apple Ipad Mini",
    "Vespa Scooter",
    "Shake Shack Milkshake",
    "Stumptown Coffee"
  ])
  const [refresh, setRefresh] = useState(false);

  const handleItemUpVote = (name) => {
    let idx = listItems.findIndex(item => item === name)
    if (idx !== 0) {
      let temp = '';
      temp = listItems[idx - 1];
      listItems[idx - 1] = listItems[idx];
      listItems[idx] = temp;
      setRefresh(!refresh)
      setListItems(listItems)
    }
  }

  const handleItemDownVote = (name) => {
    let idx = listItems.findIndex(item => item === name)
    if (idx !== listItems.length - 1) {
      let temp = '';
      temp = listItems[idx + 1];
      listItems[idx + 1] = listItems[idx];
      listItems[idx] = temp;
      setRefresh(!refresh)
      setListItems(listItems)
    }
  }

  return (
    <div className="list">
      <h1 className="item" id="list-title">Your List</h1>
      {listItems.map(item =>
        <div className="item"><h2>{item}</h2>
          <span className="buttons">
            <h2 className="up" onClick={() => handleItemUpVote(item)}>Up</h2>
            <h2> | </h2>
            <h2 className="down" onClick={() => handleItemDownVote(item)}>Down</h2>
          </span></div>
      )}
    </div>
  )
}

export default List;