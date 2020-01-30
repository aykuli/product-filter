import React from 'react';

import './product-category-row.scss';

export default function ProductCategoryRow(props) {
    return (
        <tr>
            <td className="product-category" colSpan='2'>{props.category}</td>
        </tr>
    )
}

