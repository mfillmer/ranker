import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createEntry } from './redux/entries'

const CreateListEntryView = ({ addEntry = f => f }) => {
    const [title, setTitle] = useState('')
    const [image, setimage] = useState('')
    const submit = e => {
        e.preventDefault();
        addEntry(title, image)
    }
    return (
        <div className='entry-form'>
            <h1>Eintrag erstellen</h1>
            <div className="image-container">
                <img src={image} alt='Wähle ein Bild aus' onError={() => null} />
            </div>
            <h2 className='entry-title'>
                <input autoFocus type="text" onChange={e => setTitle(e.target.value)} />
            </h2>
            <button onClick={submit}>Hinzufügen</button>
            <Link to='/ranker/'>Abbrechen</Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addEntry: (title, image) => dispatch(createEntry(title, image))
})
export default connect(null, mapDispatchToProps)(CreateListEntryView)
