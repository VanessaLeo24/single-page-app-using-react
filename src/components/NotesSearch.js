import React from "react";
import PropTypes from "prop-types";

function NotesSearch({keyword, keywordChange}){
    return (
        <div className="search-bar">
            <input type="search" placeholder="Cari berdasarkan judul ..." value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
        </div>
    )
}

NotesSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default NotesSearch;