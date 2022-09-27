import React from 'react';
import '../style/Filters.css';

function Filters() {
  const handleChangeInput = () => {
    
  }
  return (
    <form id="form-filters">
      <input
        type="text"
        name="name"
        placeholder="Filtre por nome"
        /* value={  } */
        id="name-filter"
        data-testid="name-filter"
        /* onChange={ handleChange } */
      />
    </form>
  );
}

export default Filters;
