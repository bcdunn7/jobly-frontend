import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ filter, searchTerm }) => {
    const INITIAL_STATE = {
        name: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        filter({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <label htmlFor="name">{searchTerm}:</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder={searchTerm}
                value={formData.name}
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchForm;