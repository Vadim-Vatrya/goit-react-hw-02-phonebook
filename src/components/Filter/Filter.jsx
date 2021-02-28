import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
return (
  <div>
    <h3>Find contacts by name</h3>
    <label>
    <input
    name="filter"
    type="text"
    value={value}
    onChange={onChange}
    />
    </label>
   
  </div>
)
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;