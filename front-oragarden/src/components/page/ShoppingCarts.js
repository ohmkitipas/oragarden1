import { fromPairs } from 'lodash';
import React from 'react';
import NavBar from "../NavBar";
import { Row, Col, Table} from 'antd';
import Axios from 'axios';

const colums = [
    {title: 'Product', dataIndex: 'product', key: 'prodct'},

    {title: 'Remove', dataIndex: '', key:'x',
     render: () => <a>Remove</a>}
];

export default function ShoppingCarts() {
    return (
        <div>
            <NavBar />
            
            <div>
                <h1>Cart Detail</h1>
            </div>
        </div>
    )
}
