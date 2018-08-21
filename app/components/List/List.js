import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = (props) => {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${item.idDrink}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className="list-wrapper">
      {content}
    </div>
  );
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
