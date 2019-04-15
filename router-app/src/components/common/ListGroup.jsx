import React from 'react';

const ListGroup = props => {
  const {
    listItem,
    selectedItem,
    onItemSelect,
    valueProperty,
    textProperty
  } = props;

  return (
    <ul className="list-group">
      {listItem.map(item => (
        <li
          key={item[valueProperty]}
          style={{ cursor: 'pointer' }}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
