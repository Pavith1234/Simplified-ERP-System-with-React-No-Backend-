import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Dashboard.css'; // Import Dashboard component CSS

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Dashboard</h1>
            <p className="dashboard-summary">Summary of key metrics/features...</p>
            <div className="dashboard-links">
                <Link to="/products">Products Management</Link>
                <Link to="/orders">Orders Management</Link>
            </div>
        </div>
    );
}

export default Dashboard;
