import React, { Component } from 'react';

import './products.scss';

import PRODUCTS from '../../constantas/productsJSON';
import SearchBar from '../search-bar/search-bar';
import ProductTable from '../product-table/product-table';

export default function Products() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    isStockOnly: false,
  }

  onFilterTextChange = (txt) => this.setState({filterText: txt})

  isStockChange = (isStockOnly) => this.setState({isStockOnly: isStockOnly})

  render() {
    return (
      <div className="products__wrap">
          <SearchBar  onFilterTextChange={this.onFilterTextChange} 
                      isStockChange={this.isStockChange}
                      isStockOnly={this.state.isStockOnly}
                      filterText={this.state.filterText}
          />
          <ProductTable products={this.props.products} 
                        isStockOnly={this.state.isStockOnly}
                        filterText={this.state.filterText}
          />
      </div>
    )
  }
}