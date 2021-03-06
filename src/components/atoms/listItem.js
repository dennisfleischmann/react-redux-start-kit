import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children }) => (
  <li>{children}</li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
