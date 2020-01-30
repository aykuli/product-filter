import React from 'react';

import './product-table.scss';

import ProductCategoryRow from '../product-category/product-category-row';
import ProductRow from '../product-row/product-row';

export default function ProductTable(props) {  
    const row =[];
    let lastCategory = '';

    props.products.forEach(product => {
        if (product.name.indexOf(props.filterText) === -1) return;

        // если такой категории еще не было, формирует строку с категорией
        if (product.category !== lastCategory) {
            row.push(
                <ProductCategoryRow key={product.category} 
                                    category={product.category} 
                />);
        }

        // если продукта нет в стоке и стоит галочка - не выбирать те продукты, что не в стоке
        if (!product.stocked && props.isStockOnly) return;

        row.push(<ProductRow key={product.name} product={product}/>);
        
        lastCategory=product.category;
    });

    return (
        <table className='product-table'>
        <thead>
            <tr>
                <th className="product-table__th">Name</th>
                <th className="product-table__th">Price</th>
            </tr>
        </thead>
        <tbody>
            {row}
        </tbody>
        </table>
    )
}