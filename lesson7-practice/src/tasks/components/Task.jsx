import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({ text, done, id, onChange, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
