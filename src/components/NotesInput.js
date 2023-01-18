import React from "react";
import PropTypes from "prop-types";
import {FiCheck} from "react-icons/fi";

class NotesInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        this.setState(()=> {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeHandler(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();

        this.props.addNote(this.state);
    }
    
    render(){
        return (
            <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
                <input className="add-new-page__input__title " type="text" placeholder="Masukkan judul" value={this.state.title} onChange={this.onTitleChangeHandler} />
                <textarea className="add-new-page__input__body" placeholder="Masukkan isi catatan disini ...." value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                <button type="submit" className="homepage__action"><FiCheck  className="action"/></button>
            </form>
        )
    }
}

NotesInput.propTypes = {
    addNotes: PropTypes.func
}

export default NotesInput;