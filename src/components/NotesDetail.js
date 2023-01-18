import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NotesDetail({title, createdAt, body}){
    return (
        <div className="detail-page">
            <h1 className="detail-page__title ">{title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
        </div>
    )
}

NotesDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NotesDetail;