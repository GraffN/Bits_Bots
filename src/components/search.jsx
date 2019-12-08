import React from 'react';
import PropTypes from "prop-types";

export default function Search({ handleSearch }) {
    return (
        <form className="search">
            <input
                placeholder="Search Name..."
                onChange={event => handleSearch(event)}
            />
        </form>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};