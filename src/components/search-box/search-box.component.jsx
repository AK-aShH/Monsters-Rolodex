import React from "react";

import "./search-box.styles.css";

function SearchBox({ placeholder, handleChange }) {
    return (
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
    )
}

export default SearchBox;