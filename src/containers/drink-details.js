import React from 'react';

export default ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);