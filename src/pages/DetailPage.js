import React from "react";
import {useParams} from "react-router-dom";
import NotesDetail from "../components/NotesDetail.js";
import {getNote} from "../utils/local-data.js";
import PropTypes from "prop-types";

function DetailPageWrapper(){
    const {id} = useParams();

    return <DetailPage id={id} />;
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes : getNote(props.id),
        }
        
    }

    render(){
        if(this.state.notes === null){
            return <p>Catatan tidak ditemukan!</p>
        }

        return (
            <section>
                <NotesDetail {...this.state.notes} />
            </section>

        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;