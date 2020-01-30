import React from 'react';

import './product-row.scss';

export default function ProductRow(props) {
    const name = props.product.name;
    const price = props.product.price;
    const redTxt = props.product.stocked ? null : {color: 'red'};

    return (
        <tr>
            <td className="product-row__td" style={redTxt}>
                {name}
            </td>
            <td className="product-row__td">
                {price}
            </td>
        </tr>
    )  
}