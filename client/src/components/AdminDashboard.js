import React from 'react';

function AdminDashboard() {
    
    // dis

    return (
        <div className = 'admin-dashboard'>
            <h1>Admin Dashboard</h1>
            <h2>Tasks:</h2>
            <ul>
                <li>Remove games by clicking the X via "/games"</li>
                <li>Edit games by clicking the Edit button via "/games"</li>
            </ul>
        </div>
    )
}

export default AdminDashboard;