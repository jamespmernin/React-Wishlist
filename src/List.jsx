import React, { useState } from 'react';

function List() {
  // Set the initial list of items
  const [listItems, setListItems] = useState([
    "Apple Ipad Mini",
    "Vespa Scooter",
    "Shake Shack Milkshake",
    "Stumptown Coffee"
  ])

  // Use this as a flag to trigger changes in the function
  const [refresh, setRefresh] = useState(false);

  // This function will move a list item up only if it is not the first item in the list
  const handleItemUpVote = (name) => {
    let i = listItems.findIndex(item => item === name)
    if (i !== 0) { // Condition to check if the item is not first in the list
      // Swap function
      let tmp = '';
      tmp = listItems[i - 1];
      listItems[i - 1] = listItems[i];
      listItems[i] = tmp;
      setRefresh(!refresh) // This allows the page to render after the swap
      setListItems(listItems)
    }
  }

  // This function will move a list item down only if it is not the last item in the list
  const handleItemDownVote = (name) => {
    let i = listItems.findIndex(item => item === name)
    if (i !== listItems.length - 1) { // Condition to check if the item is not last in the list
      // Swap function
      let tmp = '';
      tmp = listItems[i + 1];
      listItems[i + 1] = listItems[i];
      listItems[i] = tmp;
      setRefresh(!refresh)
      setListItems(listItems)
    }
  }

  return (
    <div className="list">
      <h1 className="item" id="list-title">Your List</h1>
      {/* Mapping function used here to produce every item in the list */}
      {listItems.map(item =>
        <div className="item"><h2>{item}</h2>
          {/* This is a span item in order for all these elements to exist on the same line */}
          <span className="buttons">
            <h2 className="up" onClick={() => handleItemUpVote(item)}>Up</h2>
            <h2> | </h2>
            <h2 className="down" onClick={() => handleItemDownVote(item)}>Down</h2>
          </span>
        </div>
      )}
    </div>
  )
}

export default List;