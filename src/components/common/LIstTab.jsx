import React from 'react';

const ListTab = props => {
  const { listItem, onItemChange } = props;

  return (
    <ul className="list-group">
      {listItem.map(item => (
        <li
          key={item._id}
          onClick={() => onItemChange(item.name)}
          className="list-group-item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListTab;
