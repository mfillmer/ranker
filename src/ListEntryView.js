import React from 'react'

const ListEntryView = ({ id, selected = false, onSelect = f => f, onUnSelect = f => f,
    image, ranking, title }) => {
    return (
        <div
            onClick={() => selected ? onUnSelect(id) : onSelect(id)}
            className={`list-entry ${selected ? 'selected' : ''}`}>
            <div className='image-container' >
                <img src={image} onError={e => null} />
            </div >
            <div className="title">{title}</div>
            <div className="ranking">{ranking}</div>
        </div >
    )
}

export default ListEntryView
