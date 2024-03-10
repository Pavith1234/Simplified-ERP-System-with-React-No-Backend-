import React from 'react';
import './OrderItem.css'; // Import OrderItem component CSS

function OrderItem({ order, onDelete }) {
    const handleEdit = () => {
        // Implement edit functionality
        console.log('Edit order:', order);
    };

    const handleDelete = () => {
        // Implement delete functionality
        onDelete(order.id);
    };

    return (
        <li className="order-item">
            <div className="order-details">
                <div>{order.orderId}</div>
                <div>{order.customerName}</div>
                <div>{order.orderDate}</div>
                <div>{order.status}</div>
            </div>
            <div className="order-buttons">
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}

export default OrderItem;
