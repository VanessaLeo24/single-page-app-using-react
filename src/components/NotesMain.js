import React from "react";
import NotesSearch from "./NotesSearch.js";
import PropTypes from "prop-types";

function NotesMain({keyword, keywordChange}){
    return (
        <div>
            <h2>Fitur Pencarian</h2>
            <NotesSearch keyword={keyword} keywordChange={keywordChange} />
        </div>
       
    )
}

NotesMain.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}
export default NotesMain;