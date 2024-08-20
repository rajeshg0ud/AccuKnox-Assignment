import React, { useState } from 'react';

const AddWidget = ({ addNewWidget, closeSidebar, hasError, formDetails, handleInputChange }) => {
    return (
        <div className="fixed inset-y-0 right-0 w-96 bg-white p-6 shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
            <input
                type="text"
                name="name"
                placeholder="Widget Name"
                value={formDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
                name="data"
                placeholder="Data (comma separated)"
                value={formDetails.data}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {hasError && <p className="text-red-500 mb-4">Please fill out both fields.</p>}
            <div className="flex justify-end">
                <button
                    onClick={closeSidebar}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 mr-2"
                >
                    Cancel
                </button>
                <button
                    onClick={addNewWidget}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddWidget;
