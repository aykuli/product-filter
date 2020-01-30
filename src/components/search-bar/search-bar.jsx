import React, { Component } from 'react';

import './search-bar.scss';

export default class SearchBar extends Component {
  handleFilterTextChange = ({ target: {value}}) => {
    this.props.onFilterTextChange(value);
  }

  handleIsStockChange = ({ target: {checked}}) => {
    this.props.isStockChange(checked);
  }

  render() {
    return (
      <div className="search-bar">
        <input  type="text"
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
        />
        <label>
          <input  type="checkbox" 
                  name="stocked"
                  value={this.props.isStockOnly}
                  onChange={this.handleIsStockChange}
          />Only show products in stock
        </label>
      </div>
    )
  }
}