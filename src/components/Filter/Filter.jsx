import s from './Filter.module.css';
import PropTypes from 'prop-types';

export  function Filter({ value, onChangeFilter }) {
    return (
      <div className={s.container}>
        Find contacts by name
        <input className={s.input}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </div>
    );
  }
  
  
  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onchangeFilter: PropTypes.func.isRequired,
  };