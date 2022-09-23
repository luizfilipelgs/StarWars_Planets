import React from 'react';
import '../style/Filters.css';

function Filters() {
  return (
    <form id="form-filters">
      <input
        type="text"
        name="name"
        /* value={  } */
        id="name-filter"
        data-testid="name-filter"
        /* onChange={ handleChange } */
      />
    </form>
  );
}

export default Filters;
