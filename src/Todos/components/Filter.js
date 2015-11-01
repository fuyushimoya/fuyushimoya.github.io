import React, { Component, PropTypes } from 'react';

import {VisibilityFilters} from '../Actions'

class Filter extends Component {
  // Render filter item.
  filterRender(filter, name) {
    if (this.props.filter === filter) {
      return name;
    } else {
      return (
        <a 
          href='#'
          onClick={(e)=>{
            e.preventDefault();
            this.props.onFilterChange(filter);
          }}
        >
          {name}
        </a>
      )
    }
  }

  render() {
    return (
      <div>
        Filter
        {' '}
        {this.filterRender(VisibilityFilters.ALL, 'All')}
        {', '}
        {this.filterRender(VisibilityFilters.COMPLETE, 'Completed')}
        {', '}
        {this.filterRender(VisibilityFilters.UNCOMPLETE, 'Active')}
        .
      </div>
    );
  }
};

const availableFilters = 
  Object.keys(VisibilityFilters).map((key) => VisibilityFilters[key]);

Filter.PropTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(availableFilters).isRequired
};

export default Filter;