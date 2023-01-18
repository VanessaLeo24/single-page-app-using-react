import React from 'react';
import NotesMain from '../components/NotesMain.js';
import NotesList from '../components/NotesList.js';
import {getAllNotes, deleteNote,archiveNote, unarchiveNote} from "../utils/local-data.js";
import {useSearchParams} from 'react-router-dom';
import AddButton from '../components/AddButton.js';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
       
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => {
          return {
            notes: getAllNotes(),
          };
        });
      }

    onArchivedHandler(id){
        archiveNote(id);
        this.setState(() => {
            return {
              notes: getAllNotes(),
            };
          });
    }

    onUnarchivedHandler(id) {
        unarchiveNote(id);
        this.setState(() => {
            return {
              notes: getAllNotes(),
            };
          });
      }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return {
                keyword: keyword,
            }
        });

        this.props.keywordChange(keyword);

    }

    render(){
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase())); 
        const activeNotes = notes.filter((note) => !note.archived);
        const archivedNotes = notes.filter((note) => note.archived);
    
        return (
            <div>
                <NotesMain keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Catatan Aktif</h2>
            
                {activeNotes.length > 0 ? 
                <NotesList notes={activeNotes} archived={this.state.notes.archived} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} /> : <div className='notes-list-empty'>
                <p>Tidak ada catatan</p>
            </div>}
            
                <Link to="/add"><AddButton/></Link>
                <div>
                <br />
                <h2>Catatan Arsip</h2>
                {archivedNotes.length > 0 ? 
                <NotesList notes={archivedNotes} archived={this.state.notes.archived} onDelete={this.onDeleteHandler} onArchived={this.onUnarchivedHandler}  /> 
                : <div className='notes-list-empty'>
                    <p>Tidak ada catatan</p>
                  </div>} 
                </div>

            </div>
        )
    }
}

HomePage.propTypes = {
    keyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;