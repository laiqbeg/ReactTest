import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/actions/productActions';
import Table from '../Controls/Table/Table';

const ProductList = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'Name',
    //             accessor: 'name',
    //         },
    //         {
    //             Header: 'Address',
    //             accessor: 'address',
    //         },
    //         {
    //             Header: 'City',
    //             accessor: 'city',
    //         },
    //         {
    //             Header: 'State',
    //             accessor: 'state',
    //         },
    //         {
    //             Header: 'Country',
    //             accessor: 'country',
    //         },
    //         {
    //             Header: 'Age',
    //             accessor: 'age',
    //         },
    //         {
    //             Header: 'Salary',
    //             accessor: 'salary',
    //         },
    //     ],
    //     []
    // );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Brand',
                accessor: 'brand',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'BasePrice',
                accessor: 'basePrice',
            }
        ],
        []
    );

    // const data = React.useMemo(
    //     () => [
    //         { name: 'John Doe', address: '123 Main St', city: 'New York', state: 'NY', country: 'USA', age: 28, salary: 50000 },
    //         { name: 'Jane Smith', address: '456 Oak St', city: 'San Francisco', state: 'CA', country: 'USA', age: 34, salary: 70000 },
    //         { name: 'Alice Johnson', address: '789 Pine St', city: 'Seattle', state: 'WA', country: 'USA', age: 25, salary: 60000 },
    //         { name: 'Bob Brown', address: '101 Maple St', city: 'Chicago', state: 'IL', country: 'USA', age: 45, salary: 80000 },
    //         // Add more dummy data as needed
    //     ],
    //     []
    // );



    return (
        <div className="container">
            <h1>Product List</h1>

            {data && data.length > 0 ?
                <Table columns={columns} data={data} />
                : null}
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default ProductList;
