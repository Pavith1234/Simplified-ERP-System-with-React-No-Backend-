import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            category: '',
            price: '',
            stock: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input type="text" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;
