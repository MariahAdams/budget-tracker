import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../Expenses/Expenses';
import { connect } from 'react-redux';
import { remove } from '../Redux/actions';

class CategoryItem extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };
  
  render() { 
    const { category, onEdit, remove } = this.props;
  
    return (
      <div>
        Category: {category.name}, Budget: {category.budget}
        &nbsp;<button name="edit" onClick={onEdit}>✏️</button>
        &nbsp;<button name="delete" onClick={() => remove(category.key)}>🗑️</button>
        <div>
          <Expenses />
        </div>
      </div>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryItem);