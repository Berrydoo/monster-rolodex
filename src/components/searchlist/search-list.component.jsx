import React from "react";

import "./search-list.styles.css";

const SearchList = ({ placeholder, onChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default SearchList;
